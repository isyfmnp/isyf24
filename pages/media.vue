<template>
  <div>
    <Masthead>
      <h1>ISYF Media</h1>
    </Masthead>

    <main>
      <div
        class="picture-viewer-wrapper"
        :class="{shown: viewerShown}"
        @click="viewerShown = false"
      >
        <button
          class="controls picture-back"
          @click.stop="adjustPhotoIndex(-1)"
          :class="{enabled: getPhotoOffsetAvailable(-1)}"
        >
          <span class="material-icons-outlined"> chevron_left </span>
        </button>
        <img
          id="picture"
          :style="{height: photoHeight + 'px', width: photoWidth + 'px'}"
          :src="photos[currentDay - 1][currentPhotoId]"
          @click.stop=""
        />
        <button
          class="controls picture-forwards"
          @click.stop="adjustPhotoIndex(1)"
          :class="{enabled: getPhotoOffsetAvailable(1)}"
        >
          <span class="material-icons-outlined"> chevron_right </span>
        </button>
      </div>

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
          <div class="slide" v-for="(link, photoId) in photos[currentDay - 1]">
            <img :src="link" @click="showImage(photoId)" />
          </div>
        </div>
      </section>
    </main>
  </div>
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
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(13vw, 12rem, 40vw), 1fr)
  );

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
  transition: filter 200ms;
}
.slide img:hover {
  filter: brightness(0.8);
}

/*
*
*
*
*/

.picture-viewer-wrapper {
  position: fixed;
  inset: 0;
  background-color: #000000dd;
  z-index: 200;
  display: grid;
  place-items: center;

  opacity: 0;
  visibility: hidden;
  transition: 200ms opacity, 200ms visibility;
}
.picture-viewer-wrapper.shown {
  opacity: 1;
  visibility: visible;
}
.picture-viewer {
  width: 100%;
  height: 100%;
}
#picture {
  border-radius: 8px;
  border: 1px solid var(--bg);
  box-sizing: border-box;
}

.controls {
  position: absolute;
  --fg: var(--bg);
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  border: 1px solid var(--gray-100);
  display: grid;
  place-items: center;
  touch-action: manipulation;

  background-color: var(--gray-400);
}
.controls.enabled {
  background-color: var(--primary);
}
@media screen and (max-width: 600px) {
  .picture-back,
  .picture-forwards {
    bottom: 4rem;
  }
  .picture-back {
    left: calc(50vw - 6rem);
  }
  .picture-forwards {
    right: calc(50vw - 6rem);
  }
}
@media screen and (min-width: 600px) {
  .picture-back {
    left: max(calc(5vw - 2rem), 0.75rem);
  }
  .picture-forwards {
    right: max(calc(5vw - 2rem), 0.75rem);
  }
}
</style>

<script setup>
import {ref, watch, onMounted, onUnmounted} from 'vue';

const totalDays = 5;
const currentDay = ref(1);

const viewerShown = ref(false);
const currentPhotoId = ref(0);
const photoWidth = ref(0);
const photoHeight = ref(0);

function showImage(pictureId) {
  currentPhotoId.value = pictureId;
  viewerShown.value = true;
  setTimeout(resizePhoto, 1);
}
function getPhotoOffsetAvailable(offset) {
  return (
    currentPhotoId.value + offset >= 0 &&
    currentPhotoId.value + offset <= photos[currentDay.value - 1].length - 1
  );
}
function adjustPhotoIndex(offset) {
  //Should only be 1 or -1
  if (!getPhotoOffsetAvailable(offset))
    return
  currentPhotoId.value = currentPhotoId.value + offset
  setTimeout(resizePhoto, 1);
}

onMounted(() => window.addEventListener('resize', resizePhoto));
onUnmounted(() => window.removeEventListener('resize', resizePhoto));
watch(currentPhotoId, setTimeout(resizePhoto, 10));
function resizePhoto() {
  const img = document.querySelector('#picture');
  const height = img.naturalHeight;
  const width = img.naturalWidth;
  const scale = Math.min(
    (window.innerHeight * 0.9) / height,
    (window.innerWidth * 0.9) / width,
  );
  photoHeight.value = height * scale;
  photoWidth.value = width * scale;
}

const photos = [
  [
    'https://picsum.photos/seed/301/2500/1500',
    'https://picsum.photos/seed/302/2000/1500',
    'https://picsum.photos/seed/303/2000/1500',
    'https://picsum.photos/seed/304/2000/1500',
    'https://picsum.photos/seed/305/2000/1500',
    'https://picsum.photos/seed/306/2000/1500',
    'https://picsum.photos/seed/307/2000/1500',
    'https://picsum.photos/seed/308/2000/1500',
    'https://picsum.photos/seed/309/2000/1500',
    'https://picsum.photos/seed/310/2000/1500',
    'https://picsum.photos/seed/311/2000/1500',
    'https://picsum.photos/seed/312/2000/1500',
    'https://picsum.photos/seed/313/2000/1500',
    'https://picsum.photos/seed/314/2000/1500',
    'https://picsum.photos/seed/315/2000/1500',
    'https://picsum.photos/seed/316/2000/1500',
    'https://picsum.photos/seed/317/2000/1500',
    'https://picsum.photos/seed/318/2000/1500',
    'https://picsum.photos/seed/319/2000/1500',
    'https://picsum.photos/seed/320/2000/1500',
  ],
  [
    'https://picsum.photos/seed/301/2500/1500',
    'https://picsum.photos/seed/302/2500/1500',
  ],
  [],
  [],
  [],
];

definePageMeta({
  layout: 'masthead',
});
</script>
