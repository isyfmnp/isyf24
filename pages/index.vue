<template>
  <div class="title">
    <div class="title__image"></div>
    <h1 class="title__text">Tang Xuyuan</h1>
  </div>

  <h2>From Hwa Chong Institution</h2>
</template>

<style scoped>
.title {
  position: relative;
  min-height: 50vw;
  perspective: 20px;
}
.title__image {
  position: absolute;
  width: 100%;
  height: 100%;

  /* Perspective
  transform-style: preserve-3d;
  z-index: -5;
  transform: translateZ(-10px) scale(1.5);
  */

  background-image: url("~/assets/images/titleImage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(3.75px) saturate(0.5);
  border-radius: 0.5rem;
  border: 2px solid var(--bg);
}
.title__text {
  position: absolute;
  top: 40%;
  left: clamp(5%, 20%, 20%);

  font-size: 2.2rem;
  color: var(--bg);
}
</style>

<script></script>
