<template>
<!-- tabchange.vue与tablist.vue是双胞胎但是类名mtab下的内容样式不同，用的是Pchange,去pubchange.vue中查看 -->
<div>
  <div class="nav">
    <div class="navbox">
        <mt-button :class="{mintbtn:true,addColor:show1}" @click='changeFlag1()' size="small" @click.native.prevent="active = 'tab-container1'" >
          默认 </mt-button>
      <mt-button :class="{mintbtn:true,addColor:show2}" @click='changeFlag2()' size="small" @click.native.prevent="active = 'tab-container2'">
        销量</mt-button>
      <mt-button :class="{mintbtn:true,addColor:show3}" @click='changeFlag3()' size="small" @click.native.prevent="active = 'tab-container3'">
        价格 <i class="iconfont icon-icon_shangxiajiantou"></i></mt-button>
      <mt-button :class="{mintbtn:true,addColor:show4}" @click='changeFlag4()' size="small" @click.native.prevent="active = 'tab-container4'">
        折扣 <i class="iconfont icon-icon_shangxiajiantou"></i></mt-button>
      <mt-button :class="{mintbtn:true,addColor:show5}" @click='changeFlag5()' size="small" @click.native.prevent="active = 'tab-container5'">
        筛选</mt-button>
    </div>

      <mt-navbar v-model="selected " class="mtc">
      <mt-tab-item id="1"  class="mtcitem" >分类 <i @click="show"  class="iconfont icon-triangle-copy-copy-copy"></i> </mt-tab-item>
      <mt-tab-item id="2" class="mtcitem">品牌 <i @click="show"  class="iconfont icon-triangle-copy-copy-copy"></i></mt-tab-item>
      <mt-tab-item id="3" class="mtcitem">尺码 <i @click="show"  class="iconfont icon-triangle-copy-copy-copy"></i></mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
  <mt-tab-container v-model="selected ">
  <mt-tab-container-item id="1">
   <ul class="mtcbox" v-if="flag">
     <li><span>1 </span></li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     <div class="mtcbtn">
    <div class="left">重置</div>
    <div class="right">确定</div>
   </div>
   </ul>
   <!-- <hr> -->

  </mt-tab-container-item>
  <mt-tab-container-item id="2">
<ul class="mtcbox"  v-if="flag" >
     <li><span>1 </span></li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     <div class="mtcbtn">
    <div class="left">重置</div>
    <div class="right">确定</div>
   </div>
   </ul>

  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <ul class="mtcbox"  v-if="flag">
     <li><span>1 </span></li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     <div class="mtcbtn">
    <div class="left">重置</div>
    <div class="right">确定</div>
   </div>
   </ul>
  </mt-tab-container-item>
</mt-tab-container>
</div>
<!-- <hr> -->

  <!-- 大分类 -->
 <mt-tab-container v-model="active "  class="mtab">
        <mt-tab-container-item id="tab-container1" >

          <Pchange></Pchange>
        </mt-tab-container-item>
       <mt-tab-container-item id="tab-container2">
        <Sales></Sales>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <Prices></Prices>
        </mt-tab-container-item>
         <mt-tab-container-item id="tab-container4">
          <Pub></Pub>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5">
          <Pub></Pub>
        </mt-tab-container-item>

</mt-tab-container>
</div>
</template>
<script>

// import '@/assets/mui/dist/js/mui.js'

// import Pub from './pub.vue'
import Pub from './pub.vue'
import Pchange from './pubchange.vue'
import Sales from './sales.vue'
import Prices from './price.vue'
import $ from 'jquery'

export default {
  components: {
    Pub, Pchange, Sales, Prices
  },
  data () {
    return {
      active: 'tab-container1',
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      selected: '0',
      flag: false

    }
  },
  methods: {
    changeFlag1: function () {
      this.show1 = true
      this.show2 = false
      this.show3 = false
      this.show4 = false
      this.show5 = false
    },
    changeFlag2: function () {
      this.show1 = false
      this.show2 = true
      this.show3 = false
      this.show4 = false
      this.show5 = false
    },

    changeFlag3: function () {
      this.show1 = false
      this.show2 = false
      this.show3 = true
      this.show4 = false
      this.show5 = false
    },

    changeFlag4: function () {
      this.show1 = false
      this.show2 = false
      this.show3 = false
      this.show4 = true
      this.show5 = false
    },

    changeFlag5: function () {
      this.show1 = false
      this.show2 = false
      this.show3 = false
      this.show4 = false
      this.show5 = true
    },
    show () {
      // console.log(11111111)
      // console.log(this.$refs)

      this.flag = !this.flag
    }

  },

  created () {
    jq()
  },
  mounted () {
    // this.$refs.box.style.color = '#D70057'
  }
}
// 屏幕发生滚动mint-tab固定在顶部
function jq () {
  // console.log($('.tab').height())
  // console.log(1111)

  $(window).on('scroll', function () {
    // console.log($('.nav'), 11111)
    if ($(window).scrollTop() >= 100) {
      $('.nav').addClass('fixed')
      $('.mtab').css('margin-top', '140px')
    } else {
      $('.nav').removeClass('fixed')
      $('.mtab').css('margin-top', '0px')
    }
  })
}

</script>
<style scoped>
* {
touch-action: pan-y;}

.nav{
  width:100%;
  height: auto;
z-index: 10;
font-family: '黑体';
/* box-sizing: border-box; */
}
.navbox{
   width:100%;
  height: 90px;
  display: flex;
justify-content: space-around;
/* flex-wrap: wrap; */
/* align-items: center; */
}
.nav .navbox .mintbtn{
  width:150px;
  height: 90px;
  /* border-top: none;
   border-left: none;
    border-right: none; */
box-sizing: border-box;

background:white;
border-radius: 0;
}
.fixed{
position: fixed;
top: 0;
}
.mtab{
margin-top: 0px;
overflow: hidden;
background-color: white;
}
.addColor{
border-bottom:1px solid #D70057;
color: #D70057
}
.mtc{
  justify-content: space-around;
  height: 80px;
}
.mtcitem{
font-size: 24px;
font-family: '黑体';
color:#333333;
}
.mtcitem i{
  font-size: 40px;
  color: #333333;
}
.mtcbox{
width: 100%;
height: auto;
/* border: 1px solid black; */
border-top: none;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
background: white;
/* display: none; */
z-index: 10;
}
.mtcbox li{
  width: 50%;
  height: 92px;
 line-height: 92px;
 font-size: 26px;
 color: #333333;
 font-family: '黑体';

  }
  .mtcbox li span{
     padding-left: 30px;
  }
  .mtcbtn{
    width: 750px;
    height: 92px;
  }
   .mtcbtn div{
    width: 49.9%;
     height: 92px;
     text-align: center;
     font-size: 30px;
     line-height: 92px;
   }
    .mtcbtn .left{
      background: white;
      color: #333333;
      float: left;
    }
    .mtcbtn .right{
    background: #D70057;
     color: white;
     float: left;
    }
</style>
