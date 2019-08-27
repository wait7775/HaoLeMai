<template>
  <div class="nav">
    <ul>
      <router-link to="/home" tag="li">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/cartgory" tag="li">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/buy" tag="li">
        <i class="iconfont icon-xianshiqianggou"></i>
        <span>限时特卖</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <i class="iconfont icon-user-line"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
 
}
.nav ul {
  display: flex;
}
.nav ul li {
  flex: 1;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav ul li i {
  font-style: normal;
  font-size: 48px;
}

.router-link-active {
  color: #d70057;
}
</style>