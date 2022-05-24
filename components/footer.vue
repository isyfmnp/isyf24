<template>
  <div class="footer--external">
    <div class="footer--internal">
      <span class="footer__headers">
        If you face any problems, feel free to contact us at:
        <a href="mailto:monstermelancholy@gmail.com"
          >monstermelancholy@gmail.com</a
        >
      </span>

      <br />

      <span class="footer__headers">
        See our source code on
        <a href="https://github.com/HCI-Pro-ductions/Monster_Melancholy"
          >Github</a
        >
      </span>

      <hr />

      <h1>Note</h1>

      By downloading this game, you agree not to:
      <ul>
        <li>
          Cheat
          <em
            >(including but not limited to manipulating the game's data
            files)</em
          >
        </li>
        <li>Attempt to reverse-engineer or decompile the game</li>
      </ul>

      If these rules are broken, you may face an auto-<strong>ban</strong> of
      your account
    </div>
  </div>
</template>

<style scoped>
.footer--external {
  position: sticky;
  background-color: var(--bg-900);
  margin: 8rem 0 0;
  padding: 3rem 1.5rem;
  font-size: 14px;
}
.footer--internal {
  margin: 0 auto;
  max-width: var(--content-width);
}
.footer__headers {
  line-height: 1.2rem;
}

h1 {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1rem;
}
hr {
  margin: 3rem -0.5rem;
  border: 1px solid var(--bg-800);
}
a {
  font-style: normal;
  color: var(--primary-600);
}
a:hover {
  color: var(--primary-500);
  text-decoration: underline;
}
ul {
  list-style-position: inside;
}
</style>
