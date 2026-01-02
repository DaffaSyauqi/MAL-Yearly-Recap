<template>
  <div
    ref="wrapper"
    class="fixed inset-0 overflow-hidden"
    @wheel.prevent="onWheel"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div ref="cardContainer" class="w-full h-full">
      <component :is="cards[activeIndex]" :key="activeIndex" />
    </div>

    <ProgressDots :total="cards.length" :active="activeIndex" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

import ProgressDots from "@/components/ui/ProgressDots.vue";

import CardIntro from "@/components/Card/Intro.vue";
import CardAnimeWatched from "@/components/Card/AnimeWatched.vue";
import CardEpisodeWatched from "@/components/Card/EpisodeWatched.vue";
import CardFavoriteGenre from "@/components/Card/FavoriteGenre.vue";
import CardBestAnimeSeason from "@/components/Card/BestAnimeSeason.vue";
import CardTopAnime from "@/components/Card/TopAnime.vue";
import CardWatchingStyle from "@/components/Card/WatchingStyle.vue";
import CardRecapSummary from "@/components/Card/RecapSummary.vue";
import CardClosing from "@/components/Card/Closing.vue";

const cards = [
  CardIntro,
  CardAnimeWatched,
  CardEpisodeWatched,
  CardFavoriteGenre,
  CardBestAnimeSeason,
  CardTopAnime,
  CardWatchingStyle,
  CardRecapSummary,
  CardClosing,
];

const activeIndex = ref(0);
const cardContainer = ref(null);

let isAnimating = false;
let touchStartY = 0;

const animateCard = (direction = "next") => {
  const yFrom = direction === "next" ? 60 : -60;
  const yTo = direction === "next" ? -60 : 60;

  const tl = gsap.timeline({
    onComplete: () => (isAnimating = false),
  });

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
    {
      opacity: 0,
      y: yFrom,
      scale: 0.97,
      filter: "blur(8px)",
    },
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
