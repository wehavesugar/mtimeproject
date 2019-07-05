<template>
  <div id="wrap">
    <header class="header">
      <a href="#" class="back">国</a>
      <a href="#" class="share">国</a>
    </header>
    <div class="wrapcon">
      <div class="filmtitle">
        <ul>
          <li>
            <div class="title">
              <h3>北京金逸国际影城荟聚店</h3>
              <div class="icon">
                <i class="i_01"></i>
                <i class="i_02"></i>
                <i class="i_03"></i>
                <i class="i_04"></i>
                <i class="i_05"></i>
              </div>
            </div>
          </li>
          <li>
            <a href="#" class="tel"></a>
          </li>
          <li>
            <a href="#" class="location"></a>
          </li>
        </ul>
      </div>
      <div class="hotmovie">
        <ul>
          <li>
            <a href="#">
              <div class="m_pic"></div>
              <b class="m_title">蜘蛛侠：英雄归来</b>
              <i class="m_score">8.1</i>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="m_pic"></div>
              <b class="m_title">蜘蛛侠：英雄归来</b>
              <i class="m_score">8.1</i>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="m_pic"></div>
              <b class="m_title">蜘蛛侠：英雄归来</b>
              <i class="m_score">8.1</i>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="m_pic"></div>
              <b class="m_title">蜘蛛侠：英雄归来</b>
              <i class="m_score">8.1</i>
            </a>
          </li>
        </ul>
      </div>
      <div class="select">
        <div class="movie_title">
          <a href="#">
            <h3 class="select_tit">蜘蛛侠：英雄归来</h3>
            <p>100分钟 - 动作 / 剧情 / 犯罪</p>
            <i class="more"></i>
          </a>
        </div>
        <div class="search_tab">
          <ul>
            <li>
              <a href="#">
                <span>明天（7月05日）</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>明天（7月06日）</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>明天（7月07日）</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="downapp">
          <i class="sun"></i>
          <p>用时光网App购票，享受更多优惠</p>
          <span>立即下载</span>
        </div>
        <div class="tiket">
          <ul>
            <li>
              <div class="time">9:35</div>
              <div class="tip">
                <p>2D/中文版</p>
                <p>八号厅</p>
              </div>
              <div class="price">￥39</div>
              <div class="buy">
                <a href="#">购票</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order"
};
</script>

<style scoped>
#wrap {
  width: 100%;
}
.header {
  width: 100%;
  height: 1.056rem;
  background: #1c2635;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
}
.back {
  display: block;
  width: 1.056rem;
  height: 1.056rem;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
  background: url(../../../static/img/h_btn_back.png) no-repeat 0.3rem center;
}
.share {
  display: block;
  width: 1.056rem;
  height: 1.056rem;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  text-align: center;
  background: url(../../../static/img/h_btn_back.png) no-repeat 0.3rem center;
}
.filmtitle {
  padding: 0.34rem 0.2rem 0.2rem 0.34rem;
}
.filmtitle ul {
  display: flex;
  justify-content: center;
}
.filmtitle ul li {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  width: 5rem;
  margin-right: 0.2rem;
}
.title h3 {
  font-size: 0.36rem;
}
.icon {
  display: flex;
  justify-content: flex-start;
}
.icon > i {
  display: block;
  width: 0.42rem;
  height: 0.42rem;
}
.tel {
  display: block;
  width: 0.88rem;
  height: 0.5rem;
  background: pink;
  border-left: 1px solid #777;
}
.location {
  display: block;
  width: 0.88rem;
  height: 0.5rem;
  background: pink;
  border-left: 1px solid #777;
}
.hotmovie {
  width: 100%;
  height: 3.5rem;
  background: #828282;
  overflow: hidden;
  padding-top: 0.34rem;
}
.hotmovie ul {
  width: 2000rem;
  height: 2.9rem;
  display: flex;
  flex-direction: row;
  margin-left: 0.34rem;
}
.hotmovie ul li {
  width: 1.7rem;
  height: 2.9rem;
  margin-left: 0.34rem;
}
.hotmovie ul li a {
  display: block;
  position: relative;
  height: 2.9rem;
  width: 1.7rem;
  margin-left: 0.34rem;
}
.m_pic {
  width: 1.7rem;
  height: 2.52rem;
}
.m_title {
  color: #fff;
  font-size: 0.26rem;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
}
.m_score {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background: #659d0e;
  position: absolute;
  right: 0;
  top: 0;
}
.movie_title {
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-around;
}
.movie_title a {
  overflow: hidden;
}
.select_tit {
  font-size: 0.36rem;
  line-height: 0.7rem;
  text-align: center;
}
.movie_title p {
  font-size: 0.3rem;
  line-height: 0.4rem;
  color: #777;
  text-align: center;
}
.search_tab {
  width: 100%;
  height: 1.06rem;
  background: #eee;
}
.search_tab ul {
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
}
.search_tab ul li {
  width: 3rem;
  height: 1.06rem;
  font-size: 0.28rem;
  color: #1e7dd7;
  padding: 0.34rem;
  box-sizing: border-box;
}
</style>