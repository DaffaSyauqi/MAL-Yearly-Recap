export function filterAnimeByYear(animeList: any[], year: string) {
  if (year === "all-time") return animeList;

  const targetYear = Number(year);

  return animeList.filter((item) => {
    const status = item.list_status?.status;

    // Hanya anime yang benar-benar ditonton
    if (!["completed", "watching", "on_hold"].includes(status)) {
      return false;
    }

    // Filter berdasarkan tahun rilis anime
    const seasonYear = item.node?.start_season?.year;
    if (!seasonYear) return false;

    return seasonYear === targetYear;
  });
}
