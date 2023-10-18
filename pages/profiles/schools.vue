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
        <img class="profile-img" :src="profile.image" alt="" />
        <span class="name">{{ profile.name }}</span>
      </a>
    </section>
  </div>
</template>

<style scoped>
@import url("~/assets/css/profiles.css");

.collage .event {
  grid-template-columns: repeat(auto-fill, minmax(min(80%, 16rem), 1fr));
}
.collage .event-title {
  grid-column: span 1;
  background-color: white;
}
.collage .profile {
  --bg: var(--gray-900);
  grid-column: span 1;
  aspect-ratio: 2.1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
}
.collage .profile-img {
  padding: 18.75%;
  width: 62.5%;
  height: 62.5%;
}
.collage .name {
  position: static;
  padding-left: 0.75rem;
  text-align: left;
  display: grid;
  place-items: center start;
  box-shadow: 0px 0px 20px 0px #272f4077;
  text-decoration: underline;
  --bg: inherit;
  text-decoration-color: var(--bg);
  background-color: var(--bg);
  /* Theres a thin black underline for some reason, this is just to cancel it out */
  font-size: 17px;
}
</style>

<script setup>
const schoolsUnordered = [
  {
    country: "Singapore 🇸🇬",
    name: "Bendemeer Secondary School",
    image: "/images/profiles/schools/35.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Cedar Girls' Secondary School",
    image: "/images/profiles/schools/33.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "CHIJ St. Nicholas Girls' School",
    image: "/images/profiles/schools/1.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "CHIJ St. Theresa's Convent",
    image: "/images/profiles/schools/2.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Clementi Town Secondary School",
    image: "/images/profiles/schools/4.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Dunman High School",
    image: "/images/profiles/schools/5.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "East Spring Secondary School",
    image: "/images/profiles/schools/36.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Hwa Chong Institution",
    image: "/images/profiles/schools/6.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Loyang View Secondary SChool",
    image: "/images/profiles/schools/34.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Methodist Girls' School",
    image: "/images/profiles/schools/9.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Nan Chiau High School",
    image: "/images/profiles/schools/10.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "National Junior College",
    image: "/images/profiles/schools/12.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Nanyang Girls' High School",
    image: "/images/profiles/schools/13.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "NUS High School of Math & Science",
    image: "/images/profiles/schools/38.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Raffles Girls' School",
    image: "/images/profiles/schools/16.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Raffles Institution",
    image: "/images/profiles/schools/17.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "River Valley High School",
    image: "/images/profiles/schools/18.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "St. Joseph's Institution",
    image: "/images/profiles/schools/21.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "St. Margaret's Secondary School",
    image: "/images/profiles/schools/23.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "School of Science and Technology, Singapore",
    image: "/images/profiles/schools/25.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Singapore Chinese Girls' School",
    image: "/images/profiles/schools/31.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Tamasek Junior College",
    image: "/images/profiles/schools/26.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Tanjong Katong Secondary School",
    image: "/images/profiles/schools/28.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Victoria Junior College",
    image: "/images/profiles/schools/29.webp"
  },
  {
    country: "Singapore 🇸🇬",
    name: "Zhonghua Secondary School",
    image: "/images/profiles/schools/30.webp"
  },
  {
    country: "Australia 🇦🇺",
    name: "Presbyterian Ladies' College, Sydney",
    image: "/images/profiles/schools/15.webp"
  },
  {
    country: "Brunei 🇧🇳",
    name: "Ministry of Education, Brunei Darussalam",
    image: "/images/profiles/schools/37.webp"
  },
  {
    country: "Chinese Taipei 🇹🇼",
    name: "Taipei Municipal Jianguo High School",
    image: "/images/profiles/schools/27.webp"
  },
  {
    country: "Indonesia 🇮🇩",
    name: "SMA Negeri 4 Denpasar",
    image: "/images/profiles/schools/22.webp"
  },
  {
    country: "Japan 🇯🇵",
    name: "National Institution of Technology (KOSEN), Yonago College",
    image: "/images/profiles/schools/11.webp"
  },
  {
    country: "Malaysia 🇲🇾",
    name: "Penang Chung Ling High School",
    image: "/images/profiles/schools/32.webp"
  },
  {
    country: "Malaysia 🇲🇾",
    name: "Sekolah Sultan Alam Shah, Putrajaya",
    image: "/images/profiles/schools/19.webp"
  },
  {
    country: "Mexico 🇲🇽",
    name: "San Patricio International School",
    image: "/images/profiles/schools/24.webp"
  },
  {
    country: "The Philippines 🇵🇭",
    name: "Philippine Science High School Main Campus",
    image: "/images/profiles/schools/14.webp"
  }
]

const aggregatedData = schoolsUnordered.reduce((result, item) => {
  const country = item.country;
  if (!result[country]) {
    result[country] = { country, schools: [] };
  }
  result[country].schools.push({ name: item.name, image: item.image });
  return result;
}, {});


// Convert the aggregated data object back to an array
const schools = Object.values(aggregatedData).sort((a, b) =>
  a.country.localeCompare(b.country)
);

console.log(schools);

</script>
