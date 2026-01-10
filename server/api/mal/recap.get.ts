export default defineEventHandler(async (event) => {
  const token = getCookie(event, "mal_access_token");
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: "Not authenticated" });
  }

  return await $fetch("https://api.myanimelist.net/v2/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});
