<template>
  <main>
    <div class="header">
      <div class="header__image"></div>
    </div>

    <div class="content">
      <header>
        <h1 class="title">Tang Xuyuan</h1>
        <p class="subtitle">Hwa Chong Institution</p>
        <p class="subtitle">4A2 - 22</p>
      </header>

      <p>
        I'm a Hwa Chong student, a choir member, a hobbyist programmer and a
        sleeper. I enjoy learning about sciences and history during lessons and
        spending time with my friends and cca-mates. I also like doing various
        programming projects in my spare time, such as this website!
      </p>

      <h2>Contact</h2>

      <ul class="contact">
        <li>
          <Link href="https://github.com/txuyuan" class="button--outline"
            ><GithubIcon />@txuyuan</Link
          >
        </li>
        <li>
          <Link href="mailto:t.xuyuan@gmail.com" class="button--outline"
            ><MailIcon />t.xuyuan@gmail.com</Link
          >
        </li>
        <li>
          <Link href="mailto:191519R@student.hci.edu.sg" class="button--outline"
            ><MailIcon />191519R@student.hci.edu.sg</Link
          >
        </li>
      </ul>

      <h2>Works & Experiences</h2>

      <NavPanel />
    </div>
  </main>
</template>

<style scoped>
@import "~/assets/css/document.css";
@import "~/assets/css/portfolio.css";

.contact {
  list-style: none;
  margin: 0;
}

.header {
  position: relative;
  /* perspective: 20px; */
  min-height: min(
    50vw,
    700px
  ); /* Prevent height expanding far beyond max content-width (1100px * 0.5) */
}
.header__image {
  position: absolute;
  width: 100%;
  height: 100%;

  background: url("~/assets/images/titleImage.jpg") center/cover no-repeat;
  filter: saturate(0.625) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.375));
  transform: scale(0.975); /* Don't wanna mess with the measurements */
  border-radius: 0.5rem;
}
/* ATM unused */
.header__text {
  position: absolute;
  top: 40%;
  left: clamp(5%, 20%, 20%);

  font-size: 2.2rem;
  color: var(--bg);
}
</style>

<script>
import { MailIcon } from "@heroicons/vue/solid";
export default {
  components: { MailIcon },
};
</script>
