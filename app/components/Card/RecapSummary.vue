<template>
  <uiGlassCard>
    <div
      class="w-full h-full flex flex-col justify-between space-y-8 pb-8 md:p-8"
    >
      <!-- HEADER -->
      <div class="flex items-center gap-4">
        <img
          src="https://ui-avatars.com/api/?name=daffasyauqi&background=4F46E5&color=fff&size=64"
          class="w-28 h-28 rounded-xl"
          alt="Avatar"
        />

        <div class="flex flex-col items-start text-left gap-1">
          <h1
            class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none"
          >
            DaffaSyauqi's
          </h1>
          <h1
            class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none"
          >
            MyAnimeList Yearly-Recap 2025
          </h1>
        </div>
      </div>

      <!-- MAIN CONTENT -->
      <div class="grid grid-cols-2 md:grid-cols-2 gap-8">
        <!-- LEFT : TOP ANIME -->
        <div class="text-left">
          <p
            class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed mb-4"
          >
            Top Anime
          </p>

          <ul class="space-y-1">
            <li
              v-for="(anime, index) in topAnime"
              :key="anime"
              class="flex items-center gap-3 text-white"
            >
              <span class="text-white/40 font-medium">
                {{ index + 1 }}
              </span>
              <span
                class="font-medium leading-relaxed truncate overflow-hidden whitespace-nowrap flex-1"
              >
                {{ anime }}
              </span>
            </li>
          </ul>
        </div>

        <!-- RIGHT : TOP GENRES -->
        <div class="text-left">
          <p
            class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed mb-4"
          >
            Top Genres
          </p>

          <ul class="space-y-1">
            <li
              v-for="(genre, index) in topGenres"
              :key="genre"
              class="flex items-center gap-3 text-white"
            >
              <span class="text-white/40 font-medium">
                {{ index + 1 }}
              </span>
              <span
                class="font-medium leading-relaxed truncate overflow-hidden whitespace-nowrap flex-1"
              >
                {{ genre }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- BOTTOM STATS -->
      <div class="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
        <div class="text-left">
          <p
            class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed"
          >
            Anime Watched
          </p>
          <p class="text-2xl font-bold text-white">128</p>
        </div>

        <div class="text-left">
          <p
            class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed"
          >
            Days Spent
          </p>
          <p class="text-2xl font-bold text-white">67</p>
        </div>
      </div>
    </div>
  </uiGlassCard>
</template>

<script setup lang="ts">
const topAnime = [
  "Sousou no Frieren",
  "Jujutsu Kaisen",
  "Horimiya",
  "Attack on Titan",
  "Oshi no Ko",
];

const topGenres = [
  "Romance",
  "Drama",
  "Slice of Life",
  "Supernatural",
  "Thriller",
];
</script>
