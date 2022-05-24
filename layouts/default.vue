<template>
  <div>
    <NavBar />
    <div class="navbar-space" />
    <div class="body">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.navbar-space {
  height: 5.5rem;
}
.body {
  background-color: var(--bg);
  color: var(--fg);
  padding: 0 1rem;
  margin: 0 auto;
  min-height: 90vh; /* Keep footer out of sight until scrolled*/
  max-width: var(--content-width);
}
</style>
