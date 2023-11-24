<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="header">Home</RouterLink>
        <RouterLink to="/Person" class="header">人口</RouterLink>
        <RouterLink to="/res" class="header">餐廳</RouterLink>
        <RouterLink to="" class="header">景點</RouterLink>
        <RouterLink to="" class="header">停車位</RouterLink>
    </div>
</template>

<style scoped lang="scss">
.headerShow{
    width: 100%;
    height: 100%;
    background-color:#F0DBDB;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header{
        color: #DBA39A;
        font-size: 32px;
        text-decoration: none;
        
    }
}
</style>