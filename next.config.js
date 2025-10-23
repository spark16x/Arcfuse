const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  cacheId: 'arcfuse-cache-v1', // ← your PWA version here
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'arcfuse-runtime-cache',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24, // 1 day
        },
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
});