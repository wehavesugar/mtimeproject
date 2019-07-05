<template> 
    <div id="main">
        <ul class="newsnav">
            <li class="active"><a href='javascript:;'>新闻</a></li>
            <li><a href='javascript:;'>预告片</a></li>
            <li><a href='javascript:;'>排行榜</a></li>
            <li><a href='javascript:;'>影评</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"newsnav"
}
</script>

<style scoped>
    #main{
        width:100%;
        overflow-y: scroll;  
    }
    .newsnav {
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        width: 100%;
        color: #000;
    }
    
    .newsnav>li {
        height: .96rem;
        width: 25%;
        line-height: .96rem;
        font-size: .32rem;
    }
    
    .newsnav .active a {
        color: #1e7dd7;
        font-weight: bold;
    }
    
</style>