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
.navigator .day .text {
  transform: translateY(2px);
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
  font-family: var(--font-display);
  margin-block: 0;
  line-height: 1.5rem;
}

/* DAY HEADER BACKGROUND */
.event-day h2 {
  width: fit-content;
}
.event-day h2::after {
  content: '';
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
  margin-bottom: 3rem;
}
.event-title {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 0.5rem;
  margin-block: 4rem 1.5rem;
}

.time {
  display: block;
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  white-space: nowrap;
  font-family: var(--font-display);

  width: 80px;
  flex-shrink: 0;
  transform: translateY(2px);
}
@media screen and (min-width: 900px) {
  .time {
    transform: translateY(1px);
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
  content: '';
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
.event-day .event-title::before {
  content: '';
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
.event-day .event-title::before {
  left: -2.625rem;
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
import {onMounted} from 'vue';

const days = [
  'Day 1 (15 Jan)',
  'Day 2 (16 Jan)',
  'Day 3 (17 Jan)',
  'Day 4 (18 Jan)',
  'Day 5 (19 Jan)',
];

const events = [
  [
    {
      name: 'Introduction to Team Project Challenge',
      time: '8:30AM',
      image: '/dummyImage.png',
      description:
        "The Team Project Challenge is a signature ISYF event that started in 2019. Participants will have 5 days to work with their teams to ideate and prototype a product based on a challenge theme. Delegates will be sure to channel their inner makers and hone their problem solving skills to showcase their creativity and scientific knowledge. Leveraging on the diversity of ISYF's delegation, we hope that participants are able to gather their strengths to create something truly unique and deepen their appreciation for Science.",
    },
    {
      name: 'Amazing Tour',
      time: '12:30PM',
      description:
        'Explore Singapore and get to know your teams better through this Amazing Tour around Singapore! Delegates will get to experience uniquely Singapore cuisines and learn more about Singapore. Do take this chance to connect with your fellow delegates!',
    },
  ],
  [
    {
      name: 'Dialogue and Master Class Session 1',
      time: '9:30AM',
      description:
        'During the Dialogues & Masterclasses Sessions, delegates can look forward to an exciting and interactive session with the scientists to discover more about their lives and their passion for science. Delegates will have the opportunity to pose questions to the scientists and learn more about careers in Science.',
    },
    {
      name: 'Excursions to OmniTheatre',
      time: '1:30PM',
    },
    {
      name: 'Team Project Challenge Preparation',
      time: '7:30PM',
      description: 'Challenge yourselves and solve the problem creatively!',
    },
  ],
  [
    {
      name: 'Cultural Exhibition',
      time: '10:30AM',
    },
    {
      name: 'Dialogue and Master Class Session 2',
      time: '2:30PM',
    },
    {
      name: 'Team Project Challenge Preparation',
      time: '5:00PM',
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
      time: '2:00PM',
      description:
        'At the ISYF Grand Ceremony, Nobel Laureates and eminent scientists share their views on issues centered around the theme of the forum, as well as address questions posed by the audience. The panel discussion and question-and-answer session will be facilitated by a panel moderator. Delegates can look forward to learning more through the sharing of insights by the Nobel Laureates and eminent scientists. This is followed by a Poster Exhibition where ISYF student delegates showcase their scientific research.',
    },
    {
      name: 'Cultural Hour',
      time: '7:30PM',
      description:
        "Being the cultural highlight of ISYF, the Cultural Hour & Exhibition gives delegates the opportunity to present a microcosm of their homelands, showcasing the unique history, culture and customs. The event also encourages youths to view the world through a global lens. Delegates and the Hwa Chong community will be able to visit the booths to gain fascinating insights into the traditions of other cultures - through verbal sharing, photographs, snacks and even games. Let's celebrate multiculturalism and traverse the global village!",
    },
  ],
  [
    {
      name: 'Closing Ceremony & Formal Lunch',
      time: '12:00PM',
    },
    {
      name: 'Departure',
      time: '4:30PM',
      description:
        'We hope that ISYF 2023 has been fulfilling and memorable for you!',
    },
  ],
];
</script>
