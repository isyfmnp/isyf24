<template>
  <a :href="href">
    <span v-if="icon" class="icon material-icons-outlined">
      {{ icon }}
    </span>
    <slot />
  </a>
</template>

<style scoped>
a {
  padding: 0.625rem 1.5rem 0.625rem 0.75rem;
  margin: 0.75rem 0;
  border-radius: 8px;

  display: flex;
  width: fit-content;
  align-items: center;
  gap: 1rem;

  border: 1px solid var(--gray-900);
  font-weight: 600;
  text-decoration: none;
}
</style>

<script setup>
const props = defineProps({
  href: String,
  icon: String,
});
</script>
