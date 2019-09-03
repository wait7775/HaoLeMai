<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 16:48:57
 * @LastEditTime: 2019-08-30 14:40:04
 * @LastEditors: Please set LastEditors
 -->
<!--回到顶部-->
  <template>
    <div class="scrollTop" @click="toTop" >
        <img src="../images/gettop.png" alt />
    </div>
</template>

<script>
export default {
  name: 'scroll-top',

  props: {
    toBottom: {
      type: Number,
      default: 0
    }
  },

  methods: {
    toTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  },

  mounted () {
    document.querySelector('.scrollTop').style.bottom = this.toBottom
  }
}
</script>

    <style scoped>
.scrollTop {
    /* display: fixed; */
    right: 0;
    position: fixed;
    right: 50px;
    margin-bottom: 200px;
    width: 80px;
    height: 80px;
    color: #fff;
    /* border: 1px solid red; */
    background: transparent;
    z-index: 998;
}
.scrollTop img {
    width: 100%;
    height: 100%;
    /* opacity: 0.6; */
}
</style>
