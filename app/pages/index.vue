<template>
  <div
    class="top-0 left-0 z-1 absolute inset-0 flex flex-col justify-center items-center text-center w-full h-full"
  >
    <uiAnimatedContent
      :distance="50"
      direction="vertical"
      :duration="0.8"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :delay="0.5"
      :threshold="0"
    >
      <uiShinyText
        text="MyAnimeList"
        :disabled="false"
        :speed="2"
        class-name="max-w-[24ch] font-bold text-[clamp(1rem,2vw,2.6rem)] text-center leading-[1.2] tracking-[-2px]"
      />

      <p
        class="mt-2 max-w-[24ch] font-bold text-[clamp(3rem,5vw,2.6rem)] text-white text-center leading-[1.2] tracking-[-2px]"
        :style="{
          textShadow: '0 0 16px rgba(0, 0, 0, 0.5)',
        }"
      >
        Yearly Anime Recap
      </p>

      <p
        class="mt-1 max-w-[42ch] mx-auto text-white/60 text-[clamp(0.9rem,1.2vw,1.05rem)] text-center leading-relaxed"
      >
        Relive your anime journey. From favorite genres to the anime that
        defined your year.
      </p>

      <div class="flex items-center justify-center gap-4 mt-8">
        <button
          ref="loginBtn"
          class="inline-flex items-center bg-white hover:bg-gray-100 px-6 md:px-10 py-2 md:py-3 border-none rounded-[50px] font-medium text-[12px] text-black md:text-[14px] cursor-pointer"
        >
          <Icon name="simple-icons:myanimelist" class="w-5 h-5 mr-2" />
          Login with MyAnimeList
        </button>

        <a
          ref="githubBtn"
          href="https://github.com/DaffaSyauqi/MAL-Yearly-Recap"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center bg-white/5 hover:bg-white/10 shadow-md backdrop-blur-md px-6 md:px-10 py-2 md:py-3 border border-white/20 rounded-full font-medium text-[12px] text-white/50 md:text-[14px] cursor-pointer"
        >
          <Icon name="lucide-github" class="w-5 h-5 mr-2" />
          <span>Star on Github</span>
        </a>
      </div>
    </uiAnimatedContent>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const loginBtn = ref(null);
const githubBtn = ref(null);

onMounted(() => {
  const buttons = [loginBtn.value, githubBtn.value];

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        y: -6,
        duration: 0.25,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        y: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    });
  });
});
</script>
