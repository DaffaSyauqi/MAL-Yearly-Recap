export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const code = query.code as string;
  if (!code) {
    throw createError({ statusCode: 400, statusMessage: "No code provided" });
  }

  const codeVerifier = getCookie(event, "mal_code_verifier");
  if (!codeVerifier) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing code verifier",
    });
  }

  const body = new URLSearchParams({
    client_id: config.public.malClientId,
    client_secret: config.malClientSecret,
    grant_type: "authorization_code",
    code,
    redirect_uri: config.public.malRedirectUri,
    code_verifier: codeVerifier,
  });

  const tokenRes: { access_token: string } = await $fetch(
    "https://myanimelist.net/v1/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    }
  );

  setCookie(event, "mal_access_token", tokenRes.access_token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  deleteCookie(event, "mal_code_verifier");

  return sendRedirect(event, "/recap");
});
