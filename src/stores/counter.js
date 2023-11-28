import {defineStore} from 'pinia';

export default defineStore("counter",{
    state:()=> {
        return{
            location : 1,
        }
    },
    actions:{
        getLocation(){
            console.log(this.location)
        },
        setLocation(num){
            this.location = num;
        }
    }
})