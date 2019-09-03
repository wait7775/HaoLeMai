
<template>
<!-- 这里与list的不同在于样式发生了改变 -->

<div class="List">
<!--专题列表 使用ming-ui header -->
<Header class="head"></Header>

<!-- 选项卡 使用 mint-ui tab-nav tab-container-->

<!-- 这里的tab模块名字发生了改变 -->
<Tabchange class="tab"></Tabchange>
<!-- 回到顶部 -->
<div class="socket">
  <img src="./components/img/gotop.png" alt="">
</div>
<!-- 购物车 -->
<div class="shopcart">
<!-- <router-link to="/购物车">  --><!-- </router-link> -->
</div>

<!-- 改变样式 -->
<!-- 跳转list作为默认路由是最开始写的，已在router 下面的index.js中注册  实际跳转到index.vue模块-->
 <router-link to="list">
   <div class="changelist">  </div>

   </router-link>

</div>
</template>
<script>
// 从tabchange链接， 去tabchange.vue中查看
import Header from './components/header.vue'
import Tabchange from './components/tabchange.vue'
import $ from 'jquery'
export default {
  components: {
    Header, Tabchange
  },
  data () {
    return {
      msg: 1
    }
  },

  created: function () {
    jq()
  }
}

// 屏幕发生滚动大于一定距离回到顶部按钮出现过渡动画以及解决动画队列问题
function jq () {
  // console.log($('.tab').height())
  // console.log(1111)

  $(window).on('scroll', function () {
    // console.log(2222)
    if ($(window).scrollTop() > 100) {
      $('.socket').stop().fadeIn(1000)
    } else {
      $('.socket').stop().fadeOut(1000)
    }

    $('.socket').on('click', function () {
      // console.log('run')
      // $(window).scrollTop(0)
      $('html,body').stop().animate({
        scrollTop: '0px'
      }, 1000)
    })
  })
}

</script>
<style scoped>
.header{
  height: 100px;
}

li{
  height: 100px;
}
/* .fixed{
position: fixed;
top: 0;
} */
.socket{
position: fixed;
right: 0px;
bottom: 180px;
display: none;
}
.socket img{
  width: 150px;

}
.shopcart{
  width: 80px;
  height: 80px;

  background: url(./components/img/carticon.png) no-repeat;
   background-size:80px;
  position: fixed;
  bottom:100px;
  left: 22px;
  opacity: .6;
}
.changelist{

  width: 80px;
  height: 80px;
  background: url(./components/img/listview.png) no-repeat;
  background-size:80px;
  position: fixed;
  bottom:100px;
  right: 30px;
  opacity: .6;
}
</style>
