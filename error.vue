<template>
  <DefaultLayout>
    <main :style="{ 'min-height': windowHeight - 200 + 'px' }">
      <div>
        <h1>{{ error.statusCode }}</h1>
        <h3>{{ error.message }}</h3>

        <br style="display: block; margin-block: 4rem" />

        <NuxtLink to="/">Return to Home</NuxtLink>
      </div>
    </main>
  </DefaultLayout>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h1 {
  font-size: 96px;
  font-weight: 500;
  margin: 1rem 0 2rem;
}
h3 {
  font-size: 22px;
}
a {
  color: var(--fg);
  font-weight: semibold;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 128px;
  }
}
</style>

<script setup>
import DefaultLayout from "~/layouts/default.vue";
import { ref, onMounted } from "vue";

let windowHeight = ref(6000);
onMounted(() => {
  windowHeight.value = window.innerHeight;
});

const props = defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>
