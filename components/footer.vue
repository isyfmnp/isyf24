<template>
  <div class="footer-wrapper">
    <div class="footer">
      <section class="stamp">
        <img class="logo" src="/icon_dark.png" alt="ISYF Logo" />

        <div class="credits">
          <span class="copyright">
            © International Science Youth Forum 2024. All rights reserved.
          </span>

          <p>Made with ♡ by Tang Xuyuan and Nguyen Thien Minh Tuan</p>
          <p>Special thanks to Studio Ardent for photos & video</p>

          <p style="font-style: italic">
            Any advice and information found on the pages are solely for the
            event and educational purposes only. Information related to the
            speakers are displayed with their consent.
          </p>
        </div>
      </section>

      <section>
        <h1>ORGANISERS</h1>
        <div class="organizers">
          <img src="/images/logos/moe_logo.png" alt="Ministry of Education" />
          <img src="/images/logos/hc_logo.png" alt="Hwa Chong Institution" />
        </div>
      </section>

      <div class="footer-columns">
        <section>
          <h1 class="header">Socials</h1>
          <div class="contact-list">
            <a
              class="item"
              href="https://www.instagram.com/isyf.2024/"
              target="_blank"
            >
              <InstagramIcon /><span class="full-social">@isyf.2024</span>
            </a>
            <a
              class="item"
              href="https://www.youtube.com/channel/UCs9CbJcxC2x8OPYiNx5QDTg"
              target="_blank"
            >
              <YoutubeIcon /><span class="full-social">@isyfsg</span>
            </a>
          </div>
        </section>

        <section>
          <h1 class="header">Contact Us!</h1>
          <div class="contact-list">
            <div class="contact">
              <span class="material-icons-outlined">mail</span>
              <a href="mailto:reach_isyf@hci.edu.sg" target="_blank"
                ><span class="full-social">reach_isyf@hci.edu.sg</span></a
              >
            </div>
            <div class="contact">
              <span class="material-icons-outlined">call</span>
              <a href="tel:+6564683955" target="_blank"
                ><span class="full-social">+65 6468 3955</span></a
              >
            </div>
            <div class="contact">
              <span class="material-icons-outlined">fax</span>
              <a href="fax:+6567695857" target="_blank"
                ><span class="full-social">+65 6769 5857</span></a
              >
            </div>
            <div class="contact">
              <span class="material-icons-outlined">location_on</span>
              <span class="full-social"
                >661 Bukit Timah Road, Singapore 269734</span
              >
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========== WRAPPER ========== */
.footer-wrapper {
  background-color: var(--primary-900);
  margin-bottom: -10vh;
  padding-bottom: 10vh;
  overflow-x: hidden;
}
.footer {
  max-width: var(--outer-width);
  padding: 3rem 2rem 1rem;
  margin: 0 auto -2rem;

  --fg: var(--bg);
  color: var(--fg);
  font-size: calc(var(--fs) - 2px);
}

/* ========== COLUMNS ========== */
.footer-columns {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  margin-bottom: 3.5rem;
}
.footer-columns section {
  padding: 0;
  margin: 0;
}
@media screen and (min-width: 600px) {
  .footer-columns {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* ========== GENERAL STYLING ========== */
a,
h1 {
  color: var(--fg);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

section {
  margin-block: 1rem;
}

h1,
.copyright {
  display: block;
  font-size: var(--fs);
  font-weight: 600;
  margin-block: 1rem;
}
h1 {
  font-family: var(--font-display);
}
.header {
  text-transform: uppercase;
}
p {
  margin-block: 0.875rem;
}

/* ========== STAMP ========== */
.stamp {
  display: grid;
  align-self: center;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media screen and (min-width: 600px) {
  .stamp {
    display: flex;
  }
  .logo {
    padding: 1rem;
  }
  .credits {
    grid-column: span 2;
  }
}

.logo {
  height: 7rem;
  width: 7rem;
}

/* ========== ORGANIZERS ========== */
.organizers {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  place-items: start;
}
@media screen and (min-width: 600px) {
  .organizers {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.organizers img {
  width: min(calc(100% - 2rem), 11rem);
  background-color: white;
  border-radius: 8px;
}

/* ========== SOCIALS & CONTACTS ========== */
.item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.contact {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.item :deep(svg) {
  fill: var(--fg);
  height: 1em;
  width: 1em;
  padding: 4px;
  transform: translateY(1px);
}
.contact .material-icons-outlined {
  display: block;
  width: 1.25em;
  font-size: 1.25em;
}

@media screen and (max-width: 600px) {
  .full-social {
    display: none;
  }
  .contact-list {
    flex-direction: row;
  }
  .contact {
    gap: 0;
  }
}
</style>

<script setup>
import InstagramIcon from "./icons/instagram.vue";
import YoutubeIcon from "./icons/youtube.vue";
</script>
