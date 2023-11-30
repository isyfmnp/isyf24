<template>
  <DefaultLayout>
    <div class="status">
      <div>
        <h1>{{ error.statusCode }}</h1>
        <h3>{{ error.message }}</h3>

        <br style="display: block; margin-block: 4rem" />

        <NuxtLink to="/">Return to Home</NuxtLink>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
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
  font-size: min(40vh, 40vw);
  font-weight: 500;
  margin: 1rem 0 2rem;
  color: var(--primary-900);
}
h3 {
  font-size: 22px;
}
a {
  color: var(--fg);
  font-weight: 600;
}
</style>

<script setup>
import DefaultLayout from '~/layouts/default.vue';
import {onMounted} from 'vue';

onMounted(() => {
  window.error = true;
});

const props = defineProps({
  error: Object,
});
const handleError = () => clearError({redirect: '/'});
</script>
