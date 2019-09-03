<template>
  <div class="r-content">
    <div class="rkinds">
      <div class="r-top" >
        <ul class="rimgul">
          <li v-for="(item,index) in imgsList" :key="index">
            <a href="#">
              <img v-lazy="item.img" :alt="item.alt">
            </a>
          </li>
        </ul>
      </div>
      <div class="r-bot">
        <ul>
          <li class="bli" v-for="(item , index) in  kindsList " :key="index">
            <!-- <h3>{{bagList[index].data[index].title}}</h3> -->
            <p class="tit">- {{item.category}} -</p>
            <ul class="eveul">
              <li class="eveli" v-for="(i,index) in item.result" :key="index">
                <a href="#">
                  <img v-lazy="i.img" />
                  <span>{{i.name}}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getCategoryKinds } from '@/api/index.js'
import BScroll from '@better-scroll/core'
import bus from './bus.js'
// this.created()
export default {
  data () {
    return {
      isOn: 0,
      imgsList: [],
      kindsList: [],
      // minList: []
      lid: 0
    }
  },
  mounted () {
    bus.$on('getCid', cid => {
      getCategoryKinds(cid).then(res => {
        this.imgsList = res.data.imgs
        this.kindsList = res.data.data
        // console.log(this.bagList)
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new BScroll('.r-content', {
            scrollY: true,
            click: true
          })
          new BScroll('.r-top', {
            scrollX: true,
            click: true
          })
          console.log($('#rkinds').css('transform'))
          $('.rkinds').css('transform', 'translateX(0) translateY(-5px) translateZ(0)')
          $('.rimgul').css('transform', 'translateX(0) translateY(0) translateZ(0)')
        })
      })
    })
  },
  // 在created阶段执行getCategoryKinds（0）函数，默认显示右侧分类
  created () {
    getCategoryKinds(0).then(res => {
      this.imgsList = res.data.imgs
      this.kindsList = res.data.data
      console.log(this.imgsList)
      $('.rimgul').css('overflow', 'hidden')
      // 默认右侧展示界面需要重新定义滚动和进入后滚动归零
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.r-content', {
          scrollY: true,
          click: true
        })
        new BScroll('.r-top', {
          scrollX: true,
          click: true
        })
        console.log($('#rkinds').css('transform'))
        $('.rkinds').css('transform', 'translateX(0) translateY(-5px) translateZ(0)')
        $('.rimgul').css('transform', 'translateX(0) translateY(0) translateZ(0)')
      })
    })
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.r-content{
  width: calc(100% - 180px);
  height: 100%;
/* 右侧上部图片样式 */
  .r-top{
     margin-top:10px;
     width: 100%;
     white-space: nowrap;
    ul{
      position: relative;
      z-index: -999;
      display: inline-block;
      li{
        display :inline-block;
        width:140px;
        /* height: 140px; */
        img {
          width: 120px;
          height: 84px;
          margin: 10px 10px;
        }
      }
    }
  }
/* 右侧下边样式 */
.r-bot{
  height: 100%;
  ul{
    li{
      .tit{
        font-size: 32px;
        color: #666666;
        margin: 40px 0 20px;
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
      .eveul{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
         .eveli{
          width: 33.3%;
          padding-right: 14px;
          float: left;
        img{
          width: 140px;
          height: 140px;
          margin-left: 24px;
        }
        span{
          display: block;
          width: 100%;
          line-height: 60px;
          text-align: center;
          font-size: 24px;
          color: #999999;
        }
      }
      }
      }
    }
  }
}
</style>
