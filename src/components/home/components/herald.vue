<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 10:13:24
 * @LastEditTime: 2019-08-30 14:39:43
 * @LastEditors: Please set LastEditors
 -->
<!-- 首页中部预告-->
<template>
  <div class="herald">
    <ul class="bigul">
      <li><a href="#/list"><img v-lazy="'http://i.okaybuy.cn/static/f2e439e1c1062b674c926988107ee871.jpg'" alt=""></a></li>
      <li><a href="#/list"><img v-lazy="'http://i.okaybuy.cn/static/b55b8f4ae9bd753fb07cfd8db2811c78.jpg'" alt=""></a></li>
      <li><a href="#/list"><img v-lazy="'http://i.okaybuy.cn/static/2ce1f90d0c4fcb6fc4f4df7d5575cd5a.jpg'" alt=""></a></li>
      <li><a href="#/list"><img v-lazy="'http://i.okaybuy.cn/static/ea2a71fcb9f628f9b106dbbcca26ab4b.jpg'" alt=""></a></li>
    </ul>
    <ul class="smaul">
      <li><a href="#/list"><img v-lazy="'http://i.okaybuy.cn/static/2b630dbf0c2b3f7158122b7d0b7e990a.jpg'" alt=""></a></li>
      <li><a href="#/list"><img v-lazy="'http://i.okaybuy.cn/static/cb15e9b4d001825bae1b17e6452596d8.jpg'" alt=""></a></li>
      <li><a href="#/list"><img v-lazy="'http://i.okaybuy.cn/static/9f42002d2ecc72657798738ae59db38e.jpg'" alt=""></a></li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .herald{
    height: 565px;
  }
  .bigul{
    display:flex;
    height: 376px;
    flex-wrap:wrap;
  }
  .bigul li{
    width:50%;
  }
  .bigul li img{
    width: 100%;
    height: 100%;
  }
  .smaul{
   margin-top: 10px;
    height: 189px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .smaul li{
    flex: 1;
    width: 250px;
  }
  .smaul li img{
    width: 100%;
    height: 100%;
  }
</style>
