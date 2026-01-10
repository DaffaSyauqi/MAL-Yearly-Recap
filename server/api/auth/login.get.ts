import { generateCodeVerifier } from "../../utils/pkce";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const codeVerifier = generateCodeVerifier();

  setCookie(event, "mal_code_verifier", codeVerifier, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  const params = new URLSearchParams({
    response_type: "code",
    client_id: config.public.malClientId,
    redirect_uri: config.public.malRedirectUri,

    code_challenge: codeVerifier,
    code_challenge_method: "plain",
  });

  return sendRedirect(
    event,
    `https://myanimelist.net/v1/oauth2/authorize?${params.toString()}`
  );
});
