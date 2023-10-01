<template>
  <Masthead>
    <h1>About ISYF 2024</h1>
    <h3>
      Our goals, the people you'll get to meet, and who we (the organisers) are!
    </h3>
  </Masthead>

  <main>
    <section>
      <h2>
        This Year's Theme:
        <PrimaryHighlight>
          Science and Technology for Humanity: Building a Sustainable Future
        </PrimaryHighlight>
      </h2>

      <!-- TODO: SHORTEN DOWN TO 1/2 PARAS -->
      <p>
        It has been more than two years since COVID-19 first emerged, bringing
        about unprecedented challenges and changes for the world. No corner of
        the world has escaped unscathed.
      </p>
      <p>
        However, the pandemic has also provided humankind an invaluable
        opportunity to rethink some fundamental assumptions and mindsets, and to
        consider how to build more resilient communities going forward. It has
        led many people around the world to embark on a journey of accelerating
        transformation and imagining our world anew, with Science playing a key
        role in this journey.
      </p>

      <p>
        How can we, as catalysts for change, better drive humankind's progress,
        anchored on the scientific method and discipline? In the spirit of
        redefining boundaries and galvanising transformation, ISYF 2023
        endeavours to inspire delegates to use Science and Technology to lead
        the change into the future by reconnecting, reimagining, and looking
        ahead, to create a better world marked by common goals, shared knowledge
        and global solidarity.
      </p>
    </section>

    <section class="colored goal">
      <h2><PrimaryHighlight>Our Goals</PrimaryHighlight></h2>

      <h3>To Inspire Passion for Science Among Youth</h3>
      <p>
        ISYF aims to provide high-ability students with ample opportunities to
        share and discuss their interest in science, technology and science
        research. They will be exposed to many fields of science which will
        broaden their outlook and understanding of the scientific world. Invited
        Nobel laureates and eminent scientists will inspire them through stories
        of their own life experiences and scientific discoveries. These
        interactions will help create greater awareness among the youth about
        the importance of broad-based knowledge, keen curiosity, relentless
        tenacity and a global outlook when considering the pursuit of science as
        a meaningful and fulfilling endeavour.
      </p>
      <h3>
        Establish Cooperation and Friendship Amongst Young Talented Science
        Students
      </h3>
      <p>
        Students will have many opportunities to interact in different
        cross-cultural groups and forge strong bonds with each other throughout
        the Forum. Activities are designed to promote mutual cooperation,
        understanding and appreciation of each other's diverse cultures while
        sharing a common passion in science, technology and research.
      </p>

      <h3>Build Capacities of Science Educators</h3>
      <p>
        Through professional sharing and discussions among science educators,
        ISYF helps build the competencies of teachers who are navigating an
        evolving education landscape.
      </p>
    </section>
    <p>asdasdsad</p>
  </main>
</template>

<style>
.masthead::before {
  color: var(--bg);
  background-image: url('/images/aboutbg2.webp');
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}
</style>

<script setup>
import PrimaryHighlight from '../components/primaryHighlight.vue';

definePageMeta({
  layout: "masthead",
});
</script>
