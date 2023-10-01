<template>
  <TemplateLayout>
    <slot />
  </TemplateLayout>
</template>

<style scoped></style>

<script setup>
import TemplateLayout from "./template.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.masthead = true;
});
</script>
