<template>
  <uiGlassCard :hiddenScrollHint="true">
    <div
      class="w-full h-full flex flex-col items-center justify-center text-center gap-8 px-6 py-12"
    >
      <div class="space-y-2">
        <h2
          class="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none flex items-center justify-center gap-4"
        >
          Thanks for watching
          <Icon name="lucide-sparkles" class="w-8 h-8 text-yellow-300" />
        </h2>

        <p class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed">
          Your anime journey, wrapped up. From first episodes to final endings —
          this was your 2025.
        </p>
      </div>

      <div class="flex gap-2">
        <button
          class="inline-flex items-center bg-blue-500 hover:bg-blue-600 px-6 md:px-10 py-2 md:py-3 border-none rounded-[50px] font-medium text-[12px] text-white md:text-[14px] cursor-pointer"
          @click="onGenerateAgain"
        >
          <Icon name="lucide-refresh-cw" class="w-5 h-5 mr-2" />
          <span>Generate Again</span>
        </button>

        <button
          class="inline-flex items-center bg-white/5 hover:bg-white/10 shadow-md backdrop-blur-md px-6 md:px-10 py-2 md:py-3 border border-white/20 rounded-full font-medium text-[12px] text-white/50 md:text-[14px] cursor-pointer"
          @click="onLogout"
        >
          <Icon name="lucide-log-out" class="w-5 h-5 mr-2" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  </uiGlassCard>
</template>

<script setup lang="ts">
const emit = defineEmits(["regenerate"]);

const onGenerateAgain = () => {
  emit("regenerate");
};

const onLogout = async () => {
  await $fetch("/api/auth/logout", {
    method: "POST",
  });
  navigateTo("/");
};
</script>
