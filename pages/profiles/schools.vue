<template>
  <h1>Participating Schools</h1>

  <div class="collage">
    <section class="event" v-for="country in schools">
      <h3 class="event-title">{{ country.country }}</h3>
      <a
        class="profile"
        v-for="profile in country.schools"
        :href="'#' + profile.name.replaceAll(' ', '')"
      >
        <img class="profile-img" :src="'/images/profiles/schools/' + profile.name + '.jpg'" alt="" />
        <span class="name">{{ profile.name }}</span>
      </a>
    </section>
  </div>
</template>

<style scoped>
@import url('~/assets/css/profiles.css');

.collage .event {
  grid-template-columns: repeat(auto-fill, minmax(min(80%, 18rem), 1fr));
}
.collage .event-title {
  grid-column: span 1;
  background-color: white;
  font-size: 36px;
  font-style: normal;
}
.collage .profile {
  grid-column: span 1;
  aspect-ratio: 1.9;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  background-image: none;
  border: 1px solid var(--fg);
  overflow: hidden;
}
.collage .profile-img {
  padding: 18.75%;
  max-width: 62.5%;
  max-height: 62.5%;
}
.collage .name {
  position: static;
  height: 100%;
  padding-inline: 0.75rem;
  display: grid;
  place-items: center start;

  background-image: none;
  --bg: var(--gray-100);
  --fg: var(--gray-900);
  background-color: var(--bg);
  box-shadow: 0px 0px 20px 0px #272f4077;

  /* Theres a thin black underline for some reason, this is just to cancel it out */
  text-decoration: underline;
  text-decoration-color: var(--bg);
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.25em;
}
</style>

<script setup>
const schoolsUnordered = [
  {country: 'Brunei', name: 'Centre for the Development of Gifted and Talented Education (EDGE), Ministry of Education, Brunei Darussalam'},
  {country: 'Cambodia', name: 'The Angkor Intellectual Academy'},
  {
    country: 'Cambodia',
    name: 'New Generation School Preah Sisowath High School',
  },
  {country: 'Taiwan', name: 'Taipei First Girls High School'},
  {
    country: 'Taiwan',
    name: 'Taipei Municipal Chien Kuo High School',
  },
  {country: 'Hong Kong', name: "Diocesan Girls' School"},
  {country: 'Indonesia', name: 'SMA Negeri 4 Denpasar High School'},
  {country: 'Indonesia', name: 'SMA Santa Laurensia Alam Sutera'},
  {
    country: 'Japan',
    name: 'Toyama Prefectural Toyama Chubu Senior High School',
  },
  {country: 'Malaysia', name: 'Chung Ling High School Penang'},
  {country: 'Malaysia', name: 'Sekolah Sultan Alam Shah'},
  {country: 'Singapore', name: 'Anglican High School'},
  {country: 'Singapore', name: "CHIJ St. Nicholas Girls' School"},
  {country: 'Singapore', name: "CHIJ St. Theresa's Convent"},
  {country: 'Singapore', name: 'Clementi Town Secondary School'},
  {country: 'Singapore', name: "Crescent Girls' School"},
  {country: 'Singapore', name: 'Dunman High School'},
  {country: 'Singapore', name: 'Hwa Chong Institution'},
  {country: 'Singapore', name: "Methodist Girls' School"},
  {country: 'Singapore', name: 'Nan Chiau High School'},
  {country: 'Singapore', name: "Nanyang Girls' High School"},
  {country: 'Singapore', name: 'National Junior College'},
  {country: 'Singapore', name: 'NUS High School of Math and Science'},
  {country: 'Singapore', name: "Raffles Girls' School (Secondary)"},
  {country: 'Singapore', name: 'Raffles Institution'},
  {country: 'Singapore', name: 'River Valley High School'},
  {
    country: 'Singapore',
    name: 'School of Science and Technology, Singapore',
  },
  {country: 'Singapore', name: "St Joseph's Institution"},
  {country: 'Singapore', name: "St Margaret's School (Secondary)"},
  {country: 'Singapore', name: 'Tanjong Katong Secondary School'},
  {country: 'Singapore', name: 'Temasek Junior College'},
  {country: 'Singapore', name: 'Victoria Junior College'},
  {country: 'Singapore', name: 'Xinmin Secondary School'},
  {country: 'Singapore', name: 'Zhonghua Secondary School'},
  {country: 'Thailand', name: 'Kamnoetvidya Science Academy'},
  {
    country: 'The Philippines',
    name: 'Philippine Science High School - Main Campus',
  },
  {
    country: 'United Kingdom',
    name: 'Canborne Science & International Academy',
  },
  {country: 'United States of America', name: 'Staples High School'},
  {country: 'Vietnam', name: 'Reigate Grammar School Vietnam'},
  {
    country: 'Mainland China',
    name: 'The High School Affiliated to the Southern University of Science and Technology (SUSTech)',
  },
];

const aggregatedData = schoolsUnordered.reduce((result, item) => {
  const country = item.country;
  if (!result[country]) {
    result[country] = {country, schools: []};
  }
  result[country].schools.push({name: item.name, image: item.image});
  return result;
}, {});

// Convert the aggregated data object back to an array
const schools = Object.values(aggregatedData).sort((a, b) =>
  a.country.localeCompare(b.country),
);

console.log(schools);
</script>
