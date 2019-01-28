<template>
  <div class="welcome-container">
    <div class="main" :class="{ 'expanded': isExpanded}" @click="onMainLogoClick">
      <span class="app-title">Little Home Cafe</span>
    </div>

    <div class="bar">
      <ul class="list-left">
        <li>This Week's Menu</li>
        <li>Recipes</li>
      </ul>
      <ul class="list-right">
        <li>Favorites</li>
        <li>What's Good?</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./WelcomePage.ts">
</script>


<style lang="scss" scoped>
.welcome-container {
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.main {
  display: flex;

  height: 500px;
  width: 500px;

  border-radius: 50%;
  border: 6px solid #000;

  background: linear-gradient(
    to bottom,
    #ce8d71,
    #d68b6a,
    #a86576,
    #575776,
    #2f2336
  );

  animation: fall 3s ease-in;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
  }

  .content {
    display: none;
  }

  &.expanded {
    width: 100vw;
    height: 100vh;

    border: 0;
    border-radius: 0;

    flex-direction: column;

    &:hover {
      cursor: default;
    }

    .app-title {
      align-self: flex-start;
    }

    .content {
      display: flex;
      height: 100%;
      margin: 15px 15px;
      background: #fff9f9;
      padding: 25px;
      font-family: consolas;
    }
  }
}

.app-title {
  align-self: center;
  width: 100%;
  text-align: center;
  opacity: 0;

  font-size: 48px;
  font-family: "Poiret One", cursive;

  animation: reveal 3s ease-in-out forwards;
}

.bar {
  position: absolute;
  height: 60px;

  opacity: 0;

  border: 3px solid lighten(black, 23%);

  background: black;
  z-index: -99;
  animation: bar-grow 3s ease-in forwards;

  margin: 0;
  padding: 0;
}

@keyframes fall {
  0% {
    margin-top: -800px;
  }
  90% {
    margin-top: 0;
  }
  95% {
    margin-top: -27px;
  }
  100% {
    margin-top: 0;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bar-grow {
  75% {
    width: 0%;
    opacity: 0;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
}

li {
  display: inline;

  padding-left: 0.75em;
  padding-right: 0.75em;
}

ul {
  display: inline-block;
  vertical-align: middle;

  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 2em;

  &.list-right {
    float: right;
    padding-right: 1.5em;
  }

  &.list-left {
    padding-left: 1.5em;
  }
}
</style>

