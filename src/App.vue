<template>
  <div id="app">
    <TabBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

import TabBar from "./common/tabbar.vue";
import Footer from "./common/ComponentFooter.vue";
export default {
  components: {
    TabBar,
    Footer
  }
};
</script>

<style>
#app {
  overflow: auto;
}
</style>
