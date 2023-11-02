<template>
  <div class="faq-wrapper" :class="{ opened: opened }">
    <div class="faq-qn" @click="opened = !opened">
      <h3><slot name="qn">Unasked Question</slot></h3>
      <span class="icon material-icons-outlined"
        ><slot name="icon">expand_more</slot></span
      >
    </div>
    <div class="faq-ans" :style="{ '--height': ansHeight }">
      <p ref="ansRef" v-html="slots.ans()[0].children"></p>
      <!-- Black magic I don't understand why either -->
    </div>
  </div>
</template>

<style scoped>
.faq-wrapper {
  margin: 1.25rem -0.75rem;
  padding: 0 1rem;
  border-radius: 16px;
  border: 1px solid var(--fg);
  transition: border 75ms cubic-bezier(0.77, 0, 0.175, 1);
}
.faq-wrapper.opened {
  border: 1px solid var(--primary);
}

.faq-qn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  cursor: pointer;
  border-bottom: 1px solid #ffffff00;
}
@media screen and (min-width: 900px) {
  .faq-qn {
    transition: border 200ms;
  }
}
.opened .faq-qn {
  border-bottom: 1px solid var(--primary);
}

.faq-qn h3 {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-block: 0;
  padding-block: 0.875rem 0.625rem;
  transition: color 200ms;
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
}

.faq-ans {
  max-height: 0;
  overflow: hidden;
}
@media screen and (min-width: 900px) {
  .faq-ans {
    transition: max-height 200ms ease-in-out;
  }
}
.faq-ans p {
  padding-bottom: 0.5rem;
}
.opened .faq-ans {
  max-height: var(--height);
}
</style>

<script setup>
import { ref, watch, onMounted, useSlots } from "vue";

const slots = useSlots();
const test = "";

const opened = ref(false);
const ansRef = ref(null);
const ansHeight = ref("100rem");

const props = defineProps(["sectionOpen"]);

watch(props, async (oldValue, newValue) => {
  opened.value = newValue.sectionOpen;
});

onMounted(() => {
  ansHeight.value = ansRef.value.offsetHeight + 36 + "px";
});
</script>
