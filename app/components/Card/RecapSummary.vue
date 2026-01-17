<template>
  <uiGlassCard>
    <div
      class="w-full h-full flex flex-col justify-between space-y-8 pb-8 md:p-8"
    >
      <div class="flex items-center gap-4">
        <img
          :src="props.recap?.user?.avatar"
          class="w-28 h-28 rounded-xl"
          alt="Avatar"
        />

        <div class="flex flex-col items-start text-left gap-1">
          <h1
            class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none"
          >
            {{ props.recap?.user?.name }}
          </h1>
          <h1
            class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none"
          >
            MyAnimeList Yearly Recap 2025
          </h1>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-2 gap-8">
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
                {{ Number(index) + 1 }}
              </span>
              <span
                class="font-medium leading-relaxed truncate overflow-hidden whitespace-nowrap flex-1"
              >
                {{ anime.title }}
              </span>
            </li>
          </ul>
        </div>

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
                {{ Number(index) + 1 }}
              </span>
              <span
                class="font-medium leading-relaxed truncate overflow-hidden whitespace-nowrap flex-1"
              >
                {{ genre.name }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
        <div class="text-left">
          <p
            class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed"
          >
            Anime Watched
          </p>
          <p class="text-2xl font-bold text-white">
            {{ props.recap?.stats?.totalAnime }}
          </p>
        </div>

        <div class="text-left">
          <p
            class="text-white/50 text-[clamp(1rem,1.1vw,1rem)] leading-relaxed"
          >
            Days Spent
          </p>
          <p class="text-2xl font-bold text-white">
            {{ props.recap?.stats?.totalDays }}
          </p>
        </div>
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

const topAnime = computed(() => {
  const list = props.recap.stats.topAnime ?? [];
  if (!list.length) return [];

  return list.map((a: any) => ({
    title: a.title,
  }));
});

const topGenres = computed(() => {
  const list = props.recap.stats.topGenres ?? [];
  if (!list.length) return [];

  return list.map((g: any) => ({
    name: g.genre,
  }));
});
</script>
