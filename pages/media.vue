<template>
  <Masthead>
    <h1>ISYF Media</h1>
  </Masthead>

  <main>
    <section class="live-pictures">
      <div class="days">
        <button
          class="day"
          :class="{selected: day == currentDay}"
          :style="{ '--day': currentDay }"
          v-for="day in totalDays"
          @click="currentDay = day"
        >
          Day {{ day }}
        </button>
      </div>

      <div class="slider">
        <div class="slide-track">
          <!-- 5 slides-->
          <img class="slide" src="https://picsum.photos/seed/301/400/300" />
          <img class="slide" src="https://picsum.photos/seed/302/400/300" />
          <img class="slide" src="https://picsum.photos/seed/303/400/300" />
          <img class="slide" src="https://picsum.photos/seed/304/400/300" />
          <img class="slide" src="https://picsum.photos/seed/305/400/300" />

          <!-- 5 slides double-->
          <img class="slide" src="https://picsum.photos/seed/301/400/300" />
          <img class="slide" src="https://picsum.photos/seed/302/400/300" />
          <img class="slide" src="https://picsum.photos/seed/303/400/300" />
          <img class="slide" src="https://picsum.photos/seed/304/400/300" />
          <img class="slide" src="https://picsum.photos/seed/305/400/300" />
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.masthead::before {
  color: var(--bg);
  background-image: url('/images/mediabg.webp');
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}
#body#body {
  max-width: none;
}
</style>

<style scoped>
.live-pictures {
  border-radius: 8px;
  border: 1px solid var(--fg);
  overflow: hidden;
}

.days {
  --tab-width: 7rem;

  position: relative;
  display: flex;
  height: 3.75rem;
  width: fit-content;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;

  font-family: var(--font-display);
  font-weight: bold;
  font-size: 24px;
  color: var(--gray-300);

  border-right: 1px solid var(--fg);
}

.day {
  transition: color 100ms;
  position: relative;
  height: 100%;
  width: var(--tab-width);
}
.day:hover {
  color: var(--primary);
}
.day.selected {
  color: var(--primary);
}
.day:first-of-type::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: var(--primary-100);
  border-radius: 4px 4px 2px 2px;
}
.day:first-of-type::after {
  content: '';
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% - 3px);
  height: 3px;
  border-radius: 2px;
  background-color: var(--primary);
}
.day:first-of-type::before, .day:first-of-type::after {
  transform: translateX(calc((var(--day) - 1) * var(--tab-width)));
  transition: transform 100ms;
}

/*
*
*
*
*/

.slider {
  --height: max(20vw, 30vh);
  height: var(--height);
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  
  border-top: 1px solid var(--fg);
  background-color: var(--gray-200);
}

.slide-track {
  display: flex;
  /*change calc to 250px * number of pictures displayed total x2 */
  height: 100%;
  width: fit-content;
  /*animation: scroll 10s linear infinite;*/
  transition: 100ms animation-play-state;
}

.slide-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

img.slide {
  height: 100%;
  object-fit: contain;
  transition: transform 1s;
  position: relative;
  border-inline: 1px solid var(--fg);
}
</style>

<script setup>
import {ref} from 'vue';

const totalDays = 5;
const currentDay = ref(1);

definePageMeta({
  layout: 'masthead',
});
</script>
