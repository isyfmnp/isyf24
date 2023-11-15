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
  grid-template-columns: repeat(auto-fill, minmax(min(80%, 18rem), 1fr));
}
.collage .event-title {
  grid-column: span 1;
  background-color: white;
  font-size: 32px;
  font-style: normal;
}
.collage .profile {
  --bg: var(--gray-900);
  grid-column: span 1;
  aspect-ratio: 1.9;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  background-image: none;
}
.collage .profile-img {
  padding: 18.75%;
  max-width: 62.5%;
  max-height: 62.5%;
}
.collage .name {
  position: static;
  height: 100%;
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
  font-size: 16px;
  font-weight: 500;
}
</style>

<script setup>
const schoolsUnordered = [
  {
    country: "Singapore 🇸🇬",
    name: "Anglican High School",
    image: "/images/profiles/schools/39.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "CHIJ St. Nicholas Girls' School",
    image: "/images/profiles/schools/1.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "CHIJ St. Theresa's Convent",
    image: "/images/profiles/schools/2.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Clementi Town Secondary School",
    image: "/images/profiles/schools/4.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Dunman High School",
    image: "/images/profiles/schools/5.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Hwa Chong Institution",
    image: "/images/profiles/schools/6.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Methodist Girls' School",
    image: "/images/profiles/schools/9.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Nan Chiau High School",
    image: "/images/profiles/schools/10.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "National Junior College",
    image: "/images/profiles/schools/12.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Nanyang Girls' High School",
    image: "/images/profiles/schools/13.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "NUS High School of Math & Science",
    image: "/images/profiles/schools/38.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Raffles Girls' School",
    image: "/images/profiles/schools/16.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Raffles Institution",
    image: "/images/profiles/schools/17.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "River Valley High School",
    image: "/images/profiles/schools/18.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "St. Joseph's Institution",
    image: "/images/profiles/schools/21.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "St. Margaret's Secondary School",
    image: "/images/profiles/schools/23.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "School of Science and Technology, Singapore",
    image: "/images/profiles/schools/25.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Tamasek Junior College",
    image: "/images/profiles/schools/26.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Tanjong Katong Secondary School",
    image: "/images/profiles/schools/28.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Victoria Junior College",
    image: "/images/profiles/schools/29.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Zhonghua Secondary School",
    image: "/images/profiles/schools/30.webp",
  },
  {
    country: "Singapore 🇸🇬",
    name: "Xinmin Secondary School",
    image: "/images/profiles/schools/47.webp",
  },
  {
    country: "Australia 🇦🇺",
    name: "Brisbane Girls Grammar School",
    image: "/images/profiles/schools/40.webp",
  },
  {
    country: "Brunei 🇧🇳",
    name: "Ministry of Education, Brunei Darussalam",
    image: "/images/profiles/schools/37.webp",
  },
  {
    country: "China 🇨🇳",
    name: "High School Affliated to Southern University of Science & Technology (HSAS)",
    image: "/images/profiles/schools/.webp",
  },
  {
    country: "Chinese Taipei 🇹🇼",
    name: "Taipei First Girls' High School",
    image: "/images/profiles/schools/.webp",
  },
  {
    country: "Chinese Taipei 🇹🇼",
    name: "Taipei Municipal Jianguo High School",
    image: "/images/profiles/schools/27.webp",
  },
  {
    country: "Hong Kong SAR 🇭🇰",
    name: "Diocesan Girls' School",
    image: "/images/profiles/schools/42.webp",
  },
  {
    country: "Indonesia 🇮🇩",
    name: "Centre for Young Scientists, Surya Institute",
    image: "/images/profiles/schools/.webp",
  },
  {
    country: "Indonesia 🇮🇩",
    name: "SMA Negeri 4 Denpasar High School",
    image: "/images/profiles/schools/22.webp",
  },
  {
    country: "Japan 🇯🇵",
    name: "National Institution of Technology (KOSEN), Yonago College",
    image: "/images/profiles/schools/11.webp",
  },
  {
    country: "Malaysia 🇲🇾",
    name: "Penang Chung Ling High School",
    image: "/images/profiles/schools/32.webp",
  },
  {
    country: "Malaysia 🇲🇾",
    name: "Sekolah Sultan Alam Shah, Putrajaya",
    image: "/images/profiles/schools/19.webp",
  },
  {
    country: "The Philippines 🇵🇭",
    name: "Philippine Science High School Main Campus",
    image: "/images/profiles/schools/14.webp",
  },
  {
    country: "Republic of Korea 🇰🇷",
    name: "Korea Science Academy of KAIST",
    image: "/images/profiles/schools/44.webp",
  },
  {
    country: "Thailand 🇹🇭",
    name: "Kamnoetvidya Science Academy",
    image: "/images/profiles/schools/.webp",
  },
  {
    country: "Cambodia 🇰🇭",
    name: "The Angkor Intellectual Academy",
    image: "/images/profiles/schools/.webp",
  },
  {
    country: "Cambodia 🇰🇭",
    name: "New Generation School Preah Sisowath High School",
    image: "/images/profiles/schools/46.webp",
  },
  {
    country: "United Kingdom 🇬🇧",
    name: "Camborne Science and International Academy",
    image: "/images/profiles/schools/41.webp",
  },
  {
    country: "United States of America 🇺🇸",
    name: "Loudoun County Academy of Science",
    image: "/images/profiles/schools/45.webp",
  },
  {
    country: "Vietnam 🇻🇳",
    name: "Hanoi-Amsterdam High School for the Gifted",
    image: "/images/profiles/schools/43.webp",
  },
];

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
