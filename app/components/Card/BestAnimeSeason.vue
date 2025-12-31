<template>
  <uiGlassCard>
    <div
      ref="containerRef"
      class="flex flex-col justify-center items-center text-center h-full space-y-4"
    >
      <!-- TITLE -->
      <p class="text-white/60 text-[clamp(1.1rem,1.2vw,1rem)] tracking-wide">
        Best anime you watched in each season
      </p>

      <!-- SEASON GRID -->
      <div class="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl">
        <div
          v-for="season in seasons"
          :key="season.name"
          ref="cardRefs"
          class="relative rounded-xl border border-white/20 backdrop-blur-md shadow-md p-3 sm:p-4 flex flex-col items-center text-center gap-2 sm:gap-3"
          :style="{
            backgroundColor: season.bg,
            boxShadow: season.glow,
          }"
        >
          <!-- SEASON TITLE -->
          <div
            class="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium"
          >
            <Icon
              :name="season.icon"
              class="w-4 h-4"
              :style="{ color: season.iconColor }"
            />
            <span>{{ season.name }}</span>
          </div>

          <!-- COVER -->
          <img
            :src="season.cover"
            alt="Anime cover"
            class="w-full max-w-[60px] sm:max-w-[90px] rounded-lg object-cover"
          />

          <!-- ANIME TITLE -->
          <p class="text-white font-medium text-xs leading-snug">
            {{ season.anime }}
          </p>
        </div>
      </div>
    </div>
  </uiGlassCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const containerRef = ref(null);
const cardRefs = ref([]);

const seasons = [
  {
    icon: "lucide-snowflake",
    iconColor: "#BFDBFE", // blue-200
    name: "Winter",
    anime: "Sousou no Frieren",
    cover: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
    bg: "rgba(59, 130, 246, 0.50)",
    glow: "0 0 42px rgba(59, 130, 246, 0.55)",
    border: "rgba(147, 197, 253, 0.45)",
  },
  {
    icon: "lucide-flower",
    iconColor: "#FBCFE8", // pink-200
    name: "Spring",
    anime: "Horimiya: Missing Pieces",
    cover: "https://placehold.co/400x600/png",
    bg: "rgba(244, 114, 182, 0.50)",
    glow: "0 0 42px rgba(244, 114, 182, 0.55)",
    border: "rgba(251, 207, 232, 0.45)",
  },
  {
    icon: "lucide-sun",
    iconColor: "#FDE68A", // yellow-200
    name: "Summer",
    anime: "Jujutsu Kaisen S3",
    cover: "https://placehold.co/400x600/png",
    bg: "rgba(251, 191, 36, 0.50)",
    glow: "0 0 42px rgba(251, 191, 36, 0.55)",
    border: "rgba(253, 230, 138, 0.45)",
  },
  {
    icon: "lucide-leaf",
    iconColor: "#FECACA", // red-200
    name: "Fall",
    anime: "Attack on Titan Final",
    cover: "https://placehold.co/400x600/png",
    bg: "rgba(248, 113, 113, 0.50)",
    glow: "0 0 42px rgba(248, 113, 113, 0.55)",
    border: "rgba(254, 202, 202, 0.45)",
  },
];

onMounted(() => {
  // ENTRY ANIMATION
  gsap.from(cardRefs.value, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.12,
  });

  // HOVER ANIMATION
  cardRefs.value.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.04,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
});
</script>
