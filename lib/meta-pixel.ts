// Piccolo helper tipizzato per interagire con l'oggetto globale fbq del Meta Pixel,
// evitando `any` sparsi nei componenti che devono tracciare eventi (es. invio lead).

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaPixelEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }
  window.fbq("track", eventName, params);
}
