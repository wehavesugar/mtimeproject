<template>
  <div id="wrap">
    <header class="header">
      <a href="#" class="back"></a>
      <ul class="show_option">
        <li class="opt_active">
          <a href="#">
            <span>正在热映</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>即将上映</span>
          </a>
        </li>
      </ul>
    </header>
    <div class="movie_search">
      <div class="cityshow">
        <b>北京</b>
        <i></i>
      </div>
      <p class="search">
        <span>影院/影片/影人，任你搜</span>
      </p>
    </div>
    <div class="upcoming">
      <div class="mosemovie">
        <h2>
          <b>最受关注</b>
          <span>(10部)</span>
        </h2>
        <div class="moviescroll">
          <ul>
            <li>
              <span>7月5日</span>
              <div class="moviebox">
                <div class="upmoviepic">
                  <a href="#">
                    <img src="../../../static/img/get1.jpg" alt />
                  </a>
                </div>
                <div class="movieinfo">
                  <div class="info">
                    <a href="#">扫黄2天地对决</a>
                    <p>
                      <b class="num">1986</b>人想看 - 动作 / 剧情 / 犯罪
                    </p>
                    <p class="info_txt">导演：邱礼涛</p>
                    <p class="info_txt">演员：刘德华,古天乐</p>
                  </div>
                  <div class="btn">
                    <a href="#" class="btn_orange">超前预售</a>
                    <a href="#">预告片</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span>7月5日</span>
              <div class="moviebox">
                <div class="upmoviepic">
                  <a href="#">
                    <img src="../../../static/img/get1.jpg" alt />
                  </a>
                </div>
                <div class="movieinfo">
                  <div class="info">
                    <a href="#">扫黄2天地对决</a>
                    <p>
                      <b class="num">1986</b>人想看 - 动作 / 剧情 / 犯罪
                    </p>
                    <p class="info_txt">导演：邱礼涛</p>
                    <p class="info_txt">演员：刘德华,古天乐</p>
                  </div>
                  <div class="btn">
                    <a href="#" class="btn_orange">超前预售</a>
                    <a href="#">预告片</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <div class="movie_content">
      <h2>
        <b>即将上映</b>
        <span>(63部)</span>
      </h2>
      <div class="movielist">
        <div class="month">
          <span>7月</span>
        </div>
        <ul>
          <li>
            <div class="day">
              <span>5日</span>
            </div>
            <div class="movieboxlist">
              <div class="moviepic">
                <a href="#">
                  <img src="../../../static/img/get1.jpg" alt />
                </a>
              </div>
              <div class="movieinfo">
                <div class="info">
                  <a href="#">扫黄2天地对决</a>
                  <p>
                    <b class="num">1986</b>人想看 - 动作 / 剧情 / 犯罪
                  </p>
                  <p class="info_txt">导演：邱礼涛</p>
                </div>
                <div class="btn">
                  <a href="#" class="btn_orange">超前预售</a>
                  <a href="#">预告片</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="day">
              <span>5日</span>
            </div>
            <div class="movieboxlist">
              <div class="moviepic">
                <a href="#">
                  <img src="../../../static/img/get1.jpg" alt />
                </a>
              </div>
              <div class="movieinfo">
                <div class="info">
                  <a href="#">扫黄2天地对决</a>
                  <p>
                    <b class="num">1986</b>人想看 - 动作 / 剧情 / 犯罪
                  </p>
                  <p class="info_txt">导演：邱礼涛</p>
                </div>
                <div class="btn">
                  <a href="#" class="btn_orange">超前预售</a>
                  <a href="#">预告片</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="movielist">
        <div class="month">
          <span>8月</span>
        </div>
        <ul>
          <li>
            <div class="day">
              <span>1日</span>
            </div>
            <div class="movieboxlist">
              <div class="moviepic">
                <a href="#">
                  <img src="../../../static/img/get1.jpg" alt />
                </a>
              </div>
              <div class="movieinfo">
                <div class="info">
                  <a href="#">扫黄2天地对决</a>
                  <p>
                    <b class="num">1986</b>人想看 - 动作 / 剧情 / 犯罪
                  </p>
                  <p class="info_txt">导演：邱礼涛</p>
                </div>
                <div class="btn">
                  <a href="#" class="btn_orange">超前预售</a>
                  <a href="#">预告片</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="day">
              <span>5日</span>
            </div>
            <div class="movieboxlist">
              <div class="moviepic">
                <a href="#">
                  <img src="../../../static/img/get1.jpg" alt />
                </a>
              </div>
              <div class="movieinfo">
                <div class="info">
                  <a href="#">扫黄2天地对决</a>
                  <p>
                    <b class="num">1986</b>人想看 - 动作 / 剧情 / 犯罪
                  </p>
                  <p class="info_txt">导演：邱礼涛</p>
                </div>
                <div class="btn">
                  <a href="#" class="btn_orange">超前预售</a>
                  <a href="#">预告片</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
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
.show_option {
  float: left;
  width: 5.16rem;
  height: 0.6756rem;
  background: #0d121a;
  border-radius: 0.3378rem;
  text-align: center;
}
.show_option > li {
  width: 2.5622rem;
  height: 0.6356rem;
  border-radius: 0.3178rem;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
.show_option > li > a {
  display: block;
}
.show_option > li > a > span {
  color: #999;
  font-size: 0.28rem;
}
.opt_active {
  background: #1c2635;
}
.opt_active a {
  color: #fff;
}
.movie_search {
  background: #eee;
  width: 100%;
  height: 1.238rem;
  padding: 0.19rem 0.36rem;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
}
.cityshow {
  float: left;
  margin-right: 0.2rem;
  height: 3.5em;
}
.cityshow b {
  font-size: 0.32rem;
  font-weight: normal;
  display: inline-block;
  float: left;
  margin-top: 0.2rem;
}
.cityshow i {
  display: block;
  width: 1.2rem;
  height: 0.82rem;
  background: url(../../../static/img/i_city.png) no-repeat 0.8rem 0.4rem;
}
.search {
  float: left;
  width: 5rem;
  height: 0.7876rem;
  font-size: 0.24rem;
  line-height: 0.7876rem;
  padding: 0 0.5rem 0 0.95rem;
  border: 1px solid #777;
  border-radius: 0.18rem;
  position: relative;
  background: #fff url(../../../static/img/search_ico_01.png) no-repeat 0.25rem
    0.15rem;
  background-size: 0.5rem 0.5rem;
}
.search span {
  color: #777;
  font-size: 0.32rem;
}
.upcoming {
  width: 100%;
  padding: 0.28rem 0.35rem;
  box-sizing: border-box;
  overflow: hidden;
  box-sizing: border-box;
}
.mosemovie > h2 {
  font-size: 0.4rem;
}
.mosemovie > h2 > span {
  color: #777;
}
.moviescroll {
  padding: 0.34rem 0 0 0;
  /* margin-bottom: 0.4rem; */
}

.moviescroll ul {
  width: 3000rem;
  height: 3.42rem;
  display: flex;
  justify-content: flex-start;
}
.moviescroll > ul > li {
  position: relative;
  width: 6.82rem;
  padding: 0.28rem 0 0 0;
  margin-right: 0.2rem;
  border-top: 1px solid #777;
  border-right: 1px solid #777;
}
.moviescroll > ul > li > span {
  position: absolute;
  top: -22px;
  left: 0px;
  color: #777;
  background: #fff;
  display: block;
  width: 1.4rem;
  font-size: 0.32rem;
  text-align: right;
  padding-right: 0.2rem;
}
.moviebox {
  width: 6.2rem;
  height: 3rem;
  display: flex;
}

.upmoviepic {
  width: 2rem;
  height: 3rem;
  margin-right: 0.3rem;
}
.upmoviepic > a {
  display: block;
  width: 1.8rem;
  height: 3rem;
}
.upmoviepic > a > img {
  width: 1.8rem;
  height: 3rem;
}
.movieinfo {
  width: 4.4rem;
  /* height: 3rem; */
}
.movieinfo > .info > a {
  font-size: 0.38rem;
  font-weight: 900;
  line-height: 0.42rem;
}
.movieinfo > .info p {
  font-size: 0.28rem;
  line-height: 0.52rem;
}
.movieinfo > .info p .num {
  color: tomato;
}
.movieinfo .btn {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  height: 0.8rem;
}
.movieinfo .btn > a {
  display: block;
  width: 2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  border: 1px solid #659c0d;
  color: #659c0d;
  border-radius: 0.4rem;
  font-size: 0.34rem;
}
.btn_orange {
  background: #ff8600;
  color: #fff;
  border: 1px solid #ff8600;
}
.space {
  width: 100%;
  background: #eee;
  height: 0.36rem;
}
.movie_content {
  width: 100%;
  padding: 0.2rem 0 0 0.35rem;
  box-sizing: border-box;
}
.movielist .month {
  border-bottom: 1px solid #bbb;
  padding: 0.15rem 0 0.2rem;
  margin-right: -0.5rem;
}
.month span {
  font-size: 0.32rem;
}
.movielist > ul > li {
  display: flex;
  padding: 0.4rem 0;
}
.day {
  width: 0.6rem;
}
.movieboxlist {
  width: 6.4rem;
  display: flex;
}
.moviepic {
  width: 1.5rem;
  height: 2.1rem;
  margin-right: 0.3rem;
}

.moviepic > a {
  display: block;
  width: 1.5rem;
  height: 2.1rem;
}
.moviepic a img {
  display: block;
  width: 1.5rem;
  height: 2.1rem;
}
</style>