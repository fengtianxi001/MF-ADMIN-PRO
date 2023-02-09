const TOKEN_KEY = "Authorization";

export function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function setToken(authorization: string) {
  return window.localStorage.setItem(TOKEN_KEY, authorization);
}

export function clearToken() {
  return window.localStorage.removeItem(TOKEN_KEY);
}
