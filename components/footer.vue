<template>
  <div class="footer">
    <hr />

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
        <h2>Projects</h2>
        <ul></ul>
      </div>
    </section>

    <section class="copyright">
      <img src="~/assets/images/xuyuan_icon.png" class="xuyuan-icon" alt="" />
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
}
hr {
  margin: 6rem -2rem;
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

.links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
}
.links .light {
  color: var(--fg-secondary);
}

.copyright {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin: 2rem 0;
  gap: 1rem;
  color: var(--fg-secondary);
  font-size: 14px;
  line-height: 1.7;
}
.copyright .xuyuan-icon {
  border-radius: 50%;
  border: 1px solid var(--fg-secondary);
  --size: clamp(37px, 4.5vw, 52px);
  width: var(--size);
  height: var(--size);
}
</style>
