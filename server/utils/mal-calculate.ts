export function calculateRecapStats(animeList: any[]) {
  const watchedStatuses = ["completed", "watching", "on_hold"];

  const watched = animeList.filter((a) =>
    watchedStatuses.includes(a.list_status?.status)
  );

  const completed = watched.filter(
    (a) => a.list_status?.status === "completed"
  );

  // Total Anime & Episode Watched
  const totalAnime = watched.length;

  const totalEpisodes = watched.reduce(
    (sum, a) => sum + (a.list_status?.num_episodes_watched || 0),
    0
  );

  const totalDays = Math.round((totalEpisodes * 24) / 1440);

  // Top Genres
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

  // Ranking Calculate Anime
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
      if (b.userScore !== a.userScore) {
        return b.userScore - a.userScore;
      }

      if (a.finishDate !== b.finishDate) {
        return a.finishDate.localeCompare(b.finishDate);
      }

      return (b.mean || 0) - (a.mean || 0);
    });

  // Top Anime Seasonal
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

  // Top Anime
  const seasonalCandidates = Object.values(topSeasonal).filter(Boolean);

  const topAnime = rankedAnime.slice(0, 5);

  // Random Anime
  const shuffled = [...watched].sort(() => 0.5 - Math.random());

  const carousel = shuffled.slice(0, 10).map((item) => ({
    id: item.node.id,
    image: item.node.main_picture?.large,
  }));

  return {
    totalAnime,
    totalEpisodes,
    totalDays,
    topGenres,
    topSeasonal,
    topAnime,
    carousel,
  };
}
