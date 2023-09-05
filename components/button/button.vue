<template>
  <a :href="href">
    <slot />
    <span v-if="icon" class="icon material-icons-outlined">
      {{ icon }}
    </span>
  </a>
</template>

<style scoped>
a {
  padding: 0.875rem 1.75rem 0.875rem 1.25rem;
  margin: 0.75rem 0;
  border-radius: 8px;

  display: flex;
  width: fit-content;
  align-items: center;
  gap: 2rem;

  background-color: var(--gray-900);
  color: white;
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
