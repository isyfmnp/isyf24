<template>
  <h1>Programme Outline</h1>
  <p>
    Wondering what you'll be doing for 5 days? Here's a brief introduction to
    all the wonderful activities we have planned for you!
  </p>

  <main class="programme">
    <div class="timeline-wrapper">
      <Timeline />
    </div>

    <div class="condensed-timeline">
      <ul>
        <li class="event-day" v-for="(dayTitle, dayIndex) in days">
          <h2>
            {{ dayTitle }}
          </h2>
          <ul>
            <li class="event-details" v-for="event in events[dayIndex]" :class="{ highlight: event.highlight }">
              <div class="event-title">
                <span class="time">{{ event.time }}</span>
                <h3 class="name">{{ event.name }}</h3>
              </div>
              <img
                v-if="event.image"
                :src="event.image"
                :alt="'Image for ' + event.name"
              />
              <p v-if="event.description">{{ event.description }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<style></style>

<style scoped>
:global(.masthead::before) {
  color: var(--bg);
  background-image: url('/images/progbg.webp');
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}
@media screen and (max-width: 800px) {
  :global(.masthead h1) {
    font-size: 64px;
  }
}
ul {
  list-style: none;
  padding-left: 0;
}

/* ========== OVERALL BOX STYLING ========== */
.programme {
  margin-bottom: 50vh; /* Prevent clash between last box and footer coloring */
  width: 100%;
  overflow: visible;
}

.timeline-wrapper {
  margin-block: 3rem;
  margin-inline: max(calc(-50vw + 1.5rem + 50%), -8rem);
}

/* ========== TIMELINE ========== */
.event-day h2 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 26px;
  font-style: italic;
  width: fit-content;
  margin-block: 2rem 3rem;
}
.event-day h3 {
  font-weight: 600;
  font-style: normal;
  font-family: var(--font-display);
  margin-block: 0;
  line-height: 1.5rem;
}

/* DAY HEADER BACKGROUND */
.event-day h2::after {
  content: '';
  z-index: -10;
  position: absolute;
  right: -15vw;
  left: -100vw;
  top: -1rem;
  bottom: -0.75rem;

  border: 1px solid var(--gray-500);
  border-radius: 16px;
  background-color: var(--primary);
  color: var(--gray-900);
}
.event-day:nth-of-type(even) h2::after {
  background-color: hsla(var(--primary-200-hsla), 0.125);
}
.event-day:nth-of-type(odd) h2::after {
  background-color: hsla(var(--primary-200-hsla), 0.25);
}

@media screen and (min-width: 900px) {
  .event-day h2 {
    margin-block: 2rem;
  }
  .event-day h2::after {
    top: -1rem;
    bottom: -0.75rem;
  }
}

.event-day {
  margin: 0 calc(50% - 50vw);
  padding: 1rem calc(50vw - 50%);
  color: var(--fg);
  --cl: var(--primary);
  --fg-2: var(--gray-700);
  --bg-2: var(--gray-200);
  position: relative;
}
.event-day:nth-of-type(even) {
  --fg: var(--gray-100);
  --fg-2: var(--gray-300);
  --bg: var(--gray-900);
  --bg-2: var(--gray-800);
  --cl: var(--primary-400);
}
.event-day:nth-of-type(even)::after {
  content: '';
  z-index: -50;
  position: absolute;
  inset: 0;
  background-color: var(--gray-900);
}

.event-details {
  margin-block: 1rem 1rem;
}
.event-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 30;

  gap: 0.125rem;
  margin-block: 0.5rem 0.5rem;
}

.time {
  display: block;
  font-weight: 300;
  font-size: 16px;
  white-space: nowrap;
  font-family: var(--font);
  padding-right: 1rem;
  color: var(--gray-400);

  flex-shrink: 0;
}
.event-details p {
  font-size: 15px;
  margin-block: 0.375rem;
  color: var(--fg-2);
  line-height: 1.375em;
}

.highlight {
  background-color: var(--bg-2);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  margin-left: -0.375rem;
}


/* TIMELINE EFFECT */
.event-day {
  --tm-radius: 2rem;
  margin-left: calc(-100vw - 3.25rem + 5vw);
  padding-left: calc(100vw + var(--tm-radius) * 2 + 1px - 0.5rem);
  position: relative;
}
.event-day:first-of-type::before {
  top: 4rem;
}
.event-day:last-of-type::before {
  bottom: 14rem;
}
@media screen and (min-width: 370px) {
  .event-day:last-of-type::before {
    bottom: 13rem;
  }
}
@media screen and (min-width: 900px) {
  .event-day:last-of-type::before {
    bottom: 11rem;
  }
}
.event-day::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(100vw + var(--tm-radius));
  width: 2px;

  background-color: var(--cl);
}
.event-day h2,
.event-day .event-title {
  position: relative;
}
.event-day h2::before,
.event-day h3::before {
  content: '';
  position: absolute;
  display: block;
  border-radius: 50%;
}
.event-day h2::before {
  background-color: var(--cl);
  left: calc(-3rem - 1px + 0.5rem);
  top: calc(50% - 1rem);
  width: 2rem;
  height: 2rem;
}
.event-day h3 {
  position: relative;
}
.event-day h3::before {
  box-sizing: border-box;
  border: 1px solid var(--fg);
  background-color: var(--bg); 
  left: -2.125rem;
  top: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
}
.highlight h3::before {
  border: 2px solid var(--cl);
  background-color: var(--cl);
  left: -2.5rem;
}


@media screen and (min-width: 900px) {
  .event-day h2 {
    display: block;
    width: fit-content;
  }
}
</style>

<script setup>
import Timeline from '../components/timeline.vue';
import {onMounted} from 'vue';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  const sections = gsap.utils.toArray(".event-details");

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.inOut",
      scrollTrigger: section,
    });
  });
})

const days = [
  'Day 0 (7 Jan)',
  'Day 1 (8 Jan)',
  'Day 2 (9 Jan)',
  'Day 3 (10 Jan)',
  'Day 4 (11 Jan)',
  'Day 5 (12 Jan)',
];

const events = [
  [
    // Day 0
    {
      name: 'Arrival of Delegates',
      description: 'Welcome to Singapore!',
    },
  ],
  [
    // Day 1
    {
      name: 'School Assembly',
      time: '7:30 AM',
    },
    {
      name: 'Programme Briefing',
      time: '9 AM',
    },
    {
      name: "Team Bonding Activities",
      time: '10 AM'
    },
    {
      name: 'Singapore Discovery Trail',
      time: 'TB AM - TB AM',
      highlight: true,
      description:
        'From the phenomenal urban landscape to the lush nature in Singapore’s parks, adventure awaits! On the Singapore Discovery Trail, delegates will be able to explore key attractions in Singapore while completing challenges and tasks throughout their journey. The trail will also allow delegates to gain a deeper understanding of Singapore’s traditions and cultures while immersing in the wonders of this garden city.',
    },
    {
      name: 'Dinner',
      time: '6 PM - 7 PM',
    },
    {
      name: "Science Activity",
      time: "7 PM - 8:30 PM",
      highlight: true,
      description: "MISSING"
    }
  ],
  [
    // Day 2
    {
      name: "Introduction to Nanoworld @ NUS Singapore",
      time: '10 AM - 12 PM',
      highlight: true,
      description:
        "Wonder what happens when you zoom in, in and in? Want to discover intriguing properties of matter at the nanoscale? Look no further! QnA, demonstrations and interactive activities… Get ready to be wowed the friendly and brilliant Professor Sow from the National University of Singapore! You'll be kept at the edge of your seat as you delve into the nanoworld together with your friends, exploring current and future applications of nanotechnology with this fun-filled lecture. ",
    },
    {
      name: 'Lunch at NUS',
      time: '12:15 PM - 1:15 PM',
    },
    {
      name: 'Science Quest @ Science Centre Singapore',
      time: '2 PM - 5 PM',
      highlight: true,
      description:
        'Is it a bird? Is it a plane? No, it’s the inaugural Science Quest! Through Science Quest, delegates will have the opportunity to head out to various attractions around Singapore, unlocking the wonders of Science and learning firsthand how it is applied in daily life. Get ready to be captivated by interactive displays on various scientific topics and an engaging experience!',
    },
    {
      name: 'Dinner',
      time: '6 PM - 7 PM',
    },
    {
      name: 'Cultural Hour I',
      time: '7 PM - 8 PM',
      highlight: true,
      description:
        'As the night unfolds, witness mesmerising performances, from dances to stories, each a window into a different country. The Cultural Hour and Exhibition provides the opportunity for delegates to showcase their unique history, culture and customs! Through this, delegates will be able to traverse the global village, better understand each others’ cultures, and view the world from a global perspective.',
    },
  ],
  [
    // Day 3
    {
      name: 'Preparation for Masterclasses',
      time: '8:30 AM - 9:30 AM',
    },
    {
      name: 'Masterclasses I',
      time: '9:30 AM - 11 AM',
      highlight: true,
      description:
        'Ever wanted to interact with eminent scientists from around the world? Through our various Masterclasses,  Nobel Laureates and renowned professors will share about their cutting-edge research, and their passion for science. After which, delegates will have the opportunity to pose questions to the scientists and learn more about careers in science.',
    },
    {
      name: 'Lunch',
      time: '12:30 PM - 1:30 PM',
    },
    {
      name: 'Unlocking the Wonders Excursion',
      time: '2 PM - 5:30 PM',
      highlight: true,
      description: 'MISSING',
    },
    {
      name: 'Dinner',
      time: '6 PM - 6 PM',
    },
    {
      name: 'Cultural Hour II',
      time: '7 PM - 8 PM',
      highlight: true,
    },
    {
      name: 'Science Quest Product',
      time: '8 PM - 9 PM',
      highlight: true,
      description: 'MISSING',
    },
  ],
  [
    // Day 4
    {
      name: 'Preparation for Masterclasses',
      time: '8:30AM - 9:30 AM',
    },
    {
      name: 'Masterclasses II',
      time: '9:30 AM - 11 AM',
      highlight: true,
      description:
        'Ever wanted to interact with eminent scientists from around the world? Through our various Masterclasses,  Nobel Laureates and renowned professors will share about their cutting-edge research, and their passion for science. After which, delegates will have the opportunity to pose questions to the scientists and learn more about careers in science.',
    },
    {
      name: 'Lunch',
      time: '11:30 AM - 12:30 PM',
    },
    {
      name: 'ISYF Keynote Lecture',
      time: '2 PM - 3:30 PM',
      highlight: true,
      description:
        'Hear from the insights of Nobel Laureates during the Keynote Lecture, which will also be the flagship event of ISYF 2024. After which, take a tour around the Poster Exhibition, where student delegates will share their scientific research with eminent scientists, educators, and other fellow delegates! ',
    },
    {
      name: 'Poster Exhibition',
      time: '3:30 PM - 4:30 PM',
      highlight: true,
    },
    {
      name: 'Night Out',
      time: '5 PM - 9 PM',
    },
  ],
  [
    // Day 5
    {
      name: 'Preparation for Science Activity',
      time: '8:30 AM - 9 AM',
    },
    {
      name: 'Collaborative Science Activity',
      time: '9 AM - 10:30 AM',
      highlight: true,
      description:
        'Prepare for an intriguing activity that brings together the art of geometry and principles of physics! Take a plunge into the world of geometrical figures and physical laws, and work with your group to see these concepts come to life. The thrill of discovery awaits!',
    },
    {
      name: 'Closing Lunch & Farewell',
      time: '12 AM - 3 PM',
      highlight: true,
      description:
        'Includes student research presentation, cultural performance and return to HCIBS and final Departure',
    },
    {
      name: 'Final Departure',
      time: '3 PM',
      description: 'Thanks for coming for ISYF 2024!',
    },
  ],
];
</script>
