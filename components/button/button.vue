<template>
  <a :href="href">
    <slot />
    <span class="icon material-icons-outlined">
      {{ icon }}
    </span>
  </a>
</template>

<style scoped>
a {
  padding: 0.75rem 2rem;
  margin: 0.75rem 0;
  border-radius: 8px;

  display: flex;
  width: fit-content;
  align-items: center;
  gap: 2rem;

  background-color: darkblue;
  color: white;
  font-weight: 600;
}
</style>

<script setup>
const props = defineProps({
  href: String,
  icon: String,
});
</script>
