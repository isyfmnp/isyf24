<template>
  <Masthead>
    <h1>FAQ</h1>
  </Masthead>

  <div class="faq-qn" @click="change">
    <h2>Who are we?</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="50"
      width="50"
      viewBox="0 0 36 36"
      class>
      <path d="m10.5 15 7.5 7.5 7.5-7.5z"></path>
      <path d="m0 0h36v36h-36z" fill="none"></path>
    </svg>
  </div>

  <div class="faq-ans" style>
    <p>
      The ISYF student organizing committee is made up of 40 friendly, fun and
      caring facilitators from the Science Student's Research Club, SMTP-GATE
      Council and other affiliates from Hwa Chong Institution, Singapore. We are
      guided by a team of dedicated teachers from Hwa Chong Institution and
      we're excited to have you here for the first physical ISYF since the
      pandemic!
    </p>
  </div>
</template>

<style>
.masthead::before {
  color: var(--bg);
  background-image: url("/images/faqbg.webp");
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

.faq-qn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.faq-ans {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
}

.rotate-180 {
    transform: rotate(180deg);
}
</style>

<script setup>
import { ref } from 'vue'

function change() {
    var faq_questions = document.getElementsByClassName("faq-qn");

for (var i = 0; i < faq_questions.length; i++) {
  faq_questions[i].onclick = function () {
    this.children[1].classList.toggle("rotate-180");

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}
}

</script>
