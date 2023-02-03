<template>
  <a class="page-btn" :class="{ hidden: !showScroll }" @click="scroll()">
    <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
  </a>
</template>

<style scoped>
@import "~/assets/css/pageButton.css";

.page-btn {
  opacity: 1;
  transition: 200ms opacity ease-in-out, 200ms background-color ease-in-out;
}
.page-btn.hidden {
  opacity: 0;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showScroll = ref(false);
const checkScroll = () => {
  if (!showScroll.value && window.pageYOffset > window.innerHeight * 0.4)
    showScroll.value = true;
  else if (showScroll.value && window.pageYOffset < window.innerHeight * 0.4)
    showScroll.value = false;
};
onMounted(() => {
  document.addEventListener("scroll", checkScroll);
});
onUnmounted(() => {
  document.removeEventListener("scroll", checkScroll);
});

function scroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
</script>
