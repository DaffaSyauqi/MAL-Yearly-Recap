<template>
  <uiGlassCard>
    <div
      ref="containerRef"
      class="flex flex-col justify-center items-center text-center h-full space-y-4"
    >
      <p class="text-white/60 text-[clamp(1.1rem,1.2vw,1rem)] tracking-wide">
        Best anime you watched in each season
      </p>

      <div class="grid grid-cols-2 gap-3 sm:gap-2 w-full max-w-xl pb-2">
        <div
          v-for="(seasons, i) in topSeasonal"
          :key="seasons.season"
          ref="cardRefs"
          class="relative rounded-xl border border-white/20 backdrop-blur-md shadow-md p-3 sm:p-4 flex flex-col items-center text-center gap-2 sm:gap-1"
          :style="{
            backgroundColor: seasons.bg,
            boxShadow: seasons.glow,
            borderColor: seasons.border,
          }"
        >
          <div
            class="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium"
          >
            <Icon
              :name="seasons.icon"
              class="w-4 h-4"
              :style="{ color: seasons.iconColor }"
            />
            <span>{{ seasons.season }}</span>
          </div>

          <img
            :src="seasons.image"
            alt="Anime cover"
            class="w-full max-w-[60px] sm:max-w-[90px] rounded-lg object-cover"
          />

          <p class="text-white font-medium text-xs leading-snug">
            {{ seasons.title }}
          </p>

          <div class="flex items-center gap-2 mt-auto">
            <Icon name="lucide-star" class="text-yellow-400" />
            <p class="text-white font-medium text-md leading-snug">
              {{ seasons.userScore }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </uiGlassCard>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const containerRef = ref(null);
const cardRefs = ref<HTMLElement[]>([]);

const props = defineProps({
  recap: {
    type: Object,
    required: true,
  },
});

const seasonStyleMap: Record<string, any> = {
  winter: {
    icon: "lucide-snowflake",
    iconColor: "#BFDBFE",
    bg: "rgba(59, 130, 246, 0.50)",
    glow: "0 0 42px rgba(59, 130, 246, 0.55)",
    border: "rgba(147, 197, 253, 0.45)",
  },
  spring: {
    icon: "lucide-flower",
    iconColor: "#FBCFE8",
    bg: "rgba(244, 114, 182, 0.50)",
    glow: "0 0 42px rgba(244, 114, 182, 0.55)",
    border: "rgba(251, 207, 232, 0.45)",
  },
  summer: {
    icon: "lucide-sun",
    iconColor: "#FDE68A",
    bg: "rgba(251, 191, 36, 0.50)",
    glow: "0 0 42px rgba(251, 191, 36, 0.55)",
    border: "rgba(253, 230, 138, 0.45)",
  },
  fall: {
    icon: "lucide-leaf",
    iconColor: "#FECACA",
    bg: "rgba(248, 113, 113, 0.50)",
    glow: "0 0 42px rgba(248, 113, 113, 0.55)",
    border: "rgba(254, 202, 202, 0.45)",
  },
};

const topSeasonal = computed(() => {
  const seasonal = props.recap?.stats?.topSeasonal;
  if (!seasonal) return [];

  const order = ["winter", "spring", "summer", "fall"];

  return order
    .map((season) => {
      const anime = seasonal[season];
      if (!anime) return null;

      return {
        season: season.charAt(0).toUpperCase() + season.slice(1),
        title: anime.title,
        image: anime.image,
        userScore: anime.userScore,
        ...seasonStyleMap[season],
      };
    })
    .filter(Boolean);
});

onMounted(() => {
  gsap.from(cardRefs.value, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.12,
  });

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
