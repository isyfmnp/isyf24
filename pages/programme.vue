<template>
  <h1>Programme Outline</h1>
  <p>
    Wondering what you'll be doing for 5 days? Here's a brief introduction to
    all the wonderful activities we have planned for you!
  </p>

  <main class="programme">
    <div class="navigator">
      <a
        class="day"
        v-for="dayIndex in [0, 1, 2, 3, 4]"
        :href="'#day-' + dayIndex"
      >
        <div class="text">{{ dayIndex + 1 }}</div>
      </a>
    </div>

    <div class="condensed-timeline">
      <ul>
        <li class="event-day" v-for="(dayTitle, dayIndex) in days">
          <h2>
            {{ dayTitle }}
          </h2>
          <ul>
            <li class="event-details" v-for="event in events[dayIndex]">
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

<style scoped>
:global(.masthead::before) {
  color: var(--bg);
  background-image: url("/images/progbg.webp");
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
}

/* ========== DAY NAVIGATOR ========== */
.navigator {
  display: none; /* TODO: Evaluate if this is neccesary, else remove */

  padding: 1rem;
  position: relative;

  /*display: flex;*/
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.navigator::after {
  content: "";
  background-color: var(--primary);
  position: absolute;
  display: block;
  z-index: 0;

  top: 1rem;
  bottom: 1rem;
  left: calc(50% - 2px);
  width: 3px;
}
.navigator .day {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  font-weight: bold;
  font-size: 28px;
  font-family: var(--font-display);

  background-color: var(--bg);
  border: 3px solid var(--primary);
  color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
  transition: background-color 200ms, color 200ms;
}
.navigator .day:hover {
  background-color: var(--primary);
  color: var(--bg);
}

/* ========== TIMELINE ========== */
.event-day h2 {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: 44px;
  margin-block: 3rem;
}
.event-day h3 {
  text-transform: uppercase;
  font-weight: bold;
  font-style: normal;
  font-family: var(--font-display);
  margin-block: 0;
  line-height: 1.5rem;
}

/* DAY HEADER BACKGROUND */
.event-day h2 {
  width: fit-content;
}
.event-day h2::after {
  content: "";
  z-index: -1;
  position: absolute;
  right: -15vw;
  left: -100vw;
  top: -1.5rem;
  bottom: -1rem;

  border: 1px solid var(--gray-900);
  backdrop-filter: blur(5px);
  border-radius: 16px;
}
.event-day:nth-of-type(even) h2::after {
  background-color: hsla(var(--primary-200-hsla), 0.125);
}
.event-day:nth-of-type(odd) h2::after {
  background-color: hsla(var(--primary-200-hsla), 0.25);
}

@media screen and (min-width: 900px) {
  .event-day h2 {
    margin-block: 3rem;
  }
  .event-day h2::after {
    top: -1rem;
    bottom: -0.5rem;
  }
}

.event-day {
  margin: 0 -100vw;
  padding: 2rem 100vw;
  color: var(--fg);
  --cl: var(--primary);
}
.event-day:nth-of-type(even) {
  background-color: var(--gray-900);
  --fg: var(--bg);
  --cl: var(--primary-400);
}

.event-details {
  margin-top: 1rem;
  margin-bottom: 5rem;
}
.event-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 0.5rem;
  margin-block: 4rem 1.5rem;
}

.time {
  display: block;
  font-weight: 300;
  font-size: 20px;
  white-space: nowrap;
  font-family: var(--font);
  padding-right: 1rem;

  flex-shrink: 0;
}
@media screen and (min-width: 900px) {
  .event-title {
    flex-direction: row;
  }
}

/* TIMELINE EFFECT */
.event-day {
  --tm-radius: 2rem;
  margin-left: calc(-100vw - 3.25rem + 5vw);
  padding-left: calc(100vw + var(--tm-radius) * 2 + 1px);
  position: relative;
}
.event-day:first-of-type::before {
  top: 6rem;
}
.event-day:last-of-type::before {
  bottom: 11rem;
}
@media screen and (min-width: 402px) {
  .event-day:last-of-type::before {
    bottom: 10rem;
  }
}
@media screen and (min-width: 666px) {
  .event-day:last-of-type::before {
    bottom: 9rem;
  }
}
.event-day::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(100vw + var(--tm-radius));
  width: 2px;
  z-index: 4;

  background-color: var(--cl);
}
.event-day h2,
.event-day .event-title {
  position: relative;
  z-index: 3;
}
.event-day h2::before,
.event-day h3::before {
  content: "";
  position: absolute;
  display: block;

  border-radius: 50%;
  background-color: var(--cl);
}
.event-day h2::before {
  left: calc(-3rem - 1px);
  top: calc(50% - 1.25rem);
  width: 2rem;
  height: 2rem;
}
.event-day h3::before {
  left: -2.625rem;
  top: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
}

@media screen and (min-width: 900px) {
  .event-day h2 {
    display: block;
    width: fit-content;
  }
}
</style>

<script setup>
import { onMounted } from "vue";

const days = [
  "Day 0 (7 Jan)",
  "Day 1 (8 Jan)",
  "Day 2 (9 Jan)",
  "Day 3 (10 Jan)",
  "Day 4 (11 Jan)",
  "Day 6 (12 Jan)",
];

const events = [
  [
    {
      name: "Arrival of Delegates",
      time: "~",
      description: "Welcome to Singapore!",
    },
  ],
  [
    {
      name: "Assembly Announcements",
      time: "7:30AM",
    },
    {
      name: "Programme Briefing & Team Bonding Activities",
      time: "8:00AM",
    },
    {
      name: "Singapore Discovery Trail",
      time: "TBC:AM",
      description:
        "From the phenomenal urban landscape to the lush nature in Singapore’s parks, adventure awaits! On the Singapore Discovery Trail, delegates will be able to explore key attractions in Singapore while completing challenges and tasks throughout their journey. The trail will also allow delegates to gain a deeper understanding of Singapore’s traditions and cultures while immersing in the wonders of this garden city.",
    },
  ],
  [
    {
      name: "Departure for National University of Singapore (NUS)",
      time: "9:15AM",
    },
    {
      name: "Professor's Sow's Lecture: Introduction to Nanoworld",
      time: "10:00AM - 12:00PM",
      description:
        "Wonder what happens when you zoom in, in and in? Want to discover intriguing properties of matter at the nanoscale? Look no further! QnA, demonstrations and interactive activities… Get ready to be wowed the friendly and brilliant Professor Sow from the National University of Singapore! You'll be kept at the edge of your seat as you delve into the nanoworld together with your friends, exploring current and future applications of nanotechnology with this fun-filled lecture. ",
    },
    {
      name: "Lunch at NUS",
      time: "12:15PM - 1:15PM",
    },
    {
      name: "Departure for Science Centre Singapore",
      time: "1:30PM",
    },
    {
      name: "Science Quest @ Science Centre Singapore",
      time: "2:00PM - 5:00PM",
      description:
        "Is it a bird? Is it a plane? No, it’s the inaugural Science Quest! Through Science Quest, delegates will have the opportunity to head out to various attractions around Singapore, unlocking the wonders of Science and learning firsthand how it is applied in daily life. Get ready to be captivated by interactive displays on various scientific topics and an engaging experience!",
    },
    {
      name: "Return to HCIBS",
      time: "5:00PM",
    },
    {
      name: "Dinner",
      time: "6:00PM - 7:00PM",
    },
    {
      name: "Cultural Hour",
      time: "7:00PM - 8:00PM",
      description:
        "As the night unfolds, witness mesmerising performances, from dances to stories, each a window into a different country. The Cultural Hour and Exhibition provides the opportunity for delegates to showcase their unique history, culture and customs! Through this, delegates will be able to traverse the global village, better understand each others’ cultures, and view the world from a global perspective.",
    },
    {
      name: "Preparation for Science Quest Product",
      time: "8:00PM - 9:00PM",
      description:
        "Take this time to prepare your final product for presentation!",
    },
  ],
  [
    {
      name: "Prep??????",
      time: "8:30AM -9:30AM",
    },
    {
      name: "Masterclass — Dialogues by Scientists and Experts",
      time: "9:30AM - 11:00AM",
      description:
        "Ever wanted to interact with eminent scientists from around the world? Through our various Masterclasses,  Nobel Laureates and renowned professors will share about their cutting-edge research, and their passion for science. After which, delegates will have the opportunity to pose questions to the scientists and learn more about careers in science.",
    },
    {
      name: "Setup Poster Exhibition",
      time: "11:00AM - 12:00PM",
    },
    {
      name: "Lunch",
      time: "12:30PM - 1:30PM",
    },
    {
      name: "ISYF Keynote Lecture",
      time: "2:00PM - 3:30PM",
      description:
        "Hear from the insights of Nobel Laureates during the Keynote Lecture, which will also be the flagship event of ISYF 2024. After which, take a tour around the Poster Exhibition, where student delegates will share their scientific research with eminent scientists, educators, and other fellow delegates! ",
    },
    {
      name: "Poster Exhibition",
      time: "3:30PM - 4:30PM",
    },
    {
      name: "Dinner Out",
      time: "5:00PM - 9:00PM",
    },
  ],
  [
    {
      name: "Prep??????",
      time: "8:30AM - 9:00AM",
    },
    {
      name: "Collaborative Science Activity",
      time: "9:00AM - 10:30AM",
      description:
        "Prepare for an intriguing activity that brings together the art of geometry and principles of physics! Take a plunge into the world of geometrical figures and physical laws, and work with your group to see these concepts come to life. The thrill of discovery awaits!",
    },
    {
      name: "Departure for Hotel",
      time: "11:00AM",
    },
    {
      name: "Closing Lunch & Farewell",
      time: "12:00AM - 3:00PM",
      description:
        "Includes student research presentation, cultural performance and return to HCIBS and final Departure",
    },
    {
      name: "Final Departure",
      time: "3:00PM",
      description: "Thanks for coming for ISYF 2024!",
    },
  ],
];
</script>
