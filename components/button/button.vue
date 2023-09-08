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
  padding: 0.75rem 2rem 0.75rem 1rem;
  margin: 0.75rem 0;
  border-radius: 8px;

  display: flex;
  width: fit-content;
  align-items: center;
  gap: 1rem;

  background-color: var(--primary);
  --fg: var(--gray-100);
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
