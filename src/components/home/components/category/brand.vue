<template>
  <div>
    <mt-header title="品牌墙">
      <router-link to="/home" slot="left">
        <img src="@/assets/images/back.png" alt />
      </router-link>
      <router-link to="/home" slot="right">
        <img src="@/assets/images/home.png" alt />
      </router-link>
    </mt-header>

    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',index===0?'mui-active':'']" v-for="(item,index) in categoryTitle" :key="index" @click="getCategoryList(item.id)">{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="list">
      <li v-for="item in categoryList" :key="item.id">
        <img v-lazy="i" v-for="(i,index) in item.src" :key="index"/>
      </li>
    </ul>
    <p class="copyright">©2007-2019 OkBuy.com 津ICP备16005872号-1</p>
  </div>
</template>
<script>
import $ from 'jquery'
import mui from '@/assets/mui/js/mui.js'
export default {
  data () {
    return {
      categoryTitle: [],
      categoryList: []
    }
  },
  created () {
    this.getCategoryTitle()
    this.getCategoryList(1)
    this.scrollNav()
  },
  mounted () {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  methods: {
    getCategoryTitle () {
      this.$http.get('http://localhost:3000/category/categorytitle').then(res => {
        this.categoryTitle = res.data
      })
    },
    getCategoryList (cateId) {
      this.$http.get('http://localhost:3000/category/categorylist?' + cateId).then(res => {
        this.categoryList = res.data
      })
    },
    scrollNav () {
      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('.mint-header').height()) {
          $('.mui-slider').addClass('fixed')
        } else {
          $('.mui-slider').removeClass('fixed')
        }
      })
    }
  }
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
.mint-navbar .mint-tab-item {
  flex: 2;
}
.mui-segmented-control.mui-scroll-wrapper .mui-scroll {
  padding-top: 10px;
  height: 100px;
}
.mui-segmented-control.mui-scroll-wrapper {
  height: 90px;
}
.mui-slider
  .mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item {
  color: #666;
  font-size: 28px;
  padding:0 40px;
  padding: 20px 0.533333rem;
  border-bottom: 1px solid rgba(0,0,0,0.3);
}
.mui-slider
  .mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  color: #d70057;
  position: relative;
}
/* .mui-slider
  .mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active::after {
  content: "";
  width: 80px;
  height: 2px;
  background: #d70057;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
} */
.categoryList img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.mui-scroll{
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
}
.list{
  background: #fff;
}
.list li{
  overflow: hidden;
  min-height: 1040px;
}
.list li img{
  float: left;
  width: 25%;
  height: 150px;
  padding: 40px;
  display: block;
  margin-bottom:20px;
}
.copyright{
  line-height: 100px;
  text-align: center;
  font-size: 20px;
}
* {
  touch-action: pan-y;
}
.fixed{
  position: fixed;
  left: 0;
  top: 0;
}
</style>
