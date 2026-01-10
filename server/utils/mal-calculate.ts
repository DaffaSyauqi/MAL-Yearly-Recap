export function calculateRecapStats(animeList: any[]) {
  const completed = animeList.filter(
    (a) => a.list_status?.status === "completed"
  );

  // Genre Calculation
  const genreCount: Record<string, number> = {};

  completed.forEach((item) => {
    item.node.genres?.forEach((g: any) => {
      genreCount[g.name] = (genreCount[g.name] || 0) + 1;
    });
  });

  const topGenres = Object.entries(genreCount)
    .map(([genre, count]) => ({ genre, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Ranking Calculation
  const rankedAnime = completed.map((item) => {
    const mean = item.node.mean || 0;
    const episodes = item.node.num_episodes || 0;

    const episodeScore = Math.min(episodes / 24, 1) * 10;
    const completedBonus = 5;
    const finalScore = mean * 0.5 + episodeScore * 0.2 + completedBonus;

    return {
      id: item.node.id,
      title: item.node.title,
      image: item.node.main_picture?.large,
      mean,
      episodes,
      mediaType: item.node.media_type,
      season: item.node.start_season?.season ?? null,
      year: item.node.start_season?.year ?? null,
      finalScore,
    };
  });

  rankedAnime.sort((a, b) => b.finalScore - a.finalScore);

  // Top seasonal and global
  const topSeasonal: Record<string, any | null> = {
    winter: null,
    spring: null,
    summer: null,
    fall: null,
  };

  Object.keys(topSeasonal).forEach((season) => {
    topSeasonal[season] = rankedAnime.find((a) => a.season === season) ?? null;
  });

  const topGlobal = rankedAnime[0] ?? null;

  // Random Caraousel
  const shuffled = [...completed].sort(() => 0.5 - Math.random());

  const carousel = shuffled.slice(0, 10).map((item) => ({
    id: item.node.id,
    title: item.node.title,
    image: item.node.main_picture?.large,
  }));

  // Total Episodes and Days
  const totalEpisodes = completed.reduce(
    (sum, a) => sum + (a.node.num_episodes || 0),
    0
  );

  const totalDays = Math.round((totalEpisodes * 24) / 1440);

  return {
    totalAnime: completed.length,
    totalEpisodes,
    totalDays,
    topGenres,
    topSeasonal,
    topGlobal,
    carousel,
  };
}
