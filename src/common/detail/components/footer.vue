<template>
  <div class="footer">
    <div class="footerL">
      <div class="cart">
        <img src="../images/cart.png" alt />
        <span>购物车</span>
      </div>
      <div class="like">
        <img src="../images/like.png" alt />
        <span>收藏</span>
      </div>
    </div>
    <div class="footerR">加入购物车</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  //   padding: 0 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 888;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .footerL {
      padding-top: 5px;
    width: 50%;
    background: #fff;
    border-top: 5px solid #f2f2f2;
    text-align: center;
    color: #666;
    .cart {
      float: left;
      width: 49%;
      height: 100%;
      border-right: 3px solid #f2f2f2;
    }
    .like {
      float: left;
      width: 50%;
      height: 100%;
    }
    img {
        display: block;
        margin: 0 auto;
      width: 26%;
    }
  }
  .footerR {
    background: #d70047;
    width: 50%;
    color: #fff;
    text-align: center;
    line-height:100px;
    font-size: 28px;
  }
}
</style>