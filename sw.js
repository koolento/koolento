const CACHE_NAME = 'koolento-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/portfolio_2.html',
  '/palvelut1.html',
  '/yhteystiedot.html',
  '/dist/output.css',
  '/heroLogo.png',
  '/tausta6.png',
  '/tausta12.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Jos löytyy välimuistista, käytetään sitä
      return response || fetch(event.request);
    })
  );
});