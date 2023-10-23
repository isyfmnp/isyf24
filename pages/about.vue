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
        The theme “Science and Technology for Humanity: Building a Sustainable
        Future” highlights the important role of science and technology in
        driving sustainable and inclusive development. It reflects the need for
        a holistic approach to science and technology, considering
        their benefits for humanity and their accompanying ethical
        considerations in addressing societal challenges.
      </p>
      <p>
        Responsible and ethical use of science and technology is essential to
        resolve pressing global challenges such as climate change, inequality
        and health disparities. At the same time, science and technology have
        the role of enhancing productivity in order to induce a dynamic
        transformation of the economy and increase growth rates. It is also
        important to consider the social, cultural, and ethical implications of
        scientific and technological advancements, and encourage discussions on
        how to mitigate potential negative impact and foster positive change
        through responsible innovation. The possibility of moving towards the
        free provision of technologies that contribute to meeting human
        challenges, making them accessible to all can be explored.
      </p>
      <p>
        In schools, the acquisition and dissemination of scientific knowledge,
        the building of innovation capabilities, and the push towards the
        collective goal of building a better world for future generations can be
        promoted. There is a pressing need for more conversations on the reform
        of policies and existing measures which can promote public interests in
        our pursuit of sustainability. If we are able to move forward and each
        adopt a more sustainable lifestyle, we definitely can make the change
        and create an impact in not just our own country, but the world.
      </p>
    </section>

    <section class="colored goal">
      <h2>Our Goals</h2>

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

    <section>
      <h2>About Singapore</h2>

      <p>
        [Collaborate with handbook, locale, city skyline, garden city, food &
        culture]
      </p>
    </section>
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
  layout: 'masthead',
});
</script>
