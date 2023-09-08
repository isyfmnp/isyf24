<template>
  <TemplateLayout>
    <div class="content">
      <slot />
    </div>
  </TemplateLayout>
</template>

<style scoped>
.content {
  margin-top: 8rem;
}

@media screen and (min-width: 900px) {
  .content {
    margin-top: 6.5rem;
  }
}
</style>

<script setup>
import TemplateLayout from './template.vue';
import {onMounted} from 'vue';
</script>
