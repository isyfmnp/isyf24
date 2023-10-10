<template>
  <div>
    <Masthead>
      <!-- .masthead is declared in component -->
      <img class="logo" src="/icon_light.png" alt="ISYF Logo" />
      <div class="info">
        <div class="detail-list">
          <span class="detail"> 15-19 January 2023 </span>
          <span class="detail"> Hwa Chong Institution (Singapore) </span>
        </div>
        <h1 class="title">International Science Youth Forum 2024</h1>
        <div class="scroll-prompt">
          <span class="material-icons-outlined arrow-down">
            keyboard_double_arrow_down </span
          >Scroll down to learn more!
        </div>
      </div>
    </Masthead>

    <main>
      <section>
        <div>
          <h2>What is ISYF?</h2>
          <p>
            ISYF 2024 endeavours to inspire delegates to use Science and
            Technology to lead the change into the future by reconnecting,
            reimagining, and looking ahead, to create a better world marked by
            common goals, shared knowledge and global solidarity.
          </p>
          <p>
            The International Science Youth Forum (ISYF) is a prestigious
            science enrichment programme for top research students from all over
            the world, hosted by Hwa Chong Institution’s Student Science
            Research Club (SSRC). The delegates of ISYF will have the
            opportunity to participate in a multitude of exciting and meaningful
            activities, which include intellectual discourse with Nobel
            laureates and eminent scientists who utilise technology and data to
            make decisions. Delegates will also be able to network with peers
            through collaborative projects and cultural exchanges.
          </p>
          <p>We hope to see you at ISYF!</p>
        </div>
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
          <li>Be between 16 and 17 years of age in 2023,</li>
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
        </ul>

        <br />

        <p>
          We are also deeply honoured to have the support and help of these
          organisations:
        </p>
        <ul class="supporters">
          <a
            href="https://www.ntu.edu.sg/ias"
            target="_blank"
          >
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
    </main>
  </div>
</template>

<style>
@import url("~/assets/css/cards.css");

/* ========== MASTHEAD ========== */
.masthead {
  font-family: var(--font-display);
  --fg: var(--gray-100);
  overflow: hidden;

  padding: 5rem 1rem 1rem;
  gap: 1rem;

  justify-content: center;
}
.masthead * {
  margin: 0;
}

@media screen and (min-width: 900px) {
  .masthead {
    display: grid;
    grid-template-columns: 1fr 3fr 0.25fr;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;

    padding: 1rem 3rem;
    text-align: left;
  }
  .masthead .logo {
    margin-inline: auto;
  }
}

.masthead::before {
  background-image: url('/images/clocktower.jpg');
  filter: brightness(55%) blur(2px) saturate(1.2);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

.masthead .logo {
  height: min(20vh, 50vw);
  width: min(20vh, 50vw);
  filter: opacity(0.875);
  background-color: var(--bg);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  padding: clamp(0.75rem, 1.5vh, 1.5rem);
}

.masthead .info {
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

.masthead .title {
  font-size: min(10vw, 10vh);
  line-height: 1.125em;
}

.masthead .detail-list {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width: 900px) {
  .masthead .detail-list {
    margin-inline: auto;
  }
}

.masthead .detail {
  display: block;
  padding-block: 0.5rem 0.25rem;

  font-family: var(--font-display);
  font-weight: 600;
  font-size: min(5vw, 22px);
  text-transform: uppercase;
}
.masthead .detail + .detail {
  border-top: 1px solid var(--gray-100);
}

@media screen and (min-width: 900px) {
  .masthead .detail-list {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
  .masthead .detail {
    padding-inline: 0.5rem;
    width: fit-content;
  }
.masthead .detail + .detail {
    border-top: none;
  }
}

.masthead .detail, .scroll-prompt {
  text-shadow: 0 0 20px var(--gray-900);
}

.scroll-prompt {
  font-size: min(2.5vh, 22px);
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
}

/* ========== CONTENT ========== */
.people {
  margin-inline: -100vw;
  padding-inline: 100vw;
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
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}
.supporters > *::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(101%);
  transition: 200ms transform;

  background-color: var(--primary-100);
}
.supporters > *:hover::after {
  transform: translateY(0);
}

.
supporters span {
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
import Masthead from '../components/masthead.vue';
import Button from '../components/button/button.vue';
import PrimaryHighlight from '../components/primaryHighlight.vue';

import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.from('.masthead .logo', {
    opacity: 0,
    y: -100,
    duration: 0.75,
    delay: 0,
    ease: 'power2.inOut',
  });

  gsap.from('.masthead .info *', {
    opacity: 0,
    y: 15,
    duration: 0.5,
    ease: 'power2.inOut',
    stagger: 0.15,
    delay: 0.5,
  });

  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('main section');

  sections.forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: 'power2.inOut',
      scrollTrigger: section,
    });
  });
});

definePageMeta({
  layout: 'masthead',
});
</script>
