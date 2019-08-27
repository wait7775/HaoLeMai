<template>
  <div class="swiper">
    <mt-swipe :auto="4000" class="mt-swiper">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

export default {};
</script>

<style scoped>
.swiper{
    height: 300px;
}
.mt-swiper{
    height:300px ;
}
</style>
