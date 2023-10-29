<template>
  <div class="letter-stripe" />
  <div class="letter">
    <slot />
  </div>
  <div class="letter-stripe" />
</template>

<style scoped>
.letter {
  position: relative;
  display: block;
  background-color: hsla(var(--gray-100-hsla), 0.95);
  margin: 4rem -1.5rem 6rem;
  padding: 0.125rem 1.5rem;
  font-weight: 400;
  font-size: calc(var(--fs) + 3px);
}
.letter::before {
  content: '';
  z-index: -10;
  position: absolute;
  top: -2rem;
  bottom: -2rem;
  left: -0.5rem;
  right: -0.5rem;
 
  --clr-1: var(--bg);
  --clr-2: var(--primary);
  --clr-3: var(--bg);
  --clr-4: var(--yellow);
  --stripe-width: 16px;
  background-image: repeating-linear-gradient(
    -45deg,
    var(--clr-1),
    var(--clr-1) var(--stripe-width),
    var(--clr-2) var(--stripe-width),
    var(--clr-2) calc(var(--stripe-width) * 2),
    var(--clr-3) calc(var(--stripe-width) * 2),
    var(--clr-3) calc(var(--stripe-width) * 3),
    var(--clr-4) calc(var(--stripe-width) * 3),
    var(--clr-4) calc(var(--stripe-width) * 4)
  );
}
</style>
