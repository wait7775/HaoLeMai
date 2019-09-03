<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 11:29:39
 * @LastEditTime: 2019-08-29 17:39:49
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="navbar">
      <div class="red">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">今日特卖</mt-tab-item>
          <mt-tab-item id="2">服装</mt-tab-item>
          <mt-tab-item id="3">鞋靴</mt-tab-item>
          <mt-tab-item id="4">儿童</mt-tab-item>
          <mt-tab-item id="5">包配</mt-tab-item>
         </mt-navbar>
      </div>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell>
                    <ul class="mycell" ref="myul">
                        <li ref="myli" v-for="(itema,indexa) in Navlista" :key="indexa">
                            <span class="outtimes">仅剩3天</span>
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
                            <span class="outtimes">仅剩4天</span>
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
                             <span class="outtimes">仅剩3天</span>
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
                            <span class="outtimes">仅剩3天</span>
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
                             <span class="outtimes">仅剩2天</span>
                            <img v-lazy="iteme.img" alt />
                            <p class="desc">
                                <span class="price">{{iteme.price}}</span>
                                {{iteme.desc}}
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
  getBuybara,
  getBuybarb,
  getBuybarc,
  getBuybard,
  getBuybare
} from '@/api'
export default {
  created () {
    getBuybara().then(data => {
      // console.log(data)
      this.Navlista = data
    })
    getBuybarb().then(data => {
      // console.log(data)
      this.Navlistb = data
    })
    getBuybarc().then(data => {
      // console.log(data)
      this.Navlistc = data
    })
    getBuybard().then(data => {
      // console.log(data)
      this.Navlistd = data
    })
    getBuybare().then(data => {
      // console.log(data)
      this.Navliste = data
    })
  },
  data () {
    return {
      Navlista: [],
      Navlistb: [],
      Navlistc: [],
      Navlistd: [],
      Navliste: [],
      selected: sessionStorage.getItem('selected') || '1'
    }
  }

}
</script>
<style scoped>
.red{
  width: 100%;
  height: 84.8px;
  z-index: 200;
  position: fixed;
  margin-top: 100px;
  /* border: 1px solid rgb(168, 114, 114); */
}
.mycell {
    height: auto;
    width: 100%;
    /* background: red; */
    /* border: 1px solid red; */
    margin-top:200px;
    padding: 0;
    display: block;
}

.mycell li {
    height: 442px;
    margin-bottom: 15px;
    margin-top: 10px;
    position: relative;
}
.mycell li .outtimes{
    position: absolute;
    top: 0;
    right: 0;
    width:156px;
    height: 40px;
    background: rgba(0,0,0,0.5);
    /* padding:0 1px; */
    color: #fff;
    font-size:24px;
    line-height: 40px;
    text-align:center;
    padding-right: 20px;
}
.mycell li img {
    display: block;
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
