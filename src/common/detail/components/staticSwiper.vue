<template>
  <div class="static static-mt ">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="http://0.image.al.okbuycdn.com/org/static/7b1d80d6da4461e370120874de6b22e8.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://0.image.al.okbuycdn.com/org/static/088509205807cc8a03b7e33a9222ef14.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://0.image.al.okbuycdn.com/org/static/0dae35fc73eb491b959ed1e970c556d9.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.static{
    padding-bottom: 10px;
    border-bottom: 4px solid rgb(245, 245, 245);
    margin-top: 100px;
}
.static-mt {
  height: 850px;
}
.static-mt img {
  width: 100%;
}
</style>