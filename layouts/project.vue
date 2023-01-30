<template>
  <DefaultLayout>
    <div class="project">
      <section class="masthead">
        <div class="metadata">
          <span class="type">
            <slot name="type">Project / Type</slot>
          </span>
          <span class="title">
            <slot name="title">Title - Important Information</slot>
          </span>
          <span class="role">
            <slot name="role">Software Developer</slot>
          </span>
          <span class="time">
            <slot name="time">2022</slot>
          </span>
        </div>

        <div class="description">
          <slot name="description"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.</slot
          >
        </div>
      </section>

      <section class="content">
        <slot />
      </section>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.masthead {
  display: flex;
  flex-direction: column;
  margin: 2rem 0 3rem;
  gap: 3rem;
}
.metadata span {
  display: block;
  --spacing: 2.5rem;
}

.masthead :deep(ul) {
  list-style: none;
  padding-left: 0;
}
.masthead :deep(li) {
  padding: 0.1rem 0;
}

.type {
  margin-bottom: 1.25rem;
}
.title {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: var(--spacing);
}
.role::before {
  content: "My Role";
}
.role {
  margin-bottom: var(--spacing);
  font-weight: 600;
  letter-spacing: 0.04rem;
}
.time::before {
  content: "Time Period";
}
.time {
  font-weight: 600;
  letter-spacing: 0.04rem;
}
.type,
.role::before,
.time::before {
  display: block;
  margin-bottom: 0.425rem;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: rgba(var(--fg-rgb), 0.75);
}
.description {
  line-height: 1.75rem;
  font-size: 18px;
  font-weight: 500;
  color: rgba(var(--fg-rgb), 0.7);
}

@media screen and (min-width: 800px) {
  .project {
    padding: 0 1rem;
  }
  .masthead {
    flex-direction: row;
    margin: min(20vh, 12rem) 0 5rem;
    gap: 2rem;
  }
  .metadata {
    flex: 1 1 30%;
  }
  .description {
    flex: 1 1 70%;
  }
}
@media screen and (min-width: 1200px) {
  .project {
    padding: 0 2.5rem;
  }
}
</style>

<script setup>
import DefaultLayout from "~/layouts/default.vue";
</script>
