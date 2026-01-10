export function filterAnimeByYear(animeList: any[], year: string) {
  if (year === "all-time") return animeList;

  return animeList.filter((item) => {
    if (!item.list_status?.finish_date) return false;
    return item.list_status.finish_date.startsWith(year);
  });
}
