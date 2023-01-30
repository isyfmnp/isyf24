<template>
  <div class="footer">
    <hr class="footer-top" />

    <section class="links">
      <div>
        <h2>Contact Information</h2>
        <ul>
          <li>
            <span class="light">E: </span>
            <a href="mailto:t.xuyuan@gmail.com" target="_blank"
              >t.xuyuan@gmail.com</a
            >
          </li>
          <li>
            <span class="light">E: </span>
            <a href="mailto:191519R@student.hci.edu.sg" target="_blank"
              >191519R@student.hci.edu.sg</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h2>Past Experience</h2>
        <ul>
          <li>
            <NuxtLink to="/projects/garuda-robotics">Garuda Robotics</NuxtLink>
          </li>
          <li><NuxtLink to="/projects/musicalrooms">MusicalRooms</NuxtLink></li>
          <li>
            <NuxtLink to="/projects/aquarium-insider"
              >Aquarium Insider</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/projects/trace-together-alternative"
              >Trace Together Alternative</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/projects/monster-melancholy"
              >Monster Melancholy</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <h2>Socials</h2>
        <ul>
          <li>
            <a href="https://github.com/txuyuan" target="_blank"
              ><IconGithub />Github</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/t.xuyuan/" target="_blank"
              ><IconInstagram />Instagram</a
            >
          </li>
        </ul>
      </div>
    </section>

    <section class="copyright">
      <nuxt-img
        preset="default"
        src="/images/xuyuan_icon.png"
        class="xuyuan-icon"
        alt=""
      />
      <div>
        © 2023 Tang Xuyuan.
        <br />
        Licensed under MIT License.
        <br />
        Made with love in Singapore.
      </div>
    </section>
  </div>
</template>

<style scoped>
.footer {
  max-width: var(--content-width);
  padding: 4rem;
  margin: 0 auto;
}
.footer-top {
  margin: 2rem -2rem;
}

h2 {
  font-size: 20px;
}
p {
  margin: 0.1rem;
}
ul {
  list-style: none;
  padding-left: 0;
}
ul > li {
  margin-block: 0.75rem;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 0;
}
.links .light {
  color: var(--fg-secondary);
}
.links svg {
  margin-right: 0.25rem;
}

.copyright {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin: 1rem 0 0;
  gap: 1rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.7;
}
.copyright .xuyuan-icon {
  border-radius: 50%;
  border: 1px solid var(--fg-secondary);
  --size: clamp(37px, 4.5vw, 52px);
  width: var(--size);
  height: var(--size);
}

@media screen and (min-width: 800px) {
  .footer-top {
    margin: 6rem -2rem;
  }
  .links {
    flex-direction: row;
    padding-right: 2rem;
    margin: 0.5rem 0;
  }
  .copyright {
    margin: 4rem 0 0;
  }
}
</style>
