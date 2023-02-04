<template>
  <main>
    <section id="masthead" :style="{ 'min-height': windowHeight + 'px' }">
      <div class="profile">
        <img
          class="image scroll-hidden"
          src="/images/xuyuan_portrait.png"
          alt="A picture of Xuyuan"
        />
        <div class="wrapper scroll-hidden" style="--delay: 250ms">
          <h1 class="title">Hello, I'm Xuyuan.</h1>
          <h3 class="subtitle">
            I'm a student and aspiring software designer currently studying at
            Hwa Chong Institution (JC), Singapore.
          </h3>
        </div>
      </div>

      <ul class="contact scroll-hidden" style="--delay: 500ms">
        <li>
          <a href="mailto:t.xuyuan@gmail.com" onclick="javascript:window.open('mailto:t.xuyuan@gmail.com', 'mail');event.preventDefault()" target="_blank"
            ><IconMail />Personal&nbsp;Email (preferred)</a
          >
        </li>
        <li>
          <a href="mailto:191519R@student.hci.edu.sg" onclick="javascript:window.open('mailto:191519R@student.hci.edu.sg', 'mail');event.preventDefault()" target="_blank"
            ><IconMail />Institution&nbsp;Email</a
          >
        </li>
        <li>
          <a href="https://github.com/txuyuan" target="_blank"
            ><IconGithub />Github</a
          >
        </li>
        <li>
          <a href="https://www.instagram.com/t.xuyuan/" target="_blank"
            ><IconInstagram />Instagram</a
          >
        </li>
      </ul>

      <div class="scroll-wrapper scroll-hidden" style="--delay: 750ms">
        <div class="scroll"></div>
      </div>
    </section>

    <section>
      <h2 class="scroll-hidden">Experience</h2>

      <div class="deck">
        <NuxtLink class="card scroll-hidden" to="/projects/garuda-robotics">
          <img class="image" src="/images/mydronefleets.png" />
          <div class="info">
            <div class="metadata">
              <h4>Internship</h4>
              <h4>2022</h4>
            </div>
            <h3>Garuda Robotics - Airspace management for UAVS</h3>
            <SeeMore />
          </div>
        </NuxtLink>

        <NuxtLink class="card scroll-hidden" to="/projects/musicalrooms">
          <img class="image" src="/images/musicalrooms.png" />
          <div class="info">
            <div class="metadata">
              <h4>Mobile App (Educational)</h4>
              <h4>2021 - 2022</h4>
            </div>
            <h3>MusicalRooms - Educational toolbox for Music Theory</h3>
            <SeeMore />
          </div>
        </NuxtLink>

        <NuxtLink class="card scroll-hidden" to="/projects/aquarium-insider">
          <img class="image" src="/images/aquarium_insider.png" />
          <div class="info">
            <div class="metadata">
              <h4>Website (Educational)</h4>
              <h4>2022</h4>
            </div>
            <h3>Aquarium Insider - All you need for aquarium care</h3>
            <SeeMore />
          </div>
        </NuxtLink>

        <NuxtLink
          class="card scroll-hidden"
          to="/projects/trace-together-alternative"
        >
          <img class="image" src="/images/tta_code.png" />
          <div class="info">
            <div class="metadata">
              <h4>Mobile App</h4>
              <h4>2021</h4>
            </div>
            <h3>
              Trace Together Alternative (TTA) - An exploration into contact
              tracing technology
            </h3>
            <SeeMore />
          </div>
        </NuxtLink>

        <NuxtLink class="card scroll-hidden" to="/projects/monster-melancholy">
          <img class="image" src="/images/monster_melancholy.png" />
          <div class="info">
            <div class="metadata">
              <h4>Game / Website</h4>
              <h4>2021</h4>
            </div>
            <h3>
              Monster Melancholy - A simple yet endlessly fun adventure game
            </h3>
            <SeeMore />
          </div>
        </NuxtLink>
      </div>
    </section>

    <section>
      <h2 class="scroll-hidden">Academic Qualifications</h2>
      <div class="scroll-hidden">
        <p>
          GCE 'O' Level Equivalent - Secondary 4 Integrated Programme (2022)
        </p>
        <p>Singapore-Cambridge GCE 'O' Level - Higher Chinese (2022)</p>
      </div>
    </section>

    <section>
      <h2 class="scroll-hidden">Academic Timeline</h2>

      <div class="timeline">
        <span class="comment right scroll-hidden">2023 - present</span>
        <div class="elm left scroll-hidden">
          <h3>Hwa Chong Junior College</h3>
          <p>Enrolled in 2023</p>
        </div>

        <span class="comment left scroll-hidden">2019 - 2022</span>
        <div class="elm right scroll-hidden">
          <h3>Hwa Chong High School</h3>
          <p>
            Subjects offered: Physics, Chemistry, Math, Higher Chinese, English,
            History and Social Studies
          </p>
        </div>

        <span class="comment right scroll-hidden">2016 - 2018</span>
        <div class="elm left scroll-hidden">
          <h3>Nan Hua Primary School</h3>
        </div>

        <span class="comment left scroll-hidden">2013 - 2015</span>
        <div class="elm right scroll-hidden">
          <h3>Rulang Primary School</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import "~/assets/css/masthead.css";
@import "~/assets/css/cards.css";
@import "~/assets/css/timeline.css";

main {
  text-align: center;
}
ul {
  list-style: none;
  padding-left: 0;
}

:not(#masthead) h2 {
  font-weight: semibold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  margin: 7rem 0 3rem;
}
@media screen and (min-width: 800px) {
  :not(#masthead) h2 {
    letter-spacing: 1rem;
    margin: 8.5rem 0 3rem;
  }
}
</style>

<script setup>
import EmailIcon from "vue-material-design-icons/Email.vue";
import { ref, onMounted } from "vue";

let windowHeight = ref(6000);

onMounted(() => {
  windowHeight.value = window.innerHeight;
});
</script>
