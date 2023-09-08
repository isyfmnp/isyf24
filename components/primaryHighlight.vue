<template>
  <span class="text">
    <slot />
  </span>
</template>

<style scoped>
.text {
  position: relative;
  display: block;
  padding: 0.875rem 1rem 0.625rem;
  margin: 0.325rem -0.5rem 0.5rem;

  text-align: center;
  color: var(--fg);
  font-size: 26px;
  line-height: 1.5em;
}
.text::before {
  content: "";
  z-index: -2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2px;

  background: linear-gradient(80deg, var(--green), var(--primary));
  box-shadow: 0px 0px 20px 2px #272f4044;
}
.text::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 0;
  right: 0;

  background-color: #f1f3f488;
  backdrop-filter: blur(5px);
}
</style>
