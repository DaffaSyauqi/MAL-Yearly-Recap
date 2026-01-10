export function generateCodeVerifier() {
  return crypto.randomUUID() + crypto.randomUUID();
}
