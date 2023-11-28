<template>
  <TemplateLayout>
    <div class="content">
      <slot />
    </div>
  </TemplateLayout>
</template>

<style scoped>
.content {
  margin-top: 7rem;
}
</style>

<script setup>
import TemplateLayout from "./template.vue";
import { onMounted } from "vue";
</script>
