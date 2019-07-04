<template>
  <div id="navbar" class="hea_news">
    <ul class="table_v_c">
      <li class="td">
        <a href="#/">
          <i class="logo_mtime"></i>
        </a>
      </li>
      <router-link class="td" v-for="(item,index) in tabBars" :key="index" :to="item.path" tag="li">
        <a href="#">
          <span>{{item.title}}</span>
          <em v-if="item.title == '商城'" class="new">NEW</em>
        </a>
      </router-link>
      <li class="td">
        <a href="#">
          <i class="ico_my"></i>
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabBars: [
        {
          icon: "&#xe717;",
          title: "首页",
          path: "/home"
        },
        {
          icon: "&#xe61d;",
          title: "购票",
          path: "/list"
        },
        {
          icon: "&#xe613;",
          title: "商城",
          path: "/order"
        },
        {
          icon: "&#xe605;",
          title: "发现",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

<style scoped>
#navbar {
  width: 100%;
  height: 1.056rem;
  background: #1c2635;
}
.td {
  flex: 1;
}
.hea_news {
  height: 100%;
}
.logo_mtime {
  width: 1.3438rem;
  height: 0.4318rem;
  background: url("../../static/img/logo_mtime.png") no-repeat;
  background-size: contain;
  display: inline-block;
  vertical-align: middle;
}
.table_v_c {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.hea_news li a {
  color: #bbb;
  display: inline-block;
  height: 1.056rem;
  line-height: 1.056rem;
  position: relative;
}
.hea_news li a span {
  font-size: 0.3rem;
}

.hea_news li {
  color: #bbb;
  display: inline-block;
  line-height: 0.4318rem;
  position: relative;
  text-align: center;
  height: 100%;
  flex: auto;
}
.router-link-active span:after {
  content: "";
  display: block;
  height: 0.0478rem;
  background: #fff;
  width: 100%;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
}
.hea_news li.router-link-active a {
  color: #fff;
  position: relative;
  font-weight: bold;
}
.hea_news li a em.new {
  background: -webkit-linear-gradient(top, #ef4545, #d80808);
  background: -moz-linear-gradient(top, #ef4545, #d80808);
  width: 0.6rem;
  height: 0.288rem;
  border-radius: 0.24rem;
  overflow: hidden;
  color: #fff;
  font-size: 0.192rem;
  line-height: 0.264rem;
  position: absolute;
  top: 0.168rem;
  left: 0.624rem;
}
.ico_my {
  width: 1.4em;
  height: 1.8em;
  display: inline-block;
  vertical-align: middle;
  background: url(../../static/img//ico_my.png) no-repeat;
  background-size: cover;
}
</style>