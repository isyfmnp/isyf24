<template>
  <div class="masthead">

  <slot />
  </div>
</template>

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
  padding: 7rem 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.masthead::before {
  content: "";
  z-index: -1;
}
</style>
