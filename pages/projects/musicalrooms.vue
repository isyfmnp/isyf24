<template>
  <ProjectLayout>
    <template #type>Mobile App (Educational)</template>
    <template #title
      >MusicalRooms - Educational Toolbox for Music Theory</template
    >
    <template #role>
      <ul>
        <li>UI Designer</li>
        <li>Frontend Developer</li>
      </ul>
    </template>
    <template #time>2021 - 2022</template>

    <template #description>
      <p>
        Ever find yourself staring at theory books, unsure of when the obscure
        music terms will ever become second nature? Are you on your way to your
        ABRSM exam, only to realise there’s no signal and you urgently need to
        revise a few terms? Or are you simply tired of running out of storage
        space due to the countless applications needed just to get through
        practice?
      </p>

      <p>
        Well, don’t fret! With MusicalRooms, a whole new experience is waiting
        for you at the click of a button. With a clean and minimalistic UI,
        MusicalRooms provides theory flashcards for grades 1-5 with definitions
        and other guides for checking out mistakes offline. MusicalRooms also
        boasts a built-in metronome, tuner (WIP) and a recorder all rolled into
        one!
      </p>

      <p>
        We’re aware that music theory apps these days either are of poor
        quality, have confusing user interfaces, or are way too expensive. We
        know how frustrating it is to spend precious storage to get even the
        simplest of functions. With MusicalRooms, we plan to completely
        eliminate this hassle without spending a cent. Forget wasting storage on
        multiple apps when you can just have one.
      </p>

      <p>
        All in all, we hope that MusicalRooms can provide all its users with a
        much-needed break from the bad interfaces and paid apps. Just a simple
        click and you’re unlocking a whole new dimension of learning, which
        comes with a new perspective of enjoying music, free of cost.
      </p>

      <p>
        This app was created by Faith Yang, Tang Xuyuan, Chelsea Ling and Isaac
        Lee under the 2021 Swift Accelerator Programme.
      </p>
    </template>

    <img
      class="image scroll-hidden"
      src="~/assets/images/musicalrooms/musicalrooms_poster.jpg"
      alt="Poster describing musicalrooms"
    />
    <div class="h-gallery scroll-hidden">
      <img
        class="image"
        src="~/assets/images/musicalrooms/metronome_room.jpg"
        alt="Metronome room"
      />
      <img
        class="image"
        src="~/assets/images/musicalrooms/recording_room.jpg"
        alt="Recording room"
      />
      <img
        class="image"
        src="~/assets/images/musicalrooms/theory_room.jpg"
        alt="Theory room"
      />
      <img
        class="image"
        src="~/assets/images/musicalrooms/tuner_room.jpg"
        alt="Tuner room"
      />
    </div>
    <img
      class="image scroll-hidden"
      src="~/assets/images/musicalrooms/sap_team.jpg"
      alt="The absolutely wonderful team I had the pleasure to work with at the Swift Accelator Programme to create this app"
    />
    <span class="image-caption">The absolutely wonderful team I had the pleasure to work with at the Swift Accelator Programme to create this app.</span>
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from "~/layouts/project.vue";
</script>
