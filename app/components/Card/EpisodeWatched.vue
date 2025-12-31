<template>
  <uiGlassCard>
    <div
      class="flex flex-col justify-center items-center text-center h-full space-y-8"
    >
      <p class="text-white/60 text-[clamp(1.2rem,1.2vw,1.1rem)] tracking-wide">
        Total episode you watched in 2025
      </p>

      <div class="grid grid-cols items-center">
        <!-- Episodes -->
        <div class="flex flex-col">
          <p
            class="font-extrabold text-[clamp(5rem,5vw,6rem)] text-white leading-none"
            :style="{ textShadow: '0 0 28px rgba(255,255,255,0.35)' }"
          >
            {{ displayTotalEpisode }}
          </p>
          <p
            class="mt-2 text-white/80 text-[clamp(1rem,2vw,1.6rem)] tracking-wide"
          >
            Episodes
          </p>
        </div>

        <!-- OR -->
        <p
          class="font-semibold text-white/60 text-[clamp(1rem,2vw,1.4rem)] select-none"
        >
          or
        </p>

        <!-- Days -->
        <div class="flex flex-col">
          <p
            class="font-extrabold text-[clamp(5rem,5vw,6rem)] text-white leading-none"
            :style="{ textShadow: '0 0 28px rgba(255,255,255,0.35)' }"
          >
            {{ displayTotalDay }}
          </p>
          <p
            class="mt-2 text-white/80 text-[clamp(1rem,2vw,1.6rem)] tracking-wide"
          >
            Days
          </p>
        </div>
      </div>

      <p
        class="mt-4 max-w-[42ch] text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed"
      >
        And yes… you definitely said “just one episode” more than once.
      </p>
    </div>
  </uiGlassCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const totalEpisodeWatched = 1389; // dummy, nanti dari MAL
const totalDaysByEpisode = 67; // dummy, nanti dari MAL
const displayTotalEpisode = ref(0);
const displayTotalDay = ref(0);

onMounted(() => {
  gsap.to(displayTotalEpisode, {
    value: totalEpisodeWatched,
    duration: 1.2,
    ease: "power3.out",
    roundProps: "value",
    delay: 0.5,
  });
  gsap.to(displayTotalDay, {
    value: totalDaysByEpisode,
    duration: 1.7,
    ease: "power3.out",
    roundProps: "value",
    delay: 0.5,
  });
});
</script>
