export function calculateRecapStats(animeList: any[]) {
  /**
   * =========================
   * 1. Pisahkan berdasarkan status
   * =========================
   */

  const watchedStatuses = ["completed", "watching", "on_hold"];

  const watched = animeList.filter((a) =>
    watchedStatuses.includes(a.list_status?.status)
  );

  const completed = watched.filter(
    (a) => a.list_status?.status === "completed"
  );

  /**
   * =========================
   * 2. Total Anime & Episode Watched (USER-BASED)
   * =========================
   */

  const totalAnime = watched.length;

  const totalEpisodes = watched.reduce(
    (sum, a) => sum + (a.list_status?.num_episodes_watched || 0),
    0
  );

  const totalDays = Math.round((totalEpisodes * 24) / 1440);

  /**
   * =========================
   * 3. Top Genres (berdasarkan anime ditonton)
   * =========================
   */

  const genreCount: Record<string, number> = {};

  watched.forEach((item) => {
    item.node.genres?.forEach((g: any) => {
      genreCount[g.name] = (genreCount[g.name] || 0) + 1;
    });
  });

  const topGenres = Object.entries(genreCount)
    .map(([genre, count]) => ({ genre, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  /**
   * =========================
   * 4. Ranking Anime (COMPLETED ONLY, USER-BASED)
   * =========================
   *
   * Urutan ranking:
   * 1. User score (utama)
   * 2. Finish date (lebih cepat = lebih tinggi)
   * 3. Global mean (opsional)
   */

  const rankedAnime = completed
    .filter((a) => a.list_status?.score > 0)
    .map((item) => ({
      id: item.node.id,
      title: item.node.title,
      image: item.node.main_picture?.large,
      userScore: item.list_status.score,
      mean: item.node.mean || 0,
      finishDate: item.list_status.finish_date,
      season: item.node.start_season?.season ?? null,
      year: item.node.start_season?.year ?? null,
      mediaType: item.node.media_type,
    }))
    .sort((a, b) => {
      // 1. User score
      if (b.userScore !== a.userScore) {
        return b.userScore - a.userScore;
      }

      // 2. Finish date (lebih cepat lebih tinggi)
      if (a.finishDate !== b.finishDate) {
        return a.finishDate.localeCompare(b.finishDate);
      }

      // 3. Global mean (opsional)
      return (b.mean || 0) - (a.mean || 0);
    });

  /**
   * =========================
   * 5. Top Anime per Season
   * =========================
   */

  const seasons = ["winter", "spring", "summer", "fall"];

  const topSeasonal: Record<string, any | null> = {
    winter: null,
    spring: null,
    summer: null,
    fall: null,
  };

  seasons.forEach((season) => {
    const seasonalAnime = rankedAnime.filter((a) => a.season === season);

    topSeasonal[season] = seasonalAnime[0] ?? null;
  });

  /**
   * =========================
   * 6. Top Anime Global
   * (diambil dari Top Seasonal)
   * =========================
   */

  const seasonalCandidates = Object.values(topSeasonal).filter(Boolean);

  const topGlobal =
    seasonalCandidates.sort((a: any, b: any) => {
      if (b.userScore !== a.userScore) {
        return b.userScore - a.userScore;
      }

      if (a.finishDate !== b.finishDate) {
        return a.finishDate.localeCompare(b.finishDate);
      }

      return (b.mean || 0) - (a.mean || 0);
    })[0] ?? null;

  /**
   * =========================
   * 7. Carousel Anime (Random dari watched)
   * =========================
   */

  const shuffled = [...watched].sort(() => 0.5 - Math.random());

  const carousel = shuffled.slice(0, 10).map((item) => ({
    id: item.node.id,
    image: item.node.main_picture?.large,
  }));

  /**
   * =========================
   * 8. Return Final Recap
   * =========================
   */

  return {
    totalAnime,
    totalEpisodes,
    totalDays,
    topGenres,
    topSeasonal,
    topGlobal,
    carousel,
  };
}
