<template>
  <div>
   <mt-header title="添加好友，专享福利">
      <router-link to="/home" slot="left">
        <img src="@/assets/images/back.png" alt />
      </router-link>
      <router-link to="/home" slot="right">
        <img src="@/assets/images/home.png" alt />
      </router-link>
    </mt-header>
    <div class="con">
      <p>添加“qa-hlm”成为好友，立享福利</p>
      <p>qa-hlm</p>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.mint-header {
  height: 100px;
  background-color: #f5f5f5;
  color: #666;
  font-size: 30px;
}
.mint-header img {
  width: 60px;
}
.con{
  background: url("http://i.okaybuy.cn/static/1110caf40f0351af4a567037385404f8.jpg") no-repeat;
  background-size: 100% 100%;
  height: 1300px;
  position: relative;
}
.con p:first-child{
  position: absolute;
  width: 100%;
  text-align: center;
  top:320px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: #333;
}
.con p:last-child{
  position:absolute;
  bottom: 270px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color:#333;
}
</style>
