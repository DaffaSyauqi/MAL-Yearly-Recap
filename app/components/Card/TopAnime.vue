<template>
  <uiGlassCard>
    <div
      class="relative w-full h-full flex items-center justify-center overflow-hidden space-y-8"
    >
      <div
        ref="phase1"
        class="absolute inset-0 flex flex-col justify-center items-center"
      >
        <p
          class="mb-6 text-white/60 text-[clamp(1.1rem,1.2vw,1rem)] tracking-wide"
        >
          Your top anime of 2025 is...
        </p>

        <div class="relative w-full mt-6 overflow-hidden">
          <div
            class="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/30 to-transparent z-10"
          />
          <div
            class="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/30 to-transparent z-10"
          />
          <div ref="carouselTrack" class="flex gap-3 w-max">
            <img
              v-for="(poster, i) in loopPosters"
              :key="i"
              :src="poster?.image"
              class="w-32 md:w-48 aspect-[2/3] object-cover rounded-lg"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <div
        ref="phase2"
        class="relative z-20 flex flex-col items-center text-center opacity-0"
      >
        <img
          :src="props.recap?.stats?.topAnime?.image"
          class="w-56 h-80 object-cover rounded-2xl shadow-2xl"
        />

        <h2
          class="mt-6 text-3xl font-bold text-white tracking-tight leading-none"
        >
          {{ props.recap?.stats?.topAnime?.title }}
        </h2>

        <div class="mt-2 flex items-center gap-2 text-3xl">
          <Icon name="lucide-star" class="text-yellow-400" />
          <span class="text-white/60 tracking-wide">{{
            props.recap?.stats?.topAnime?.userScore
          }}</span>
        </div>
      </div>
    </div>
  </uiGlassCard>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  recap: {
    type: Object,
    required: true,
  },
});

const phase1 = ref();
const phase2 = ref();

const posters = computed(() => {
  const list = props.recap.stats.carousel ?? [];
  if (!list.length) return [];

  return list.map((c: any, index: any) => ({
    image: c.image,
  }));
});

const loopPosters = posters.value;
const carouselTrack = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!carouselTrack.value) return;

  const track = carouselTrack.value;
  const width = track.scrollWidth / 2;

  gsap.to(track, {
    x: -width,
    duration: 20,
    ease: "linear",
    repeat: -1,
  });

  const tl = gsap.timeline({ delay: 3 });

  tl.to(phase1.value, {
    opacity: 0,
    scale: 0.94,
    filter: "blur(14px)",
    duration: 1,
    ease: "power2.inOut",
  });

  tl.to(
    phase2.value,
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.3"
  );
});
</script>
