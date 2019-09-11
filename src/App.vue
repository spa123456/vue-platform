<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
};
</script>
<style lang="less">
body,
html {
  padding: 0;
  margin: 0;
  height: 100vh;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;

}

::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
