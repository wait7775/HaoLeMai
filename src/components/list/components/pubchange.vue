<template>
<!-- 与pub.vue的不同在于样式 -->
  <div class="box">
    <ul>
      <li v-for="(item,index) in dataObj " :key="index">
        <img class="image" alt="item.title"  :src="item.src">
        <div class="iteminfo">
                    <p class="itemname">
                      <!-- 此处留有录由接口跳转至详细页面 -->
                          <!-- <router-link></router-link> -->
                        <a :href="item.detail"  data-eventcontent="item.eventcontent" data-eventid="item.eventid" >
                      <span>{{item.title}}</span>
                        </a>
                    <span class="discounts">{{item.discount}}</span>
                    </p>
                    <p class="itemprice">
                        <span class="okprice">¥{{item.price}}</span>

                            <span class="discount">{{item.discounted}}折</span>
                            <span class="addcart"></span>
                     </p>
                      <p class="offeract">
                         <mt-badge class="bdg" size="small" color="#d70057" style="margin:6px 0 0 10px">{{item.offer}}</mt-badge >
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
  flex-direction: column;
  /* flex-wrap: wrap;
  align-items:space-around; */
  padding: 20px 10px 0;
}
.box ul li{
  width: 100%;
  height: 270px;
  /* border-bottom: 1px solid black; */
  padding: 10 0px;
  flex:1;

}
.box ul li .iteminfo{
   float: left;
  width: 460px;

}
.box ul li img{
   float: left;
  width: 260px;
  height: 260px;
  margin-bottom: 10px;
}
.box ul li .iteminfo .itemname{
  width:100%;
  height: 140px;
  margin-left: 10px;
}
.box ul li .iteminfo .itemname a{
  width: 460px;
font-size: 24px;
color: #666666;
padding-left: 10px;
}
.box ul li .iteminfo .itemname a span{
 display: block;
  width: 460px;
  overflow: hidden;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Arial, Helvetica, sans-serif;
 /* margin: 10px 0; */
 margin-top: 6px;
 height: 24px;
 font-size: 24px;
 line-height: 24px;
}

.box ul li .iteminfo .itemname .discounts{
  height: 40px;
  line-height: 40px;
  color: #444444;
  display: block;
  overflow: hidden;
  width: 460px;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 8px;
  background:#eee;
  font-size: 22px;
  /* margin: 10px 0; */
   margin-top: 20px;
}
.box ul li .iteminfo .itemprice{
  width: 460px;
  height: 39px;
  line-height: 38px;
  margin-left: 10px;
  margin-top: 14px;
}
.box ul li .iteminfo .itemprice .okprice{
  color: #d70057;
  float: left;
  font-size: 36px;
  margin: 0 16px 0 0px;
  padding-left: 10px;
}
.box ul li .iteminfo .itemprice .discount{
   color: #d70057;
   margin: 0 0 0 20px ;
   padding:0 6px ;
   font-size: 10px;
   border:1px solid #d70057;

   border-radius: 4px;
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
