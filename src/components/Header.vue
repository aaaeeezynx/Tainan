<script>
import { RouterLink, RouterView } from 'vue-router'
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    },
    computed : {
        ...mapState(counter, ["location"])
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="header" :class="{'cass' : this.location === 1}">Home</RouterLink>
        <RouterLink to="/Person" class="header" :class="{'cass' : this.location === 2}">人口</RouterLink>
        <RouterLink to="/res" class="header" :class="{'cass' : this.location === 3}">餐廳</RouterLink>
        <RouterLink to="/Attration" class="header" :class="{'cass' : this.location === 4}">景點</RouterLink>
        <RouterLink to="/ParkingSpace" class="header" :class="{'cass' : this.location === 5}">停車位</RouterLink>
    </div>
</template>

<style scoped lang="scss">
.headerShow{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
        z-index: 9;
    }
    .cass{
        background-color: rgb(92, 69, 40);
        color: #fff;
    }
}
</style>