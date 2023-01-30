export default defineNuxtRouteMiddleware((to, from) => {
  const scrollPos = from?.meta[0].scrollPos;
  if (scrollPos && Object.keys(scrollPos).length > 0) {
    scrollPos.y = window.scrollY || 0;
    scrollPos.x = window.scrollX || 0;
  } else {
    window.scrollTo(0, 0);
  }
});
