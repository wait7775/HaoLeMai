<template>
  <div class="logoDetail">
    <div class="logoMore">
      <img
        class="logoWen"
        src="http://0.image.al.okbuycdn.com//static/1e0be7025b0b6b4d53fccfcd6248b2aa.png"
        alt
      />
      <span>更多</span>
      <img src="../images/right.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.logoDetail {
  margin-top: 10px;
  background: #f4f4f4;
  padding: 20px 0;
  .logoMore {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 20px 10px;
    .logoWen {
      width: 11%;
      max-height: 50px;
    }
    span{
        margin-left: 550px;
        color: #666;
        font-size: 28px;
        line-height: 48px;
    }
  }
}
</style>

