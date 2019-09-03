<template>
  <div class="buy">
    <!-- 头部 -->
    <Header></Header>
    <!--列表 -->
    <Navbar></Navbar>
    <!-- 底部 -->
    <Footer></Footer>
    <NavList></NavList>
  </div>
</template>
<script>
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "@/common/footer";
import NavList from "@/common/navList";
export default {
  components: {
    NavList,
    Header,
    Navbar,
    Footer
  }
};
</script>
<style scoped>
.buy{
  width: 100%;
  background: #fff;
  padding-bottom: 110px;
}
</style>>