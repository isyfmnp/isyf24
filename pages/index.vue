<template>
  <div>
    <Masthead>
      <!-- .masthead is declared in component -->
      <img class="title" src="/images/ISYF_logo.png" alt="ISYF Logo" />
      <div class="info">
        <h2 class="subtitle">International Science Youth Forum 2024</h2>
        <div class="detail-list">
          <div class="detail">
            <span class="description">Date</span>
            <span class="value">15-19 January 2023</span>
          </div>
          <div class="detail">
            <span class="description">Venue</span>
            <span class="value">Hwa Chong Institution (Singapore)</span>
          </div>
        </div>
      </div>
    </Masthead>

    <div class="masthead-space"></div>

    <main>
      <h1>Lorem Ipsum Dolor Sit Amet. Header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h1>Lorem Ipsum Dolor Sit Amet. Header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h1>Lorem Ipsum Dolor Sit Amet. Header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </main>
  </div>
</template>

<style>
/* ========== MASTHEAD ========== */

.masthead::before {
  color: var(--bg);
  background-image: url("/images/clocktower.jpg");
  filter: brightness(50%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}
.masthead-space {
  height: 100vh;
}

.masthead .title {
  font-family: "Josefin Sans", "IBM Plex Sans", sans-serif;
  height: 32vh;
  padding-top: 4vh;
}

.masthead .subtitle {
  font-family: "Josefin Sans", "IBM Plex Sans", sans-serif;
  font-size: 32px;
  margin-block: 4vh;
}

.masthead .detail {
  margin-block: 2vh;
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
}
.masthead .description {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.masthead .value {
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.05rem;
  line-spacing: 0.1rem;
}

@keyframes down-arrow {
  0% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(8px);
  }
}
.masthead::after {
  content: "";
  height: 32px;
  width: 100%;
  position: absolute;
  bottom: 64px;

  background-image: url("/images/rounded-down-arrow.svg");
  background-position: center;
  background-repeat: no-repeat;

  animation-name: down-arrow;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-play-state: running;
}

@media screen and (min-width: 900px) {
  .masthead {
    flex-direction: row;
    gap: min(1vw, 2rem);
  }
  .masthead::before {
    background-position: center;
  }
  .masthead .info {
    text-align: left;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .masthead .title {
    height: 40vh;
  }
  .masthead .subtitle {
    font-size: 72px;
    max-width: 48rem;
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import Masthead from "../components/masthead.vue";
import { gsap } from "gsap";

onMounted(() => {
  console.log("TEST");

  gsap.from(".masthead .info *",{
    opacity: 0,
    y: 10,
    duration: 0.5,
    ease: 'power2.inOut',
    stagger: 0.1,
  });

  gsap.from(".masthead .title", {
    opacity: 0,
    y: -160,
    duration: 1.25,
    delay: 1,
    ease: 'back.inOut'
  })
});
</script>
