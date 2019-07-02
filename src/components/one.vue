<template>
    <div>
       <h2>我是一个home的二级页面</h2> 
       <button @click="handleBack()">返回</button>
    </div>
</template>

<script>
export default {
    name:"one",
    methods: {
        handleBack(){
            this.$router.back();
        }
    },
}
</script>

<style>
    
</style>