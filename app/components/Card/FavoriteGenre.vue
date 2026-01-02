<template>
  <uiGlassCard>
    <div
      class="flex flex-col justify-center items-center text-center h-full space-y-8"
    >
      <p class="text-white/60 text-[clamp(1.2rem,1.2vw,1.1rem)] tracking-wide">
        Your favorite genres in 2025
      </p>

      <div class="w-full max-w-xl space-y-5">
        <div
          v-for="(genre, index) in genres"
          :key="genre.name"
          class="space-y-2"
        >
          <div class="flex justify-between text-white/80 text-sm">
            <span>{{ index + 1 }}. {{ genre.name }}</span>
            <span>{{ genre.count }} anime</span>
          </div>

          <!-- BAR -->
          <div class="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              ref="bars"
              class="h-full rounded-full"
              :style="{
                background: genre.color,
              }"
            />
          </div>
        </div>
      </div>

      <p
        class="max-w-[42ch] text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed"
      >
        Looks like you enjoy emotional stories and character-driven anime more
        than anything else.
      </p>
    </div>
  </uiGlassCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const bars = ref([]);

const genres = [
  {
    name: "Romance",
    count: 28,
    percent: 100,
    color: "linear-gradient(90deg, #f472b6, #fb7185)",
  },
  {
    name: "Drama",
    count: 21,
    percent: 75,
    color: "linear-gradient(90deg, #a78bfa, #818cf8)",
  },
  {
    name: "Slice of Life",
    count: 18,
    percent: 64,
    color: "linear-gradient(90deg, #34d399, #22d3ee)",
  },
  {
    name: "Supernatural",
    count: 14,
    percent: 50,
    color: "linear-gradient(90deg, #facc15, #fb923c)",
  },
  {
    name: "Thriller",
    count: 9,
    percent: 32,
    color: "linear-gradient(90deg, #fb7185, #ef4444)",
  },
];

onMounted(() => {
  gsap.fromTo(
    bars.value,
    { width: "0%" },
    {
      width: (i) => `${genres[i].percent}%`,
      duration: 2.5,
      ease: "power3.out",
      stagger: 0.12,
    }
  );
});
</script>
