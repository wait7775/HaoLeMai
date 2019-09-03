<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 10:04:45
 * @LastEditTime: 2019-08-29 15:47:41
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="footer">
        <ul>
            <li>
                <a href="#">电脑版</a>
            </li>
            <li>
                <a href="#">触屏版</a>
            </li>
            <li>
                <a href="#">客户端</a>
            </li>
        </ul>
        <br/>
        <p>©2007-2019 OkBuy.com 津ICP备16005872号-1</p>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
.footer {
    width: 100%;
    height: 120px;
    background: #e7e7e7;
    /* background: red; */

}
.footer ul{
  width: 100%;
  height: 36.8px;
  text-align: center;
  padding-top: 25px ;
  padding-left: 225px;
   display:block;
}
.footer ul li{
  float: left;
  margin-right: 20px;
}
.footer ul li a{
  color:#b3b3b3;
  font-size:28px;
}
.footer ul li:nth-child(2) a{
  color:#d70057;
}
.footer p{
    width: 100%;
    text-align: center;
    font-size: 24px;
    color: #b3b3b3;
    line-height: 18px;
    margin-top: 17px;

}
</style>
