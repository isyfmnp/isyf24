<template>
  <div class="faq-wrapper" :class="{opened: opened}">
    <div class="faq-qn" @click="opened = !opened">
      <h3><slot name="qn">Unasked Question</slot></h3>
      <span class="icon material-icons-outlined"
        ><slot name="icon">expand_more</slot></span
      >
    </div>
    <div class="faq-ans" :style="{ '--height': ansHeight }">
      <p ref="ansRef"><slot name="ans">Unanswered Question</slot></p>
    </div>
  </div>
</template>

<style scoped>
.faq-wrapper {
  position: relative;
  margin-block: 1.25rem;
  padding-inline: 1.25rem;
}
.faq-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: -1;
  background-color: var(--primary-200);
  border-radius: 16px;
  opacity: 0.25;
}

.faq-qn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #ffffff00;
  transition: border 200ms;
}
.opened .faq-qn {
  border-bottom: 1px solid var(--primary);
}

.faq-qn h3 {
  font-weight: 500;
  font-size: 20px;
  margin-block: 0;
  padding-block: 1.125rem;
  transition: color 200ms;
}
.opened .faq-qn h3 {
  color: var(--primary);
}

.icon {
  scale: 1.25;
  user-select: none;
  color: var(--fg);
  transform: rotate(0);
  transition: color 200ms, transform 200ms;
}
.opened .icon {
  transform: rotate(-180deg);
  color: var(--primary);
}

.faq-ans {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
}
.faq-ans p {
  padding-bottom: 0.5rem;
}
.opened .faq-ans {
  max-height: var(--height);
}
</style>

<script setup>
import {ref, onMounted} from 'vue';

const opened = ref(false);
const ansRef = ref(null);
const ansHeight = ref('100rem');

onMounted(() => {
  ansHeight.value = ansRef.value.offsetHeight + 36 + 'px';
});
</script>
