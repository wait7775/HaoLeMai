<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 08:58:38
 * @LastEditTime: 2019-08-30 16:14:47
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="cart">
  <!-- 头部 -->
   <Header></Header>
   <!-- 空购物车 -->
   <Emptycart></Emptycart>
   <!-- 已加入商品的购物车 -->
   <!-- <Shopcar></Shopcar> -->
   <!-- 为你推荐 -->
   <Recommend></Recommend>
</div>
</template>
<script>
import Header from './components/header'
import Emptycart from './components/emptyCart'
// import Shopcar from './components/shopcar'
import Recommend from './components/recommend'
export default {
  components: {
    Header,
    Emptycart,
    // Shopcar,
    Recommend

  }
}
</script>
<style scoped>
.cart{
  width: 100%;
/* height: 713.6px; */
 background: #fff;
  padding-bottom: 110px;
}
</style>
