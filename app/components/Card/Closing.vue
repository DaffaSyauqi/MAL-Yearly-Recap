<template>
  <uiGlassCard :hiddenScrollHint="true">
    <div
      class="w-full h-full flex flex-col items-center justify-center text-center gap-8 px-6 py-12"
    >
      <!-- MESSAGE -->
      <div class="space-y-2">
        <h2
          class="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none flex items-center justify-center gap-4"
        >
          Thanks for watching
          <Icon name="lucide-sparkles" class="w-8 h-8 text-yellow-300" />
        </h2>

        <p class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed">
          This was your MyAnimeList journey in 2025. Hope it brought back some
          good memories.
        </p>
      </div>

      <!-- ACTION BUTTONS -->
      <div class="flex gap-4">
        <button
          class="px-6 py-3 rounded-xl bg-white/15 text-white font-medium hover:bg-white/25 transition flex items-center"
        >
          <Icon name="lucide-share-2" class="w-5 h-5 mr-2" />
          <span>Share</span>
        </button>

        <button
          class="px-6 py-3 rounded-xl bg-indigo-500/80 text-white font-medium hover:bg-indigo-500 transition flex items-center"
        >
          <Icon name="lucide-refresh-cw" class="w-5 h-5 mr-2" />
          <span>Generate Again</span>
        </button>
      </div>
    </div>
  </uiGlassCard>
</template>
