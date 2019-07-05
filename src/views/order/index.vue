<template>
    <div>
        <div id='main'>
            <Newsnav/>
            <div class="banner">
                <div class='imgbox'>
                    <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F07%2F19%2F103505.79149520.jpg" alt="2017年SDCC圣地亚哥国际漫展前瞻">
                </div>
                <h2 class="backtitle">
                    <b>2017年SDCC圣地亚哥国际漫展前瞻</b>
                </h2>
            </div>
            <ul class="newslist">
                <li class="table notbigpic">
                    <p>周迅主演《保持沉默》人物海报</p>
                    <div class="picbox">
                        <a href="javascript:;">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F113740.90728550.jpg">
                        </a>
                        <a href="javascript:;">
                            <img class="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F112542.76939198.jpg">
                        </a>
                        <a href="javascript:;">
                            <img class="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F112619.35721881.jpg">
                        </a>
                    </div>
                    <div class="text">
                        <time>8小时前</time>
                    </div>
                </li>
                <li class="table">
                    <a class="pic" href="javasvcript:;">
                        <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F02%2F174514.66300346.jpg">
                    </a>
                    <div class="content">
                        <h4>"摔跤吧爸爸"女主"遵循信仰"退演..</h4>
                        <div class="text">
                            <time>12小时前</time>
                            <span>评论 12</span>
                        </div>
                    </div>
                </li>
                <li class="table notbigpic">
                    <p>周迅主演《保持沉默》人物海报</p>
                    <div class="picbox">
                        <a href="javascript:;">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F113740.90728550.jpg">
                        </a>
                        <a href="javascript:;">
                            <img class="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F112542.76939198.jpg">
                        </a>
                        <a href="javascript:;">
                            <img class="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F112619.35721881.jpg">
                        </a>
                    </div>
                    <div class="text">
                        <time>8小时前</time>
                    </div>
                </li>
                <li class="table">
                    <a class="pic" href="javasvcript:;">
                        <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F02%2F174514.66300346.jpg">
                    </a>
                    <div class="content">
                        <h4>"摔跤吧爸爸"女主"遵循信仰"退演..</h4>
                        <div class="text">
                            <time>12小时前</time>
                            <span>评论 12</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import Newsnav from "./newsnav.vue"
export default {
    components:{
    Newsnav
},
    name:"order"
}
</script>

<style scoped>
    #main{
        width:100%;
        overflow-y: auto;  
    }
    .banner {
        width: 100%;
        height: 4.32rem;
        position: relative;
    }
    
    .banner>.imgbox {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .banner>.imgbox>img {
        width: 100%;
        display: block;
    }
    
    .backtitle {
        width: 100%;
        color: #fff;
        font-size: .36rem;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        line-height: .9356rem;
        background: rgba(0, 0, 0, 0.5);
    }
    
    .banner>.backtitle>b {
        font-weight: 900;
    }
    
    .banner>.newslist {
        width: 100%;
    }
    
    .newslist {
        padding-left: .36rem;
    }
    
    .newslist>.table {
        padding-top: .36rem;
        padding-bottom: .324rem;
        display: flex;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
    }
    
    .newslist>.table>.pic {
        display: block;
        height: 1.8rem;
        width: 1.8rem;
        margin-bottom: 0.0722rem;
    }
    
    .newslist>.table>.pic>img {
        display: block;
        box-sizing: border-box;
        height: 100%;
        width: 1.8rem;
    }
    
    .table>.content {
        padding: 0 .36rem;
        box-sizing: border-box;
        width: 100%;
    }
    
    .table>.content>h4 {
        width: 100%;
        height: .88rem;
        font-size: .40rem;
        font-weight: bold;
        line-height: .44rem;
        box-sizing: border-box;
        margin-bottom: .1678rem;
    }
    
    .table>.content>.text {
        box-sizing: border-box;
        padding: .18rem 0 .048rem 0;
        height: .4678rem;
        color: #999;
    }
    
    .table>.content>.text>time {
        margin-right: 0.90234rem;
    }
    
    .newslist .notbigpic {
        display: flex;
        flex-direction: column;
        padding-right: 0.36rem;
        padding-bottom: .12rem;
        box-sizing: border-box;
    }
    
    .notbigpic>p {
        display: block;
        width: 100%;
        font-size: .40rem;
        font-weight: bold;
        line-height: .44rem;
    }
    
    .notbigpic>.picbox {
        padding: .24rem 0 .048rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    
    .notbigpic>.picbox>a {
        display: block;
        width: 2.28rem;
        height: 1.56rem;
        margin-right: .02rem;
        overflow: hidden;
        display: block;
    }
    
    .notbigpic>.picbox>a>img {
        display: block;
        width: 2.28rem;
        height: 1.56rem;
    }
    
    .notbigpic>.text {
        padding: .18rem 0 .048rem 0;
        height: 0.23982rem;
        line-height: 0.23982rem;
        color: #999;
    }
    
    .notbigpic>.text>time {
        display: block;
        margin-right: 0.90234rem;
    }
</style>