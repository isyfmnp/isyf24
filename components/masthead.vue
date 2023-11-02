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
  inset: 0;
}
.masthead {
  text-align: center;
  --fg: var(--gray-100);

  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}
.masthead::before {
  content: "";
  z-index: -1;
}

.masthead h1 {
  font-size: 72px;
  font-family: var(--font-display);
}

.masthead h3 {
  opacity: 0.924;
  max-width: max(500px, 60vw);
}

@media screen and (min-width: 800px) {
  .masthead h1 {
    font-size: 96px;
  }
  .masthead h3 {
    font-size: 22px;
  }
}

@media screen and (min-width: 1200px) {
  .masthead h1 {
    font-size: 128px;
  }
  .masthead h3 {
    font-size: 26px;
  }
}
</style>
