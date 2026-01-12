<template>
  <div
    ref="el"
    class="absolute inset-0 flex flex-col items-center justify-center gap-4"
  >
    <div
      class="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"
    />
    <p class="text-sm opacity-70 text-white">Preparing your MAL recap…</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const el = ref(null);

onMounted(() => {
  gsap.fromTo(
    el.value,
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 0.4 }
  );
});
</script>
