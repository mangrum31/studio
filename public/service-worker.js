
const CACHE_NAME = 'quizbox-cache-v1';
// This list will be populated dynamically, but for now, we'll cache the essentials.
// The fetch handler will cache other assets as they are requested.
const URLS_TO_CACHE = [
  '/',
  '/manifest.json',
  '/favicon.ico',
];

// Install the service worker and cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Intercept fetch requests
self.addEventListener('fetch', (event) => {
  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request)
        .then((response) => {
          // If the resource is in the cache, serve it from there.
          if (response) {
            return response;
          }

          // If the resource is not in the cache, fetch it from the network.
          return fetch(event.request)
            .then((networkResponse) => {
              // If we got a valid response, clone it and cache it.
              if (networkResponse && networkResponse.status === 200) {
                 // We don't cache firebase requests.
                if (!event.request.url.includes('firestore.googleapis.com')) {
                    cache.put(event.request, networkResponse.clone());
                }
              }
              return networkResponse;
            })
            .catch(() => {
                // If the network request fails (e.g., offline),
                // and there's no cache, you can return a fallback page.
                // For now, we'll just let the browser handle the error.
                // This could be a good place for a custom offline page in the future.
            });
        });
    })
  );
});
