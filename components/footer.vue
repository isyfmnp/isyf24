<template>
  <div class="footer-wrapper">
    <div class="footer">
      <section class="stamp">
        <img class="logo" src="/images/ISYF_logo.png" alt="ISYF Logo" />

        <div class="copyright">
          <h1>
            © International Science Youth Forum 2024. All rights reserved.
          </h1>

          <p>Website by John Doe</p>

          <p>Photos by Studio Ardent and ISYF M&P Team 2024</p>

          <p>Videos by Jane Doe and John Doe</p>

          <p style="font-style: italic">
            Any advice and information found on the pages are solely for the
            event and educational purposes only. Information related to the
            speakers are displayed with their consent.
          </p>
        </div>
      </section>

      <div class="footer-columns">
        <section>
          <h1 class="header">About</h1>
          <p>
            <a href="#">Acknowledgements</a>
          </p>
          <p>
            <a href="#">Report Site Issue</a>
          </p>
        </section>

        <section>
          <h1 class="header">Our Parent Organisations</h1>
          <p>
            <a href="#">Hwa Chong Institution</a>
          </p>
          <p>
            <a href="#">Student Science Research Club (SSRC)</a>
          </p>
        </section>

        <section class="contact-list">
          <h1 class="header">Contact Us!</h1>
          <div class="contact">
            <span class="material-icons-outlined">mail</span>
            <a href="mailto:reach_isyf@hci.edu.sg">reach_isyf@hci.edu.sg</a>
          </div>
          <div class="contact">
            <span class="material-icons-outlined">call</span>
            <a href="tel:+6564683955">+65 6468 3955 </a>
          </div>
          <div class="contact">
            <span class="material-icons-outlined">fax</span>
            <a href="fax:+6567695857">+65 6769 5857</a>
          </div>
          <div class="contact">
            <span class="material-icons-outlined">location_on</span>
            661 Bukit Timah Road, Singapore 269734
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========== WRAPPER ========== */
.footer-wrapper {
  background-color: var(--primary);
}
.footer {
  max-width: var(--outer-width);
  padding: 3rem 2rem 1rem;
  margin: 0 auto -2rem;

  color: var(--bg);
  font-size: calc(var(--fs) - 2px);
}

/* ========== COLUMNS ========== */
@media screen and (min-width: 600px) {
  .footer-columns {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 0.55fr 1fr;
    margin-bottom: 3.5rem;
  }
  .footer-columns section {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 900px) {
  .footer-columns {
    grid-template-columns: 0.55fr 1fr 1fr;
  }
}

/* ========== GENERAL STYLING ========== */
a,
h1 {
  color: var(--bg);
}

section {
  margin-bottom: 3.5rem;
}

h1 {
  font-size: var(--fs);
  font-weight: 800;
  margin-block: 1.25rem;
}
.header {
  text-transform: uppercase;
}
p {
  margin-block: 0.875rem;
}

/* ========== STAMP ========== */
.stamp {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

@media screen and (min-width: 900px) {
  .stamp {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .copyright {
    width: 70%;
  }
}

.logo {
  height: 7rem;
  width: 7rem;
  padding: 1rem;
  margin-inline: 1rem;
  background-color: var(--bg);
  border-radius: 50%;

  box-shadow: 0 0 3px 0 var(--primary) inset;
}

/* ========== CONTACT LIST ========== */
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
</style>
