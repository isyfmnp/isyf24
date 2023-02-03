<template>
  <nav>
    <div class="nav">
      <NuxtLink to="/">
        <div class="nav__icon nav__elm">
          <img src="/images/xuyuan_icon.png" class="nav__icon__pic" alt="" />
          <div class="nav__icon__text">
            <span class="nav__icon__name">Tang Xuyuan</span>
            <span class="nav__icon__title">Student | Programmer</span>
          </div>
        </div>
      </NuxtLink>

      <a class="nav__menu nav__elm" @click="menuClick">
        <!-- TODO: Open menu -->
        <MenuIcon size="26" />
      </a>
    </div>
    <div class="menu" :class="{ 'menu--shown': isMenuOpen }">
      <ul>
        <li><NuxtLink to="/" @click="menuClick">Home</NuxtLink></li>
        <li><NuxtLink to="/academic" @click="menuClick">Academic</NuxtLink></li>
        <li>
          <NuxtLink to="/projects/garuda-robotics" @click="menuClick"
            >Test</NuxtLink
          >
        </li>
        <!-- TODO: Academic Page -->
        <li></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import { ref } from "vue";
const isMenuOpen = ref(false);
function menuClick() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.menu {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  left: 0;
  top: 100%;
  background-color: rgba(var(--bg-rgb), 0.98);
  transition: top 450ms cubic-bezier(0.29, 0.11, 0.06, 1);
  border-block: 1px solid rgba(var(--fg-rgb), 50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu * {
  opacity: 0;
  transition: opacity 450ms cubic-bezier(0.29, 0.11, 0.06, 1);
}
.menu--shown {
  top: 0;
}
.menu--shown * {
  opacity: 1;
}
.menu ul {
  list-style: none;
  padding-left: 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
}
.menu ul * {
  margin-block: 0.75rem;
  color: rgba(var(--fg-rgb), 0.6);
  transition: 200ms color ease-in-out
}
.menu ul *:hover {
  color: var(--fg);
}
.menu ul *:hover::after {
  display: none;
}

.nav {
  position: fixed;

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
.nav > a::after {
  display: none;
}
.nav__menu {
  display: flex;
  z-index: 111;
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
    border-radius: 0.25rem;
  }
  .nav__elm:hover {
    color: var(--fg-secondary);
  }
  .nav__menu {
    --size: 1.25rem;
    width: var(--size);
    height: var(--size);
  }
}
</style>
