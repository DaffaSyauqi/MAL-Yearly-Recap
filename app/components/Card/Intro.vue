<template>
  <uiGlassCard>
    <div
      class="flex flex-col justify-center text-center items-center space-y-8"
    >
      <div class="text-center space-y-2">
        <div class="flex justify-center">
          <img
            src="https://ui-avatars.com/api/?name=daffasyauqi&background=4F46E5&color=fff&size=96"
            alt="Avatar"
            class="w-24 h-24 rounded-xl"
          />
        </div>
        <p class="text-white/70 text-lg">DaffaSyauqi</p>

        <p
          class="mt-2 max-w-[24ch] font-bold text-[clamp(3rem,5vw,2.6rem)] text-white text-center leading-[1.2] tracking-[-2px]"
          :style="{
            textShadow: '0 0 16px rgba(0, 0, 0, 0.5)',
          }"
        >
          Your Anime Recap 2025
        </p>

        <p
          class="text-white/60 text-[clamp(0.9rem,1.2vw,1.05rem)] text-center leading-relaxed"
        >
          Anime released in this year that you watched
        </p>
      </div>
      <div class="text-white/50 text-md animate-pulse">
        <div class="absolute inset-x-0 bottom-4 text-center">
          <span>Scroll to start ↓</span>
        </div>
      </div>
    </div>
  </uiGlassCard>
</template>
