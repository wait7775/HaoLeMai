<template>
  <div id="app">
    <NavList></NavList>
    <router-view />
  </div>
</template>

<script>
import NavList from "@/common/navList";

export default {
  name: "App",
  components: {
    NavList
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import url("./assets/reset.css");
</style>
