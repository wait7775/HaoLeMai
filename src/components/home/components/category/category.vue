<template>
  <div class="category">
    <router-link to="list" tag="div">
      <img src="http://i.okaybuy.cn/static/2a8d42fff279cce99eafbed749675dd8.jpg" alt="">
    </router-link>
    <router-link to="list" tag="div">
      <img src="http://i.okaybuy.cn/static/91213d4e2a8fe4361947b53c7f9e30d4.png" alt="">
      <img src="http://i.okaybuy.cn/static/fa4b22748b3b99be440e6ee0fdd372ac.png" alt="">
    </router-link>
    <router-link to="brand" tag="div">
      <img src="http://i.okaybuy.cn/static/9ced09fc8d5b2ad7e5612066a9c43982.gif" alt="">
    </router-link>
    <router-link to="ticket" tag="div">
      <img src="http://i.okaybuy.cn/static/78682c902e0d105619ec59fbe67ad79f.jpg" alt="">
    </router-link>
    <router-link to="welfare" tag="div">
      <img src="http://i.okaybuy.cn/static/2b15eb4918c616744b134c346ad7cb97.jpg" alt="">
    </router-link>
    <router-link to="global" tag="div">
      <img src="http://i.okaybuy.cn/static/f2759323cf2f20ae14d81fdcd7cd3abc.jpg" alt="">
    </router-link>  
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.category{
  width: 100%;
  /* margin-top: 20px; */
  display:flex;
  flex-wrap: wrap;
}
.category div:nth-child(1),.category div:nth-child(2){
  width: 50%;
}
.category div:nth-child(3),.category div:nth-child(4),.category div:nth-child(5),.category div:nth-child(6){
  width: 25%;
}
.category div img{
  width: 100%;
  display: block;
}
.category div:nth-child(2) img{
  width: 50%;
  float: left;
}

</style>
