<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 19:15:48
 * @LastEditTime: 2019-08-30 16:17:23
 * @LastEditors: Please set LastEditors
 -->
 <!--空购物车-->
<template>
    <div class="emptycart">
        <div class="login">
            <p style="font-size:40px">
                现在登录同步电脑和手机购物车中商品
                <a href="#">登录</a>
            </p>
        </div>
        <div class="image">
            <img
                src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/cart/cart.png"
                alt
            />
            <p>购物车还空着呢，快去挑选商品吧</p>
            <ul>
                <router-link tag="li" to="/home">去首页</router-link>
                <router-link tag="li" to="/login">我的收藏</router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.emptycart {
    width: 100%;
    height: 687px;
  
}
.emptycart .login {
    height: 88px;
    width: 100%;
    background: #fff;
    line-height: 88px;
    text-align: center;
    font-size: 26px;
    padding-left: 10px;
}
.emptycart .login a {
    color: #d70057;
    width: 100px;
    height: 100%;
    display: inline-block;
}
.emptycart .image {
    background: #eeeeee;
    height: 600px;
    text-align: center;
}
.emptycart .image img{
  margin-top: 80px;
  width: 240px;
  height: 240px;
  margin-bottom: 30px;
}
.emptycart .image p{
  font-size: 30px;
  color: #999;
}
.emptycart .image ul{
    height: 74px;
    width: 100%;
    margin-top: 60px;
    padding-left: 90px;
}
.emptycart .image ul li{
  color: #d70057;
  border:1px solid #d70057;
  width: 268px;
  height: 100%;
  border-radius: 10px;
  float: left;
  line-height: 74px;
  text-align: center;
  margin-right: 30px;

}
</style>
