<template>
  <div class="footer">
    <section>LOGO</section>

    <section>
      <h1>© International Science Youth Forum 2024. All rights reserved.</h1>

      <p>Website by John Doe</p>

      <p>Photos by Studio Ardent and ISYF M&P Team 2024</p>

      <p>Videos by Jane Doe and John Doe</p>

      <p style="font-style: italic; ">
        Any advice and information found on the pages are solely for the event
        and educational purposes only. Information related to the speakers are
        displayed with their consent.
      </p>
    </section>

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
</template>

<style scoped>
/* ========== WRAPPER ========== */
.footer {
  max-width: var(--content-width);
  padding: 3rem 2rem 1rem;
  margin: 0 auto -2rem;

  background-color: #334;
  color: var(--bg);
}


/* ========== GENERAL STYLING ========== */
a {
  color: var(--bg);
}

section {
  margin-bottom: 3.5rem;
}

h1 {
  font-size: var(--fs);
  font-weight: 800;
  margin-bottom: 1.25rem;
}
.header {
  text-transform: uppercase;
}
p {
  margin-block: 0.875rem;
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
