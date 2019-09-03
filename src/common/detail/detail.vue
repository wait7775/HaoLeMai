<template>
  <div class="detail">
    <!-- ---------头部 --------------->
    <Header></Header>
    <!-- ---------静态轮播图 ---------->
    <Static></Static>
    <!-- ---------商品描述----- ------->
    <Describe></Describe>
    <!-- ---------颜色尺码----- ------->
    <colorSize></colorSize>
    <!--=------------- logo详情--------------- -->
    <logoDetail></logoDetail>
    <!-- -------图文详情-------- -->
    <GoodsDetail></GoodsDetail>
    <!-- ----------------底部========= -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header"
import Static from "./components/staticSwiper"
import Describe from './components/describe'
import colorSize from './components/colorSize'
import logoDetail from './components/logoDetail'
import GoodsDetail from './components/goodsDetail'
import Footer from './components/footer'
export default {
  components: {
    Header,Static,Describe,colorSize,logoDetail,GoodsDetail,Footer
  }
};
</script>
<style>

.mintui{
  font-size: 36px;
}

</style>
<style scoped>
.detail{
    padding-bottom: 100px;
    background: #fff;
}
</style>