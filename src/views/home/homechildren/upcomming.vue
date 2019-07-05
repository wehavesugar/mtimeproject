<template>
  <div id="wrap">
    <header class="header">
      <a href="#" class="back"></a>
      <a href="#" class="share"></a>
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
              <img src="../../../static/img/get1.jpg" />
              <b class="m_title">蜘蛛侠：英雄归来</b>
              <i class="m_score">8.1</i>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../static/img/get1.jpg" />
              <b class="m_title">蜘蛛侠：英雄归来</b>
              <i class="m_score">8.1</i>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../static/img/get1.jpg" />
              <b class="m_title">蜘蛛侠：英雄归来</b>
              <i class="m_score">8.1</i>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../static/img/get1.jpg" />
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
            <li class="on">明天（7月05日）</li>
            <li>明天（7月05日）</li>
            <li>明天（7月05日）</li>
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
                <p>2D / 中文版</p>
                <p>八号厅</p>
              </div>
              <div class="price">￥39</div>
              <div class="buy">
                <a href="#" class="buy_tiket">购票</a>
              </div>
            </li>
            <li>
              <div class="time">9:35</div>
              <div class="tip">
                <p>2D / 中文版</p>
                <p>八号厅</p>
              </div>
              <div class="price">￥39</div>
              <div class="buy">
                <a href="#" class="buy_tiket">购票</a>
              </div>
            </li>
            <li>
              <div class="time">9:35</div>
              <div class="tip">
                <p>2D / 中文版</p>
                <p>八号厅</p>
              </div>
              <div class="price">￥39</div>
              <div class="buy">
                <a href="#" class="buy_tiket">购票</a>
              </div>
            </li>
            <li>
              <div class="time">9:35</div>
              <div class="tip">
                <p>2D / 中文版</p>
                <p>八号厅</p>
              </div>
              <div class="price">￥39</div>
              <div class="buy">
                <a href="#" class="buy_tiket">购票</a>
              </div>
            </li>
            <li>
              <div class="time">9:35</div>
              <div class="tip">
                <p>2D / 中文版</p>
                <p>八号厅</p>
              </div>
              <div class="price">￥39</div>
              <div class="buy">
                <a href="#" class="buy_tiket">购票</a>
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
  position: relative;
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
  background: url(../../../static/img/i_h_share.png) no-repeat 0.3rem center;
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
  height: 1.4rem;
}
.title {
  width: 5rem;
  margin-right: 0.2rem;
  height: 1.4rem;
}
.title h3 {
  font-size: 0.36rem;
}
.icon {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.2rem;
}
.icon i {
  margin-right: 0.15rem;
}
.i_01 {
  background: url(../../../static/img/i_cine_01.png) no-repeat;
  background-size: contain;
}
.i_02 {
  background: url(../../../static/img/ia_cine_05.png) no-repeat;
  background-size: contain;
}
.i_03 {
  background: url(../../../static/img/is_cine_02.png) no-repeat;
  background-size: cover;
}
.i_04 {
  background: url(../../../static/img/is_cine_04.png) no-repeat;
  background-size: contain;
}
.i_05 {
  background: url(../../../static/img/is_cine_06.png) no-repeat;
  background-size: contain;
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
  background: url(../../../static/img/i_tel_01.png) no-repeat 0.3rem;
  border-left: 1px solid #777;
  text-align: center;
}
.location {
  display: block;
  width: 0.88rem;
  height: 0.5rem;
  background: url(../../../static/img/i_address_01.png) no-repeat 0.3rem;
  border-left: 1px solid #777;
}
.hotmovie {
  width: 100%;
  height: 3.5rem;
  background: #828282;
  overflow-x: scroll;
  padding-top: 0.34rem;
}
.hotmovie ul {
  height: 2.9rem;
  display: flex;
  flex-direction: row;
  padding: 0 0.34rem;
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
  display: block;
  width: 1.7rem;
  white-space: nowrap;

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
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 1.4rem;
}
.select_tit {
  font-size: 0.36rem;
  line-height: 0.7rem;
  text-align: center;
  color: #000;
}
.movie_title p {
  font-size: 0.3rem;
  line-height: 0.4rem;
  color: #777;
  text-align: center;
}
.movie_title .more {
  position: absolute;
  top: 40px;
  right: 0.4rem;
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: url(../../../static/img/i-tmore.png) no-repeat center center;
  transform: rotate(-90deg);
}
.search_tab {
  width: 100%;
  height: 1.06rem;
  overflow-x: scroll;
  background: #eee;
}
.search_tab ul {
  height: 1.06rem;
  width: 9rem;
  display: flex;
  flex-direction: row;
}
.search_tab ul li {
  width: 3rem;
  height: 1.06rem;
  font-size: 0.32rem;
  padding: 0.34rem 0.2rem;
}
.on {
  color: #1e7dd7;
  font-weight: 900;
  border-bottom: 0.05rem solid #1e7dd7;
}
.downapp {
  width: 100%;
  height: 1.2rem;
  background-color: #fffaf2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.2rem;
}
.sun {
  display: block;
  width: 1rem;
  height: 1rem;
  background: url(../../../static/img/icon_light.png) no-repeat;
}
.downapp p {
  line-height: 0.4rem;
  width: 4rem;
  font-size: 0.3rem;
  color: #f94931;
}
.downapp span {
  line-height: 0.6rem;
  height: 0.6rem;
  width: 1.6rem;
  font-size: 0.3rem;
  font-weight: 700;
  color: #f94931;
  display: block;
  border: #f94931 1px solid;
  border-radius: 0.3rem;
  text-align: center;
}
.tiket {
  overflow: hidden;
}
.tiket ul {
  overflow: hidden;
}
.tiket ul li {
  display: flex;
  justify-content: space-around;
  padding: 0.3rem;
}
.time {
  font-weight: bold;
  font-size: 0.5rem;
  width: 1.36rem;
}
.tip {
  width: 2rem;
  font-size: 0.3rem;
  text-align: center;
}
.price {
  color: #ff8600;
  width: 1.8rem;
  font-size: 0.4rem;
  font-weight: 700;
  text-align: center;
}
.buy {
  line-height: 0.6rem;
  height: 0.6rem;
  width: 1.6rem;
  font-size: 0.32rem;
  font-weight: 700;
  display: block;
  background: #ff8600;
  border-radius: 0.3rem;
  text-align: center;
}
.buy_tiket {
  color: #fff;
}
</style>