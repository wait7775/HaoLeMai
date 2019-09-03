<template>
  <div>
    <mt-header title="全球购">
      <router-link to="/home" slot="left">
        <img src="@/assets/images/back.png" alt />
      </router-link>
      <router-link to="/home" slot="right">
        <img src="@/assets/images/home.png" alt />
      </router-link>
    </mt-header>
    <div class="list">
      <div class="category">
        <router-link to="/projectList_shoes" tag="a">
          <img src="http://i.okaybuy.cn/static/9e8361983ba7fbeed0111b1c5ee20a76.png" alt />
        </router-link>
        <router-link to="/projectList_clothes" tag="a">
          <img src="http://i.okaybuy.cn/static/7b758307aaad40022414cf571975fd1c.png" alt />
        </router-link>
        <router-link to="/projectList_bag">
          <img src="http://i.okaybuy.cn/static/5819c1a77ab094499ac4a0d2a99c4615.png" alt />
        </router-link>
        <router-link to="/projectList_ACC">
          <img src="http://i.okaybuy.cn/static/9a45c406960b1a5a56bf11d6e7d22e8a.png" alt />
        </router-link>
        <router-link to="/projectList_makeup">
          <img src="http://i.okaybuy.cn/static/12ff87b59f319bc40efd3abc8103f38e.png" alt />
        </router-link>
      </div>
      <div class="hotAndNew">
        <router-link to="/projectList_hot" tag="a">
          <img src="http://i.okaybuy.cn/static/b32a94ac2734d2249b6d6f06f0a7f20f.png" alt />
        </router-link>
        <router-link to="/projectList_new" tag="a">
          <img src="http://i.okaybuy.cn/static/8b650157de479e162a3ecc3b0d0da987.png" alt />
        </router-link>
      </div>
      <div class="hotSale_01">
        <p class="title">今天人们正在买：</p>
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll slidelist_01">
              <div v-for="(item,index) in hotCateList_01" :key="index" class="list">
                <img :src="item.img" alt="">
                <p>
                  <span>{{item.brand}}</span>
                  <span>{{item.sex}}</span><br/>
                  <span>{{item.title}}</span><br/>
                  <span>{{item.name}}</span>
                </p>
                <p>{{item.price}}</p>
              </div>
              <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
          </div>
        </div>
      </div>
      <div class="brand">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <router-link to="/Champion"><img src="http://i.okaybuy.cn/static/4f7c417eb0ec91f2e88961538ac742ea.png" alt=""></router-link>
                <router-link to="/Boy"><img src="http://i.okaybuy.cn/static/b8e55db5b3fb24614416f18f9eb40b61.png" alt=""></router-link>
                <router-link to="/Anit"><img src="http://i.okaybuy.cn/static/172d5fa64f23aa0f9525102bac352acb.png" alt=""></router-link>
                <router-link to="/Rothco"><img src="http://i.okaybuy.cn/static/bbd748ebfe14788edf926255e4e824d9.png" alt=""></router-link>
                <router-link to="/Publish"><img src="http://i.okaybuy.cn/static/10280fed07cbc81c2c04fad8c0ec373d.png" alt=""></router-link>
                <router-link to="/47"><img src="http://i.okaybuy.cn/static/e0a6a18879a7294cb58489ee89bd8a70.png" alt=""></router-link>
            </div>
        </div>
      </div>
      <div class="hotSale_02">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll slidelist_02">
                <div v-for="(item,index) in hotCateList_02" :key="index" class="list">
                  <img :src="item.img" alt="">
                  <p>
                    <span>{{item.brand}}</span>
                    <span>{{item.sex}}</span><br/>
                    <span>{{item.title}}</span><br/>
                    <span>{{item.name}}</span>
                  </p>
                  <p>{{item.price}}</p>
                </div>
                <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
            </div>
        </div>
      </div>
      <div class="brand">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <router-link to="/TOMMY"><img src="http://i.okaybuy.cn/static/bce1a30ce5891b9a0785d6049a6e2358.png" alt=""></router-link>
                <router-link to="/CK"><img src="http://i.okaybuy.cn/static/abd81956c8bdf864db3ced9e4561c055.png" alt=""></router-link>
                <router-link to="/POLO"><img src="http://i.okaybuy.cn/static/2f8920fe44e62af5722dcbdc0d2b5a3c.png" alt=""></router-link>
                <router-link to="/Lacoste"><img src="http://i.okaybuy.cn/static/06acc8f4013fbc555fd267d2bc9e5c7c.png" alt=""></router-link>
                <router-link to="/GIORGIO"><img src="http://i.okaybuy.cn/static/2f7e464846873cbc03c455689226d652.png" alt=""></router-link>
                <router-link to="/BROOKS"><img src="http://i.okaybuy.cn/static/631ec58318f54daff67bd11d9e02f6c6.png" alt=""></router-link>
            </div>
        </div>
      </div>
      <div class="hotSale_02">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll slidelist_02">
                <div v-for="(item,index) in hotCateList_03" :key="index" class="list">
                  <img :src="item.img" alt="">
                  <p>
                    <span>{{item.brand}}</span>
                    <span>{{item.sex}}</span><br/>
                    <span>{{item.title}}</span><br/>
                    <span>{{item.name}}</span>
                  </p>
                  <p>{{item.price}}</p>
                </div>
                <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
            </div>
        </div>
      </div>
      <div class="hotSale_02">
        <p class="title">美式休闲</p>
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll slidelist_02">
              <div v-for="(item,index) in hotCateList_04" :key="index" class="list">
                <img :src="item.img" alt="">
                <p>
                  <span>{{item.brand}}</span>
                  <span>{{item.sex}}</span><br/>
                  <span>{{item.title}}</span><br/>
                  <span>{{item.name}}</span>
                </p>
                <p>{{item.price}}</p>
              </div>
              <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
          </div>
        </div>
      </div>
      <div class="hotSale_02">
        <p class="title">轻奢包袋</p>
        <div class="brand">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
                  <router-link to="/COACH"><img src="http://i.okaybuy.cn/static/2366aa6a851f8e38a0977349e2c8c04d.png" alt=""></router-link>
                  <router-link to="/ToryBurch"><img src="http://i.okaybuy.cn/static/55c660e4d5bab68303405d228ceaa8b4.png" alt=""></router-link>
                  <router-link to="/PINKO"><img src="http://i.okaybuy.cn/static/8c60bf7b51c466580bb95ae439ebdf9e.png" alt=""></router-link>
                  <router-link to="/TUMI"><img src="http://i.okaybuy.cn/static/0c751e5a6687138733e3e734d7df1493.png" alt=""></router-link>
                  <router-link to="/MichaelKors"><img src="http://i.okaybuy.cn/static/1ec493bab284e1728a8d17f5859ff3b2.png" alt=""></router-link>
                  <router-link to="/KateSpade"><img src="http://i.okaybuy.cn/static/844ba4f37543cce34c5c9df15e219cc7.png" alt=""></router-link>
              </div>
          </div>
        </div>
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll slidelist_02">
              <div v-for="(item,index) in hotCateList_05" :key="index" class="list">
                <img :src="item.img" alt="">
                <p>
                  <span>{{item.brand}}</span>
                  <span>{{item.sex}}</span><br/>
                  <span>{{item.title}}</span><br/>
                  <span>{{item.name}}</span>
                </p>
                <p>{{item.price}}</p>
              </div>
              <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
          </div>
        </div>
      </div>
      <div class="hotSale_02">
        <p class="title">腕表首饰</p>
        <div class="brand">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
                  <router-link to="/PANDORA"><img src="http://i.okaybuy.cn/static/14565f96b4c442562222741c3312751c.png" alt=""></router-link>
                  <router-link to="/SWAROVSKI"><img src="http://i.okaybuy.cn/static/95177b388359bb8238a2b22ba2aaa718.png" alt=""></router-link>
                  <router-link to="/DW"><img src="http://i.okaybuy.cn/static/0f27a91ce1869585c57e740fade28eb6.png" alt=""></router-link>
                  <router-link to="/CK"><img src="http://i.okaybuy.cn/static/6e274505b8cfd7bd7e9fa0c15ce8c113.png" alt=""></router-link>
                  <router-link to="/MONACO"><img src="http://i.okaybuy.cn/static/a45e43b971cdceec3045c28c591cd823.png" alt=""></router-link>
                  <router-link to="/DOGEARED"><img src="http://i.okaybuy.cn/static/5ccbceb3be087eb37c6bbc564af36ca7.png" alt=""></router-link>
              </div>
          </div>
        </div>
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll slidelist_02">
              <div v-for="(item,index) in hotCateList_06" :key="index" class="list">
                <img :src="item.img" alt="">
                <p>
                  <span>{{item.brand}}</span>
                  <span>{{item.sex}}</span><br/>
                  <span>{{item.title}}</span><br/>
                  <span>{{item.name}}</span>
                </p>
                <p>{{item.price}}</p>
              </div>
              <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
          </div>
        </div>
        <div class="brand">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
                  <router-link to="/JORDAN"><img src="http://i.okaybuy.cn/static/10d922f6eafa1096dcf238c3782e1d8f.png" alt=""></router-link>
                  <router-link to="/PUMR"><img src="http://i.okaybuy.cn/static/104454502f1bb5834838a9ace68f233c.png" alt=""></router-link>
                  <router-link to="/adidas"><img src="http://i.okaybuy.cn/static/cdb57165457155ab7d2c9dfc958ff24c.png" alt=""></router-link>
                  <router-link to="/Nike"><img src="http://i.okaybuy.cn/static/6957e2d4de90126c1f2ae6aee8f89ad4.png" alt=""></router-link>
                  <router-link to="/NewBalance"><img src="http://i.okaybuy.cn/static/666ea4d752ccde4bc86b02f219b72677.png" alt=""></router-link>
                  <router-link to="/Palladium"><img src="http://i.okaybuy.cn/static/5bce86b237bde85eb5a7e301c17265b8.png" alt=""></router-link>
              </div>
          </div>
        </div>
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll slidelist_02">
              <div v-for="(item,index) in hotCateList_07" :key="index" class="list">
                <img :src="item.img" alt="">
                <p>
                  <span>{{item.brand}}</span>
                  <span>{{item.sex}}</span><br/>
                  <span>{{item.title}}</span><br/>
                  <span>{{item.name}}</span>
                </p>
                <p>{{item.price}}</p>
              </div>
              <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
          </div>
        </div>
      </div>
      <div class="hotSale_02">
        <p class="title">休闲便鞋</p>
        <div class="brand">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
                  <router-link to="/Mellisa"><img src="http://i.okaybuy.cn/static/da294f93ace8390d2936deba5f13887c.png" alt=""></router-link>
                  <router-link to="/Sperry"><img src="http://i.okaybuy.cn/static/28440b78b3bd3ac900921104ffdc9418.png" alt=""></router-link>
                  <router-link to="/GUESS"><img src="http://i.okaybuy.cn/static/023ce6d1b6e75d4e2c73a28322b50936.png" alt=""></router-link>
                  <router-link to="/Lacoste"><img src="http://i.okaybuy.cn/static/20ed6375fac6b88b81ead368578c7085.png" alt=""></router-link>
                  <router-link to="/UGG"><img src="http://i.okaybuy.cn/static/05d75c87a47f3e1ecb726c96dae23687.png" alt=""></router-link>
                  <router-link to="/Keds"><img src="http://i.okaybuy.cn/static/c75a1156628395f4f941f907d3512688.png" alt=""></router-link>
              </div>
          </div>
        </div>
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll slidelist_02">
              <div v-for="(item,index) in hotCateList_08" :key="index" class="list">
                <img :src="item.img" alt="">
                <p>
                  <span>{{item.brand}}</span>
                  <span>{{item.sex}}</span><br/>
                  <span>{{item.title}}</span><br/>
                  <span>{{item.name}}</span>
                </p>
                <p>{{item.price}}</p>
              </div>
              <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
          </div>
        </div>
      </div>
      <div class="hotSale_02">
        <p class="title">老牌鞋靴</p>
        <div class="brand">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
                  <router-link to="/ECCO"><img src="http://i.okaybuy.cn/static/a2a260fe204d1b8dd51c158478012934.png" alt=""></router-link>
                  <router-link to="/Clarks"><img src="http://i.okaybuy.cn/static/81162cd26fdbf4686777b0f0669469f7.png" alt=""></router-link>
                  <router-link to="/CAT"><img src="http://i.okaybuy.cn/static/9aed8e7a65efd592ef5788e12e0a8066.png" alt=""></router-link>
                  <router-link to="/GEOX"><img src="http://i.okaybuy.cn/static/3f4790a3c0a90c55377d2b72e8a719e0.png" alt=""></router-link>
                  <router-link to="/DrMartens"><img src="http://i.okaybuy.cn/static/82982cb6a4457280694ab9eefce65f76.png" alt=""></router-link>
                  <router-link to="/STEVEMADDEN"><img src="http://i.okaybuy.cn/static/d42933fdc421a506fc099194541839cf.png" alt=""></router-link>
              </div>
          </div>
        </div>
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll slidelist_02">
              <div v-for="(item,index) in hotCateList_09" :key="index" class="list">
                <img :src="item.img" alt="">
                <p>
                  <span>{{item.brand}}</span>
                  <span>{{item.sex}}</span><br/>
                  <span>{{item.title}}</span><br/>
                  <span>{{item.name}}</span>
                </p>
                <p>{{item.price}}</p>
              </div>
              <router-link to="/projectList" tag="div" class="more"><img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/index/lookmore.png" alt=""></router-link>
          </div>
        </div>
      </div>
      <p class="copyright">©2007-2019 OkBuy.com 津ICP备16005872号-1</p>
    </div>
  </div>
</template>
<script>
import mui from '@/assets/mui/js/mui.js'
export default {
  data () {
    return {
      hotCateList_01: [],
      hotCateList_02: [],
      hotCateList_03: [],
      hotCateList_04: [],
      hotCateList_05: [],
      hotCateList_06: [],
      hotCateList_07: [],
      hotCateList_08: [],
      hotCateList_09: []
    }
  },
  created () {
    this.getHotCate_01()
    this.getHotCate_02()
    this.getHotCate_03()
    this.getHotCate_04()
    this.getHotCate_05()
    this.getHotCate_06()
    this.getHotCate_07()
    this.getHotCate_08()
    this.getHotCate_09()
  },
  mounted () {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  methods: {
    getHotCate_01 () {
      this.$http.get('http://localhost:3000/category/global_01').then(res => {
        this.hotCateList_01 = res.data
      })
    },
    getHotCate_02 () {
      this.$http.get('http://localhost:3000/category/global_02').then(res => {
        this.hotCateList_02 = res.data
      })
    },
    getHotCate_03 () {
      this.$http.get('http://localhost:3000/category/global_03').then(res => {
        this.hotCateList_03 = res.data
      })
    },
    getHotCate_04 () {
      this.$http.get('http://localhost:3000/category/global_04').then(res => {
        this.hotCateList_04 = res.data
      })
    },
    getHotCate_05 () {
      this.$http.get('http://localhost:3000/category/global_05').then(res => {
        this.hotCateList_05 = res.data
      })
    },
    getHotCate_06 () {
      this.$http.get('http://localhost:3000/category/global_06').then(res => {
        this.hotCateList_06 = res.data
      })
    },
    getHotCate_07 () {
      this.$http.get('http://localhost:3000/category/global_07').then(res => {
        this.hotCateList_07 = res.data
      })
    },
    getHotCate_08 () {
      this.$http.get('http://localhost:3000/category/global_08').then(res => {
        this.hotCateList_08 = res.data
      })
    },
    getHotCate_09 () {
      this.$http.get('http://localhost:3000/category/global_09').then(res => {
        this.hotCateList_09 = res.data
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
  position: fixed;
  width: 100%;
  margin-bottom: 100px;
  z-index: 10;
}
.mint-header img {
  width: 60px;
}
.list {
  background-color: #fff;
}
.list .category {
  display: flex;
  padding-top: 100px;
}
.list .category a {
  flex: 2;
}
.list .category img {
  display: block;
  margin: auto;
}
.list .hotAndNew {
  display: flex;
}
.list .hotAndNew a{
  flex: 5;
  text-align: center;
}
.list .hotSale_01 .mui-slider-indicator.mui-segmented-control{
  height:300px;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
  border-bottom: 0;
}
.list .hotSale_01 .title{
  font-size: 40px;
  font-weight: bold;
  color: #333;
  padding-left: 50px;
  line-height: 100px;
  background: #f5f5f5;
}
.list .hotSale_01 .slidelist_01{
  display: flex;
}
.list .hotSale_01 .slidelist_01 .list{
  width: 180px;
  margin: 20px;
}
.list .hotSale_01 .slidelist_01 .list img{
  width: 120px;
}
.list .hotSale_01 .slidelist_01 .list span {
  display: inline-block;
  font-size: 26px;
  color: #333;
  padding-right: 15px;
  line-height: 30px;
  max-width: 180px;
}
.list .hotSale_01 .slidelist_01 .list span:nth-child(4){
  background:#217BC6;
  padding: 3px 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
}
.list .hotSale_01 .slidelist_01 .list span:nth-child(6){
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list .hotSale_01 .slidelist_01 .list p:nth-child(3){
  font-size: 30px;
  color: #d70057;
  margin-top: 20px;
}
.list .hotSale_01 .slidelist_01 .more img{
  margin-top: 40px;
}

.list .brand .mui-slider-indicator.mui-segmented-control{
  height:180px;
}

.list .hotSale_02 .title{
  font-size: 40px;
  font-weight: bold;
  color: #333;
  padding-left: 50px;
  line-height: 100px;
  background: #f5f5f5;
}
.list .hotSale_02 .brand .mui-slider-indicator.mui-segmented-control{
  height:180px;
}
.list .hotSale_02 .mui-slider-indicator.mui-segmented-control{
  height: 430px;
}
.list .hotSale_02 .slidelist_02{
  display: flex;
}
.list .hotSale_02 .slidelist_02 .list{
  width: 300px;
  margin: 15px;
}
.list .hotSale_02 .slidelist_02 .list img{
  width: 260px;
}
.list .hotSale_02 .slidelist_02 .list span {
  display: inline-block;
  font-size: 26px;
  color: #333;
  padding-right: 15px;
  line-height: 30px;
  max-width: 260px;
}
.list .hotSale_02 .slidelist_02 .list span:nth-child(4){
  background:#217BC6;
  padding: 3px 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
}
.list .hotSale_02 .slidelist_02 .list span:nth-child(6){
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list .hotSale_02 .slidelist_02 .list p:nth-child(3){
  font-size: 30px;
  color: #d70057;
  margin-top: 20px;
}
.list .hotSale_02 .slidelist_02 .more{
  margin-top: 100px;
}
.copyright{
  background-color: #f5f5f5;
  line-height: 100px;
  text-align: center;
  font-size: 20px;
}
* {
  touch-action: pan-y;
}
</style>
