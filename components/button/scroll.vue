<template>
  <a class="page-btn" :class="{ hidden: !showScroll }" @click="scroll()">
    <svg
      class="svg-inline--fa fa-arrow-up-long"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="arrow-up-long"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      data-v-14edde60=""
    >
      <path
        class=""
        d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
      ></path>
    </svg>
  </a>
</template>

<style scoped>
@import "~/assets/css/pageButton.css";

.page-btn {
  position: fixed;
  z-index: 90;
  bottom: 2rem;
  right: 2rem;
  --size: 3rem;
  height: var(--size);
  width: var(--size);
  border-radius: calc(var(--size) / 2);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg);
  border: 1px solid var(--fg);
  color: var(--fg);

  opacity: 1;

  transition: background-color 200ms, fill 200ms, border 200ms, box-shadow 200ms,
    opacity 200ms;
}
.page-btn:active {
  border: 1px solid var(--primary);
  --fg: var(--gray-100);
  box-shadow: 0px 0px 20px 2px #272f4066;
}
@media screen and (min-width: 900px) {
  .page-btn:hover {
    --bg: var(--primary);
    --fg: var(--gray-100);
    border: 1px solid var(--bg);
  }
}

.page-btn.hidden {
  opacity: 0;
}

.page-btn :deep(svg) {
  transform: scale(1.2);
  fill: var(--fg);
  transition: 200ms fill;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({ displayscroll: Boolean });

const showScroll = ref(false);
const checkScroll = () => {
  if (!showScroll.value && window.pageYOffset > window.innerHeight * 0.25)
    showScroll.value = true;
  else if (showScroll.value && window.pageYOffset < window.innerHeight * 0.25)
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
