<template>
  <div>
    <h1>FAQ</h1>
    <p>
      We know you're bound to have many questions about ISYF, so we compiled a
      list of the most important questions about your experience!
    </p>

    <main>
      <section
        class="section-wrapper"
        v-for="(section, title, sectionIndex) in questions"
      >
        <h2>{{ title }}</h2>
        <button
          class="expand-all"
          @click="sectionsOpen[sectionIndex] = !sectionsOpen[sectionIndex]"
          :class="{ opened: sectionsOpen[sectionIndex] }"
        >
          Expand All<span class="icon material-icons-outlined"
            >expand_more</span
          >
        </button>

        <div v-for="(answer, question) in section">
          <FAQQuestion :sectionOpen="sectionsOpen[sectionIndex]">
            <template #qn>{{ question }}</template>
            <template #ans>{{ answer }}</template>
          </FAQQuestion>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
:global(.masthead::before) {
  color: var(--bg);
  background-image: url("/images/faqbg.webp");
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

.section-wrapper {
  padding-top: 3rem;
}

h2 {
  font-family: var(--font-display);
  font-size: 32px;
  margin-block: 1rem;
}
.expand-all {
  display: flex;
  align-items: center;
  font-size: 16px;
  opacity: 0.75;
  border-bottom: 1px solid var(--fg);
}
.expand-all .icon {
  color: var(--fg);
  scale: 0.75;
  transition: transform 75ms cubic-bezier(0.77, 0, 0.175, 1);
}
.expand-all.opened .icon {
  transform: rotate(-180deg);
}
</style>

<script setup>
import FAQQuestion from "../components/faqQuestion.vue";
import { ref } from "vue";

const questions = {
  Programme: {
    "Who are we?":
      "The ISYF student organizing committee is made up of 43 friendly, fun and caring facilitators from the Student's Science Research Club and other affiliates from Hwa Chong Institution, Singapore. We are guided by a team of dedicated teachers from Hwa Chong Institution and we're excited to have you here for the 16th iteration of ISYF! ",
    "What can I look forward to?":
      "As your facilitators, we have planned an exciting array of activities, including a Science Quest and a cultural exhibition. In fact, what you have seen in the Programme Overview is just a slight preview of what you can experience here. It is our greatest hope that you'll not just take away valuable scientific insights from the forum, but also long-lasting friendships with people all over the world. ",
    "What is a typical day like?":
      "We believe the 5 days of ISYF will be an exciting and enriching experience for you. You can look forward to the cultural exhibition, learning and experiencing the vibrant and unique cultures of each and every participant from various countries. In a typical day, you can expect engaging dialogue sessions or lessons with eminent scientists in our lectures and Masterclasses, and an opportunity to visit Singapore's own industries and universities for further insight into the research culture in Singapore. Get ready for an unforgettable journey of learning and discovery!",
  },
  Accomodation: {
    "Where will I be staying?":
      "All delegates and educators will be housed at the Hwa Chong Institution Boarding School. More information of the boarding school can be found at <a href='http://www.hcibs.edu.sg' target='_blank'>http://www.hcibs.edu.sg</a>",
    "Will I be sharing rooms with other participants?":
      "Yes you will. In fact, the rooms of the boarding school that you'll be staying in are either 2 bedders or 4 bedders. Your roommates are likely to be delegates from other countries. We believe that this is an invaluable opportunity for you to form close friendships and create precious memories.",
    "Is there any laundry service available?":
      "There are self-launderette facilities (washing machines located on the ground floor of Halls B, E and G) available for usage in the boarding school. Each wash / dry takes approximately 30 minutes at a cost of 1 dollar per wash or per dry.",
    "Is there a need to bring bath towels/bed sheets?":
      "Bed sheets will be provided already upon check in to the boarding school. However, do note that you would have to bring your own bath towels and toiletries (soap, toothbrush etc.) sufficient for the course of ISYF as the Hwa Chong Institution Boarding School does not provide these.",
    "What about safety/security?":
      "The Hwa Chong Institution Boarding School is manned by security personnel throughout the day. All visitors are strictly screened before entering. The various halls of residence are also equipped with an access card system which only allows authorised entries into the halls.",
    "How much money do I need to bring to the forum?":
      "All food, programme and transportation costs are covered. You may wish to bring extra money to purchase additional items from the convenience store located in the boarding school or souvenirs and gift items.",
    "Is there Internet available in the boarding school?":
      "Yes, there is. There is wireless internet access available in the common areas.",
    "What if I have dietary requirements?":
      "If you have submitted your dietary requirements to us through email, we would have taken note of all your requests and will try our best to cater to them. Should you need to make any changes to your requirements, please do not hesitate to contact us as we wish to make your experience here as pleasant as possible.",
    "Can I call for food deliveries?":
      "Most of your meals here will be catered from reputable catering companies according to your dietary requirements. For the rest of the meals, you will be brought to local eating centres. Hence, there will be no need for you to call for external food deliveries. Additionally, we will not be allowing this for safety considerations.",
  },
};

const sectionsOpen = ref(Array(Object.keys(questions).length).fill(false));
</script>
