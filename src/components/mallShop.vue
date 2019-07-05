<template>
  <article class="mallshop" style="height: auto;">
    <div class="shop00">
      <div class="shopmid">
        <a id="firstH5UrlA" href="https://feature.mtime.cn/mobile/item/2018/Mug/">
          <img
            id="firstH5UrlImg"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&amp;width=640&amp;height=320&amp;clipType=4"
            class="m_img"
          />
          <div class="countdown"></div>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "mallshop"
};
</script>

<style scoped>
.mallshop {
  background: #fff;
  position: relative;
  margin-bottom: 0.3rem;
}
.mallshop .shop00 {
  width: 100%;
}

.mallshop .shopmid {
  position: relative;
}
.mallshop .shopmid a {
  display: block;
}
.m_img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
