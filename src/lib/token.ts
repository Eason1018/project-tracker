export function getToken(): string | null {
  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }
  try {
    return window.localStorage.getItem("token");
  } catch {
    return null;
  }
}

export function setToken(token: string): void {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }
  try {
    window.localStorage.setItem("token", token);
  } catch {
    // ignore write errors
  }
}

export function removeToken(): void {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }
  try {
    window.localStorage.removeItem("token");
  } catch {
    // ignore remove errors
  }
}
