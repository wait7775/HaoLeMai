<template>
  <div class="home">
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 轮播图 -->
    <mySwiper></mySwiper>
    <!-- 预告herald（秋季上新 夏末清仓  打折衣服） -->
  <Category></Category>  
   <Herald></Herald>
    <!-- 列表图 -->
    <Navbar></Navbar>
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 回顶部 -->
    <ScrollTop></ScrollTop>

   
    <!-- 底部导航栏 -->
    <NavList></NavList>
    <router-view />
  </div>
</template>
<script>
import Search from "./components/search";
import mySwiper from "./components/swiper";
import NavList from "@/common/navList";
import Category from "@/components/home/components/category/category";
// import GetLists from "./components/getLists"
// import PinLists from "./components/pinLists"
import Herald from "./components/herald";
import Navbar from "./components/navbar";
import Footer from "@/common/footer";
import ScrollTop from "./components/scrolltop";

export default {
  components: {
    Search,
    mySwiper,
    Category,
    NavList,
    Herald,
    Navbar,
    Footer,
    ScrollTop
    // Myswiper,GetLists,PinLists
  }
};
</script>
<style scoped>
.home {
  padding-bottom: 110px;
}
.banner {
  width: 100%;
}
</style>