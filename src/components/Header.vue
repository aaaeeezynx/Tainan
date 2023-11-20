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
    </div>
</template>

<style scoped lang="scss">
.headerShow{
    width: 100%;
    height: 100%;
    background-color: aquamarine;
}
</style>