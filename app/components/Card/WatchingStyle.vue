<template>
  <uiGlassCard>
    <div
      class="w-full h-full flex flex-col items-center justify-center text-center space-y-8"
    >
      <p class="text-white/60 text-[clamp(1.2rem,1.2vw,1.1rem)] tracking-wide">
        Your Watching Style
      </p>
      <div ref="badge" class="text-6xl text-white/80 mb-6 select-none">
        <Icon name="lucide-popcorn" />
      </div>

      <h1
        class="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none mb-3"
      >
        The Binge Watcher
      </h1>

      <p class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed">
        You don't stop watching until the season is finished.
      </p>
    </div>
  </uiGlassCard>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const badge = ref();

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 });

  gsap.to(badge.value, {
    y: -6,
    duration: 1.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1,
  });
});
</script>
