<script>
import { watch,toRaw} from 'vue';
import { onMounted,ref } from 'vue';
import { mapState, mapActions } from 'pinia'
import api from '../stores/api.js'

import '../../node_modules/leaflet/dist/leaflet.css'
import L, { marker } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import counter2 from '../stores/counter'

import { RouterLink, RouterView } from 'vue-router'
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
         map:null,
         mapMarker:[],
         latlngArray:[],
         latlng:"",
         latitude:"",
         longitude:"",
         // directionsService:new google.maps.DirectionsService(),
         // directionsDisplay: new google.maps.DirectionsRenderer(),
         request:"",
         s:"",
         option:{enableHighAccuracy : true,   
         timeout : 1000,   
         maximumAge : 0 },
         // polyLine:"",
         // line:[
         //    [22.982574,120.183662]
         // ],
      }
   },
   computed: {
      ...mapState(api, ["parkingSpaceData"])
   },
   methods: {
      ...mapActions(api, ["getParkingSpaceData"]),
      ...mapActions(counter2,["setLocation"]),


      initMap(){     //地圖初始化
         this.map=new google.maps.Map(document.getElementById("map"),{  //設定地圖顯示的div
            center: { lat: 22.982574, lng: 120.183662 }, //設定地圖起始中心點
            zoom:13,    //設定預設縮放尺寸
            maxZoom:20, //設定縮放最大尺吋
            streetViewControl: false,  //是否有黃色小人
            mapTypeControl: false,  //是否可切換地圖類型
         });
      },

      getUserLocation(){   //取得使用者當前位置
         if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.success,this.error,this.option);
            // navigator.geolocation.getCurrentPosition((success)=>{
               // this.map.setView([position.coords.latitude,position.coords.longitude],13)
               // this.mapMarker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(this.map);
               // this.line.push([position.coords.latitude,position.coords.longitude])
               // this.polyLine = L.polyline(this.line).addTo(this.map);
               // this.map.flyTo([position.coords.latitude,position.coords.longitude],13)
               // this.latitude = position.coords.latitude;    //取出緯度放入變數
               // this.longitude = position.coords.longitude;   //取出經度放入變數
               // this.latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
               // return [this.latitude,this.longitude]
               // console.log(this.s);
               // this.mapMarker.setPosition(this.latlng);
               // this.mapMarker.setMap(this.map);
               // this.mapMarker = new google.maps.Marker({
               //    position: this.latlng,
               //    map:this.map,
               // });
               // this.map.panTo(this.latlng);
            }
            // )
         else{
            console.log("您的瀏覽器不支援，請使用其他瀏覽器");
         }
      },
      showUserLocation(){
         this.clearMarkerAndRoute();
         this.getUserLocation();
         setTimeout(() => {
            this.mapMarker.push(new google.maps.Marker({
               position:this.latlng,
               map:this.map,
            }));
         }, 200);
         setTimeout(() => {
            this.map.panTo(this.latlng);
         }, 210);

         // watch(()=>this.latlng,()=>{
         //    console.log("1");
         // watch(() => this.latlng, () => {
            // console.log(this.latlng);
            // if(this.mapMarker!=undefined){
            //    for(let i=0;i<this.mapMarker.length;i++){
            //       this.mapMarker[i] = null;
            //    }
            // }
                     // this.mapMarker.push(new google.maps.Marker({
                     //    position:this.latlng,
                     //    map:this.map,
                     // }));
            // console.log(this.mapMarker.length);
            // console.log(this.mapMarker);
            // this.mapMarker = [];

            // this.mapMarker.setPosition(this.latlng);
            // this.mapMarker.setMap(this.map);
            // console.log(this.mapMarker.setMap);
                     // console.log(this.latlng);
                     // console.log(this.mapMarker);
                     // this.map.panTo(this.latlng);
            // this.latlng="";
         // })
         // })
      },
      clearMarkerAndRoute(){  //清除標記和路線
         //Google MAP API手冊的清除方法似乎是vue2的寫法，在vue3將Marker物件儲存在陣列時，Vue3會將它轉為Proxy物件，這導致在呼叫setMap()方法時，其實是在呼叫Proxy.setMap(null)。
         //或許是因為這個Proxy物件並不===我們原先儲存的Matker物件，總之就是setMap()方法呼叫失敗，清除不了。
         //找到的解法是必須使用Vue的toRaw()去轉換Proxy物件，再去呼叫setMap()方法。
         this.mapMarker.map((marker)=> toRaw(marker).setMap(null));  //清除標記
         this.directionsDisplay.setMap(null);   //清除路線
      },
      route(mokutekichi){  //設定當前位置到目標地的導航路線
         this.clearMarkerAndRoute();
         this.getUserLocation();
            let s = mokutekichi.split(",");   
            let sOK = {lat:parseFloat(s[0]),lng:parseFloat(s[1])};
            this.request = {
            origin: {lat:this.latitude, lng:this.longitude}, //起始點經緯度，即當前位置
            destination: sOK, //目的地經緯度
            travelMode: 'DRIVING',
            };
            this.directionsService.route(this.request,(response)=>{
            this.directionsDisplay.setMap(this.map)
            this.directionsDisplay.setDirections(response)
            // this.directionsDisplay.push(({
            //    map:this.map,
            //    directions:response,
            // }))
         // this.directionsDisplay = new google.maps.DirectionsRenderer({
         //       map:this.map,
         //       directions:response,
         //    })
         })
      },
      success(position){
         console.log("取得位置成功");
         console.log(position);
         this.latitude = position.coords.latitude;    //取出緯度放入變數
         this.longitude = position.coords.longitude;   //取出經度放入變數
         this.latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      },
      error(position){
         console.log("取得位置失敗");
      },
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
               this.serchedData.push({ name: item.name, typeName: item.typeName, zone: item.zone, address: item.address, carDis: item.carDis, car: item.car, carGreen: item.carGreen, carWoman: item.carWoman, largeCar: item.largeCar, moto: item.moto, motoDis: item.motoDis, chargeTime: item.chargeTime, position: item.lnglat})
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
      this.showUserLocation();
   },
   mounted() {
      // this.map = L.map('map').setView([22.982574,120.183662],13)
      //    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      //    maxZoom:20,
      //    attribution: '© OpenStreetMap'
      // }).addTo(this.map)
      this.initMap();
      this.setLocation(5)
   }
}



</script>
<template>
   <div class="outer">
      <div class="left">
         <div  id="map" class="map"></div>
         <button class="positionNow" @click="showUserLocation()">回到目前位置</button>
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
                     <div class="dataAreaTwoLeft">
                        <span class="text">地址：</span>
                        <span class="text">{{ item.address }}</span>
                     </div>
                     <div class="dataAreaTwoRight">
                        <button  class="btnRoute" @click="route(item.position)">導航到此</button>
                     </div>
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
      height: 86%;
      width: 50%;
      margin-top: 1.5%;
      margin-left: 2%;
      margin-right: 1.5%;
      .map { 
      height: 100%;
      width: 100%;
      }
      .positionNow{
      height: 33px;
      width: 122px;
      margin-top: 1%;
      border-radius: 20px;
      border:0px;
      background-color: #F0DBDB;
      color: #DBA39A;
      font-weight:bold;

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
                     margin-left: 2%;
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
                  margin-top: 2%;
                  margin-left: 2%;
                  display: flex;
                  .dataAreaTwoLeft{
                     display: flex;
                     justify-self: start;
                     width: 80%;
                  }
                  .dataAreaTwoRight{
                     margin-top: 0.5%;
                     width: 20%;
                     .btnRoute{
                     height: 32px;
                     width: 82px;
                     border-radius: 20px;
                     border:0px;
                     background-color: #F0DBDB;
                     color: #DBA39A;
                     font-weight:bold;
                  }
                  }
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