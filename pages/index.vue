<template>
  <div>
    <Masthead>
      <!-- .masthead is declared in component -->
      <img class="title" src="/images/ISYF_logo.png" alt="ISYF Logo" />
      <div class="info">
        <h1 class="subtitle">International Science Youth Forum 2024</h1>
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

    <main>
      <section>
        <h2>What is ISYF?</h2>
        <p>
          ISYF 2024 endeavours to inspire delegates to use Science and
          Technology to lead the change into the future by reconnecting,
          reimagining, and looking ahead, to create a better world marked by
          common goals, shared knowledge and global solidarity.
        </p>
        <p>
          The International Science Youth Forum (ISYF) is a prestigious science
          enrichment programme for top research students from all over the
          world, hosted by Hwa Chong Institution’s Student Science Research Club
          (SSRC). The delegates of ISYF will have the opportunity to participate
          in a multitude of exciting and meaningful activities, which include
          intellectual discourse with Nobel laureates and eminent scientists who
          utilise technology and data to make decisions. Delegates will also be
          able to network with peers through collaborative projects and cultural
          exchanges.
        </p>
        <p>We hope to see you at ISYF!</p>

        <h2>What will you get to do?</h2>
        <p>
          At ISYF 2024, you can look forward to Amazing Race, Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat
        </p>

        <Button href="/programme" icon="event_note"
          >See Our Full Programme!</Button
        >
        <Button href="/profiles/speakers" icon="person"
          >Our Invited Speakers</Button
        >
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
          <li>
            <img src="/images/logos/hc_logo.png" alt="">
          </li>
          <li>
            <img src="/images/logos/moe_logo.png" alt="">
          </li>
        </ul>
        
        <p>
          We are also deeply honoured to have the support and help of these
          organisations:
        </p>
        <ul class="supporters">
          <li>
            <img src="/images/logos/ntuias_logo.png" alt="">
          </li>
          <li>
            <img src="/images/logos/nus_logo.png" alt="">
          </li>
          <li>
            <img src="/images/logos/sutd_logo.png" alt="">
          </li>
          <li>
            <img src="/images/logos/astar_logo.png" alt="">
          </li>
          <li>
            <img src="/images/logos/nrf_logo.png" alt="">
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style>
/* ========== MASTHEAD ========== */
.masthead {
  font-family: var(--font-display);
  padding: 4.5rem 1.5rem 5.5rem;
}
.masthead * {
  max-width: 500px;
}
.masthead::before {
  color: var(--bg);
  background-image: url('/images/clocktower.jpg');
  filter: brightness(50%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

.masthead .title {
  height: max(28vh);
  margin-bottom: 1rem;
  margin-inline: 2rem;
}

.masthead .info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex-grow: 0.4;
  flex-basis: 210px;
}

.masthead .subtitle {
  font-family: var(--font-display);
  font-size: min(8vw, 48px);
  margin-block: 0 1.5rem;
  padding: 1.25rem 0.75rem 1rem;
  line-height: 1.25em;

  position: relative;
}
.masthead .subtitle::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(var(--bg-rgb), 0.325);
  backdrop-filter: blur(5px);
  border-radius: 24px;
  transform: skew(-10deg);
}

@media screen and (min-width: 900px) {
  .masthead {
    flex-direction: row;
    padding: 5.5rem 1.5rem;
    justify-content: space-around;
  }
  .masthead * {
    max-width: initial;
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
    padding-top: 5vh;
    gap: 5vh;
    flex-grow: 1.2;
  }
  .masthead .title {
    height: 25vw;
  }
  .masthead .subtitle {
    font-size: min(5vw, 96px);
    padding: 3rem 4rem 2rem;
    margin-right: -15vw;
    padding-right: 15vw;
  }
  .masthead .subtitle::before {
    background: linear-gradient(
      90deg,
      rgba(var(--bg-rgb), 0.325),
      rgba(var(--bg-rgb), 0.05)
    );
    transform: skew(10deg);
  }
}

@media screen and (min-width: 1200px) {
  .masthead .subtitle {
    max-width: 64rem;
  }
}

/* ========== INFORMATIONAL BLOCKS ========== */
.masthead .detail-list {
  display: flex;
  flex-direction: column;
  gap: calc(15vh - 5.5rem);
}
.masthead .description {
  display: none; /* Full display: block */
  font-size: 10px;
  opacity: 0.5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  margin-bottom: 0.325rem;
}
.masthead .value {
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.05rem;
  line-spacing: 0.1rem;
}

.masthead .description::before,
.masthead .description::after {
  display: inline-block;
  content: '';
  height: 1px;
  width: 4rem;
  border-radius: 1px;
  background-color: white;

  position: relative;
  bottom: 3px;
}
.masthead .description::before {
  right: 0.8rem;
}
.masthead .description::after {
  left: 0.5rem;
}

@media screen and (min-width: 900px) {
  .masthead .detail-list {
    margin-left: 4.5rem;
  }
  .masthead .description {
    display: block;
    padding-left: 1rem;
  }
  .masthead .description::before {
    width: 2rem;
  }
  .masthead .description::after {
    width: 2rem;
  }
  .masthead .value {
    font-size: 20px;
  }
}

/* ========== HOVERING DOWN ARROW ========== */
@keyframes down-arrow {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0.75rem);
  }
}
.masthead::after {
  content: '';
  height: 2rem;
  width: 100%;
  position: absolute;
  bottom: 2rem;

  background-image: url('/images/rounded-down-arrow.svg');
  background-position: center;
  background-repeat: no-repeat;

  animation-name: down-arrow;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-play-state: running;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--fg);
}
@media screen and (min-width: 950px) {
  .supporters {
    justify-content: flex-start;
  }
}
.supporters li {
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.supporters span {
  text-align: center;
  text-style: italic;
  font-size: 14px;
  opacity: 0.75;
}
.supporters img {
  width: 10rem;
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
  gsap.from('.masthead .title', {
    opacity: 0,
    y: -200,
    duration: 1,
    delay: 0.25,
    ease: 'power2.inOut',
  });

  gsap.from('.masthead .info *', {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 0.15,
    delay: 0.75,
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
</script>
