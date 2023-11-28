<script>
import { watch } from 'vue';
import { onMounted,ref } from 'vue';
import { mapState, mapActions } from 'pinia'
import api from '../stores/api.js'

import '../../node_modules/leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'



export default {
   data() {
      return {
         obj: [],
         zoneList: [],
         spaceTypeList: [],
         carTypeList: new Map([
            ["汽車", "car"],
            ["機車", "moto"],
         ]),
         serchedData: [],
         string: "",
         map:"",
         mapMarker:"",
         polyLine:"",
         line:[
            [22.982574,120.183662]
         ],
      }
   },
   computed: {
      ...mapState(api, ["parkingSpaceData"])
   },
   methods: {
      ...mapActions(api, ["getParkingSpaceData"]),

      getUserLocation(){
         if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
               // this.map.setView([position.coords.latitude,position.coords.longitude],13)
               this.mapMarker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(this.map);
               this.line.push([position.coords.latitude,position.coords.longitude])
               this.polyLine = L.polyline(this.line).addTo(this.map);
               this.map.flyTo([position.coords.latitude,position.coords.longitude],13)
               console.log(position.coords.latitude,position.coords.longitude);
            })
         }else{
            console.log("您的瀏覽器不支援，請使用其他瀏覽器");
         }
      },
      // goPositionNow(){
      //    this.map.setView([22.982574,120.183662],13);
      // },
      // getPosition(position){
      //    console.log(position.coords.latitude,position.coords.longitude);
      // },
      search() {
         let zoneSelected = zoneSelect.value;
         let spaceTypeSelected = spaceTypeSelect.value;
         let carTypeSelected = carTypeSelect.value
         //使用三元運算符組裝字串
         this.string = (zoneSelected ? "zoneSelected == item.zone" : "") + (spaceTypeSelected ? "&&spaceTypeSelected == item.typeName" : "") + (carTypeSelected ? "&&item." + carTypeSelected + ">0" : "")
         //如果開頭是&&的話，將開頭的&&刪掉
         this.string = (this.string.startsWith("&&") ? this.string.slice(2) : this.string)
         this.serchedData = []
         this.parkingSpaceData.data.forEach(item => {
            //3種條件的組合有7種，我想寫得簡短又暫時想不到其他方法，所以我使用了eval方法將我組裝的字串轉為可執行的條件式，但這個eval方法容易有資安上的問題，謹慎使用
            if (eval(this.string)) {
               this.serchedData.push({ name: item.name, typeName: item.typeName, zone: item.zone, address: item.address, carDis: item.carDis, car: item.car, carGreen: item.carGreen, carWoman: item.carWoman, largeCar: item.largeCar, moto: item.moto, motoDis: item.motoDis, chargeTime: item.chargeTime, chargeFee: item.chargeFee })
            }
         });
         console.log(this.serchedData);
      },
   },
   created() {
       //透過api獲取資料
      this.getParkingSpaceData();  
      watch(() => this.parkingSpaceData, () => {         //偵測到變數內容的值被改變時，將下拉選單的內容產生出來
         this.parkingSpaceData.data.forEach(item => {
            if (item.zone != undefined && !this.zoneList.includes(item.zone)) {  //抓取"地區"的下拉選單
               this.zoneList.push(item.zone);
            }
            if (item.typeName != undefined && !this.spaceTypeList.includes(item.typeName)) { //抓取"停車場類型"的下拉選單
               this.spaceTypeList.push(item.typeName);
            }
         });
      })
   },
   mounted() { //不知道為什麼放mounted會比created還快，非同步?
      this.map = L.map('map').setView([22.982574,120.183662],13)
         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
         maxZoom:20,
         attribution: '© OpenStreetMap'
      }).addTo(this.map)
   }
}



</script>
<template>
   <div class="outer">
      <div class="left">
         <div  id="map" class="map"></div>
         <button class="positionNow" @click="getUserLocation()">目前位置</button>
      </div>
      <div class="right">
         <div class="rightTop">
            <div class="rightSelectArea">
               <select class="select" id="zoneSelect" @change="search()">
                  <option value="">請選擇地區</option>
                  <option v-for="item in zoneList">{{ item }}</option>
               </select>
               <select class="select" id="spaceTypeSelect" @change="search()">
                  <option value="">請選擇停車場類型</option>
                  <option v-for="item in spaceTypeList">{{ item }}</option>
               </select>
               <select class="select" id="carTypeSelect" @change="search()">
                  <option value="">請選擇車位類型</option>
                  <option v-for="item in carTypeList" :value="item[1]">{{ item[0] }}</option>
               </select>
            </div>
         </div>
         <div class="rightBottom">
            <div class="rightDataShowArea">
               <div v-for="item in serchedData" class="dataArea">
                  <div class="dataAreaOne">
                     <div class="dataAreaOneLeft">
                        <span class="text">停車場名字：</span>
                        <span class="text">{{ item.name }}</span>
                     </div>
                     <div class="dataAreaOneRight">
                        <span class="text">停車場類型：</span>
                        <span class="text">{{ item.typeName }}</span>
                     </div>
                  </div>
                  <div class="dataAreaTwo">
                     <span class="text">地址：</span>
                     <span class="text">{{ item.address }}</span>
                  </div>
                  <div class="dataAreaThree">
                     <span class="text psText">剩餘汽車車位：{{ item.car }}　　　剩餘機車車位：{{ item.moto }}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.outer {
   height: 85vh;
   width: 100vw;
   background-color: #FEFCF3;
   display: flex;
   .left {
      height: 94%;
      width: 50%;
      margin-top: 1%;
      margin-left: 1.5%;
      margin-right: 1%;
      .map { 
      height: 100%;
      width: 100%;
      .positionNow{
         height: 5%;
         width: 5%;
      }
      }
   }

   .right {
      height: 100%;
      width: 50%;

      .rightTop {
         height: 20%;
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;

         .rightSelectArea {
            height: 60%;
            width: 90%;
            border-radius: 20px;
            background-color: #F0DBDB;
            display: flex;
            align-items: center;

            .select {
               margin-left: 30px;
               margin-right: 15px;
               height: 40%;
               width: 35%;
               border-radius: 20px;
               text-align: center;
               background-color: #F5EBE0;
            }
         }
      }

      .rightBottom {
         height: 75%;
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;

         .rightDataShowArea {
            height: 100%;
            width: 90%;
            border-radius: 20px;
            background-color: #F0DBDB;
            overflow: scroll;
            .dataArea {
               height: 25%;
               width: 90%;
               background-color: #F5EBE0;
               margin-top: 2%;
               margin-bottom: 2%;
               margin-left: 5%;
               .dataAreaOne{
                  height: 20%;
                  display: flex;
                  margin-top: 1%;
                  .dataAreaOneLeft{
                     width: 65%;
                     display: flex;
                     justify-content: start;
                     margin-left: 3%;
                  }
                  .dataAreaOneRight{
                     width: 35%;
                     display: flex;
                     justify-content: end;
                     margin-right: 3%;
                  }
               }
               .dataAreaTwo{
                  height: 40%;
                  margin-top: 1%;
                  display: flex;
                  justify-content: start;
                  margin-left: 3%;
               }
               .dataAreaThree{
                  height: 20%;
                  margin-top: 1%;
               }
               .text {
                  margin-top: 10px;
                  margin-bottom: 3px;
                  font-size: 14px;
               }
               .psText{
                  color: red;
               }
            }
         }
      }
   }
}

// path {
//    // stroke: white;
//    transition: 0.5s;
//    cursor: pointer;
// }

// path:hover {
//    fill: rgb(255, 215, 0);
//    transform: translate(-5px, -5px);
// }</style>