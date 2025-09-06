// Service Worker for Edmonton Chess Club - Aggressive Cache Busting
const CACHE_NAME = "edmonton-chess-club-v2.1.0";
const CACHE_VERSION = "2.1.0";

// Install event - skip waiting and take control immediately
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  self.skipWaiting();
});

// Activate event - clear all caches and take control
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log("Deleting cache:", cacheName);
            return caches.delete(cacheName);
          }),
        );
      })
      .then(() => {
        console.log("All caches cleared, claiming clients");
        return self.clients.claim();
      }),
  );
});

// Fetch event - always fetch from network first, then cache
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If successful, cache the response
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails, try to serve from cache
        return caches.match(event.request);
      }),
  );
});
