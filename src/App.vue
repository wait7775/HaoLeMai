<template>
  <div id="app">
    <!-- <NavList></NavList> -->
    <!-- <home></home> -->
    <router-view />
  </div>
</template>

<script>
// import home from "@/components/home/index";

export default {
  name: "App",
  components: {
    // home
    // NavList
  }
};
</script>

<style lang="less">
html,body{
  background: #fff;
      height:100%;
      ul li{
        list-style: none;
      }
}
#app{
height:100%;
}
@import url("./assets/css/reset.css");
</style>
