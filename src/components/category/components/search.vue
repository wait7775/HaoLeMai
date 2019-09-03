<template>
  <div class="search">
    <img
      src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/common/logo.png"
      alt
      class="logo"
    />
    <div class="inp">
      <input type="text" placeholder />
      <img src="../images/search.png" alt />
    </div>
    <div class="denglu">
      <a href="#/register">登录</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='less' scoped>
.search {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  align-items: center;
  background: rgb(245, 245, 245);
}

.logo {
  width: 150px;
  /* height:100%; */
}

.inp {
  background: white;
  flex: 1;
  border-radius: 40px;
  display: flex;
  align-items: center;
  border: 2px solid #dedede;
  /* margin-left: -40px; */
  padding: 0 10px;
}

.inp img {
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.inp input {
  flex: 1;
  background: transparent;
  padding: 0 10px;
  height: 50px;
  border: none;
  font-size: 32px;
  margin-top: 12px;
}

.denglu {
  flex: 0.2;
  width: 100px;
  height: 40px;
  color: #666;
  text-align: center;
  /* font-size: 24px;*/
  a {
    color: #666;
  }
}
</style>