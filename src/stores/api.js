import {defineStore} from 'pinia';
import L from 'leaflet';

export default defineStore("counter",{
    // setup(){
    //     map=L.map('map').setView([22.9944063,120.1858614],13);
    //     L.map('map').setView([22.9944063,120.1858614],13);
    //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //             zoomControl: true , //是否要縮放的按鈕
    //             }).addTo(map);
    // },
    state(){
        return{
        obj:[],
        resInfo:{},
        where: [],
        syurui: [],
        searchedData: [],
        string:"",
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
        },
        getList(lenguage1){
            this.string="";
            switch(lenguage1){
                case  "chinese":
                this.string = "../json/food.json"
                    break;
                case "japanese":
                this.string = "../json/foodJp.json"
                    break;
                case "korean":
                    this.string = "../json/foodKr.json"
                    break;
            }
                this.where=[];
                this.syurui=[];
            fetch(this.string)
                .then(response => response.json())
                .then(deta => {
                    this.obj = deta;
                    this.obj.forEach(item => {
                        // console.log(item.district)
                        if (!this.where.includes(item.district)) {
                            this.where.push(item.district)
                        }
                    })
                    this.obj.forEach(item => {
                        for (let i = 0; i < item.category.length; i++) {
                            // console.log(item.category)
                            if (!this.syurui.includes(item.category[i])) {
                                this.syurui.push(item.category[i])
                            }
                        }
                    })
                    // console.log(this.obj)
                    // console.log(this.where)
                    // console.log(this.syurui)
                }
                )
        },
        getData_res(lenguage1,whereA,syuruiA){
            this.string="";
            this.searchedData=[];
            switch(lenguage1){
                case  "chinese":
                this.string = "../json/food.json"
                    break;
                case "japanese":
                this.string = "../json/foodJp.json"
                    break;
                case "korean":
                    this.string = "../json/foodKr.json"
                    break;
            }
            if(this.string != ""){
            fetch(this.string)
                .then(response => response.json())
                .then(deta => {
                    this.resInfo = deta;
                    console.log(this.resInfo);
                })
                switch(true){
                    case whereA != "" && syuruiA =="":
                        // console.log(whereA,syuruiA);
                        // this.searchedData.push(["a","b","c"])
                        this.obj.forEach( item =>{
                            if(whereA == item.district){
                                this.searchedData.push({name:item.name, tel:item.tel, openTime:item.open_time, address:item.address})
                            }
                        })
                        console.log(this.searchedData);
                    break;
                    case whereA == "" && syuruiA != "":
                        this.obj.forEach( item =>{
                            if(syuruiA == item.category){
                                this.searchedData.push({name:item.name, tel:item.tel, openTime:item.open_time, address:item.address})
                            }
                        })
                        console.log(this.searchedData);
                    break;
                    case whereA != "" && syuruiA != "":
                        this.obj.forEach( item =>{
                            if(whereA == item.district && syuruiA == item.category)
                            this.searchedData.push({name:item.name, tel:item.tel, openTime:item.open_time, address:item.address})
                        })
                        // console.log(this.searchedData);
                    break;
            }
            }
        },
        // getData_resJp(){
        //     fetch("https://opengov.tainan.gov.tw/OpenApi/api/service/get/c2ee0901-af20-4306-a56a-a3eab95bd24f")
        //         .then(response => response.json())
        //         .then(deta => {
        //             this.resJpInfo = deta;
        // })
        // },
        // getData_resKr(){
        //     fetch("https://opengov.tainan.gov.tw/OpenApi/api/service/get/7a833dba-017b-4f63-87fa-7922c83708bc")
        //         .then(response => response.json())
        //         .then(deta => {
        //             this.resKrInfo = deta;
        // })
        // },
    }
    })
