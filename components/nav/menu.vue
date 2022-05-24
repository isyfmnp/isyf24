<template>
  <div class="menu" menu-dropdown>
    <a
      @click="isOpen = !isOpen"
      href="#"
      class="menu__button"
      menu-dropdown-button
    >
      <MenuAlt3Icon class="menu__icon" />
    </a>

    <div
      class="menu__dropdown nav__links"
      :class="{ 'menu__dropdown--shown': isOpen }"
    >
      <NavLinks />
    </div>
  </div>
</template>

<style scoped>
@import "nav.css";
.menu {
  position: relative;
  z-index: 10;
}
.menu__button {
  border: 1px solid var(--bg-700);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.menu__button:hover {
  background-color: var(--bg-800);
}
.menu__icon {
  height: 20px;
  color: var(--fg);
}

.menu__dropdown {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0.3;
  width: 140px;
  position: absolute;
  top: 40px;
  right: 0;


  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3));
  background-color: var(--bg);
  border: 1px solid var(--bg-800);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.menu__dropdown--shown {
  display: flex;
  opacity: 1;
}
</style>

<script>
import { MenuAlt3Icon, TranslateIcon } from "@heroicons/vue/solid";

export default {
  name: "NavMenu",
  components: {
    TranslateIcon,
    MenuAlt3Icon,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
