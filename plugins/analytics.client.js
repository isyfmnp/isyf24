export default defineNuxtPlugin(() => {
  (async () => {
    if (process.env.NODE_ENV === 'production') {
      const analytics = await import('@vercel/analytics')
      analytics.inject()
    }
  })();
});
