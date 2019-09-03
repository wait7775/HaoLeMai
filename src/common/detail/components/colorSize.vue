<template>
  <div class="colorSize">
    <div class="color">
      <div>颜色</div>
      <ul>
        <li>
          <img src="http://0.image.al.okbuycdn.com/org/static/7b1d80d6da4461e370120874de6b22e8.jpg" alt/>
        </li>
        <li>
          <img src="http://0.image.al.okbuycdn.com/org/static/088509205807cc8a03b7e33a9222ef14.jpg" alt/>
        </li>
        <li>
          <img src="http://0.image.al.okbuycdn.com/org/static/0dae35fc73eb491b959ed1e970c556d9.jpg" alt/>
        </li>
      
      </ul>
    </div>
    <div class="size">
      <div>
        <span>尺码</span>
        <p>尺码对照表</p>
      </div>
      <!-- <mt-button type="danger">danger</mt-button> -->
      <!-- <mt-popup v-model="red"></mt-popup> :class="{redLi:red}" -->
      <ul>
        <li v-for="(item,index) in redData" :key="index" @click="red = !red">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      redData: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      red: true
    };
  }
  // created(){
  //   this.redData = []
  // }
};
</script>
<style scoped>
.color {
  padding: 10px;
}
.color div {
  color: #333;
  font-weight: bold;
  font-size: 30px;
  line-height: 48px;
  margin: 5px 0;
}
.color ul {
  display: flex;
  list-style: none;
}
.color ul li {
  width: 80px;
  margin: 0 5px;
  border: 2px solid rgb(245, 245, 245);
}
.color ul li img {
  width: 100%;
}
.size div {
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
}
.size div span {
  color: #333;
  font-weight: bold;
  font-size: 30px;
  line-height: 48px;
  margin: 5px 0;
}
.size div p {
  color: #d70057;
  font-weight: bold;
  font-size: 30px;
  line-height: 48px;
  margin: 5px 0;
}
.size ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding: 0 10px;
}
.size ul li {
  width: 120px;
  height: 80px;
  line-height: 80px;
  margin: 0 10px 10px 0;
  text-align: center;
  color: #333;
  font-size: 24px;
  background: #f4f4f4;
  border-radius: 10px;
}
.red{
  background: #d70057;
  color: #fff;
}
</style>