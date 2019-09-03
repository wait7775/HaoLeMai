<template>
  <div class="goods">
    <mt-navbar v-model="selected" style="padding:20px 0;">
      <!-- mint-tab-item-label -->
      <mt-tab-item id="1">
        <span style="font-size:48px">图文详情</span>
      </mt-tab-item>
      <mt-tab-item id="2">
        <span style="font-size:48px">评价晒单(56)</span>
      </mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="imgdetail">
        <ul class="ul1">
          <li v-for="(item,index) in goods" :key="index">
            <span>{{item.id}}</span>
            <p>{{item.msg}}</p>
          </li>
        </ul>
        <ul class="ul2">
          <li v-for="(item,index) in list" :key="index">
            <img v-lazy="item" />
          </li>
        </ul>
        <!-- <mt-cell v-for="(item,index) in goods" :key="index" :title="item.id+item.msg" /> -->
      </mt-tab-container-item>

      <mt-tab-container-item id="2" class="comment">
        <!--=== =====商品评分=========== -->
        <div class="comment-fen">
          <span>商品评分</span>
          <div>
            <p>4.9分</p>
            <ul>
              <li>
                <img src="../images/star.png" alt />
              </li>
              <li>
                <img src="../images/star.png" alt />
              </li>
              <li>
                <img src="../images/star.png" alt />
              </li>
              <li>
                <img src="../images/star.png" alt />
              </li>
              <li>
                <img src="../images/star.png" alt />
              </li>
            </ul>
          </div>
        </div>
        <!--== ========人数统计  百分比======== -->
        <div class="comment-p">
          <div>
            <span>尺码正常（52人）</span>
            <p>
              <mt-progress :value="90" :bar-height="5">
                <div slot="start"></div>
                <div slot="end"></div>
              </mt-progress>
            </p>
          </div>
          <div>
            <span>尺码偏小（3人）</span>
            <p>
              <mt-progress :value="5" :bar-height="5">
                <div slot="start"></div>
                <div slot="end"></div>
              </mt-progress>
            </p>
          </div>
          <div>
            <span>尺码偏大（1人）</span>
            <p>
              <mt-progress :value="2" :bar-height="5">
                <div slot="start"></div>
                <div slot="end"></div>
              </mt-progress>
            </p>
          </div>
        </div>
        <!--==================评论区========================================== ====== -->
        <div class="comment-ping" v-for="(item,index) in cont" :key="index">
          <div class="ping-y">
            <i>
              <img
                src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/product/comment-userphoto.png"
                alt
              />
            </i>
            <span>{{item.name}}</span>
            <p>{{item.time}}</p>
          </div>
          <div class="ping-e">
            <span>商品评价：3</span>
            <div>
              <img src="../images/star.png" alt />
              <img src="../images/star.png" alt />
              <img src="../images/star.png" alt />
              <img src="../images/star-black.png" alt />
              <img src="../images/star-black.png" alt />
            </div>
          </div>
          <div class="ping-s">{{item.content}}</div>
          <div class="ping-four">
            <span>购买尺码：</span>
            <span>关于尺码：{{item.size}}</span>
            <span>关于尺码：舒适</span>
          </div>
        </div>
        <!-- <mt-cell v-for="(item,index) in list" :key="index" :title="'cesi ' + item" /> -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
  <!-- tab-container -->
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      goods: [
        { id: "商品编号", msg: "1700465" },
        { id: "性别", msg: "男" },
        { id: "面料", msg: "锦纶,涤纶" },
        { id: "颜色", msg: "白色" },
        { id: "季节", msg: "冬,秋,夏,春" },
        { id: "温度", msg: "适中" }
      ],
      list: [
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/510e2b31c4c3163649682d3b01b760d7.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/26c28a7979cb34088c9994c2c05c9aa9.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/14fcf1290512de5d3ddd81e860a8232b.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/5e16e521fc41438d8bd9af4545af127c.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/a165a1b2740d7afcdfddbf64c9d06cb2.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/6a0ce29aac18e6a6f863ea183f59b069.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/b993b3e359ab151198c07aa9b0b300de.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/93f63ab512c76f781a09e121293c3d17.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/e083fc0d45e2ef5c0e1aa389cfe8532e.jpg",
        "http://0.image.al.okbuycdn.com/nbn/w580/images/multipic/4/20190606/b70139273f34371a38cffa80d14a6518.jpg"
      ],
      cont: [
        {
          name: "听风就是雨",
          time: "2018-11-20",
          content: "不错，挺好的",
          size: "尺码偏小"
        },
        {
          name: "茉莉花凉茶",
          time: "2019-1-20",
          content: "好看，就是有点小了",
          size: "尺码正常"
        },
        {
          name: "蚂蚁蚂蚁吗",
          time: "2019-1-28",
          content: "不错，挺好的",
          size: "偏小"
        },
        {
          name: "蚂蚁蚂蚁吗",
          time: "2019-1-28",
          content: "不错，挺好的",
          size: "偏小"
        },
        {
          name: "蚂蚁蚂蚁吗",
          time: "2019-1-28",
          content: "不错，挺好的",
          size: "偏小"
        },
        {
          name: "蚂蚁蚂蚁吗",
          time: "2019-1-28",
          content: "不错，挺好的",
          size: "偏小"
        },
        {
          name: "蚂蚁蚂蚁吗",
          time: "2019-1-28",
          content: "不错，挺好的",
          size: "偏小"
        },
        {
          name: "蚂蚁蚂蚁吗",
          time: "2019-1-28",
          content: "不错，挺好的",
          size: "偏小"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.goods {
  .imgdetail {
    .ul1 {
      li {
        display: flex;
        padding: 20px 10px;
        // height: 50px;
        border-bottom: 2px solid #f2f2f2;
        font-size: 30px;
        color: #666;
        span {
          display: inline-block;
          width: 30%;
        }
        p {
          font-size: 30px;
          display: inline-block;
          width: 70%;
        }
      }
    }
    .ul2 {
      li {
        img {
          width: 100%;
        }
      }
    }
  }
  .comment {
    line-height: 70px;
    .comment-fen {
      padding: 0 5px;
      display: flex;
      justify-content: space-between;
      span {
        width: 35%;
        color: #333;
        font-size: 32px;
        font-weight: bold;
      }
      div {
        width: 65%;
        color: #d70047;
        font-size: 40px;
        font-weight: bold;
        display: flex;
        p {
          font-size: 32px;
          width: 30%;
        }
        ul {
          width: 70%;
          display: flex;
          li {
            list-style: none;
            img {
              // margin-right: 2px;
              width: 32px;
            }
            //  float: left;
          }
        }
      }
    }
    .comment-p {
      div {
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        color: #666;
        span {
          margin-top: 10px;
          width: 40%;
          line-height: 40px;
        }
        p {
          width: 60%;
        }
      }
    }
    .comment-ping {
      padding: 40px 5px;
      border-top: 2px solid #f2f2f2;
      div {
        display: flex;
        justify-content: space-between;
      }
      .ping-y {
        line-height: 60px;
        i {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #f2f2f2;
          img {
            width: 100%;
          }
        }
        span {
          width: 78%;
          margin-left: 2%;
          color: #333;
          font-size: 32px;
          font-weight: bold;
        }
        p {
          font-size: 24px;
          color: #666;
          width: 20%;
        }
      }
      .ping-e {
        line-height: 60px;
        span {
          color: #333;
          font-size: 32px;
          width: 30%;
        }
        div {
          width: 70%;
          justify-content: flex-start;
          img {
            margin-top: 10px;
            width: 32px;
            height: 32px;
          }
        }
      }
      .ping-s {
        padding: 10px 10px;
        font-size: 32px;
        color: #333;
      }
      .ping-four {
        flex-wrap: wrap;
        span {
          color: #999;
          padding: 5px;
          width: 50%;
        }
      }
    }
  }
}
</style>