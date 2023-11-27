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
        ...mapActions(counter,["getData_res","getList1","getList2"]),

        gocar(){

        },

        text() {
            this.getList1(this.language)
        }, 
        text1() {
            this.getList2(this.language)
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
                <div class="kotoba">
                <label for="" class="labelCss">中文</label>
                <input type="radio" name="languageBTN" value="chinese" checked @click="setLanguage('chinese')" >
                <label for="" class="labelCss">日本語</label>
                <input type="radio" name="languageBTN" value="japanese" @click="setLanguage('japanese')" >
                <label for="" class="labelCss">한국어</label>
                <input type="radio" name="languageBTN" value="korean" @click="setLanguage('korean')" >
                </div>
                <div class="foodSyoukai">
                    <div class="foodSyoukaiPic">
                        <div class="pic1">
                            <div class="usoDiv1"></div>
                        </div>
                        <div class="setsumei"><p class="foodP"></p></div>
                    </div>
                    <div class="foodSyoukaiPic">
                        <div class="setsumei"><p class="foodP"></p></div>
                        <div class="pic2">
                            <div class="usoDiv2"></div>
                        </div>
                    </div>
                    <div class="foodSyoukaiPic">
                        <div class="pic3">
                            <div class="usoDiv3"></div>
                        </div>
                        <div class="setsumei"><p class="foodP"></p></div>
                    </div>
                </div>
            </div>
            <img src="../img/777777.png" alt="" class="foodPic">
        </div>
        <div class="right">
            <div class="up">
                <select id="where" @focus="text()" @change="whereandsyurui()" class="choose1">
                    <option value="">行政區/行政区/행정구역</option>
                    <option  v-for="item in this.where">{{ item }}</option>
                </select>
                <select id = "syurui" @focus="text1()" @change="whereandsyurui()" class="choose2">
                    <option value="">種類/種類/유형</option>
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
                            <div class="resName"><p class="nameP">{{ item.name}}</p></div>
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
.nameP{
    font-size: 15px;
    font-weight:bold;
}
p{
    font-size: 13px;
    color: black;
}
.foodP{
    font-size: 13pt;
    margin: 15px;
    color: #E4D0D0;
    border-radius: 10pt;
}
.fa-minus{
    font-size: 9px;
    margin-top: 3px;
    margin-left: 405px;
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
width: 180px;
border-radius: 10px;
border: 1pt solid gray;
background-color: #F0DBDB ;
text-align: center;
margin-left: 10px;
color: gray;

}
.choose2{
height: 25px;
width: 150px;
border-radius: 10px;
border: 1pt solid gray;
background-color: #F0DBDB ;
text-align: center;
margin-left: 5px;
color: gray;
}
.labelCss{
    margin-left: 5px;
    color: gray;
}
.station{
    width: 200px;
    height: 220px;
    margin-bottom: 40px;
}
.car{
    position:absolute;
    width: 35px;
    height: 27px;
    margin-top: 58px;
    margin-left: 300px;
    animation-name:runCar;
    animation-duration:7s;
    animation-iteration-count:infinite;
}
@keyframes runCar{
    from{
        right:16%;
    }
    to{
        right:42%;
    }
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
    .kotoba{
        width: 31%;
        height: 6%;
        background-color: #F0DBDB;
        display: flex;
        margin-left: 415px;
        margin-top: 10px;
        border-radius: 5pt;
        border: 1pt solid #DBA39A ;
    }
    .foodSyoukai{
        width: 100%;
        height: 88%;
    }
    .foodSyoukaiPic{
        width: 100%;
        height: 30%;
        margin-top: 10px;
        display: flex;
    }
    .pic1{
        width: 50%;
        height: 100%;
        background-image:url(../img/棺材板.jpg);
        background-repeat: round;
        border-radius: 10px;
        margin-left: 10px;
        border: 2pt solid #DBA39A ;
    }
    .usoDiv1{
        width: 100%;
        height: 100%;
        &:hover{
        transition: cubic-bezier(0.6, 0.04, 0.98, 0.335);
        border-radius: 7px;
        background-color: #E4D0D0;
        opacity: 0.6;
        display: flex;
        &::before{
                    content: "棺材板 \Aシチュー入り揚げパン \A스튜 튀김 빵 ";
                    white-space:pre;
                    margin-left: 70px;
                    margin-top: 20px;
                    color: rgb(83, 80, 80);
                    font-weight: bold;
                }
    }
}
.usoDiv2{
        width: 100%;
        height: 100%;
        &:hover{
        transition: cubic-bezier(0.6, 0.04, 0.98, 0.335);
        border-radius: 7px;
        background-color: #E4D0D0;
        opacity: 0.6;
        display: flex;
        &::before{
                    content: "牛肉湯 \Aビーフスープ \A쇠고기 수프  ";
                    white-space:pre;
                    margin-left: 100px;
                    margin-top: 20px;
                    color: rgb(83, 80, 80);
                    font-weight: bold;
                }
    }
}
.usoDiv3{
        width: 100%;
        height: 100%;
        &:hover{
        transition: cubic-bezier(0.6, 0.04, 0.98, 0.335);
        border-radius: 7px;
        background-color: #E4D0D0;
        opacity: 0.6;
        display: flex;
        &::before{
                    content: "蝦捲 \A エビの包み揚げ \A 새우 튀김 ";
                    white-space:pre;
                    margin-left: 95px;
                    margin-top: 20px;
                    color: rgb(83, 80, 80);
                    font-weight: bold;
                }
    }
}
.setsumei{
    width: 45%;
    height: 100%;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 10px;
    background-color: #DBA39A;
}
    .pic2{
        width: 50%;
        height: 100%;
        background-image:url(../img/牛肉湯.jpg);
        background-repeat: round;
        border-radius: 10px;
        border: 2pt solid #DBA39A ;

    }
    .pic3{
        width: 50%;
        height: 100%;
        background-image:url(../img/台南蝦捲.jpg);
        background-repeat: round;
        border-radius: 10px;
        margin-left: 10px;
        border: 2pt solid #DBA39A ;
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
            margin-left: 30px;
            padding: 10px;
            overflow-y:scroll;
            background-image: url(../img/安平古堡2_preview_rev_1.png);
            
            
        }
        .infoSq{
            height: 30%;
            width: 95%;
            background-color: #DBA39A;
            margin-left: 4px;
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
            height: 95%;
            width: 42%;
            background-color: #F5EBE0;
            border: 0.5px solid gray ;
            border-radius: 15px;
            margin-top: 12px;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
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