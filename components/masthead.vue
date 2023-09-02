<template>
  <div class="masthead" ref="masthead">
    <slot />
  </div>

  <div class="masthead-space" :style="{ height: mhHeight }"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const masthead = ref(null);
const mhHeight = ref("100vh");
onMounted(() => {
  mhHeight.value = masthead.value.clientHeight + "px";
});
</script>

<style>
.masthead,
.masthead::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.masthead {
  text-align: center;
  color: white;

  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.masthead::before {
  content: "";
  z-index: -1;
}

.masthead h1 {
  font-size: 72px;
  color: white;
  font-family: var(--font-display);
}

@media screen and (min-width: 800px) {
  .masthead h1 {
    font-size: 96px;
  }
}

@media screen and (min-width: 1200px) {
  .masthead h1 {
    font-size: 128px;
  }
}
</style>
