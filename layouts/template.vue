<template>
  <div id="page">
    <Head>
      <Title>ISYF 2024</Title>
    </Head>
    <NavBar />
    <ButtonScroll />

    <main id="body">
      <div class="status">
        <div>
          <h1>Coming Soon!</h1>
          <h3>Check back in a few days for ISYF24!</h3>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
#body {
  max-width: min(var(--content-width), 100vw);
  margin: 1rem auto 5rem;
  padding-inline: 1.5rem;
  min-height: 110vh;
}
.status {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
}
h1 {
  font-family: var(--font-display);
  font-size: min(15vh, 15vw);
  font-weight: 800;
  margin: 1rem 0 2rem;
  color: var(--primary-900);
}
h3 {
  font-size: 18px;
}
a {
  color: var(--fg);
  font-weight: 600;
}
</style>

<script setup>
import ButtonScroll from '../components/button/scroll.vue';
import {ref, onMounted} from 'vue';

import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const height = ref(0);
onMounted(() => {
  window.error = false;

  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('main section');

  sections.forEach(section => {
    gsap.from(section, {
      opacity: 0.125,
      y: 15,
      duration: 0.375,
      delay: 0.125,
      ease: 'power3.inOut',
      scrollTrigger: section,
    });
  });
});
</script>
