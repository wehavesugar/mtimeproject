<template>
  <section class="m_bg_white">
    <article class="indexmovie">
      <h2>
        <a href="#!/home/hot/">
          <i class="i_tnext"></i>
          <b>正在热映（49部）</b>
        </a>
      </h2>
      <ul style="overflow: hidden;">
        <li>
          <a href="#!/movie/238037/">
            <div class="mpic">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F31%2F163639.93224012_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
                class="img_box"
              />
              <em class="m_score">
                <i>8.1</i>
              </em>
            </div>
            <p>
              <span>蜘蛛侠：英雄远征</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#!/movie/11550/">
            <div class="mpic">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F06%2F20%2F161105.62719992_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
                class="img_box"
              />
              <em class="m_score">
                <i>8.9</i>
              </em>
            </div>
            <p>
              <span>千与千寻</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#!/movie/218438/">
            <div class="mpic">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F21%2F110927.64276487_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
                class="img_box"
              />
              <em class="m_score">
                <i>8.6</i>
              </em>
            </div>
            <p>
              <span>玩具总动员4</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#!/movie/263080/">
            <div class="mpic">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F20%2F092152.85702867_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
                class="img_box"
              />
              <em class="m_score">
                <i>6.0</i>
              </em>
            </div>
            <p>
              <span>最好的我们</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#!/movie/255471/">
            <div class="mpic">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F07%2F01%2F091242.87940531_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
                class="img_box"
              />
            </div>
            <p>
              <span>扫毒2天地对决</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#!/movie/260270/">
            <div class="mpic">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F06%2F19%2F114911.85010841_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
                class="img_box"
              />
            </div>
            <p>
              <span>银河补习班</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#!/movie/236010/">
            <div class="mpic">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F06%2F10%2F094412.13305812_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
                class="img_box"
              />
              <em class="m_score">
                <i>7.4</i>
              </em>
            </div>
            <p>
              <span>爱宠大机密2</span>
            </p>
          </a>
        </li>
        <li>
          <a href="#!/movie/234318/">
            <div class="mpic">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F06%2F20%2F161525.36693768_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
                class="img_box"
              />
              <em class="m_score">
                <i>4.9</i>
              </em>
            </div>
            <p>
              <span>九龙不败</span>
            </p>
          </a>
        </li>
      </ul>
    </article>
    <article class="indexmovie indexclick">
      <h2>
        <a href="#!/home/coming/">
          <i class="i_tnext"></i>
          <b>即将上映（68部）</b>
        </a>
      </h2>
    </article>
  </section>
</template>

<script>
export default {
  name: "IndexMovie"
};
</script>

<style scoped>
.m_bg_white {
  background: #fff;
}
.indexmovie li p {
  padding: 0.125rem 0 0;
  width: 1.75rem;
  margin-bottom: 0.25rem;
  height: 0.95rem;
  overflow: hidden;
}

.indexmovie li p span {
  font-size: 0.33rem;
  line-height: 1.2;
}

.m_score i {
  font-size: 0.275‬rem;
}
.m_score {
  position: absolute;
  right: 0.075rem;
  top: 0.075rem;
  background: #659d0e;
  width: 0.5rem;
  height: 0.45rem;
  color: #fff;
  border-radius: 0;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  line-height: 0.45rem;
  text-align: center;
}
.indexmovie li .mpic img {
  width: 100%;
  border: 0;
  border: 1px solid #ddd;
}
.indexmovie li .mpic {
  position: relative;
  margin: auto;
  width: 1.625rem;
  height: 2.45rem;
}
.indexmovie li {
  float: left;
  display: inline;
  width: 25%;
  height: 3.6497916rem;
  text-align: center;
  margin: auto;
}
.indexmovie {
  padding: 0.5em 1.5em 1.5em;
}
.indexmovie h2 {
  position: relative;
  zoom: 1;
}
.indexmovie h2 a {
  display: block;
  line-height: 2;
}
.i_tnext,
.i_next {
  width: 0.336rem;
  height: 0.192rem;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.096rem;
  overflow: hidden;
  line-height: 2.64rem;
  text-indent: -999px;
  transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  display: block;
  background: #fff url("../../../static/img/i-tmore.png") no-repeat center
    center;
  background-size: auto 0.192rem;
}
.indexmovie h2 b {
  font-size: 0.42rem;
  color: black;
}
.indexclick {
  margin-top: -0.25rem;
  border-top: 1px solid #d8d8d8;
  margin-left: 0.375rem;
  padding-left: 0;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
</style>
