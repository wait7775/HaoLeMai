<template>
  <div class="box">
    <div class="nav">
      <ul>
        <router-link to="/home" tag="li">
          <img src="./img/2.png" />
        </router-link>
        <li>
          <p>登录</p>
        </li>
        <router-link to="/home" tag="li">
          <img src="./img/1.png" />
        </router-link>
      </ul>
    </div>
    <div class="ipnt">
      <input
        type="text"
        placeholder="用户名/邮箱/手机号"
        id="username"
        ref="ryh"
        @input="$emit('input',$event.target.value)"
      />
      <br />
      <input type="password" placeholder="请输入6-12个字符，数字及字母组合" />
      <br />
    </div>
    <div class="pn" @click="submit">
      <p>登录</p>
    </div>
    <div class="mdl">
      <!-- <input type="radio" checked />单选 -->
      <input type="radio" checked="checked" />
      <label>一个月内免登陆</label>
    </div>
    <div class="wj">
      <ul>
        <router-link to="/forget" tag="li">
          <a href>
            <p>忘记密码?</p>
          </a>
        </router-link>
        <router-link to="/register" tag="li">
          <a href>
            <span>快速注册</span>
          </a>
        </router-link>
      </ul>
    </div>

    <div class="dis">
      <ul>
        <li>
          <img src="./img/5.png" />
          <span>QQ</span>
        </li>
        <li>
          <img src="./img/3.png" />
          <span>微信</span>
        </li>
        <li>
          <img src="./img/4.png" />
          <span>微博</span>
        </li>
      </ul>
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
  data: function() {
    return {
      // 提示信息
      contactMobileShow: false,
      contactMobileText: "",
      earlyPhone: {
        phoneOne: "",
        phoneTwo: ""
      }
    };
  },
  methods: {
    // 电话的输入规则
    Mobilerule() {
      this.earlyPhone.phoneOne = this.earlyPhone.phoneOne.replace(/[^\d]/g, "");
    }
  },
  // 验证手机号是否正确
  ruleMObletrue() {
    var reg = new RegExp(/^1\d{10}$/);
    if (!this.earlyPhone.phoneOne) {
      this.contactMobileShow = true;
      this.contactMobileText = "手机号不能为空";
    } else if (!reg.test(this.earlyPhone.phoneOne)) {
      this.contactMobileShow = true;
      this.contactMobileText = "请输入正确的手机号";
    } else {
      this.contactMobileShow = false;
    }
  }
};
</script>
<style  scoped>
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
}
.pn {
  width: 100%;
  margin-top: 20px;
  font-size: 32px;
  height: 100px;
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
.mdl {
  width: 100%;
  font-size: 28px;
  height: 50px;
  margin-top: 0px;
}
.mdl input {
  width: 30px;
  height: 30px;
  border: 1px solid rgb(168, 167, 167);
  border-radius: 50%;
  margin-left: 30px;
}
.mdl p {
  color: black;
  position: fixed;
  left: 40px;
  line-height: 50px;
}
.wj {
  width: 100%;
  margin-top: 10px;
}
.wj ul {
  display: flex;
}
.wj ul li {
  width: 50%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wj ul li a p {
  font-size: 28px;
  position: fixed;
  left: 25px;
  color: black;
}
.wj ul li a span {
  position: fixed;
  right: 25px;
  font-size: 28px;
  color: black;
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
</style>