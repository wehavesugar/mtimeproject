<template>
    <div>
        <h2>home</h2>
        <router-view></router-view>
        <button @click="handleTo()">跳转到二级页面</button>
        <button @click="handleForward()">前进</button>
    </div>
</template>

<script>
export default {
    name:"home",
    created() {
        console.log(this)
    },
    methods:{
        handleTo(){
            this.$router.push("/home/one")
        },
        handleForward(){
            this.$router.forward();
        }
    }
}
</script>

<style>
    
</style>