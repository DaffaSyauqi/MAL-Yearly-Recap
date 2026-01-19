export default defineNuxtRouteMiddleware(() => {
  if (process.client) return;

  const token = useCookie("mal_access_token").value;

  if (!token) {
    return navigateTo("/");
  }
});
