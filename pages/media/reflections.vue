<template>
  <div>
    <Masthead>
      <h1>Reflections</h1>
    </Masthead>
    <div
      style="position: relative; width: 100%; min-height: 300px; display: block"
    >
      <div class="title-left">
        <span class="title-text">Day 1</span>
      </div>
    </div>

    <div
      style="position: relative; width: 100%; min-height: 300px; display: block"
    >
      <div class="title-right">
        <span class="title-text">Day 2</span>
      </div>
    </div>
  </div>
</template>

<style>
.masthead::before {
  color: var(--bg);
  background-image: url("/images/mediabg.webp");
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

#body#body {
  max-width: none;
}
</style>

<style scoped>
.title-left {
  display: block;
  position: absolute;
  left: 0;
  width: 30%;
  height: 75px;
  background-color: var(--primary-100);
  margin-right: 70%;
  border-radius: 25px;
  border: 2px solid black;
  float: left;
}
.title-right {
  display: block;
  position: absolute;
  right: 0;
  width: 30%;
  height: 75px;
  background-color: var(--primary-100);
  margin-left: 70%;
  border: 2px solid black;
  border-radius: 25px;
  float: right;
}

.title-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-weight: bold;
  font-size: 22px;
}
</style>
