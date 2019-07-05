<template>
  <div class="container">
    <div id="home">
      <index-movie />
      <cin-line />
      <today-hot />
      <router-view></router-view>
      <!-- <button @click="handleTo()">跳转到二级页面</button>
      <button @click="handleForward()">前进</button>-->
    </div>
  </div>
</template>

<script>
import IndexMovie from "./indexMovie.vue";
import CinLine from "../../components/cin_line.vue";
import TodayHot from "./todayhot.vue";
export default {
  components: { IndexMovie, CinLine, TodayHot },
  name: "home",
  created() {
    console.log(this);
  },
  methods: {
    handleTo() {
      this.$router.push("/home/one");
    },
    handleForward() {
      this.$router.forward();
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%s;
}
</style>