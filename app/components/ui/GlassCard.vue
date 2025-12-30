<template>
  <div
    class="absolute inset-0 flex items-center justify-center text-center z-10"
  >
    <div
      class="w-full max-w-4xl min-h-[82vh] md:min-h-[86vh] bg-white/5 backdrop-blur-md border border-white/20 shadow-md rounded-3xl px-8 py-10 md:px-12 md:py-14 text-white flex flex-col justify-center"
    >
      <slot />
    </div>
  </div>
</template>
