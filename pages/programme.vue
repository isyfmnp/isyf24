<template>
  <Masthead>
    <h1>Programme Outline</h1>
  </Masthead>
  <div class="programme-wrapper">

  <div class="programme">
    <div class="navigator">
      <a class="day" v-for="dayIndex in [0, 1, 2, 3, 4]" :href="'#day-' + dayIndex">
        <div class="text">{{ dayIndex + 1 }}</div>
      </a>
    </div>

    <div class="condensed-timeline">
      <ul>
        <li class="event-day" v-for="(dayTitle, dayIndex) in days">
          <h2 class="scroll-anchor" :id="'day-' + dayIndex">{{ dayTitle }}</h2>
          <ul>
            <li class="event-details" v-for="event in events[dayIndex]">
              <div class="event-title">

              <h3 class="name">{{ event.name }}</h3>
              <span class="time">{{ event.time }}</span>
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
  </div>
  </div>
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
ul {
  list-style: none;
  padding-left: 0;
}


/* ========== OVERALL BOX STYLING ========== */
@media screen and (min-width: 1140px) {
  .programme {
    margin-inline: -10vw;
  }
}
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
  content: '';
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
  font-family: 'Josefin Sans', 'IBM Plex Sans', sans-serif;

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
.navigator .day .text {
  transform: translateY(2px);
}

/* ========== TIMELINE ========== */
.condensed-timeline h2,
.timeline h2,
.details h2 {
  font-family: 'Josefin Sans', 'IBM Plex Sans', sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 44px;
  margin-block: 3rem 2rem;
}
.condensed-timeline h3,
.timeline h3,
.details h3 {
  text-transform: uppercase;
  font-weight: bold;
}

.event-day {
  margin: 0 -100vw;
  padding: 2rem 100vw;
  color: var(--fg);
}
.event-day:nth-of-type(even) {
  background-color: var(--primary);
  --fg: var(--bg);
}

.event-details {
  margin-bottom: 3rem;
}
.event-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  margin-block: 0.325rem 0.75rem;
  margin-right: 1rem;
}

.time {
  display: block;
  font-style: italic;
  white-space: nowrap;
}
.scroll-anchor {
  scroll-margin-top: 7rem;
}


/* TIMELINE EFFECT */
.event-day {
  --tm-radius: 2rem;
  margin-left: calc(-100vw - 2rem + 5vw);
  padding-left: calc(100vw + var(--tm-radius) * 2);
  position: relative;
}
.event-day:first-of-type::before {
  top: 6rem;
}
.event-day:last-of-type::before {
  bottom: 12rem;
}
@media screen and (min-width: 402px) {
  .event-day:last-of-type::before {
    bottom: 11rem;
  }
}
@media screen and (min-width: 666px) {
  .event-day:last-of-type::before {
    bottom: 10rem;
  }
}
.event-day::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(100vw + var(--tm-radius));
  width: 2px;

  background-color: var(--fg);
}
.event-day h2, .event-day h3 {
  position: relative;
}
.event-day h2::before, .event-day h3::before {
  content: '';
  position: absolute;
  display: block;
  
  border-radius: 50%;
  background-color: var(--fg);
}
.event-day h2::before {
  left: -3rem;
  top: 0.25rem;
  width: 2rem;
  height: 2rem;
}
.event-day h3::before {
  left: -2.75rem;
  top: calc(50% - 0.75rem);
  width: 1.5rem;
  height: 1.5rem;

}
</style>

<script setup>
import { onMounted } from 'vue';

const days = [
  'Day 1 (15 Jan)',
  'Day 2 (16 Jan)',
  'Day 3 (17 Jan)',
  'Day 4 (18 Jan)',
  'Day 5 (19 Jam)',
];

const events = [
  [
    {
      name: 'Introduction to Team Project Challenge',
      time: '8:30 AM',
      image: '/dummyImage.png',
      description:
        "The Team Project Challenge is a signature ISYF event that started in 2019. Participants will have 5 days to work with their teams to ideate and prototype a product based on a challenge theme. Delegates will be sure to channel their inner makers and hone their problem solving skills to showcase their creativity and scientific knowledge. Leveraging on the diversity of ISYF's delegation, we hope that participants are able to gather their strengths to create something truly unique and deepen their appreciation for Science.",
    },
    {
      name: 'Amazing Tour',
      time: '12:30 PM',
      description:
        'Explore Singapore and get to know your teams better through this Amazing Tour around Singapore! Delegates will get to experience uniquely Singapore cuisines and learn more about Singapore. Do take this chance to connect with your fellow delegates!',
    },
  ],
  [
    {
      name: 'Dialogue and Master Class Session 1',
      time: '9:30 AM',
      description:
        'During the Dialogues & Masterclasses Sessions, delegates can look forward to an exciting and interactive session with the scientists to discover more about their lives and their passion for science. Delegates will have the opportunity to pose questions to the scientists and learn more about careers in Science.',
    },
    {
      name: 'Excursions to OmniTheatre',
      time: '1:30 PM',
    },
    {
      name: 'Team Project Challenge Preparation',
      time: '7:30 PM',
      description: 'Challenge yourselves and solve the problem creatively!',
    },
  ],
  [
    {
      name: 'Cultural Exhibition',
      time: '10:30 AM',
    },
    {
      name: 'Dialogue and Master Class Session 2',
      time: '2:30 PM',
    },
    {
      name: 'Team Project Challenge Preparation',
      time: '5:00 PM',
      description: 'Last minute preparations before the final presentation!',
    },
  ],
  [
    {
      name: 'Team Project Challenge Presentation',
      time: '9:00AM',
      description: 'Gather your teammates and showcase your work!',
    },
    {
      name: 'ISYF Grand Ceremony & Poster Exhibition',
      time: '2:00 PM',
      description:
        'At the ISYF Grand Ceremony, Nobel Laureates and eminent scientists share their views on issues centered around the theme of the forum, as well as address questions posed by the audience. The panel discussion and question-and-answer session will be facilitated by a panel moderator. Delegates can look forward to learning more through the sharing of insights by the Nobel Laureates and eminent scientists. This is followed by a Poster Exhibition where ISYF student delegates showcase their scientific research.',
    },
    {
      name: 'Cultural Hour',
      time: '7:30 PM',
      description:
        "Being the cultural highlight of ISYF, the Cultural Hour & Exhibition gives delegates the opportunity to present a microcosm of their homelands, showcasing the unique history, culture and customs. The event also encourages youths to view the world through a global lens. Delegates and the Hwa Chong community will be able to visit the booths to gain fascinating insights into the traditions of other cultures - through verbal sharing, photographs, snacks and even games. Let's celebrate multiculturalism and traverse the global village!",
    },
  ],
  [
    {
      name: 'Closing Ceremony & Formal Lunch',
      time: '12:00 PM',
    },
    {
      name: 'Departure',
      time: '4:30 PM',
      description:
        'We hope that ISYF 2023 has been fulfilling and memorable for you!',
    },
  ],
];
</script>
