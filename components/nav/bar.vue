<template>
  <nav :class="{ transparent: navTransparent }">
    <a class="stamp" href="/">
      <img class="logo" src="/images/ISYF_logo.png" alt="ISYF Logo" />
      <div class="text">
        <div class="title">ISYF 2024</div>
        <!--<div class="subtitle">24th January 2024 | Hwa Chong Institition (SG)</div>-->
      </div>
    </a>

    <a class="hamburger" href="#" @click="menuOpen = !menuOpen">
      <span class="material-icons">menu</span>
    </a>

    <div class="menu" :class="{ open: menuOpen }">
      <a class="item close-button" href="#" @click="menuOpen = !menuOpen">
        <span class="material-icons-outlined">close</span>
      </a>
      <a class="item" href="/">
        <span class="material-icons-outlined">home</span>
        Home
      </a>
      <a class="item" href="/about">
        <span class="material-icons-outlined">info</span>
        About
      </a>
      <a class="item" href="/programme">
        <span class="material-icons-outlined">event_note</span>
        Programme
      </a>
      <div class="closed" :class="{ open: profilesOpen }">
        <a class="item" @click="profilesOpen = !profilesOpen">
          <span class="material-icons-outlined">person</span>
          Profiles
          <span class="material-icons-outlined indicator">chevron_right</span>
        </a>
        <div class="subitems-wrapper">
          <ul class="subitems">
            <li>
              <a href="/profiles/speakers">
                <span class="material-icons-outlined">person</span>
                Speakers
              </a>
            </li>
            <li>
              <a href="/profiles/schools">
                <span class="material-icons-outlined">school</span>
                Schools</a
              >
            </li>
            <li>
              <a href="/profiles/organising-team">
                <span class="material-icons-outlined">group</span>
                Organising Team</a
              >
            </li>
          </ul>
        </div>
      </div>
      <a class="item">
        <span class="material-icons-outlined">image</span>
        Media
      </a>

      <a class="item" href="/faq">
        <span class="material-icons-outlined">help</span>
        FAQ
      </a>
      <div class="socials">
        <a
          class="item"
          href="https://m.facebook.com/isyf.2023/"
          target="_blank"
        >
          <FacebookIcon />
        </a>
        <a
          class="item"
          href="https://www.instagram.com/isyf.2023/"
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
.material-icons-outlined {
  scale: 0.8;
}
a {
  text-decoration: none;
}

nav {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 4rem;
  margin-top: -4rem;

  --fg: black;
  background-color: #f1f3f488;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 20px 2px #272f4044;

  transition: background-color 100ms, color 100ms, backdrop-filter 100ms,
    box-shadow 100ms, opacity 800ms;
}
nav.transparent {
  background-color: transparent;
  --fg: white;
  backdrop-filter: none;
  box-shadow: none;
}

/* ========== STAMP ========== */
.stamp {
  padding: 1rem;
  padding-top: 4rem;
  margin-top: -3rem;
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.stamp .logo {
  height: 3rem;
}

.stamp .text {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.75rem;
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
.hamburger .material-icons {
  width: 24px;
  height: 24px;
  padding: 1rem 2rem;
}

.transparent .hamburger .material-icons {
  color: white;
}

@media screen and (min-width: 900px) {
  .hamburger {
    display: none;
  }
}

/* ========== MENU ========== */
.menu {
  opacity: 0;
  visibility: hidden;

  transition: opacity 400ms, visibility 400ms;
}
.menu.open {
  opacity: 1;
  visibility: visible;
  --fg: white;
}

.menu {
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding: 1.125rem 2rem;
  padding-right: 4rem;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.625rem;

  user-select: none;

  background-color: #f1f3f488;
  backdrop-filter: blur(7px);
  box-shadow: 0px 0px 20px 2px #272f3d44;
}

@media screen and (max-width: 900px) {
  .menu::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(150deg, var(--primary-900), var(--primary));
  }
}

.menu .item {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 0.75rem;
  padding: 0.5rem 0;
  width: 100%;

  font-weight: bold;
  font-size: 20px;

  transition: color 200ms;

  overflow: hidden;
}

.menu .subitems-wrapper {
  overflow: hidden;
  height: 0rem;
  transition: height 200ms;
}
.menu .subitems {
  list-style: none;
  margin: 0.5rem 0 0.75rem;
  padding-left: 1.75rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  width: 100%;

  font-size: 20px;

  transform: translateY(-124px);
  transition: transform 200ms;
}
.menu .subitems a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: color 200ms;
}
.menu .open .subitems-wrapper,
.menu .closed:hover .subitems-wrapper {
  height: 124px;
}
.menu .open .subitems,
.menu .closed:hover .subitems {
  transform: translateY(0);
}

.menu .item.close-button {
  position: fixed;
  z-index: 21;
  top: 1.325rem;
  right: 2rem;
  width: fit-content;
  transform: scale(1.2);
}

.socials {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 0.25rem;
  border-top: 1px solid var(--fg);
}
.socials * {
  flex-grow: 0;
}
:deep(.menu .socials .item svg) {
  height: 17px;
  width: 17px;
  padding: 4px;
  transition: fill 200ms;
}

.menu :deep(.socials .item svg) {
  fill: var(--fg);
}
.menu .material-icons-outlined {
  transition: transform 200ms;
}
.menu .open .item .indicator,
.menu .closed:hover .item .indicator {
  transform: rotate(90deg);
}
.menu .open .item,
.menu .item:hover,
.menu .subitems a:hover,
:deep(.menu .socials .item:hover svg) {
  color: var(--primary);
  fill: var(--primary);
}

@media screen and (min-width: 1000px) {
  nav {
    height: 4rem;
  }
  nav.transparent {
    opacity: 0.4;
  }
  nav:hover {
    opacity: 1 !important;
  }

  .menu {
    position: static;
    width: fit-content;
    height: fit-content;
    transform: translateX(0);
    padding: 0;
    padding-right: 2rem;

    flex-direction: row;
    gap: 1.5rem;

    background-color: transparent;
    color: white;
    backdrop-filter: none;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
  }

  /* Link styling */
  .menu .item,
  .menu .subitems a {
    width: fit-content;
    gap: 0.25rem;

    color: var(--fg);
    font-size: 16px;
    font-weight: 500;

    transition: color 100ms linear;
  }
  .transparent .item,
  .transparent .subitems a {
    color: var(--fg);
  }
  .transparent .socials .item :deep(svg) {
    fill: var(--fg);
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
    position: absolute;
    top: 3.15rem;
    left: -1.5rem;
    padding: 0 2rem 2rem;
    margin: 0 -2rem -2rem;
  }
  .menu .subitems {
    margin-block: 0;
    gap: 0.25rem;
    width: 9rem;
    padding: 1rem 2.5rem 0.75rem 1.5rem;

    background-color: #f1f3f488;
    backdrop-filter: blur(5px) brightness(1.05);
    box-shadow: 0px 0px 20px 2px #272f4044;
    border-radius: 0 0 6px 6px;

    transform: translateY(-150px);
  }
  .menu .subitems a {
    gap: 0.5rem;
  }
  nav.transparent .menu .subitems {
    background-color: transparent;
    backdrop-filter: none;
    box-shadow: none;
  }
  nav.transparent .menu .subitems-wrapper {
    top: 2.5rem;
  }
  .item.close-button {
    display: none;
  }
  .socials {
    padding-top: 0;
    margin-top: 0;
    border-top: none;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import InstagramIcon from "../icons/instagram.vue";
import FacebookIcon from "../icons/facebook.vue";
import YoutubeIcon from "../icons/youtube.vue";

const profilesOpen = ref(false);
const menuOpen = ref(false);

// Scroll behaviour
const navTransparent = ref(true);
const checkScroll = () => {
  if (window.error) {
    return;
  }
  if (navTransparent.value && window.pageYOffset > window.innerHeight - 64)
    navTransparent.value = false;
  else if (
    !navTransparent.value &&
    window.pageYOffset < window.innerHeight - 64
  )
    navTransparent.value = true;
};
onMounted(() => {
  document.addEventListener("scroll", checkScroll);
  setTimeout(() => {
    if (window.error) {
      navTransparent.value = false;
    }
  }, 1);
});
onUnmounted(() => {
  document.removeEventListener("scroll", checkScroll);
});

onMounted(() => {
  if (window.innerWidth < 900) {
    return;
  }
  gsap.from(".stamp, .menu .item", {
    opacity: 0,
    x: -5,
    duration: 0.75,
    ease: "power2.inOut",
    stagger: 0.025,
  });
});
</script>
