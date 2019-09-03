<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:40:59
 * @LastEditTime: 2019-08-30 16:05:48
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
    <div  id="cart" v-cloak>
        <template v-if="itemlis.length">
          <table>
              <thead>
                  <tr>
                      <th></th>
                      <th>商品名称</th>
                      <th>商品单价</th>
                      <th>购买数量</th>
                      <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for=" (item,index) in itemlis" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button
                            @click="handleReduce(index)"
                            :disabled="item.count ===1">-</button>
                        {{item.count}}
                        <button @click="handleAdd(index)">+</button>

                    </td>
                    <td>
                        <button @click="handleRemove(index)">移除</button>
                    </td>
                  </tr>
              </tbody>
          </table>
          <div class="total">总价：¥{{totalPrice}}</div>
        </template>
         <div v-else>购物车为空</div>
    </div>
</div>
</template>

<script>
import { getCart } from '@/api'
export default {
  data () {
    return {
      itemlis: []
    }
  },
  created () {
    getCart().then(data => {
      console.log(data)
      // this.Foryou = data
      // console.log(this.Foryou)
    })
  },
  computed: {
    // 计算并获取总价
    totalPrice () {
      let total = 0
      for (let i = 0; i < this.itemlis.length; i++) {
        let item = this.itemlis[i]
        total += item.price * item.count
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  methods: {

  // 获取商品列表
    getGoodList () {
      this.$http.get('http://localhost:3000/api/goodlist').then(
        res => {
          var arrJson = JSON.parse(res.bodyText)
          this.itemlis = arrJson.data.list
        },
        function (err) {
          console.log(err)
        }
      )
    },
    // 减少商品数量
    handleReduce (index) {
      if (this.itemlis[index].count === 1) return
      this.itemlis[index].count--
    },
    // 增加商品数量
    handleAdd (index) {
      this.itemlis[index].count++
    },
    // 从购物车中移除该商品
    handleRemove (index) {
      this.itemlis.splice(index, 1)
    }
  },
  mounted () {
  // 获取商品
    this.getGoodList()
  }
}
</script>

<style scoped>
.total{
    text-align: left ;
}
[v-cloak]{
    display: none;
}
table{
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
}
th,td{
    padding: 8px 16px;
    border:1px solid #e9e9e9;
    text-align: left
}
th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
}
</style>
