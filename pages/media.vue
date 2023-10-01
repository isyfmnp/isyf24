<template>
  <Masthead>
    <h1>ISYF media</h1>
  </Masthead>

  <main>
   <div class="slider">
    <div class="slide-track">
      <!-- 5 slides-->
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>

      <!-- 5 slides double-->
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
      <div class="slide">
        <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"/>
      </div>
    </div>
   </div>
  </main>
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

.slider{
  height: 250px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slide-track{
  display: flex;
  /*change calc to 250px * number of pictures displayed total x2 */
  width: calc(250px * 10);
  animation: scroll 40s linear infinite;
}

.slide-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-250px * 5));
  }
}
.slide{
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px
}

img{
  width: 100%;
  transition: transform 1s;
}

img:hover{
  transform: translateZ(20px)
}

.slider::before,
.slider::after {
  /* first rgba for shadow to be changed*/
  background: linear-gradient(to right, hsl(210, 10%, 92%) 0%, rgba(255,255,255,0) 100%);
  content: '';
  height: 100%;
  position: absolute;
  width: 15%;
  z-index: 2;
}

.slider::before{
  left: 0;
  top:0;
}

.slider::after{
  right: 0;
  top:0;
  transform: rotateZ(180deg);
}
</style>

<script setup>
import PrimaryHighlight from "../components/primaryHighlight.vue";

definePageMeta({
  layout: "masthead",
});

</script>
