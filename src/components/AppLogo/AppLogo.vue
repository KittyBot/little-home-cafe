<template>
  <div class="logo">
    <span class="roof">^</span>
    <span class="title">Little Home Cafe</span>
  </div>
</template>

<script lang="ts" src="./AppLogo.ts"></script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poiret+One|Quicksand:400,500,700");

.logo {
  font-family: "Poiret One", cursive;
  font-size: 2em;

  display: flex;
  flex-direction: column;

  margin-bottom: 45px;
}

.roof {
  font-size: 2.9em;
  margin-left: 193px;
  margin-bottom: 0;
  padding-bottom: 0;
}

.title {
  margin-top: -92px;
  margin-left: 131px;
}
</style>

