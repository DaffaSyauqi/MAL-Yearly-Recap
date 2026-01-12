<template>
  <div
    class="fixed inset-0 overflow-hidden"
    @wheel="onWheel"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <uiLoading v-if="isLoading" />

    <div v-else ref="cardContainer" class="w-full h-full">
      <component :is="cards[activeIndex]" :key="activeIndex" />
    </div>

    <uiProgressDots
      v-if="!isLoading"
      :total="cards.length"
      :active="activeIndex"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";

import CardIntro from "@/components/Card/Intro.vue";
import CardAnimeWatched from "@/components/Card/AnimeWatched.vue";
import CardEpisodeWatched from "@/components/Card/EpisodeWatched.vue";
import CardFavoriteGenre from "@/components/Card/FavoriteGenre.vue";
import CardBestAnimeSeason from "@/components/Card/BestAnimeSeason.vue";
import CardTopAnime from "@/components/Card/TopAnime.vue";
import CardRecapSummary from "@/components/Card/RecapSummary.vue";
import CardClosing from "@/components/Card/Closing.vue";

const cards = [
  CardIntro,
  CardAnimeWatched,
  CardEpisodeWatched,
  CardFavoriteGenre,
  CardBestAnimeSeason,
  CardTopAnime,
  CardRecapSummary,
  CardClosing,
];

const isLoading = ref(true);
const activeIndex = ref(0);
const cardContainer = ref(null);

let isAnimating = false;
let touchStartY = 0;

/* ---------------- LOADING FLOW ---------------- */
onMounted(async () => {
  // nanti ganti ke fetch recap API
  await new Promise((r) => setTimeout(r, 1500));

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
});

/* ---------------- CARD NAVIGATION ---------------- */
const animateCard = (direction) => {
  const yFrom = direction === "next" ? 60 : -60;
  const yTo = direction === "next" ? -60 : 60;

  const tl = gsap.timeline({
    onComplete: () => (isAnimating = false),
  });

  tl.to(cardContainer.value, {
    opacity: 0,
    y: yTo,
    scale: 0.97,
    duration: 0.45,
  });

  tl.fromTo(
    cardContainer.value,
    { opacity: 0, y: yFrom, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.55 }
  );
};

const next = () => {
  if (isAnimating || activeIndex.value >= props.cards.length - 1) return;
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

/* ---------------- EVENTS ---------------- */
const onWheel = (e) => {
  if (isLoading.value) return;
  if (Math.abs(e.deltaY) < 30) return;
  e.preventDefault();
  e.deltaY > 0 ? next() : prev();
};

const onTouchStart = (e) => {
  if (isLoading.value) return;
  touchStartY = e.touches[0].clientY;
};

const onTouchEnd = (e) => {
  if (isLoading.value) return;
  const diff = touchStartY - e.changedTouches[0].clientY;
  if (Math.abs(diff) < 50) return;
  diff > 0 ? next() : prev();
};
</script>
