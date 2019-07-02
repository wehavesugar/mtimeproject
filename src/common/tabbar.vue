<template>
  <div id="footer">
    <ul>
      <router-link v-for="(item,index) in tabBars" :key="index" :to="item.path" tag="li">
        <!-- <i class="iconfont" v-html="item.icon"></i> -->
        <i></i>
        <span>{{item.title}}</span>
      </router-link>
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
          title: "列表",
          path: "/list"
        },
        {
          icon: "&#xe613;",
          title: "订单",
          path: "/order"
        },
        {
          icon: "&#xe605;",
          title: "我的",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

<style>
#footer {
  width: 100%;
  height: 1.056rem;
  position: fixed;
  left: 0;
  top: 0;
  background: #1c2635;
}

#footer > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
#footer > ul > li {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 0.3rem;
}
#footer > ul > li > i {
  font-size: 0.4rem;
}
#footer > ul > .router-link-active {
  color: #c33;
}
</style>