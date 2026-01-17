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
          v-for="(genre, index) in topGenres"
          :key="genre.name"
          class="space-y-2"
        >
          <div class="flex justify-between text-white/80 text-sm">
            <span>{{ Number(index) + 1 }}. {{ genre.name }}</span>
            <span>{{ genre.count }} anime</span>
          </div>

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
    </div>
  </uiGlassCard>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import { gsap } from "gsap";

const bars = ref([]);

const props = defineProps({
  recap: {
    type: Object,
    required: true,
  },
});

const colors = [
  "linear-gradient(90deg, #f472b6, #fb7185)",
  "linear-gradient(90deg, #a78bfa, #818cf8)",
  "linear-gradient(90deg, #34d399, #22d3ee)",
  "linear-gradient(90deg, #facc15, #fb923c)",
  "linear-gradient(90deg, #fb7185, #ef4444)",
];

const topGenres = computed(() => {
  const list = props.recap.stats.topGenres ?? [];
  if (!list.length) return [];

  const max = list[0].count;

  return list.map((g: any, index: any) => ({
    name: g.genre,
    count: g.count,
    percent: Math.round((g.count / max) * 100),
    color: colors[index % colors.length],
  }));
});

onMounted(async () => {
  await nextTick();

  gsap.fromTo(
    bars.value,
    { width: "0%" },
    {
      width: (i) => `${topGenres.value[i].percent}%`,
      duration: 2.2,
      ease: "power3.out",
      stagger: 0.12,
    }
  );
});
</script>
