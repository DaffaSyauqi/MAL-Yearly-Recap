<template>
  <div
    ref="wrapper"
    class="fixed inset-0 overflow-hidden"
    @wheel.prevent="onWheel"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <uiLoading v-if="isLoading" />

    <div v-else ref="cardContainer" class="w-full h-full" data-recap-summary>
      <component
        :is="cards[activeIndex]"
        :key="activeIndex"
        :recap="recapData"
        @regenerate="fetchRecap"
      />
      <uiProgressDots :total="cards.length" :active="activeIndex" />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
});

import { ref } from "vue";
import { gsap } from "gsap";

import CardIntro from "@/components/Card/Intro.vue";
import CardAnimeWatched from "@/components/Card/AnimeWatched.vue";
import CardEpisodeWatched from "@/components/Card/EpisodeWatched.vue";
import CardFavoriteGenre from "@/components/Card/FavoriteGenre.vue";
import CardTopAnimeSeasonal from "@/components/Card/TopAnimeSeasonal.vue";
import CardTopAnime from "@/components/Card/TopAnime.vue";
import CardRecapSummary from "@/components/Card/RecapSummary.vue";
import CardClosing from "@/components/Card/Closing.vue";

const cards = [
  CardIntro,
  CardAnimeWatched,
  CardEpisodeWatched,
  CardFavoriteGenre,
  CardTopAnimeSeasonal,
  CardTopAnime,
  CardRecapSummary,
  CardClosing,
];

const activeIndex = ref(0);
const cardContainer = ref(null);
const isLoading = ref(true);
const recapData = ref(null);

let isAnimating = false;
let touchStartY = 0;

const fetchRecap = async () => {
  isLoading.value = true;
  activeIndex.value = 0;

  recapData.value = await $fetch("/api/mal/recap");

  isLoading.value = false;
  await nextTick();

  gsap.fromTo(
    cardContainer.value,
    { opacity: 0, y: 40, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    }
  );
};

onMounted(() => {
  fetchRecap();
});

const animateCard = (direction = "next") => {
  const yFrom = direction === "next" ? 60 : -60;
  const yTo = direction === "next" ? -60 : 60;
  const tl = gsap.timeline({ onComplete: () => (isAnimating = false) });
  tl.to(cardContainer.value, {
    opacity: 0,
    y: yTo,
    scale: 0.97,
    filter: "blur(8px)",
    duration: 0.45,
    ease: "power3.in",
  });
  tl.fromTo(
    cardContainer.value,
    { opacity: 0, y: yFrom, scale: 0.97, filter: "blur(8px)" },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.55,
      ease: "power3.out",
    }
  );
};

const next = () => {
  if (isAnimating || activeIndex.value >= cards.length - 1) return;
  isAnimating = true;
  activeIndex.value++;
  animateCard("next");
};

const prev = () => {
  if (isAnimating || activeIndex.value <= 0) return;
  isAnimating = true;
  activeIndex.value--;
  animateCard("prev");
};

const onWheel = (e) => {
  if (Math.abs(e.deltaY) < 30) return;
  e.deltaY > 0 ? next() : prev();
};

const onTouchStart = (e) => {
  touchStartY = e.touches[0].clientY;
};

const onTouchEnd = (e) => {
  const diff = touchStartY - e.changedTouches[0].clientY;
  if (Math.abs(diff) < 50) return;
  diff > 0 ? next() : prev();
};
</script>
