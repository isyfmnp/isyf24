<template>
  <main>
    <img src="~/assets/images/gClassroom.jpg" alt="" class="header__image" />

    <div class="content">
      <header>
        <h1 class="title">Academics</h1>
        <p class="subtitle">4th year Student, 7 subjects + PW</p>
      </header>

      <p>
        The 4th year is always considered amongst the more stressful, if not
        difficult years in high school. It's the last year in high school and we
        have our Higher Chinese 'O' Levels In addition to the results being
        quite impactful in our tertiary/further education, it's also our last
        year in high school before being plunged into the hectic environment of
        JC, meaning the free time afforded to extra learning and non-academic
        pursuits is greatly lessened.
      </p>

      <h2>Content</h2>
      <p>
        Although the focus is more on revision than on new learning and hence
        the pace of learning is slower than the 3rd year, most subjects continue
        to involve the previous year's curriculum and hence in our assessments.
        We cannot simply ignore previous curriculum and must continue to stay
        familiar and apply it in the curriculum that is taught now.
      </p>

      <h2>Complexity</h2>
      <section class="hybrid-para">
        <div class="hybrid-para__image">
          <img
            src="~/assets/images/macarthurHead.jpg"
            alt="Some code behind our project"
          />
          <span class="caption">General Douglas MacArthur</span>
        </div>
        <div class="hybrid-para__text">
          <p>
            On the other hand, many subjects do take deeper dives into content,
            applying previous knowledge to understand more and do more, such as
            Calculus and American history. For me, this is simultaneously
            frustrating and fascinating, more challenging for assessments but
            more interesting to learn about.
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
@import "~/assets/css/document.css";
@import "~/assets/css/portfolio.css";
</style>

<script>
export default {
  head() {
    return {
      title: "Academic",
    };
  },
};
</script>
