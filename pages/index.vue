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

    <main>
      <section>
        <h1>
          Science and Technology for Humanity: Building a Sustainable Future
        </h1>
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
      </section>

      <section>
        <h1>Events</h1>
        <p>
          At ISYF 2024, you can look forward to Amazing Race, Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat
        </p>

        <Button href="#" icon="east">See Our Full Programme!</Button>
        <Button href="#">Our Invited Speakers</Button>
      </section>

      <section>
        <h1>How can you join?</h1>
        <p>
          Participation in ISYF is via invitation to selected schools across the
          globe.
        </p>
        <p>
          The programme targets top science students from schools all over the
          world. Student participants from each school should meet the following
          criteria:
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
      </section>

      <section>
        <h1>Lorem Ipsum Dolor Sit Amet. Header</h1>
        <p>
          ISYF is hosted and organised by Hwa Chong Institution’s very own
          Student Science Research Club (SSRC). Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <p>
          We are also deeply honoured to have the support and help of these
          organisations:
        </p>
      </section>
    </main>
  </div>
</template>

<style>
/* ========== MASTHEAD ========== */

.masthead::before {
  color: var(--bg);
  background-image: url("/images/clocktower.jpg");
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

.masthead .info {
  margin-bottom: 2rem;
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
  bottom: 3rem;

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
import Button from "../components/button/button.vue";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.from(".masthead .info *", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.1,
    delay: 0.5,
  });

  gsap.from(".masthead .title", {
    opacity: 0,
    y: -200,
    duration: 1.5,
    delay: 1.5,
    ease: "power2.inOut",
  });

  gsap.registerPlugin(ScrollTrigger)

  const sections = gsap.utils.toArray('main section');

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: section
    })
  })
});
</script>
