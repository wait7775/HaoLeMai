<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 10:05:01
 * @LastEditTime: 2019-08-30 16:03:27
 * @LastEditors: Please set LastEditors
 -->
<!--为你推荐-->
<template>
    <div class="recommend">
        <div class="foryou">
            <img
                src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/cart/recommend.png"
                alt
            />
            为你推荐
            <img
                src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/cart/recommend.png"
                alt
            />
        </div>
        <ul class="mycell" ref="myul">
            <li ref="myli" v-for="(item,index) in Foryou" :key="index" class="carLi">
                <img v-lazy="item.img" alt />
                <p style="padding:20px 0;line-height:50px">{{item.desc}}</p>
                <span class="price">￥{{item.price}}</span>
                <span class="news">{{item.news}}</span>
                <span class="bar">{{item.bargains}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { getForyou } from '@/api'
export default {
  data () {
    return {
      Foryou: []
    }
  },
  created () {
    getForyou().then(data => {
      console.log(data)
      this.Foryou = data
      console.log(this.Foryou)
    })
  }
}
</script>
<style scoped>
.recommend {
    width: 100%;
    background: #eeeeee;
}
.recommend .foryou {
    width: 100%;
    height: 88px;
    line-height: 88px;
    text-align: center;
    font-size: 32px;
}
.recommend .foryou img {
    width: 24px;
    vertical-align: middle;
}
.recommend ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.recommend ul .carLi {
    width: 375px;
    height: 524px;
    text-align: center;
    flex: 1;
    background: #fff;
    /* border: 1px solid red; */
}
.recommend ul .carLi img {
    width: 335px;
    height: 335px;
    margin-top: 20px;
    /* text-align: center; */
}
.recommend ul .carLi p {
    width: 100%;
    text-align: left;
    padding: 8px 20px;
    font-size: 26px;
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.recommend ul .carLi .price {
    font-size: 32px;
    width: 64px;
    height: 32px;
    display: inline-block;
    margin-left: -80px;
    margin-top: 25px;
    color: #d70057;
    margin-right: 40px;
}
.recommend ul .carLi .news,
.bar {

    font-size: 20px;
    width: 48px;
    height: 32px;
    background: #d70057;
    color: #fff;
    display: inline-block;
    border: 1px solid #d70057;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
}
.recommend ul .carLi .news {
    margin-right: 20px;
}
</style>
