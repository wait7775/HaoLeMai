<template>
  <div class="box">
    <div class="nav">
      <ul>
        <router-link to="/mine" tag="li">
          <img src="./img/2.png" />
        </router-link>
        <li>
          <p>注册</p>
        </li>
        <router-link to="/home" tag="li">
          <img src="./img/1.png" />
        </router-link>
      </ul>
    </div>
    <div class="ipnt">
      <input type="text" placeholder="请输入用户名" id="username" name="username" ref="ryh" @blur="bl()" />
      <br />
      <!-- 手机号不对后的错误提醒-->
      <div v-if="error" class="invalid-feedback">{{error}}</div>
      <input type="text" placeholder="请输入密码" />
      <br />
    </div>
    <div class="yz" v-if="btnTitle" :disabled="disabled">{{btnTitle}}</div>
    <div class="pn">
      <p>注册</p>
    </div>
    <div class="wj">
      <router-link to tag="li">
        <a href>
          <p>*点击注册代表同意《好乐买软件隐私证明》</p>
        </a>
      </router-link>
    </div>
    <div class="dl">
      <router-link to="/mine" tag="li">
        <a href>
          <p>已有账号，去登录</p>
        </a>
      </router-link>
    </div>
    <div class="last">
      <p>
        电脑版
        <span>触屏版</span> 客户端
      </p>
      <p>@2017-2019 OKBuy.com 津ICP备16005872号 -1</p>
    </div>
  </div>
</template>
<script >
export default {
  data () {
    return {
      btnTitle: '获取验证码',
      disabled: false
    }
  },
  methods: {
    bl () {
      console.log('hello world')
      var num = /^1[0-9]{10}$/
      if (this.$refs.ryh.value !== num) {
        this.$refs.ryh.value = ''
        this.$refs.ryh.placeholder = '手机号有误请重新输入,请重新输入'
      } else {
        
      }
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  height: 100%;
  background: rgb(241, 239, 239);
}
.nav {
  width: 100%;
  height: 100px;
  font-size: 32px;
  background: #ffffff;
}
.nav ul {
  list-style: none;
  display: flex;
}
.nav ul li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.nav img {
  width: 40px;
  height: 40px;
  margin-left: 20px;
}
.nav p {
  width: 572px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 32px;
}

.ipnt {
  margin-top: 20px;
  font-size: 32px;
}
.ipnt input:valid {
  width: 100%;
  height: 90px;
  border-bottom: 1px solid rgb(218, 216, 216);
  padding: 40px;
  font-size: 30px;
  background: #ffffff;
  outline: none;
  position: relative;
}
.pn {
  width: 100%;
  margin-top: 20px;
  font-size: 32px;
  height: 80px;
}
.pn p {
  height: 75px;
  line-height: 75px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  background-color: #d70057;
  font-size: 32px;
  cursor: pointer;
}
.wj {
  width: 100%;
  margin-top: 20px;
}
.wj li {
  list-style: none;
}
.wj a {
  list-style: none;
  color: black;
}
.wj a p {
  font-size: 24px;
  position: fixed;
  left: 25px;
  color: #d70057;
}
.dis {
  margin-top: 120px;
}
.dis ul {
  display: flex;
  list-style: none;
}
.dis ul li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 33.3%;
}
.dis ul li img {
  width: 50px;
  height: 50px;
}
.dis ul li span {
  margin-left: 10px;
  font-size: 32px;
}
.last {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.last p {
  text-align: center;
  color: #b3b3b3;
}
.last span {
  color: #c4466c;
}
.dl {
  width: 100%;
  margin-top: 80px;
  height: 100px;
}
.dl li {
  list-style: none;
}
.dl a {
  color: black;
  position: fixed;
  right: 0;
  margin-right: 20px;
}
.dl a p {
  font-size: 25px;
  color: cornflowerblue;
}
.yz {
  font-size: 28px;
  position: fixed;
  right: 50px;
  bottom: 1062px;
}
.yz p {
  color: #c4466c;
}
</style>
