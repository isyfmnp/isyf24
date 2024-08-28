<template>
  <nav :class="{ transparent: navTransparent }">
    <a class="stamp" href="/">
      <img class="logo light" src="/icon_light.png" alt="ISYF Logo" />
      <img class="logo dark" src="/icon_dark.png" alt="ISYF Logo" />
      <div class="text">
        <div class="title">ISYF 2024</div>
      </div>
    </a>

    <a class="hamburger" @click="menuOpen = !menuOpen">
      <span class="material-icons">menu</span>
    </a>
    <div class="menu" :class="{ open: menuOpen }">
      <a class="item close-button" @click="menuOpen = !menuOpen">
        <span class="material-icons-outlined">close</span>
      </a>
      <a class="item" href="/">
        <span class="item-text">Home</span>
      </a>
      <a class="item" href="/about">
        <span class="item-text">About</span>
      </a>
      <a class="item" href="/programme">
        <span class="item-text">Programme</span>
      </a>
      <div class="closed" :class="{ open: profilesOpen }">
        <a class="item" @click="profilesOpen = !profilesOpen">
          <span class="item-text"> Profiles </span>
          <span class="material-icons-outlined indicator">chevron_right</span>
        </a>
        <div class="subitems-wrapper">
          <ul class="subitems">
            <li>
              <a href="/profiles/speakers">
                <span class="material-icons-outlined icon">person</span>
                <span class="item-text">Speakers</span>
              </a>
            </li>
            <li>
              <a href="/profiles/schools">
                <span class="material-icons-outlined icon">school</span>
                <span class="item-text">Schools</span>
              </a>
            </li>
            <li>
              <a href="/profiles/organising-team">
                <span class="material-icons-outlined icon">group</span>
                <span class="item-text">Organising Team</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <a class="item" href="/media/photos">
        <span class="item-text">Photos</span>
      </a>
      
      <!--
      <div class="closed" :class="{ open: profilesOpen }">
        <a class="item" @click="profilesOpen = !profilesOpen">
           remember to add class = "item blocked"
          <span class="item-text"> Media </span>
          <span class="material-icons-outlined indicator">chevron_right</span>
        </a>
        <div class="subitems-wrapper">
          <ul class="subitems">
            <li>
              <a href="/media/photos">
                <span class="item-text">Photos</span>
              </a>
            </li>
            <li class="blocked">
              <a href="/media/reflections">
                <span class="item-text">Reflections</span>
              </a>
            </li>
          </ul>
        </div>
      </div>-->
      

      <a class="item" href="/faq">
        <span class="item-text"> FAQ</span>
      </a>
      <div class="socials">
        <a
          class="item"
          href="https://www.instagram.com/isyf.2024/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          class="item"
          href="https://www.youtube.com/channel/UCs9CbJcxC2x8OPYiNx5QDTg"
          target="_blank"
        >
          <YoutubeIcon />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("~/assets/css/blocked.css");
.material-icons-outlined {
  scale: 0.8;
  transform: translateY(1px);
}
a {
  text-decoration: none;
}

nav {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 2px;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--gray-100);
  border-bottom: 1px solid var(--gray-500);

  transition: background-color 100ms, color 200ms, top 100ms, left 100ms,
    right 100ms;
}
nav.transparent {
  padding-top: 0;

  background-color: transparent;
  box-shadow: none;
  backdrop-filter: blur(50px);
  border-bottom: 1px solid var(--gray-300);

  --fg: var(--gray-100);
  --bg: var(--gray-900);
}

/* ========== STAMP ========== */
.stamp {
  padding: 1rem;
  padding-left: 1.5rem;
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.transparent .stamp {
  margin-left: -0.25rem;
}

.stamp .logo {
  height: 2rem;
}
.dark {
  display: none;
}
.transparent .light {
  display: none;
}
.transparent .dark {
  display: block;
}

.stamp .text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media screen and (max-width: 1100px) {
  .transparent .stamp .text {
    display: none;
  }
}

.stamp .text .title {
  font-family: var(--font-display);
  font-weight: bold;
  font-size: 24px;
  color: var(--fg);
}

.stamp .text .subtitle {
  font-weight: 400;
  font-size: 16px;
}

/* ========== HAMBURGER ========== */
.hamburger {
  cursor: pointer;
}
.hamburger .material-icons {
  width: 24px;
  height: 24px;
  padding: 1rem 2rem;
}

.transparent .hamburger {
  margin-right: -0.25rem;
}
.transparent .hamburger .material-icons {
  color: white;
}

@media screen and (min-width: 1100px) {
  .hamburger {
    display: none;
  }
}

/* ========== MENU ========== */
.menu {
  opacity: 0;
  visibility: hidden;

  transition: opacity 200ms cubic-bezier(0.77, 0, 0.175, 1),
    visibility 200ms cubic-bezier(0.77, 0, 0.175, 1);
}
.menu.open {
  opacity: 1;
  visibility: visible;
}

.menu.open {
  left: 0;
  right: 0;
  letter-spacing: 0.05rem;
}
.menu {
  z-index: 120;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding: 1.375rem 4rem 1.875rem 1.5rem;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.625rem;

  user-select: none;
  font-weight: 400;

  --fg: var(--gray-100);
  --bg: var(--primary-900);

  background-color: var(--bg);
  box-shadow: 0px 0px 20px 2px #272f3d44;
}

.menu .stamp {
  padding: 0;
  margin-top: 0;
  margin-bottom: 0.75rem;
  margin-left: -2rem;
  transition: 100ms margin;
}
.menu.open .stamp {
  margin-left: -0.25rem;
}

.menu .item {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 0.75rem;
  padding: 0.5rem 0;
  width: 100%;

  overflow: hidden;
}

.item-text {
  font-weight: 600;
  text-transform: uppercase;
  font-family: var(--font-display);
  transition: color 100ms;
}

.menu .subitems-wrapper {
  overflow: hidden;
  height: 0rem;
  transition: height 200ms;
}
.menu .subitems {
  list-style: none;
  margin: 0.45rem 0 0.75rem;
  padding-left: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  transform: translateY(-110px);
  transition: transform 200ms;
}
.menu .subitems a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  transition: color 200ms;
}
.menu .open .subitems-wrapper,
.menu .closed:hover .subitems-wrapper {
  height: 120px;
}
.menu .open .subitems,
.menu .closed:hover .subitems {
  transform: translateY(0);
}

.menu .item.close-button {
  position: absolute;
  z-index: 21;
  top: 0.85rem;
  right: 2rem;
  width: fit-content;
  transform: scale(1.2);
  cursor: pointer;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-inline: 0.625rem;

  box-sizing: content-box;
  border-radius: 8px;
  border: 1px solid var(--gray-300);
}
.transparent .socials {
  border: 1px solid var(--gray-400);
}
.socials * {
  flex-grow: 0;
}
.menu .socials :deep(.item svg) {
  height: 17px;
  width: 17px;
  padding: 4px;
  fill: var(--fg);
  transition: fill 200ms;
}
.menu .material-icons-outlined {
  transition: transform 200ms, color 200ms;
}
.menu .open .item .indicator,
.menu .closed:hover .item .indicator {
  transform: rotate(90deg);
}
.menu .open .item,
.menu .item:hover,
.menu .subitems a:hover,
.menu .socials :deep(.item:hover svg) {
  --fg: var(--primary);
}

.transparent .menu .open .item,
.transparent .menu .item:hover,
.transparent .menu .subitems a:hover,
.transparent .menu .socials :deep(.item:hover svg) {
  --fg: var(--primary-100);
}

@media screen and (min-width: 1100px) {
  .menu {
    position: static;
    width: fit-content;
    height: fit-content;
    transform: translateX(0);
    padding: 0 2rem;

    flex-direction: row;
    align-items: center;
    gap: 1.5rem;

    background-color: transparent;
    color: white;
    backdrop-filter: none;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    --fg: var(--gray-900);
    --bg: var(--gray-100);
  }
  .transparent .menu {
    --fg: var(--gray-100);
    --bg: var(--gray-900);
  }

  .menu .stamp {
    display: none;
  }

  /* Link styling */
  .menu .item,
  .menu .subitems a {
    width: fit-content;
    gap: 0.25rem;

    color: var(--fg);
    font-size: 16px;
    font-weight: 500;

    transition: color 200ms linear;
    display: flex;
    align-items: center;
  }
  .menu .subitems .icon {
    display: none;
  }
  .transparent .item,
  .transparent .subitems a {
    color: var(--fg);
  }
  .transparent .socials .item :deep(svg) {
    fill: var(--fg);
  }

  /* ========== MASTHEAD ========== */
  .transparent .stamp {
    display: none;
  }
  .transparent {
    justify-content: center;
  }

  /* ========== DROPDOWN MENU ========== */
  .menu .closed {
    /* Parent of both item and subitem */
    position: relative;
  }
  .menu .closed .item {
    height: 4rem;
    margin-block: -24px;
  }
  .menu .subitems-wrapper {
    z-index: -1;
    position: absolute;
    top: 44px;
    left: -1.5rem;
    padding: 0 2rem 2rem;
    margin: 0 -2rem -2rem;
  }
  .menu .subitems {
    position: relative;
    z-index: -1;
    margin-block: 0;
    width: 11rem;
    padding: 1rem 2.5rem 0.75rem 1.5rem;

    background-color: var(--bg);
    box-shadow: 0px 0px 20px 2px #272f4044;
    border-radius: 0 0 6px 6px;
    border: 1px solid var(--gray-500);
    border-top: none;

    transform: translateY(-170px);
  }
  .menu .subitems a {
    gap: 0.5rem;
  }
  nav.transparent .menu .subitems {
    background-color: transparent;
    border: 1px solid var(--gray-300);
    border-top: none;
    backdrop-filter: blur(3px);
    box-shadow: none;
  }
  .item.close-button {
    display: none;
  }
  .socials {
    margin-top: 0;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import InstagramIcon from "../icons/instagram.vue";
import YoutubeIcon from "../icons/youtube.vue";

const profilesOpen = ref(false);
const menuOpen = ref(false);

// Scroll behaviour

const navTransparent = ref(false);
const checkScroll = () => {
  if (navTransparent.value && window.pageYOffset > window.innerHeight - 64)
    navTransparent.value = false;
  else if (
    !navTransparent.value &&
    window.pageYOffset < window.innerHeight - 64
  )
    navTransparent.value = true;
};
onMounted(() => {
  setTimeout(() => {
    if (window.masthead) {
      navTransparent.value = true;
      document.addEventListener("scroll", checkScroll);
    }
  }, 2);
});
onUnmounted(() => {
  document.removeEventListener("scroll", checkScroll);
});

onMounted(() => {
  if (window.innerWidth < 900) {
    return;
  }
  gsap.from(".stamp, .menu .item, .menu .socials", {
    opacity: 0,

    x: -7,
    duration: 0.5,
    ease: "power2.inOut",
    stagger: 0.025,
  });
});
</script>
