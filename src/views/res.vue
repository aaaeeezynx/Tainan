<script>
import{mapState,mapActions} from 'pinia';
import counter from '../stores/api'
export default {
    data() {
        return {
            // obj: [],
            // where: [],
            // syurui: [],
            // searchedData: {},
            language:"chinese",
        }
    },
    computed: {
        ...mapState(counter,["resInfo","where","syurui","searchedData"])
    },
    methods: {
        ...mapActions(counter,["getData_res","getList"]),

        text() {
            this.getList(this.language)
            // fetch("../json/food.json")
            //     .then(response => response.json())
            //     .then(deta => {
            //         this.obj = deta;
            //         this.obj.forEach(item => {
            //             // console.log(item.district)
            //             if (!this.where.includes(item.district)) {
            //                 this.where.push(item.district)
            //             }
            //         })
            //         this.obj.forEach(item => {
            //             for (let i = 0; i < item.category.length; i++) {
            //                 // console.log(item.category)
            //                 if (!this.syurui.includes(item.category[i])) {
            //                     this.syurui.push(item.category[i])
            //                 }
            //             }
            //         })
            //         console.log(this.obj)
            //         console.log(this.where)
            //         console.log(this.syurui)
            //     }
            //     )
        },
            setLanguage(value){
                this.language = value;
                console.log(this.language);
                // this.language = num;
            },
        whereandsyurui(){
            // console.log(whereA.value);
            // console.log(syuruiA.value);
            let whereA = where.value;
            let syuruiA = syurui.value;
            this.getData_res(this.language,whereA,syuruiA);
            this.searchedData = []
        //     switch(true){
        //         case whereA != "" && syuruiA =="":
        //             // console.log(whereA,syuruiA);
        //             // this.searchedData.push(["a","b","c"])
        //             this.obj.forEach( item =>{
        //                 if(whereA == item.district){
        //                     this.searchedData.push({name:item.name, tel:item.tel, openTime:item.open_time, address:item.address})
        //                 }
        //             })
        //             console.log(this.searchedData);
        //         break;
        //         case whereA == "" && syuruiA != "":
        //             this.obj.forEach( item =>{
        //                 if(syuruiA == item.category){
        //                     this.searchedData.push({name:item.name, tel:item.tel, openTime:item.open_time, address:item.address})
        //                 }
        //             })
        //             console.log(this.searchedData);
        //         break;
        //         case whereA != "" && syuruiA != "":
        //             this.obj.forEach( item =>{
        //                 if(whereA == item.district && syuruiA == item.category)
        //                 this.searchedData.push({name:item.name, tel:item.tel, openTime:item.open_time, address:item.address})
        //             })
        //             console.log(this.searchedData);
        //         break;
        // }
    },
}
}

// }
</script>
<template>
    <div class="main">
        <div class="left">
            <div class="leftUp">
                <label for="">中文</label>
                <input type="radio" name="languageBTN" value="chinese" checked @click="setLanguage('chinese')">
                <label for="">日本語</label>
                <input type="radio" name="languageBTN" value="japanese" @click="setLanguage('japanese')">
                <label for="">한국어</label>
                <input type="radio" name="languageBTN" value="korean" @click="setLanguage('korean')">
            </div>
            <img src="../img/777777.png" alt="" class="foodPic">
        </div>
        <div class="right">
            <div class="up">
                <select id="where" @focus="text()" @change="whereandsyurui()" class="choose1">
                    <option value="">請選擇行政區</option>
                    <option  v-for="item in this.where">{{ item }}</option>
                </select>
                <select id = "syurui" @focus="text()" @change="whereandsyurui()" class="choose2">
                    <option value="">請選擇種類</option>
                    <option v-for="item in this.syurui">{{ item }}</option>
                </select>
                <img src="../img/小車車.png" alt="" class="car">
                <img src="../img/1212-PhotoRoom.png-PhotoRoom.png" alt="" class="station">
            </div>
            <div class="down">
                <ul v-for="item in this.searchedData"> 
                    <div class="infoSq">
                        <div class="infoUp">
                            <i class="fa-solid fa-minus "></i>
                            <i class="fa-regular fa-window-restore "></i>
                            <i class="fa-solid fa-xmark "></i>
                        </div>
                        <div class="infoDown">
                            <div class="resName"><h6>{{ item.name}}</h6></div>
                            <div class="dright">
                                <div class="resTel"><p>{{ item.tel}}</p></div>
                                <div class="resOpentime"><p>{{ item.openTime}}</p></div>
                                <div class="resAddress"><p>{{ item.address}}</p></div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
p{
    font-size: 9px;
}
.fa-minus{
    font-size: 9px;
    margin-top: 3px;
    margin-left: 435px;
}
.fa-window-restore{
    font-size: 9px;
    margin-top: 2px;
    margin-left: 5px;
}
.fa-xmark{
    font-size: 9px;
    margin-top: 2px;
    margin-left: 5px;
}
.choose1{
height: 25px;
width: 150px;
border-radius: 10px;
border: 1pt solid gray;
background-color: #F0DBDB ;
text-align: center;
margin-left: 55px;

}
.choose2{
height: 25px;
width: 150px;
border-radius: 10px;
border: 1pt solid gray;
background-color: #F0DBDB ;
text-align: center;
margin-left: 20px;
}
.station{
    width: 200px;
    height: 220px;
    margin-bottom: 40px;
}
.car{
    width: 35px;
    height: 27px;
    margin-top: 50px;
}
.foodPic{
    width: 620px;
    height: 80px;

}

.main {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color:#FEFCF3;

    .left {
        height: 85%;
        width: 50%;
        margin-left: 18px;
        
    }
    .leftUp{
        height: 95%;
        width: 100%;
        background-color: #F5EBE0;
        border-radius: 5Pt;
        margin-top: 20px;
        border: 3px solid #E4D0D0;
    }

    .right {
        height: 100%;
        width: 50%;

        .up {
            height: 18%;
            width: 90%;
            background-color: #DBA39A;
            border-radius: 5Pt;
            margin: 30px;
            margin-top: 20px;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: left;
            box-shadow: 0 3px 3px 0 gray;
        }

        .down {
            height: 70%;
            width: 90%;
            background-color: #F0DBDB;
            border-radius: 5Pt;
            margin-top: -23px;
            margin-left: 23px;
            padding: 10px;
            overflow-y:scroll;
        }
        .infoSq{
            height: 30%;
            width: 95%;
            background-color: #DBA39A;
            margin-left: 17px;
            border: 0.5px solid rgb(74, 69, 69);
        }
        .infoUp{
            height: 15%;
            width: 100%;
            background-color:#F5EBE0;
            display: flex;
            
        }
        .infoDown{
            height: 85%;
            width: 100%;
            display: flex;
            box-shadow: 0 3px 3px 0 gray ;
        }
        .resName{
            height: 75%;
            width: 42%;
            background-color: #F5EBE0;
            border: 0.5px solid gray ;
            border-radius: 15px;
            margin-top: 12px;
            margin-left: 10px;
        }
        .dright{
            height: 100%;
            width: 75%;
        }
        .resTel{
            height: 25%;
            width: 95%;
            background-color: #F5EBE0;
            border: 0.5px solid gray ;
            border-radius: 5px;
            margin-top: 6px;
            margin-left: 10px;
        }
        .resOpentime{
            height: 25%;
            width: 95%;
            background-color: #F5EBE0;
            border: 0.5px solid gray ;
            border-radius: 5px;
            margin-top: 3px;
            margin-left: 10px;
        }
        .resAddress{
            height: 25%;
            width: 95%;
            background-color: #F5EBE0;
            border: 0.5px solid gray ;
            border-radius: 5px;
            margin-top: 4px;
            margin-left: 10px;
            margin-bottom: 3px;
        }
    }
}
</style>