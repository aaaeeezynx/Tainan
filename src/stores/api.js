import {defineStore} from 'pinia'

export default defineStore("counter",{
    state(){
        return{
        parkingSpaceData:[],
        }
    },

    getters:{

    },

    actions:{
        getParkingSpaceData(){
            fetch('https://opengov.tainan.gov.tw/OpenApi/api/service/get/c3604e1d-c4e1-4224-9d41-084ce299c3bf')
            .then(response => response.json())
            .then(data => {                
            this.parkingSpaceData = data;
            console.log(this.parkingSpaceData);          
            })
        }
    }
})