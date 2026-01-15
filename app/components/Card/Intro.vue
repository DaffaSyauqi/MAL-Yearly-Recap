<template>
  <uiGlassCard>
    <div
      class="flex flex-col justify-center text-center items-center h-full space-y-8"
    >
      <div class="text-center space-y-2">
        <div class="flex justify-center">
          <img :src="props.recap?.user?.avatar" class="w-24 h-24 rounded-xl" />
        </div>
        <p class="text-white/70 text-lg">{{ props.recap?.user?.name }}</p>

        <p
          class="mt-2 max-w-[24ch] font-bold text-[clamp(3rem,5vw,2.6rem)] text-center text-white tracking-tight leading-none"
        >
          Your Anime Recap 2025
        </p>

        <p
          class="text-white/60 text-[clamp(0.9rem,1.2vw,1.05rem)] text-center leading-relaxed"
        >
          Anime released in this year that you watched
        </p>
      </div>
    </div>
  </uiGlassCard>
</template>

<script setup lang="ts">
const props = defineProps({
  recap: {
    type: Object,
    required: true,
  },
});
</script>
