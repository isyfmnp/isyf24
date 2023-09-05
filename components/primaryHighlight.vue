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
  margin-block: 0.325 0.5rem;

  text-align: center;
  color: var(--fg);
}
.text::before {
  content: "";
  z-index: -2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: linear-gradient(80deg, var(--green), var(--purple));
  box-shadow: 0px 0px 20px 2px #272f4022;
}
.text::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 0;
  right: 0;

  background-color: #f1f3f488;
  backdrop-filter: blur(5px);
}

@media screen and (max-width: 600px) {
  .text {
    margin-inline: calc(-50vw + 50%);
  }
}
</style>
