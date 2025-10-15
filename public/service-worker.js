self.addEventListener('fetch', (event) => {
  // This is a placeholder service worker.
  // It's required for the app to be installable.
  // You can add caching strategies here later.
  event.respondWith(fetch(event.request));
});
