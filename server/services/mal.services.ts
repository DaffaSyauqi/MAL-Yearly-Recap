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
        fields:
          "list_status,num_episodes,genres,start_date,end_date,media_type,season,mean",
      },
    });

    allData.push(...res.data);

    if (!res.paging?.next) break;
    offset += limit;
  }

  return allData;
}
