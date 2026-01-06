import { generateCodeVerifier, generateCodeChallenge } from "../../utils/pkce";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const codeVerifier = generateCodeVerifier();
  const codeChallenge = generateCodeChallenge(codeVerifier);

  setCookie(event, "mal_code_verifier", codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  const params = new URLSearchParams({
    response_type: "code",
    client_id: config.public.malClientId,
    redirect_uri: config.public.malRedirectUri,
    code_challenge: codeChallenge,
    code_challenge_method: "plain",
  });

  return sendRedirect(
    event,
    `https://myanimelist.net/v1/oauth2/authorize?${params.toString()}`
  );
});
