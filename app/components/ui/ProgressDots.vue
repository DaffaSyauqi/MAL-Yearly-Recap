<template>
  <div
    class="fixed z-50 flex items-center gap-3 top-6 left-1/2 -translate-x-1/2 md:top-1/2 md:left-auto md:right-6 md:-translate-x-0 md:-translate-y-1/2 md:flex-col"
  >
    <span
      v-for="i in total"
      :key="i"
      class="w-2 h-2 rounded-full transition-all duration-300"
      :class="
        i - 1 === active
          ? 'bg-white scale-125 shadow-[0_0_12px_rgba(255,255,255,0.6)]'
          : 'bg-white/30'
      "
    />
  </div>
</template>

<script setup>
defineProps({
  total: Number,
  active: Number,
});
</script>
