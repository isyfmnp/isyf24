<template>
  <main class="nav">
    <NuxtLink to="/">
      <div class="nav__icon nav__elm">
        <img
          src="~/assets/images/xuyuan_icon.png"
          class="nav__icon__pic"
          alt=""
        />
        <div class="nav__icon__text">
          <span class="nav__icon__name">Tang Xuyuan</span>
          <span class="nav__icon__title">Student | Programmer</span>
        </div>
      </div>
    </NuxtLink>

    <a class="nav__menu nav__elm" href="#">
      <!-- TODO: Open menu -->
      <MenuIcon size="26" />
    </a>
  </main>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<script setup>
import MenuIcon from "vue-material-design-icons/Menu.vue";
</script>

<style scoped>
.nav {
  position: sticky;

  z-index: 100;
  margin-bottom: 1rem;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(var(--bg-rgb), 0.95);
  box-shadow: 0px 0px 10px 4px rgba(var(--fg-rgb), 0.2);

  border-bottom: 1px solid var(--fg);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: calc(clamp(1.125rem, 2.5vw, 3rem) - 1rem);
  padding-bottom: 0;
}
.nav__elm {
  padding: 1rem;
}
@media screen and (min-width: 800px) {
  .nav {
    position: fixed;
    border: none;
    background-color: transparent;
    box-shadow: none;
  }
  .nav__elm {
    border: 1px solid var(--fg);
    background-color: rgba(var(--bg-rgb), 0.9);
    box-shadow: 0px 0px 10px 4px rgba(var(--fg-rgb), 0.2);
  }
  .nav__elm:hover {
    --fg: var(--fg-secondary);
  }
  .nav__menu {
    --size: 1.25rem;
    width: var(--size);
    height: var(--size);
  }
}

.nav__menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
}
.nav__icon__pic {
  border-radius: 50%;
  border: 1px solid var(--fg);
  --size: clamp(37px, 4.5vw, 52px);
  width: var(--size);
  height: var(--size);
}
.nav__icon__text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.nav__icon__name {
  font-weight: 700;
  font-size: 20px;
}
.nav__icon__title {
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
}
</style>
