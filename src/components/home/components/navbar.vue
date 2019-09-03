<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 11:29:39
 * @LastEditTime: 2019-08-30 14:39:41
 * @LastEditors: Please set LastEditors
 -->
 <!--首页中部导航栏-->
<template>
    <div class="navbar">
        <!-- <div id="testNavBar">
            <div :class="{ fixedNavbar: 'isfixTab' }"> -->
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">精选</mt-tab-item>
                    <mt-tab-item id="2">运动</mt-tab-item>
                    <mt-tab-item id="3">服饰</mt-tab-item>
                    <mt-tab-item id="4">鞋靴</mt-tab-item>
                    <mt-tab-item id="5">全球购</mt-tab-item>
                    <mt-tab-item id="6">儿童</mt-tab-item>
                </mt-navbar>

            <!-- </div>
        </div> -->

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell>
                    <ul class="mycell" ref="myul">
                        <li ref="myli" v-for="(itema,indexa) in Navlista" :key="indexa">
                            <img v-lazy="itema.img" alt />
                            <p class="desc">
                                <span class="price">{{itema.price}}</span>
                                {{itema.desc}}
                            </p>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell>
                    <ul class="mycell" ref="myul">
                        <li ref="myli" v-for="(itemb,indexb) in Navlistb" :key="indexb">
                            <img v-lazy="itemb.img" alt />
                            <p class="desc">
                                <span class="price">{{itemb.price}}</span>
                                {{itemb.desc}}
                            </p>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell>
                    <ul class="mycell" ref="myul">
                        <li ref="myli" v-for="(itemc,indexc) in Navlistc" :key="indexc">
                            <img v-lazy="itemc.img" alt />
                            <p class="desc">
                                <span class="price">{{itemc.price}}</span>
                                {{itemc.desc}}
                            </p>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <mt-cell>
                    <ul class="mycell" ref="myul">
                        <li ref="myli" v-for="(itemd,indexd) in Navlistd" :key="indexd">
                            <img v-lazy="itemd.img" alt />
                            <p class="desc">
                                <span class="price">{{itemd.price}}</span>
                                {{itemd.desc}}
                            </p>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <mt-cell>
                    <ul class="mycell" ref="myul">
                        <li ref="myli" v-for="(iteme,indexe) in Navliste" :key="indexe">
                            <img v-lazy="iteme.img" alt />
                            <p class="desc">
                                <span class="price">{{iteme.price}}</span>
                                {{iteme.desc}}
                            </p>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="6">
                <mt-cell>
                    <ul class="mycell" ref="myul">
                        <li ref="myli" v-for="(itemf,indexf) in Navlistf" :key="indexf">
                            <img v-lazy="itemf.img" alt />
                            <p class="desc">
                                <span class="price">{{itemf.price}}</span>
                                {{itemf.desc}}
                            </p>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
// 导入导航栏
import {
  getNavbara,
  getNavbarb,
  getNavbarc,
  getNavbard,
  getNavbare,
  getNavbarf
} from '@/api'
export default {

  created () {
    getNavbara().then(data => {
      // console.log(data)
      this.Navlista = data
    })
    getNavbarb().then(data => {
      // console.log(data)
      this.Navlistb = data
    })
    getNavbarc().then(data => {
      // console.log(data)
      this.Navlistc = data
    })
    getNavbard().then(data => {
      // console.log(data)
      this.Navlistd = data
    })
    getNavbare().then(data => {
      // console.log(data)
      this.Navliste = data
    })
    getNavbarf().then(data => {
      // console.log(data)
      this.Navlistf = data
    })
  },
  data () {
    return {
      Navlista: [],
      Navlistb: [],
      Navlistc: [],
      Navlistd: [],
      Navliste: [],
      Navlistf: [],
      selected: sessionStorage.getItem('selected') || '1'
    }
  }
//   methods: {

  //     // 先分别获得id为testNavBar的元素距离顶部的距离和页面滚动的距离
  //     // 比较他们的大小来确定是否添加fixedNavbar样式
  //     handleNavbarFix () {
  //       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  //       var offsetTop = document.querySelector('#testNavBar').offsetTop
  //       scrollTop > offsetTop ? this.isfixTab = true : this.isfixTab = false
  //       console.log('asd', this.isfixTab)
//   }

//   },
//   // 监听页面滚动
//   mounted () {
//     window.addEventListener('scroll', this.handleScroll, true)
//     window.addEventListener('scroll', this.handleNavbarFix, true)
//   },
//   // 离开当前组件前一定要清除滚动监听，否则进入其他路由会报错
//   beforeRouteLeave (to, from, next) {
//     window.removeEventListener('scroll', this.handleScroll, true)
//     window.removeEventListener('scroll', this.handleTabFix, true)
//     next()
//   }

}
</script>s
<style>
.mint-navbar .mint-tab-item{
    padding: 40px 0;
    background: #fff;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom:5px solid #26a2ff
}
.mint-tab-item-label{
    font-size: 32px;
}
.mint-cell-wrapper{
    margin-top: 10px;
}
.mint-cell-value{
    width: 100%;
}
</style>
<style scoped>
.fixedNavbar{
    position: fixed;
    top: 100px;
    width: 100%;
    border-top: 0.05rem solid #f5f5f5;
    border-bottom: 0.05rem solid #f5f5f5;
    background: red;
    z-index: 99999999;
}

.mycell {
    height: auto;
    width: 100%;
    /* background: red; */
    /* border: 1px solid red; */
    padding: 0;
    display: block;
}
.mycell li {
    width: 100%;
    height: 442px;
    margin-bottom: 15px;
}
.mycell li img {
    /* display: block; */
    width: 100%;
    height: 350px;
}

.mycell li p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 82px;
    line-height: 82px;
    margin: 8px 15px;
    font-size: 28px;
    color: #2c2c2c;
    border-bottom: 2px solid #e5e5e5;
}
.mycell li p span {
    color: #d0003b;
    margin-right: 15px;
}
</style>
