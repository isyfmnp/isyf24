<template>
  <div class="letter">
    <slot />
  </div>
</template>

<style>
.letter {
  position: relative;
  display: block;
  background-color: hsla(var(--gray-100-hsla), 0.97);
  border-radius: 8px;
  border: 1px solid var(--fg);
  margin: 4rem -1rem 7rem;
  padding: 1rem 1.5rem 0.125rem;
  font-weight: 400;
  font-family: var(--font-display);
}
.letter p {
  line-height: 1.5rem;
}
.letter::before {
  content: "";
  z-index: -10;
  position: absolute;
  top: -3rem;
  bottom: -3rem;
  left: -0.75rem;
  right: -0.75rem;
  border-radius: 2px;

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
