<template>
  <uiGlassCard>
    <div
      class="flex flex-col justify-center items-center text-center h-full space-y-8"
    >
      <p class="text-white/60 text-[clamp(1.2rem,1.2vw,1.1rem)] tracking-wide">
        Total episode you watched in 2025
      </p>

      <div class="grid grid-cols items-center">
        <div class="flex flex-col">
          <p
            class="font-extrabold text-[clamp(5rem,5vw,6rem)] text-white leading-none"
            :style="{ textShadow: '0 0 28px rgba(255,255,255,0.35)' }"
          >
            {{ displayEpisodeWatched }}
          </p>
          <p
            class="mt-2 text-white/80 text-[clamp(1rem,2vw,1.6rem)] tracking-wide"
          >
            Episodes
          </p>
        </div>

        <p
          class="font-semibold text-white/60 text-[clamp(1rem,2vw,1.4rem)] select-none"
        >
          or
        </p>

        <div class="flex flex-col">
          <p
            class="font-extrabold text-[clamp(5rem,5vw,6rem)] text-white leading-none"
            :style="{ textShadow: '0 0 28px rgba(255,255,255,0.35)' }"
          >
            {{ displayDayWatched }}
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

const props = defineProps({
  recap: {
    type: Object,
    required: true,
  },
});

const totalEpisodes = ref(0);
const totalDays = ref(0);
const displayEpisodeWatched = ref(0);
const displayDayWatched = ref(0);

onMounted(() => {
  totalEpisodes.value = props.recap?.stats?.totalEpisodes || 0;
  totalDays.value = props.recap?.stats?.totalDays || 0;

  gsap.to(displayEpisodeWatched, {
    value: totalEpisodes.value,
    duration: 1.2,
    ease: "power3.out",
    roundProps: "value",
    delay: 0.5,
  });
  gsap.to(displayDayWatched, {
    value: totalDays.value,
    duration: 1.7,
    ease: "power3.out",
    roundProps: "value",
    delay: 0.5,
  });
});
</script>
