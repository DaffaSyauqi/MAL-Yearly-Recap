<template>
  <div
    class="absolute inset-0 flex items-center justify-center text-center z-10"
  >
    <div
      class="relative w-full max-w-4xl min-h-[82vh] md:min-h-[86vh] bg-white/5 backdrop-blur-md border border-white/20 shadow-md rounded-3xl px-8 py-10 md:px-12 md:py-14 text-white flex flex-col justify-center"
    >
      <slot />

      <!-- SCROLL HINT -->
      <div
        v-if="hiddenScrollHint !== true"
        class="absolute inset-x-0 bottom-5 flex justify-center items-center gap-1 text-white/40 text-sm animate-pulse"
      >
        <span>Scroll to next</span>
        <Icon name="lucide-move-down" class="w-4 h-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hiddenScrollHint?: boolean | string;
}>();
</script>
