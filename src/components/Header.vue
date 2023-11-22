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
        <!-- 此頁為自我介紹 -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/VtextAndVmodel">VtextAndVmodel</RouterLink>
        <RouterLink to="/Attration1">景點</RouterLink>
    </div>
</template>

<style scoped lang="scss">
.headerShow{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: aquamarine;
}
</style>