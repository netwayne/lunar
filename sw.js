// Minimal service worker — required by Chrome/Android's installability checks so
// "Add to Home Screen" creates a real standalone app icon instead of a browser bookmark.
// It does not cache anything; the app still needs network access to load normally.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // presence alone satisfies the installability check
