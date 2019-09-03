<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 14:10:43
 * @LastEditTime: 2019-08-30 14:37:53
 * @LastEditors: Please set LastEditors
 -->
<!--购物车头部-->
<template>
    <div class="header">

            <a href="#/home">
                <img
                    src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/common/back.png"
                    alt
                />
            </a>
            <span>我的购物车</span>
            <a href="#/home">
                <img
                    class="house"
                    src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/common/goindex.png"
                    alt
                />
            </a>

    </div>
</template>
<script>
export default {}
</script>
<style scoped>
.header {
    width: 100%;
    height: 100px;
    background: #f5f5f5;
    /* position: fixed; */
    /* z-index: 100; */
    /* border:1px solid red; */
}

.header img {
    width: 80px;
    height: 100px;
    float: left;
}
img.house {
    width: 98px;
}
.header span {
    display: block;
    width: 572px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    overflow: hidden;
    font-size: 32px;
    float: left;
    background: #f5f5f5;
}

</style>
