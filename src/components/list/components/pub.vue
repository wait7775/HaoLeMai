<template>
  <div class="box">
    <ul>
      <li v-for="(item,index) in dataObj " :key="index">
        <img class="lazy-loaded" alt="item.title"  :src="item.src">
        <div class="iteminfo">
                    <p class="itemname">
                      <!-- 此处留有录由接口跳转至详细页面 -->
                          <!-- <router-link tag='a'>
                            
                          </router-link> -->

                        <a href="#/detail"  data-eventcontent="item.eventcontent" data-eventid="item.eventid" >
                      <span>{{item.title}}</span>
                        </a>
                    <span class="discounts">{{item.discount}}</span></p>
                    <p class="itemprice">
                        <span class="okprice">¥{{item.price}}</span>
                             <!-- <span class="marketprice"></span> -->
                            <span class="discount">{{item.discounted}}折</span>
                            <span class="addcart"></span>
                                            </p>
                      <p class="offeract">
                         <mt-badge class="bdg" size="small" color="#d70057" style="margin:10px 0 0 0px">{{item.offer}}</mt-badge >
                       </p>

          </div>
      </li>

    </ul>
  </div>
</template>

<script>
import {getDefault} from '@/api/index.js'

export default {

  data () {
    return {
      dataObj: []

    }
  },
  created () {
    getDefault().then(res => {
      // console.log(res)
      this.dataObj = res
    })
  }
}
</script>
<style scoped>
* {
touch-action: pan-y;}
.box{
  width:100%;
  height:auto;

}
.box ul{
  width: 100%;
  display:flex;
  justify-content:space-around;
  flex-wrap: wrap;
  align-items:space-around;
  padding: 20px 10px 0;
}
.box ul li{
  width: 50%;
  height: 592px;
  /* border-bottom: 1px solid black; */
  padding: 10px;
  flex:1;

}
.box ul li img{
  width: 344px;
  height: 344px;
  margin-bottom: 10px;
}
.box ul li .iteminfo .itemname{
  width:100%;
  height: 92px;
}
.box ul li .iteminfo .itemname a{
  width: 344px;
font-size: 26px;
color: #666666;
}
.box ul li .iteminfo .itemname a span{
 display: block;
  width: 344px;
  overflow: hidden;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Arial, Helvetica, sans-serif;
 margin: 10px 0;
 height: 24px;
 font-size: 24px;
 line-height: 24px;
}

.box ul li .iteminfo .itemname .discounts{
  display: block;
  overflow: hidden;
  width: 344px;
  white-space: nowrap;
  text-overflow: ellipsis;
padding: 4px 8px;
  background:#eee;
  font-size: 22px;
  margin: 10px 0;
}
.box ul li .iteminfo .itemprice{
  width: 344px;
  height: 35px;
}
.box ul li .iteminfo .itemprice .okprice{
  color: #d70057;
  float: left;
  font-size: 36px;
  margin: 0 16px 0 0px;
}
.box ul li .iteminfo .itemprice .discount{
   color: #d70057;
   margin: 4px 0 0 20px ;
   padding:0 4px ;
   font-size: 10px;
   border:1px solid #d70057;
   border-radius: 2px;
    float: left;
}
.box ul li .iteminfo .itemprice .addcart{
  /* clear: both; */
    width: 60px;
    height: 60px;
    background: url(http://0.touch.js.al.okbuycdn.com/resources/complete/images/product/listcart.png) no-repeat center;
   background-size:100%;
    float: right;
    margin-top: -10px;

}

</style>
