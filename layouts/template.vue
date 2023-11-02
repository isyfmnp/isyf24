<template>
  <div id="page">
    <Head>
      <Title>ISYF 2024</Title>
    </Head>
    <NavBar />
    <ButtonScroll />

    <main id="body">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
#body {
  max-width: min(var(--content-width), 100vw);
  margin: 1rem auto 5rem;
  padding-inline: 2rem;
  min-height: 110vh;
}
</style>

<script setup>
import ButtonScroll from "../components/button/scroll.vue";
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const height = ref(0);
onMounted(() => {
  window.error = false;

  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray("main section");

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: section,
    });
  });
});
</script>
