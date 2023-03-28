<template>
  <ProjectLayout>
    <template #type>Mobile App</template>
    <template #title
      >Trace Together Alternative (TTA) - An exploration into contact tracing
      technology</template
    >
    <template #role>Network / Backend Developer</template>
    <template #time>2021</template>

    <template #description>
      <p>
        This was my PW project for 2021. We saw that the TraceTogether system,
        while very well designed and perfectly adequate, still had some flaws
        and inefficiencies, so this project was started as a way for us to point
        out these flaws and find ways to solve or mitigate them, as well as a
        way for us to explore the various technologies and techniques involved
        in creating such an interconnected system.
      </p>
      <p>
        My primary role was to create the network and data transmission system
        used to communicate location and related data between mobile devices and
        the central server. This involved analysing the needs and engineering a
        shared data schema, designing the cross-platform data transmission
        system and implmenting all of this on the various platforms we used in
        this project.
      </p>
      <p>
        While we did not create an exact replica or in any way a replacement for
        TraceTogether, I found this an enriching and valuable experience, where
        I could explore and collaborate on a truly cross-platform project with
        my teammates. Through my work in on the network systems, I gained
        hands-on experience in data management and network design, honed my
        technical skills and learnt the why and how of collaboration in such a
        development environment.
      </p>
    </template>

    <img
      class="image scroll-hidden"
      style="max-width: 75%"
      src="~/assets/images/tracetogetheralternative/tta_code.jpg"
      alt="A sampler of the code I wrote for this project"
    />
    <span class="image-caption"
      >A sampler of the code I wrote for this project.</span
    >
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from "~/layouts/project.vue";
</script>
