export default defineEventHandler((event) => {
  deleteCookie(event, "mal_access_token", {
    path: "/",
  });

  return {
    success: true,
    message: "Logged out successfully",
  };
});
