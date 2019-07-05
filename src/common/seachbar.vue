<template>
  <div class="movie_search">
    <div class="cityshow">
      <b>北京</b>
      <i></i>
    </div>
    <p class="search">
      <span>影院/影片/影人，任你搜</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.movie_search {
  position: fixed;
  top: 2.056rem;
  left: 0;
  background: #eee;
  width: 100%;
  height: 1.238rem;
  padding: 0.19rem 0.36rem;
  border-bottom: 1px solid #999;
}
.cityshow {
  float: left;
  margin-right: 0.5rem;
  height: 3.5em;
}
.cityshow b {
  font-size: 0.28rem;
  font-weight: normal;
  display: inline-block;
  float: left;
  margin-top: 0.2rem;
}
.cityshow i {
  display: block;
  width: 0.9rem;
  height: 0.82rem;
  background: url(../../../static/img/i_city.png) no-repeat 0.6rem 0.35rem;
}
.search {
  float: left;
  width: 5.334rem;
  height: 0.7876rem;
  font-size: 0.24rem;
  line-height: 0.7876rem;
  padding: 0 0.6rem 0 0.95rem;
  border-radius: 0.3rem;
  position: relative;
  background: #fff url(../../../static/img/search_ico_01.png) no-repeat 0.3rem
    0.2rem;
  background-size: 0.5rem 0.5rem;
}
.search span {
  color: #777;
  font-size: 0.3rem;
}
</style>
