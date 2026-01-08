export default defineEventHandler(async (event) => {
  const token = getCookie(event, "mal_access_token");
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: "Not authenticated" });
  }

  return await $fetch(
    "https://api.myanimelist.net/v2/users/@me/animelist" +
      "?limit=1000" +
      "&fields=title,main_picture,mean,genres,media_type,num_episodes,my_list_status,start_season",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
});
