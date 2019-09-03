<template>
  <div>
    <mt-header title="领券中心">
      <router-link to="/home" slot="left">
        <img src="@/assets/images/back.png" alt />
      </router-link>
      <router-link to="/home" slot="right">
        <img src="@/assets/images/home.png" alt />
      </router-link>
    </mt-header>
    <div class="con">
      <div class="ticket" @click="getTicket">
        <ul>
          <li><img src="http://i.okaybuy.cn/static/8fffe225e5c8eb12f3ce9a4bf49a6f99.jpg" alt=""></li>
          <li>
            <p>新人礼券</p>
            <p>新人福利 即可领取</p>
            <p><span><i>￥</i>20</span>满300元可用</p>
          </li>
          <li>
            <p>立即<br/>领取</p>
          </li>
        </ul>
      </div>
      <div class="ticket" @click="getTicket">
        <ul>
          <li><img src="http://i.okaybuy.cn/static/7c6a7c83145b06d2b5b6a7f0c27e4d68.png" alt=""></li>
          <li>
            <p>骆驼 品牌券</p>
            <p>领券更优惠</p>
            <p><span><i>￥</i>50</span>满300元可用</p>
          </li>
          <li>
            <p>立即<br/>领取</p>
          </li>
        </ul>
      </div>
    </div>
    <p class="copyright">©2007-2019 OkBuy.com 津ICP备16005872号-1</p>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  methods: {
    getTicket () {
      MessageBox({
        title: '提示',
        message: '您还未登录，请登录后领取',
        showCancelButton: true
      }).then(res => {
        if (res === 'confirm') {
          this.$router.push({
            path: 'home'
          })
        }
      })
    }
  }
}
</script>
<style>
  .mint-msgbox{
    padding: 20px;
    width: 80%!important;
    height: 260px;
    font-size: 30px;
  }
  .mint-msgbox-title{
    font-size: 40px;
  }
  .mint-msgbox-message{
    line-height: 100px;
  }
  .mint-msgbox-btns .mint-msgbox-btn{
    height:80px;
    font-size: 28px;
  }
</style>

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
.ticket {
  margin-top: 20px;
  background: url("http://0.touch.js.al.okbuycdn.com/resources/complete/images/couponcenter/red_bg_no2.png") center no-repeat;
  height: 200px;
  background-size: cover;
}
.ticket ul{
  overflow: hidden;
  padding: 10px 30px;
}
.ticket ul li{
  float: left;
}
.ticket ul li:nth-child(1){
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
}
.ticket ul li:nth-child(1) img{
  width: 140px;
}
.ticket ul li:nth-child(2){
  margin-left: 30px;
  line-height:40px;
}
.ticket ul li:nth-child(2) p{
  color: #333;
  font-size: 28px;
}
.ticket ul li:nth-child(2) p:nth-child(2){
  color: #d70057;
  font-size: 24px;
}
.ticket ul li:nth-child(2) p:nth-child(3){
  margin-top: 50px;
}
.ticket ul li:nth-child(2) p:nth-child(3) span{
  font-size: 30px;
  color: #d70057;
  padding-right: 10px;
}
.ticket ul li:nth-child(2) p:nth-child(3) span i{
  font-style: normal;
  font-size: 20px;
}
.ticket ul li:nth-child(3){
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #fff;
  float: right;
  padding: 30px;
  line-height: 30px;
  margin-top: 30px;
}
.ticket ul li:nth-child(3) p{
  font-size: 28px;
  color: #d70057;
}
.copyright{
  line-height: 100px;
  text-align: center;
  font-size: 20px;
}
.con{
  min-height: 1100px;
}

</style>
