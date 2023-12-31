[warn] --jsx-bracket-same-line is deprecated.
[warn] Ignored unknown option --loglevel=error. Did you mean --log-level?
[warn] Ignored unknown option --stdin.
<template>
  <div>
    <h1>Documents</h1>

    <form
      v-if="!authenticated"
      @submit.prevent="passwordSubmit"
      @input="incorrect = false"
      :class="{incorrect: incorrect}"
      class="dir-password"
    >
      <label class="password-label" for="password"
        >Please enter password:</label
      >
      <div class="password-wrapper">
        <input
          :type="shown ? 'text' : 'password'"
          id="password"
          name="password"
          placeholder="Password..."
        />
        <span
          class="eye material-icons-outlined"
          @click="shown = !shown"
          ><span v-if="!shown">visibility</span
          ><span v-else>visibility_off</span></span
        >
      </div>
      <input class="submit-btn" type="submit" value="Go" />
    </form>

    <div class="directory button-row" v-else>
      <a v-for="file in files" class="btn" :href="file.url" target="_blank">
        <span class="icon material-icons-outlined">description</span>
        {{ file.name }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.dir-password {
  display: block;
  margin-block: 2rem;
}
.password-label {
  display: block;
  margin-block: 0.25rem;
  font-weight: 500;
}
.password-wrapper {
  display: flex;
  align-items: center;
}
#password {
  display: inline-block;
  width: calc(100% - var(--page-margin) - 0.5rem);
  height: 1.25rem;
  margin-block: 0.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid var(--gray-900);
  border-radius: 6px;
  outline: none;

  font-size: 16px;

  box-shadow: 0px 0px 0px 0px black;
  transition:
    box-shadow 125ms,
    color 125ms;
}
.eye {
  margin-left: -2.5rem;
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  user-select: none;
}
#password:focus {
  box-shadow: 0px 0px 0px 3px hsla(var(--primary-500-hsla), 75%);
  color: var(--primary);
}
.incorrect #password {
  box-shadow: 0px 0px 0px 2px var(--red);
  color: var(--red);
}
.submit-btn {
  background-color: var(--primary);
  color: var(--gray-100);
  border-radius: 6px;
  padding: 0.75rem 2rem;
  margin-block: 0.375rem;
}

.link {
  display: block;
}
.button-row {
  width: 100%;
  --fg: var(--primary);
  margin-block: 2rem;
}
.button-row .btn {
  margin-block: -1px;
  padding-block: 0.5rem;
  padding-inline: 0.25rem;
  border-block: 1px solid var(--gray-300);

  text-decoration: none;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.375rem;
}
</style>

<script setup>
import {ref} from 'vue';
import crypto from 'crypto-js';

const authenticated = ref(false);
const incorrect = ref(false);
const files = ref([]);
const shown = ref(false);

const passwordHash =
  '166ab54695c086af25f70ff86ea0d2b26ea4c2096f593e16ecc403de3098b707';
const filesDigest =
  'U2FsdGVkX18Z992Ka2/9OPkhcfwTfPEECItpmK5cLUkwDI/MnF8ik83Spub30c79Qds1ScgJwdxJqhq7NSttOICOdt37qqX5lenRAz84yAFJBh9GnL9+8U01P9xDPyRv0nVtKXxNIC27V0zoeBrPS3KbOyCLDMxER0N7Nf5Bt3cYhJJVEAZcpqDqrX2uVBeO41grFHpw1g6s2PNGX8XbzQ+UwY7mu8wXF5yftQV9EPYtrbb+vdUKFdRPGbsssTN83sEqRcN/LLpYNzzAOaiecBAmM0EsklW2kcAP7ygR5UA=';

function passwordSubmit(event) {
  const password = event.target.elements.password.value;
  if (checkPassword(password)) {
    console.log('AUTHENTICATED!');
    authenticated.value = true;
    decryptFiles(password);
  } else {
    incorrect.value = true;
  }
}

function checkPassword(password) {
  const hash = String(crypto.SHA256(password + 'isyf2024'));
  return passwordHash === hash;
}
function decryptFiles(password) {
  const filesJson = crypto.AES.decrypt(filesDigest, password).toString(
    crypto.enc.Utf8,
  );
  files.value = JSON.parse(filesJson);
  console.log(files.value);
}
</script>
