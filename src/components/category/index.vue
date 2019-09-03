<template>
  <div class="cate">
    <!-- 搜索框 -->
    <Search></Search>
      <div class="content">
      <!-- 左侧滚动 -->
      <CateListL></CateListL>
      <!-- 右侧分类 -->
      <CateListR></CateListR>
      </div>
      <NavList></NavList>
    </div>
</template>
<script>
import Search from './components/search'
import CateListL from './components/cateListL'
import CateListR from './components/cateListR'
// import KindsRight from './components/kindsRight'
import NavList from '@/common/navList'
export default {
  components: {
    Search,
    CateListL,
    CateListR,
    NavList
  }
}
</script>
<style lang="less" scoped>
.cate {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.banner {
  width: 100%;
}
.content {
  display: flex;
  height: calc(100% - 200px);
  width: 100%;
}
/* 左侧样式 */
</style>
