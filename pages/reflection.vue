<template>
  <div>
    <Masthead>
      <h1>Reflection</h1>
    </Masthead>

    <main
      style="
        background-image: linear-gradient(
          #5c3a92,
          #8a64d6,
          #729efd,
          #3acadf,
          #0cead9,
          var(--gray-100)
        );
      "
    >
      <!--var(--purple), var(--primary-200), var(--primary-100), var(--gray-100)-->
      <section>
        <div
          style="
            position: relative;
            width: 100%;
            min-height: 300px;
            display: block;
          "
        >
          <div class="custom-shape-divider-top-1687544512">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        <div
          style="
            position: relative;
            width: 100%;
            min-height: 500px;
            display: block;
          "
        >
          <div class="title-left">
            <span class="title-text">Day 1</span>
          </div>
          <div class="slideshow-container">
            <template v-for="item in photos_1">
              <div class="mySlides fade" style="display: block">
                <img :src="item" style="" />
                <div class="text">Caption Text</div>
              </div>
            </template>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
        </div>

        <div
          style="
            position: relative;
            width: 100%;
            min-height: 500px;
            display: block;
          "
        >
          <div class="title-right">
            <span class="title-text">Day 2</span>
          </div>
        </div>

        <div
          style="
            position: relative;
            width: 100%;
            min-height: 500px;
            display: block;
          "
        >
          <div class="title-left">
            <span class="title-text">Day 3</span>
          </div>
        </div>

        <div
          style="
            position: relative;
            width: 100%;
            min-height: 500px;
            display: block;
          "
        >
          <div class="title-right">
            <span class="title-text">Day 4</span>
          </div>
        </div>

        <div
          style="
            position: relative;
            width: 100%;
            min-height: 500px;
            display: block;
          "
        >
          <div class="title-left">
            <span class="title-text">Day 5</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.masthead::before {
  color: var(--bg);
  background-image: url("/images/mediabg.webp");
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

#body#body {
  max-width: none;
  padding-left: 0;
  padding-right: 0;
}

.custom-shape-divider-top-1687544512 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1687544512 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-top-1687544512 .shape-fill {
  fill: var(--gray-100);
}
</style>

<style scoped>
.title-left {
  display: block;
  position: absolute;
  left: 0;
  width: 400px;
  height: 75px;
  background-color: var(--primary-100);
  margin-right: 70%;
  clip-path: polygon(0% 0%, 370px 0%, 400px 50%, 370px 100%, 0% 100%);
  float: left;
}
.title-right {
  display: block;
  position: absolute;
  right: 0;
  width: 400px;
  height: 75px;
  background-color: var(--primary-100);
  margin-left: 70%;
  clip-path: polygon(30px 0%, 100% 0%, 100% 100%, 30px 100%, 0% 50%);
  float: right;
}

.title-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-weight: bold;
  font-size: 40px;
}

* {
  box-sizing: border-box;
}

/* Slideshow container */
.slideshow-container {
  max-width: 70%;
  height: 450px;
  position: relative;
  margin-top: auto;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  left: 0;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  right: 0;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const photos_1 = [
  "https://picsum.photos/seed/301/2500/1500",
  "https://picsum.photos/seed/302/2000/1500",
  "https://picsum.photos/seed/303/2000/1500",
  "https://picsum.photos/seed/304/2000/1500",
  "https://picsum.photos/seed/305/2000/1500",
  "https://picsum.photos/seed/306/2000/1500",
  "https://picsum.photos/seed/307/2000/1500",
  "https://picsum.photos/seed/308/2000/1500",
  "https://picsum.photos/seed/309/2000/1500",
  "https://picsum.photos/seed/310/2000/1500",
  "https://picsum.photos/seed/311/2000/1500",
  "https://picsum.photos/seed/312/2000/1500",
];
definePageMeta({
  layout: "masthead",
});
</script>
