<template>
  <div class="home">
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 轮播图 -->
    <mySwiper></mySwiper>
    <!-- banner广告图 -->
    <!-- <img src="http://img61.ddimg.cn/upload_img/00670/bb/1242y524hjjj-1566306785.jpg" alt="" class="banner"> -->
    <!-- 列表图 -->

  </div>
</template>
<script> 
import Search from "./components/search"
import mySwiper from "./components/swiper"
// import GetLists from "./components/getLists"
// import PinLists from "./components/pinLists"

export default {
  components: {
    Search,mySwiper
    // Myswiper,GetLists,PinLists
  }
};
</script>
<style scoped>
  .home {
    padding-bottom:  110px;
  }
  .banner {
    width: 100%;
  }
</style>