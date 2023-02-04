<template>
  <div id="page">
    <Head>
      <Title>Portfolio | Tang Xuyuan</Title>
    </Head>
    <NavBar />
    <ButtonScroll />

    <div id="body" :style="{ 'min-height': height + 'px' }">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
#body {
  max-width: var(--content-width);
  margin: 7rem auto 5rem;
  padding-inline: 1.5rem;
}
</style>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
const height = ref(0);
onMounted(() => {
  height.value = window.innerHeight * 0.7;
});

const displayScroll = ref(false)

const observerSuccess = ref(false);
const watchScrollAnim = () => {
  const observer = new IntersectionObserver((elements) => {
    elements.forEach((elm) => {
      if (!observerSuccess.value) observerSuccess.value = true;
      if (elm.isIntersecting) {
        elm.target.classList.add("scroll-shown");
      }
    });
  });
  const hiddenElms = document.querySelectorAll(".scroll-hidden");
  hiddenElms.forEach((elm) => observer.observe(elm));
};
onUpdated(() => {
  function tryObserver(attempt) {
    watchScrollAnim();
    if (!observerSuccess.value && attempt < 100) setTimeout(tryObserver, 500);
  }
  observerSuccess.value = false;
  tryObserver(0);
});
</script>
