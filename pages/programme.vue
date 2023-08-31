<template>
  <div class="programme">
    <div class="navigator">
      <div class="day">
        <div class="text">1</div>
      </div>
      <div class="day">
        <div class="text">2</div>
      </div>
      <div class="day">
        <div class="text">3</div>
      </div>
      <div class="day">
        <div class="text">4</div>
      </div>
      <div class="day">
        <div class="text">5</div>
      </div>
    </div>

    <div class="condensed-timeline">
      <ul>
        <li v-for="(dayTitle, dayIndex) in days">
          <h2>{{ dayTitle }}</h2>
          <ul>
            <li v-for="event in events[dayIndex]">
              <h3 class="name">{{ event.name }}</h3>
              <span class="time">{{ event.time }}</span>
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

    <div class="timeline">
      <ul>
        <li v-for="(dayTitle, dayIndex) in days">
          <h2>{{ dayTitle }}</h2>
          <ul>
            <li v-for="event in events[dayIndex]">
              <h3 class="name">{{ event.name }}</h3>
              <span class="time">{{ event.time }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="details">
      <ul>
        <li v-for="(dayTitle, dayIndex) in days">
          <h2>{{ dayTitle }}</h2>
          <ul>
            <li v-for="event in events[dayIndex]">
              <h3 class="name">{{ event.name }}</h3>
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
</template>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
}


/* ========== OVERALL BOX STYLING ========== */



/* ========== DAY NAVIGATOR ========== */
.navigator {
  padding: 1rem;
  position: relative;

  display: flex;
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
  transform: translateY(2px) translateX(1px);
}

/* ========== TIMELINE ========== */
.condensed-timeline h2,
.timeline h2,
.details h2 {
  font-family: 'Josefin Sans', 'IBM Plex Sans', sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 36px;
  margin-top: 4rem;
}
.condensed-timeline h3,
.timeline h3,
.details h3 {
  text-transform: uppercase;
  font-weight: bold;
}

/* ========== SCREEN-SIZE DEPENDENCY ========== */
.timeline,
.details {
  display: none;
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 900px) {
  .condensed-timeline {
    display: none;
  }
  .timeline,
  .details {
    display: block;
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
