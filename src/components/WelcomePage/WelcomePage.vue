<template>
  <div class="welcome-container">
    <div class="main" :class="{ 'expanded': isExpanded}" @click="onMainLogoClick">
      <span class="app-title">
        <AppLogo/>
      </span>
      <span class="content"></span>
    </div>

    <div class="bar"></div>
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

.content {
  display: none;
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
      align-self: center;

      height: 100%;
      width: 90%;

      margin: 15px 15px;
      background: #fff9f9;

      font-family: "Poiret One", cursive;
    }
  }
}

.app-title {
  align-self: center;
  //   width: 100%;
  //   text-align: center;
  opacity: 0;

  //   font-size: 48px;
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
</style>

