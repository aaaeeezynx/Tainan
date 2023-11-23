import {defineStore} from 'pinia';

export default defineStore("indexState",{
    state:() =>({
        resInfo:{},
    }),
    
    getters:{
    
    },
    
    actions:{
        getData_res(){
            fetch("../json/food.json")
                .then(response => response.json())
                .then(deta => {
                    this.resInfo = deta;
        })
        }}
    })
