<template>
  <footer class="footer">
    <div id="navbar" class="link">
      <ul class="table_v_c">
        <router-link
          class="td"
          v-for="(item,index) in tabBars"
          :key="index"
          :to="item.path"
          tag="li"
        >
          <a href="#">
            <span>{{item.title}}</span>
          </a>
        </router-link>
      </ul>
    </div>
    <div class="footlink">
      <ul class="table_vh_c">
        <li class>
          <a href="http://www.mtime.com/rdtopc">
            <span>PC版</span>
          </a>
        </li>
        <li class="line">
          <span></span>
        </li>
        <li class>
          <a href="#!/download/" id="downloadApp">
            <span>客户端下载</span>
          </a>
        </li>
        <li class="line">
          <span></span>
        </li>
        <li class>
          <a href="#!/reportError/">
            <span>意见反馈</span>
          </a>
        </li>
        <li class="line">
          <span></span>
        </li>
        <li class>
          <a href="#!/help/helpCenter/">
            <span>帮助中心</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="copy">
      <p>
        <span>北京动艺时光网络科技有限公司</span>
        <a href="https://feature.mtime.cn/mobile/2018/licence/licence.html" class="honest">诚信亮标</a>
      </p>
      <p>
        <span>Copyright</span>
        <span class="copytime">2006-2019</span>
        <span>Mtime.com Inc. All rights reserved.</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
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
          path: "/explore"
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

<style scoped>
.footer {
  background: #f6f6f6;
  border-top: 1px solid #f6f6f6;
}
.link {
  background: #fff;
}
.table_v_c {
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: box;
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
}
.td {
  -webkit-box-flex: 1;
  -khtml-box-flex: 1;
  -ms-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1;
  -khtml-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  -o-flex: 1;
  flex: 1;
}

.td a {
  display: block;
  text-align: center;
  padding: 0.2815rem 0;
}
.td a span {
  color: #0074c5;
  font-size: 0.35rem;
}
.footlink {
  border-top: 0;
}
.table_vh_c {
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-pack: center;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: box;
}
.footlink a span {
  color: #333;
  font-size: 0.2814rem;
  padding: 0.354rem 0.36rem;
  display: block;
  overflow: hidden;
}
.footlink li.line span {
  display: inline-block;
  vertical-align: middle;
  width: 1px;
  background: #d8d8d8;
  overflow: hidden;
  height: 0.3rem;
}
.footer .copy {
  padding: 0 0 0.32rem 0;
}
.footer .copy p {
  color: #cdcdcd;
  text-align: center;
  padding-bottom: 0.125rem;
}
.footer .copy p:first-child span {
  font-size: 0;
  text-indent: -3943434px;
  background: url(../../static/img/fot_logo.png) no-repeat center center;
  background-size: auto 0.5rem;
  width: 1.5rem;
  height: 0.5rem;
  display: inline-block;
  vertical-align: middle;
}
.footer .copy .honest {
  font-size: 0;
  width: 1.625rem;
  height: 0.6rem;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.1rem;
  background: url(../../static/img/h_mark.jpg) no-repeat;
  background-size: cover;
}
.footer .copy p:last-child {
  padding: 0;
}
.footer .copy p span {
  font-size: 0.255rem;
}
</style>

