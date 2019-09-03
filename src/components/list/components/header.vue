<template class="header">
<div  class="head">
<mt-header title="专题列表" class="mtheader">
  <router-link to="/home" slot="left">
    <mt-button class="mtbutton" style="height:100px">
      <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/common/back.png" style="width:92px;height:100px">
    </mt-button>
   </router-link>
   <router-link to="/" slot="right">
    <mt-button  class="mtbutton" style="height:100px">
      <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/common/goindex.png" style="width:92px;height:96px">
    </mt-button>
   </router-link>
</mt-header>
</div>

</template>
<script>
export default {

}

</script>
<style lang="less">
// .mtheader .mtbutton img{
//   width: 100px;
// }
// .router-link-active{
//   img{
//     width: 100px;
//   }
// }
</style>
<style scoped>
*{margin: 0;padding: 0;}
.mtheader{
  width: 100%;
   /* position: fixed;
  top: 0; */
  background-color: #F5F5F5;
  color: #444444;
  font-size: 32px;
  height: 100px;
  line-height: 50px;
  padding: 0;
  margin: 0;
  font-family: '黑体'
}
.mtheader .mtbutton img{
  width: 192px;height: 200px;
}
.fixed{
  position: fixed;
  top: 0;
}
.head{
  height: 100px;
}
</style>
