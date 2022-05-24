<template>
  <div class="footer--external">
    <div class="footer--internal">
      <span class="copyright">
        © 2022 Tang Xuyuan. All rights reserved
      </span>
    </div>
  </div>
</template>

<style scoped>
.footer--external {
  position: sticky;
  background-color: var(--bg-900);
  margin: 8rem 0 0;
  padding: 3rem 2.5rem 4rem 2.5rem;
  font-size: 14px;
}
.footer--internal {
  margin: 0 auto;
  max-width: var(--content-width);
}
.copyright {
  line-height: 1.2rem;
  font-weight: 300;
}
</style>
