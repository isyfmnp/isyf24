<template>
  <h1>Participating Schools</h1>

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
          <span class="name">{{profile.name}}</span>
          <span class="title">{{profile.title}}</span>
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
        <h4>{{ profile.title }}</h4>
        <p>
          {{ profile.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('~/assets/css/speakers.css');
</style>

<script setup>
const profiles = [
  {
    event: 'Opening Ceremony Keynote',
    profiles: [
      {
        name: 'Ms Lim Wan Yong',
        title:
          'Second Permanent Secretary, Ministry of Education and Ministry of Social and Family Development',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Ms Lim Wan Yong is Second Permanent Secretary at the Ministry of Education from October 2021, and Second Permanent Secretary at the Ministry of Social and Family Development from April 2022. Prior to this, she was Deputy Secretary (Planning), Ministry of National Development from 2017, and concurrently Deputy Secretary (Security Coordination), Prime Minister's Office from 2019.\n\nShe previously held various appointments in the Trade Development Board (now Enterprise Singapore), Ministry of Trade and Industry, Ministry of Education, Ministry of Finance and Civil Service College, and was Special Assistant to then-DPM/Coordinating Minister for National Security Teo Chee Hean.\n\nMs Lim graduated with a Bachelor of Arts in International Relations, and a Master of Science in Industrial Engineering and Engineering Management from Stanford University, USA. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
    ],
  },
  {
    event: 'Meet-The-Scientist Sessions',
    profiles: [
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
      {
        name: 'Mr Beh Kian Teik',
        title: 'Chief Executive Officer, National Research Foundation',
        image: '/images/profiles/speakers/yeo-kiat-seng.jpg',
        description:
          "Mr Beh Kian Teik is the Chief Executive Officer of the National Research Foundation (NRF) Singapore from August 2022. He is responsible for reviewing, developing and implementing the national RIE strategies and governance frameworks, to grow and sustain a vibrant RIE ecosystem in Singapore. Mr Beh joined NRF as the Deputy Chief Executive Officer in July 2020.\n\nPrior to joining NRF, Mr Beh held roles of increasing responsibilities in Economic Development Board for over 22 years. His last role was Executive Vice President of EDB and oversaw EDB New Ventures. He worked with corporate entrepreneurs with the passion and drive to create early-stage ventures in Singapore. He has over twenty years' experience of promoting foreign direct investment and building industries in the manufacturing and internationally tradeable services sectors.\n\nPreviously, he was responsible for EDB's activities in innovation & industry incubation and led efforts to foster industry-science linkages. In 2010, he was also the founding director of the Singapore Biomedical Sciences Industry Partnership Office, a unique inter-agency government organisation. In this role, he worked with senior Singapore scientists to partner industry to translate science to medicine, and with industry partners that undertook R&D projects requiring the capabilities of multiple Singapore agencies in basic sciences and clinical research.\n\nMr Beh is a Sundstrand-EDB and Glaxo-EDB scholar who graduated from the University of California, Berkeley with an MSc in Electrical Engineering, as well as a BSc in Electrical & Computer Engineering from the University of Illinois at Urbana-Champaign. ",
      },
    ],
  },
];
</script>
