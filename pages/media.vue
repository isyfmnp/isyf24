<template>
  <Masthead>
    <h1>ISYF Media</h1>
  </Masthead>

  <main>
    <section class="live-pictures">
      <div class="days-wrapper-wrapper">
        <div class="days-wrapper">
          <div class="days">
            <button
              class="day"
              :class="{selected: day == currentDay}"
              :style="{'--day': currentDay}"
              v-for="day in totalDays"
              @click="currentDay = day"
            >
              Day {{ day }}
            </button>
          </div>
        </div>
      </div>
      <div class="slider">
        <div class="slide" v-for="link in photos[currentDay-1]">
          <img :src="link" />
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
}

.days-wrapper-wrapper {
  position: sticky;
  top: 3.5rem;
  width: calc(100% + 2px);
  z-index: 10;
  background-color: var(--bg);
  margin: -1px;
  margin-top: calc(-0.5rem - 1px);
  padding-top: 0.75rem;
}
.days-wrapper {
  border: 1px solid var(--fg);
  background-color: none;
  border-radius: 8px 8px 0 0;
  overflow-x: scroll;
}
.days {
  --tab-width: 7rem;

  display: flex;
  height: 3rem;
  width: fit-content;
  justify-content: center;
  align-items: center;

  font-family: var(--font-display);
  font-weight: bold;
  font-size: 24px;
  color: var(--gray-300);
  border-radius: 8px 8px 0 0;
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
.day:first-of-type::before,
.day:first-of-type::after {
  transform: translateX(calc((var(--day) - 1) * var(--tab-width)));
  transition: transform 100ms;
}

/*
*
*
*
*/

.slider {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(clamp(13vw, 12rem, 40vw), 1fr));

  border-radius: 0 0 8px 8px;
  border-top: 1px solid var(--fg);
  --clr-1: var(--primary-900);
  --clr-2: var(--primary-950);
  --stripe-width: 8px;
  background-image: repeating-linear-gradient(
    -45deg,
    var(--clr-1),
    var(--clr-1) var(--stripe-width),
    var(--clr-2) var(--stripe-width),
    var(--clr-2) calc(var(--stripe-width) * 2)
  );
}

.slide {
  width: 100%;
  transition: transform 1s;
  position: relative;
}
.slide img {
  object-fit: contain;
  width: 100%;
  max-height: 16rem;
  margin-bottom: -4px;
}
</style>

<script setup>
import {ref} from 'vue';

const totalDays = 5;
const currentDay = ref(1);

const photos = [
  [
    'https://picsum.photos/seed/301/500/300',
    'https://picsum.photos/seed/302/400/300',
    'https://picsum.photos/seed/303/400/300',
    'https://picsum.photos/seed/304/400/300',
    'https://picsum.photos/seed/305/400/300',
    'https://picsum.photos/seed/306/400/300',
    'https://picsum.photos/seed/307/400/300',
    'https://picsum.photos/seed/308/400/300',
    'https://picsum.photos/seed/309/400/300',
    'https://picsum.photos/seed/310/400/300',
    'https://picsum.photos/seed/311/400/300',
    'https://picsum.photos/seed/312/400/300',
    'https://picsum.photos/seed/313/400/300',
    'https://picsum.photos/seed/314/400/300',
    'https://picsum.photos/seed/315/400/300',
    'https://picsum.photos/seed/316/400/300',
    'https://picsum.photos/seed/317/400/300',
    'https://picsum.photos/seed/318/400/300',
    'https://picsum.photos/seed/319/400/300',
    'https://picsum.photos/seed/320/400/300',
  ],
  [
    'https://picsum.photos/seed/301/500/300',
    'https://picsum.photos/seed/301/500/300',
  ],
  [],
  [],
  [],
];

definePageMeta({
  layout: 'masthead',
});
</script>
