<template>
  <div id="app">
    <router-view></router-view>
    <TabBar />
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/mine">我的</router-link>-->

    <!-- <a href="#/home">首页</a>
     <a href="#/list">列表</a>
     <a href="#/order">订单</a>
    <a href="#/mine">我的</a>-->
  </div>
</template>

<script>
import TabBar from "./common/tabbar.vue";
export default {
  components: {
    TabBar
  }
};
</script>

<style>
</style>
