<template>
  <uiGlassCard>
    <div
      class="flex flex-col justify-center items-center text-center h-full space-y-8"
    >
      <p class="text-white/60 text-[clamp(1.2rem,1.2vw,1.1rem)] tracking-wide">
        Total anime you watched in 2025
      </p>

      <div class="flex items-end gap-3">
        <p
          class="font-extrabold text-[clamp(5rem,10vw,8rem)] text-white tracking-tight leading-none"
          :style="{
            textShadow: '0 0 28px rgba(255, 255, 255, 0.35)',
          }"
        >
          {{ displayAnimeWatched }}
        </p>

        <p
          class="mt-auto text-white/80 text-[clamp(2rem,2vw,1.6rem)] tracking-wide"
        >
          Anime
        </p>
      </div>

      <p
        class="mt-4 max-w-[42ch] text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed"
      >
        Each title marks a memory — some unforgettable, some unexpectedly
        amazing.
      </p>
    </div>
  </uiGlassCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  recap: {
    type: Object,
    required: true,
  },
});

const totalAnime = ref(0);
const displayAnimeWatched = ref(0);

onMounted(() => {
  totalAnime.value = props.recap?.stats?.totalAnime || 0;

  gsap.to(displayAnimeWatched, {
    value: totalAnime.value,
    duration: 1.2,
    ease: "power3.out",
    roundProps: "value",
    delay: 0.5,
  });
});
</script>
