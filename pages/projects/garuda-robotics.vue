<template>
  <ProjectLayout>
    <template #type>Internship</template>
    <template #title>Garuda Robotics - Airspace Management for UAVS</template>
    <template #role>Software Development Intern</template>
    <template #time>2022</template>

    <template #description>
      <p>
        During my internship at Garuda Robotics, over November/December 2022, I
        was a part of the backend develop team, integrating external sources of
        airspace data to improve the accuracy and completeness of the company's
        airspace management and tracking system, MyDroneFleets.
      </p>
      <p>
        My primary role was to integrate OneMap, the Singapore government's
        authoritative source of airspace information, and the data relevant to
        UAVs flight, into the internal system for use with UAVs. This involved
        analysing and altering the data retrieved from Onemap, altering the
        existing data schema, as well as cleaning up legacy data and systems to
        fit the new source. In addition to this, I also gained valuable
        experience working with various backend technologies such as ExpressJS,
        MongoDB and RabbitMQ.
      </p>
      <p>
        I worked closely with the senior developers, collaborating on code
        reviews and learning from their expertise. Overall, my internship at
        Garuda was an incredibly rewarding experience, where I was able to
        contribute to the company's mission of developing UAV technology to
        create a safer and smarter world. Through my work in the backend team, I
        gained hands-on experience in data management and integration, honed my
        technical skills, and learned the importance of collaboration in an
        innovative environment.
      </p>
    </template>

    <img
      class="image"
      src="~/assets/images/garudarobotics/garuda_groupPhoto.jpg"
      alt="The last day of the internship, a photo with some of the people I had the pleasure to work with."
    />
    <span class="image-caption"
      >The last day of the internship, a photo with some of the people I had the pleasure to work with.</span
    >
    <img
      class="image"
      src="~/assets/images/garudarobotics/garuda_mydronefleets.jpg"
      alt="The product that I worked on, an airspace and drone management system and interface"
    />
    <span class="image-caption"
      >The product that I worked on, an airspace and drone management system and
      interface.</span
    >
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from "~/layouts/project.vue";
</script>
