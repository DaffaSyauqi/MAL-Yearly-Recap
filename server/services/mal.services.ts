const MAL_BASE_URL = "https://api.myanimelist.net/v2";

export async function fetchMALUser(token: string) {
  return await $fetch(`${MAL_BASE_URL}/users/@me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function fetchAllAnimeList(token: string) {
  let allData: any[] = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const res: any = await $fetch(`${MAL_BASE_URL}/users/@me/animelist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      query: {
        limit,
        offset,
        /**
         * Field yang diambil DISESUAIKAN
         * dengan kebutuhan recap USER (bukan MAL global)
         */
        fields: [
          // status user (score, status, start_date, finish_date, num_episodes_watched)
          "list_status",

          // metadata anime
          "genres",
          "media_type",
          "mean", // hanya untuk tie-breaker ranking
          "start_season",
          "main_picture",
          "title",
        ].join(","),
      },
    });

    allData.push(...res.data);

    if (!res.paging?.next) break;
    offset += limit;
  }

  return allData;
}
