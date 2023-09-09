<template>
  <div id="page">
    <Head>
      <Title>ISYF 2024</Title>
    </Head>
    <NavBar />
    <ButtonScroll />

    <div id="body">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
#body {
  max-width: min(900px, 100vw);
  margin: 1rem auto 5rem;
  padding-inline: 2rem;
  min-height: 110vh;
}
</style>

<script setup>
import ButtonScroll from "../components/button/scroll.vue";
import { ref, onMounted } from "vue";
const height = ref(0);
onMounted(() => {
  window.error = false;
});
</script>
