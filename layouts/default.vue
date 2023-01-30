<template>
  <div>
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
  margin: 0 auto 5rem;
  padding-inline: 1.5rem;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
const height = ref(0);
onMounted(() => {
  height.value = window.innerHeight * 0.7;
});
</script>
