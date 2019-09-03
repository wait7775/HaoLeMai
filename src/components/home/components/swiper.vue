<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <router-link to="/detail" tag="div">
        <img src="http://i.okaybuy.cn/static/eff66d760665b4a0b497b11f90e466e3.jpg" alt />
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://i.okaybuy.cn/static/6adc28cc84fb87cf1d693b28f85e18d1.gif" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://i.okaybuy.cn/static/194659daf9accf1d919ee3ba9295958c.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://i.okaybuy.cn/static/0a86d6d1a06df3c178303e79710e8593.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://i.okaybuy.cn/static/828511402547e764925df2b7f3b62382.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://i.okaybuy.cn/static/7eeb9fd7752263a2c3c55812c3a90cb9.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {};
</script>
<style>
.mint-swipe-indicator{
  width: 15px;
  height: 15px;

}
.mint-swipe-indicators{
  bottom: 15px;
}
</style>
<style scoped>
.swiper {
  height: 300px;
}
.swiper img {
  width: 100%;
}

</style>
