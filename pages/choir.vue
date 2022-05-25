<template>
  <main>
    <img
      src="~/assets/images/ccaTogether.jpg"
      alt="Choir photo"
      class="header__image"
    />

    <hr />

    <div class="content">
      <h1 class="title">My Choir Experience</h1>
      <span class="subtitle">4th year Senior, Vice Section Head</span>

      <hr />

      <p></p>

      <hr />

      <h2>Teaching juniors</h2>
      <section class="hybrid-para">
        <div class="hybrid-para__text">
          <p>
            Me and the section leader share the responsibility of teaching all
            the boys in our section (tenor 2), forming a quarter of the choir
            and involving boys from sec 1 to sec 4. We face all sorts of
            challenges, from the technical kind to just getting the younger boys
            to pay attention
          </p>
        </div>
        <div class="hybrid-para__image">
          <img
            src="~/assets/images/ccaPractice.jpg"
            alt="Choir practice session"
          />
        </div>
      </section>

      <hr />

      <h2>Preparing for Performances</h2>
      <section class="hybrid-para">
        <div class="hybrid-para__text">
          <p>
            The COVID-19 pandemic cancelled all of our live performances in the
            last 2 years, restricting us to one online performance. But now, we
            have an in-person performance scheduled for October. So, we have
            been preparing for the last year for this, learning new songs and
            perfecting our technique
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
@import "~/assets/css/portfolio.css";
</style>

<script>
export default {
  head() {
    return {
      title: "CCA - Choir",
    };
  },
};
</script>
