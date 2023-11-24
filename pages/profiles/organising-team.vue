<template>
  <h1>The Organising Team</h1>

  <div class="collage">
    <div class="event" v-for="event in profiles">
      <h3 class="event-title">{{ event.event }}</h3>
      <a
        class="profile"
        v-for="profile in event.profiles"
        :href="'#' + profile.name.replaceAll(' ', '')"
      >
        <img class="profile-img" :src="profile.image" alt="" />
        <div class="hover-label">
          <span class="name">{{ profile.name }}</span>
        </div>
      </a>
    </div>
  </div>

  <div class="intros">
    <div class="event" v-for="event in profiles">
      <h2>{{ event.event }}</h2>

      <div class="profile" v-for="profile in event.profiles">
        <div class="scroll-anchor" :id="profile.name.replaceAll(' ', '')"></div>
        <img :src="profile.image" :alt="profile.name" />
        <h3>{{ profile.name }}</h3>
        <p>
          {{ profile.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/css/profiles.css");
</style>

<script setup>
const profiles = [
  {
    event: "Co-Chairpersons",
    profiles: [
      {
        name: "Ling Jun Quan",
        image: "/images/profiles/speakers/yeo-kiat-seng.jpg",
        description:
          "",
      },
      {
        name: "Nguyen Chi Mai",
        image: "/images/profiles/speakers/yeo-kiat-seng.jpg",
        description:
          "",
      },
    ],
  },
  {
    event: "The Organising Teams",
    profiles: [
      {
        name: "Admin & Operations",
        image: "/images/profiles/speakers/yeo-kiat-seng.jpg",
        description:
          "The Admin & Operations team are dedicated individuals who work tirelessly to ensure your ISYF experience is smooth and seamless. They orchestrate and tie events together behind the scenes to bring you a truly fulfilling experience!",
      },
      {
        name: "Ceremonies",
        image: "/images/profiles/speakers/yeo-kiat-seng.jpg",
        description:
          "The Ceremonies team have planned two major events for ISYF: \n\nThe Nobel Grand Ceremony is a great chance for you hear more from Nobel laureates and eminent scientists on issues surrounding the theme of the forum. You also get a chance to pose your very own questions to the experts in a forum styled question-and-answer session. \n\nThe Closing Ceremony on the other hand is our way of ending off ISYF on a high note, so be ready with your cameras to take some memorable photos!",
      },
      {
        name: "Dialogues & Masterclasses",
        image: "/images/profiles/speakers/yeo-kiat-seng.jpg",
        description:
          "The Dialogues & Masterclasses team seek to connect you to knowledgable and prominent scientists, allowing you to explore new perspectives and gain new insights on notable scientific research. We hope you stay curious and embrace this valuable oportunity with eminent scientists and Nobel laureates!",
      },
      {
        name: "Media & Publications",
        image: "/images/profiles/speakers/yeo-kiat-seng.jpg",
        description:
          "The Media & Publications team constantly strive to deliver to you the best publicity efforts and media projects. Stay informed with the ISYF website, Instagram pages and the student handbook. Also enjoy the unique designs on the ISYF merchandise made by our very own designers. We hope that the content we create will be able to add to your ISYF experience!",
      },
      {
        name: "Recreational Activities",
        image: "/images/profiles/speakers/yeo-kiat-seng.jpg",
        description:
          "The Recreational Activities team are in charge of ensuring you enjoy yourself thoroughly, through fun activities like the Amazing Tour, Cultural Hour and Exhibitions. ISYF is the perfect avenue to meet new friends who are passinate in science, and we hope that these activities provide a great time for you to bond with them!",
      },
      {
        name: "Science Activities",
        image: "/images/profiles/speakers/yeo-kiat-seng.jpg",
        description:
          "The Science Activities team will enrich your learning with various activities to dive deeper into the world of Science. Do look forward to excursions and the Team Project Challenge, which will be sure to provide something new for everyone!",
      },
    ],
  },
];
</script>
