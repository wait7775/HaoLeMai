<template>
  <!-- 左边 -->
  <div class="l-content wrapper">
    <ul>
      <li
        v-for="(item,index) in cateList"
        :key="index"
        :class="currentIndex == index? 'active':'' "
        @click="changeCate(index)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { getCategoryMenu } from '@/api/index.js'
import BScroll from '@better-scroll/core'
import bus from './bus.js'

export default {
  data () {
    return {
      cateList: [],
      currentIndex: 0
    }
  },
  methods: {
    changeCate (index) {
      var cid = index
      this.currentIndex = index
      bus.$emit('getCid', cid)
      // console.log(cid)
    }
  },
  created () {
    getCategoryMenu().then(res => {
      // console.log(data.result)
      // console.log(res)
      this.cateList = res.data
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.l-content', {
          click: true
        })
      })
    })
  }
}
</script>
<style lang="less" scoped>
.l-content{
  height: 100%;
  position: relative;
  z-index: 20;
  background: #ffffff;
   border-right: 1px solid #666;
   box-sizing: border-box;
  ul{
    li{
      width: 180px;
      height: 120px;
      text-align: center;
      line-height: 120px;
      font-size: 28px;
    }
    .active{
  background-color: #dad8d8;
  font-size: 32px;
  color: #D70057;
   border-right: 1px solid #D70057;
   box-sizing: border-box;
}
  }
}
</style>
