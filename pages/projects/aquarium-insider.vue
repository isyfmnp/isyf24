<template>
  <ProjectLayout>
    <template #type>Website (Educational)</template>
    <template #title
      >Aquarium Insider - All you need for aquarium care</template
    >
    <template #role>Frontend Developer</template>
    <template #time>2022</template>

    <template #description>
      <p>
        While taking care of an aquarium is immensely rewarding, the learning
        curve for beginners can be intimidating. Aquarium Insider aims to impart
        crucial information through an interactive online platform for beginners
        to fully enjoy and succeed in the hobby.
      </p>

      <p>
        We know that much of the information online is of poor quality, have
        confusing interfaces, or simply provide inadequate infomation. We know
        how frustrating it is to dig through countless pages to find the right
        guide and information you need. With Aquarium Insider, we hope to
        completely eliminate this hassle for you!
      </p>

      <p>
        We cover every part of the aquarium care hobby, from the basic concepts
        like salinity and the nitrogen cycle, to the ins and outs of aquarium
        maintenance and creature procurement. We even provide a simple
        beginner's guide that includes all the things you need to know for your
        first aquarium! With this website, you will never need to dig through
        the internet for essential information again.
      </p>
    </template>

    <img
      class="image scroll-hidden"
      src="~/assets/images/aquariuminsider/desktop-intro.jpg"
      alt="Intro page describing the nitrogen cycle, with diagram"
    />
    <img
      class="image scroll-hidden"
      src="~/assets/images/aquariuminsider/desktop-beginnerGuide.jpg"
      alt="Beginner guide page describing how to manage and understand temperature requirements for creatures"
    />
    <img
      class="image scroll-hidden"
      src="~/assets/images/aquariuminsider/desktop-maintenance.jpg"
      alt="Maintenance page, describing the main factors in managing water conditions for various creatures"
    />
    <img
      class="image scroll-hidden"
      src="~/assets/images/aquariuminsider/desktop-creatureHub.jpg"
      alt="Creature Hub page, describing the Cory Catfish and all its requirements and specifications"
    />
    <img
      class="image scroll-hidden"
      src="~/assets/images/aquariuminsider/desktop-quizCompleted.jpg"
      alt="A quiz on our website, highlighting the most essential information and allowing people to test themselves"
    />
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from "~/layouts/project.vue";
</script>
