<template>
  <div>
    <div class="banner" :class="{normal: bannerNormal}">
      <div class="info">
        <img class="logo" src="/icon_light.png" alt="ISYF Logo" />
        <div class="title-wrapper">
          <h1 class="title">International Science Youth Forum 2024</h1>
          <div class="title2-wrapper">
          <h1 class="title title2" aria-hidden>International Science Youth Forum 2024</h1>
          </div>
        </div>

        <div class="detail-list"> 
          <div class="detail">
            <span class="material-icons-outlined small-icon">
              calendar_month </span
            >8-12 January 2024
          </div>
          <div class="seperator"></div>
          <div class="detail">
            <span class="material-icons-outlined small-icon">
              location_on
            </span>
            Hwa Chong Institution (SG)
          </div>
        </div>
      </div>
      <div class="background"></div>
    </div>

    <div>
      <section>
        <Letter>
          <p class="sign">Dear Student Delegates and Educators,</p>
          <p>
            Welcome to the 16th International Science Youth Forum (ISYF) @
            Singapore, held from 8 to 12 January 2024!
          </p>
          <p>
            ISYF provides a platform for student delegates from around the world
            to share their passion for science, technology and research whilst
            building long-lasting friendships. We hope that you will enjoy the
            lineup of activities meticulously planned by our Organising
            Committee!
          </p>
          <p>
            The theme for this year’s ISYF is: “Science and Technology for
            Humanity: Building a Sustainable Future”. In a world challenged by
            climate change and worsening disparities, mankind looks to the
            potential of science and technology in resolving pressing global
            issues. Through ISYF, we hope that delegates will consider the role
            of science and technology in driving sustainable and inclusive
            development, and be inspired to be the change they want to see.
          </p>
          <p>
            The Organising Committee of ISYF 2024 looks forward to meeting you
            and we hope that you will have a fruitful time in Singapore!
          </p>
          <p class="sign">
            Warmest regards, <br />
            Ling Jun Quan and Nguyen Chi Mai <br />
            Co-Chairpersons <br />
            ISYF 2024 Student Organising Committee <br />
          </p>
        </Letter>
      </section>

      <section>
        <div>
          <h2>What will you get to do?</h2>
          <p>
            At ISYF 2024, you can look forward to Amazing Race, Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat
          </p>

          <p>[Brief synposis of Programme]</p>

          <Button href="/programme" icon="event_note"
            >See Our Full Programme!</Button
          >
          <Button href="/profiles/speakers" icon="person"
            >Our Invited Speakers</Button
          >
        </div>
      </section>

      <section class="colored people">
        <h2>How can you join?</h2>

        <h3>For Students</h3>
        <p>
          This forum invites top science students from schools around the world.
          They should:
        </p>
        <ul>
          <li>Be between 16 and 17 years of age in 2024,</li>
          <li>Be within the top tier of their respective Science cohorts,</li>
          <li>
            Have substantial experience in science research or competitions,
          </li>
          <li>Possess good oral proficiency in English, and</li>
          <li>
            Possess enthusiasm and strong interest in forging ties with fellow
            students from all over the world.
          </li>
        </ul>

        <h3>For Educators</h3>
        <p>
          In addition to the students' activities, the educators' programme
          provides opportunities for the educators to share, interact with and
          learn from one another. To ensure that the educator benefits fully
          from the experience, the educator should:
        </p>
        <ul>
          <li>Possess good oral proficiency in English, and</li>
          <li>
            Possess enthusiasm and strong interest in forging ties with fellow
            educators.
          </li>
        </ul>
      </section>

      <section>
        <h2>Who are the organisers?</h2>
        <p>
          ISYF is hosted and organised by Hwa Chong Institution’s very own
          Student Science Research Club (SSRC), with the support of the Ministry
          of Education (MOE).
        </p>
        <ul class="supporters">
          <a href="https://www.hci.edu.sg" target="_blank">
            <img src="/images/logos/hc_logo.png" alt="" />
          </a>
          <a href="https://www.moe.gov.sg" target="_blank">
            <img src="/images/logos/moe_logo.png" alt="" />
          </a>
          <div class="null"></div>
          <div class="null"></div>
          <div class="null"></div>
        </ul>

        <br />

        <p>
          We are also deeply honoured to have the support and help of these
          organisations:
        </p>
        <ul class="supporters">
          <a href="https://www.ntu.edu.sg/ias" target="_blank">
            <img src="/images/logos/ntuias_logo.png" alt="" />
          </a>
          <a href="https://nus.edu.sg" target="_blank">
            <img src="/images/logos/nus_logo.png" alt="" />
          </a>
          <a href="https://sutd.edu.sg" target="_blank">
            <img src="/images/logos/sutd_logo.png" alt="" />
          </a>
          <a href="https://a-star.edu.sg" target="_blank">
            <img src="/images/logos/astar_logo.png" alt="" />
          </a>
          <a href="https://www.nrf.gov.sg" target="_blank">
            <img src="/images/logos/nrf_logo.png" alt="" style="scale: 0.8" />
          </a>
        </ul>
      </section>
    </div>
  </div>
</template>

<style>
.content {
  margin-top: 3.5rem !important;
}
</style>

<style scoped>
@import url('~/assets/css/cards.css');

.banner {
  display: block;
  margin-inline: calc(50% - 50vw);
  margin-bottom: 8rem;
  height: calc(95vh - 3.5rem);

  --fg: var(--gray-950);

  --info-width: 30rem;
  --bg-info-width: 80vw;
  --info-padding: 3rem;

  --trn-time: 1s;
  --trn-func: cubic-bezier(.75,0,.175,1);

  display: grid;
  transition: grid-template-columns var(--trn-time) var(--trn-func);
  grid-template-columns: calc(var(--bg-info-width) + 2 * var(--info-padding)) 1fr;
  border-bottom: 5px solid var(--primary);
}
.banner.normal {
  --bg-info-width: var(--info-width);
}
.background {
  background-image: url('/images/clocktower-6.jpeg');
  filter: brightness(.7);
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.banner .info {
  padding: var(--info-padding);
  margin-top: var(--info-padding);
}
.banner .logo {
  height: 200px;
  width: 200px;
}
.banner .title-wrapper {
  position: relative;
  margin-right: calc(100% - 100vw + 2rem);
}
.banner .title {
  padding-right: 2rem;
  font-size: 96px;
  max-width: 90rem;
}
.banner .title2 {
  color: var(--gray-100);
  margin-block: 0;
  margin-left: calc((var(--bg-info-width) + var(--info-padding)) * -1);
  transition: margin-left var(--trn-time) var(--trn-func);
  filter: drop-shadow(2px 2px 7px hsla(var(--gray-900-hsla), 0.25));
}
.banner .title2-wrapper {
  position: absolute;
  top: 0;
  overflow: hidden;
  left: calc(var(--bg-info-width) + var(--info-padding));
  transition: left var(--trn-time) var(--trn-func);
}

.banner .detail-list {
  width: var(--info-width);
  display: inline-flex;
  justify-content: space-evenly;
  border: 1px solid var(--fg);
  border-radius: 4px;
}
.banner .detail-list .detail {
  font-weight: 500;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.375rem;
}
.banner .detail-list .seperator {
  width: 1px;
  background-color: var(--fg);
}
.small-icon {
  color: var(--primary);
  font-size: 20px;
}

/*
/* ========== banner ========== 
.banner {
  --fg: var(--gray-100);
  overflow: hidden;

  padding: 5rem 1rem 1rem;
  gap: 1rem;

  justify-content: center;
}
.banner * {
  margin: 0;
  border: 1px dotted red;
}

@media screen and (min-width: 900px) {
  .banner {
    display: grid;
    grid-template-columns: 1fr 3fr 0.25fr;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;

    padding: 1rem 3rem;
    text-align: left;
  }
  .banner .logo {
    margin-inline: auto;
  }
}

.banner::before {
  background-image: url("/images/clocktower.jpg");
  filter: brightness(55%) blur(2px) saturate(1.2);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

.banner .logo {
  height: min(20vh, 50vw);
  width: min(20vh, 50vw);
  filter: opacity(0.875);
  background-color: var(--bg);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  padding: clamp(0.75rem, 1.5vh, 1.5rem);
}

.banner .info {
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

.banner .title {
  font-size: 48px;
  line-height: 1.125em;
}

.banner .detail-list {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width: 900px) {
  .banner .detail-list {
    margin-inline: auto;
  }
}

.banner .detail {
  display: block;
  padding-block: 0.5rem 0.25rem;

  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
}

@media screen and (min-width: 900px) {
  .banner .detail-list {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
  .banner .detail {
    padding-inline: 0.5rem;
    width: fit-content;
  }
  .banner .detail + .detail {
    border-top: none;
  }
}

.banner .detail,
.scroll-prompt {
  text-shadow: 0 0 20px var(--gray-900);
}

.scroll-prompt {
  font-size: 22px;
  font-weight: bold;
  display: flex;
  margin-inline: auto;
  align-items: center;
  gap: 0.5rem;
}
@media screen and (min-width: 900px) {
  .scroll-prompt {
    margin-inline: 0;
  }
}
@keyframes arrow-bob {
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.825;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateY(5px);
    opacity: 0;
  }
}
.arrow-down {
  animation-name: arrow-bob;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}/*

/* ========== CONTENT ========== */
.sign {
  font-style: italic;
}

.people {
  margin-inline: calc(50% - 50vw);
  padding-inline: calc(50vw - 50%);
  background-color: var(--primary-50);
}

/* ========== SUPPORTING ORGANISATIONS ========== */
.supporters {
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  place-items: center;

  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--fg);
}
@media screen and (min-width: 950px) {
  .supporters {
    justify-content: flex-start;
  }
}
.supporters > * {
  display: grid;
  place-items: center;
  width: 10rem;
  padding-inline: 1.5rem;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.supporters .null {
  height: 0;
  padding: 0;
}
.supporters > *::before {
  content: 'open_in_new';
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  font-family: 'Material Icons Outlined';
  color: var(--bg);
  background-color: var(--primary);
  padding: 0.25rem;
  border-radius: 4px;

  transform: translateX(3rem);
  transition: 200ms transform;
}
.supporters > *::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  transform: translateY(101%);
  transition: 200ms transform;

  background-color: var(--primary-100);
}
.supporters > .null::after {
  content: none;
}
.supporters > *:hover::before {
  transform: translateX(0);
}
.supporters > *:active::before {
  transform: scale(1.2);
}
.supporters > *:hover::after {
  transform: translateY(0);
}
.supporters > *:active::after {
  background-color: var(--primary-200);
}

. supporters span {
  text-align: center;
  text-style: italic;
  font-size: 14px;
  opacity: 0.75;
}
.supporters img {
  width: 100%;
}
</style>

<script setup>
import {onMounted} from 'vue';
import banner from '../components/masthead.vue';
import Button from '../components/button/button.vue';
import PrimaryHighlight from '../components/primaryHighlight.vue';
import Letter from '../components/letter.vue';

import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { ref } from "vue";

const bannerNormal = ref(false)

onMounted(() => {
  setTimeout(() => {
    window.banner = false;
  }, 1);

  bannerNormal.value = true;

  /*gsap.from('.banner .logo', {
    opacity: 0,
    y: -100,
    duration: 0.75,
    delay: 0,
    ease: 'power2.inOut',
  });

  gsap.from('.banner .info > *', {
    opacity: 0,
    y: 15,
    duration: 0.5,
    ease: 'power2.inOut',
    stagger: 0.15,
    delay: 0.5,
  });*/
});

definePageMeta({});
</script>
