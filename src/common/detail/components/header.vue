<template>
  <div id="header">
    <mt-header title="商品详情" class="header" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back" style="height:70px">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.header {
  padding: 50px 0;
  background: rgb(245, 245, 245);
  color: #666;
  font-size: 32px;
}
</style>