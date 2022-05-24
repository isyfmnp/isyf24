<template>
  <div class="title">
    <div class="title__image"></div>
  </div>

  <hr />

  <div class="content">
    <h1 class="name-title">Tang Xuyuan</h1>
    <span class="name-subtitle">Hwa Chong Institution</span>
    <br />
    <span class="name-subtitle">4A2 - 22</span>

    <hr />

    <p class="intro">
      I'm a Hwa Chong student, a choir member, a hobbyist programmer and a
      sleeper.
      I enjoy learning about sciences and history during lessons and spending time with my friends and cca-mates.
      I also like doing various programming projects in my spare time, such as this website!
    </p>

    <div class="content-page">
      
    </div>
 
 </div>
</template>

<style scoped>
@import "~/assets/css/document.css";

.title {
  position: relative;
  /* perspective: 20px; */
  min-height: min(50vw, 700px); /* Prevent height expanding far beyond max content-width (1100px * 0.5) */
}
.title__image {
  position: absolute;
  width: 100%;
  height: 100%;

  background: url("~/assets/images/titleImage.jpg") center/cover no-repeat;
  filter: saturate(0.625) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.375));
  transform: scale(0.975); /* Don't wanna mess with the measurements */
  border-radius: 0.5rem;
}
/* ATM unused */
.title__text {
  position: absolute;
  top: 40%;
  left: clamp(5%, 20%, 20%);

  font-size: 2.2rem;
  color: var(--bg);
}

.name-title {
  text-align: left;
  font-family: "Libre Baskerville";
}
.name-subtitle {
  font-style: italic;
  font-weight: light;
}

.content {
  display: block;
  margin: 1rem 2.5rem;
}

.intro {
  line-height: 1.75;
}
</style>

<script></script>
