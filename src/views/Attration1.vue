<script>
export default {

    data() {
        return {
            obj: [],
            allDistrict: [],
            allCategory: [],
            nameArr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            arr: [],
            arr2: [],
            dis: "",
            cat: "",
            title: "",
            info: {},
        }
    },
    methods: {
        district() {
            if (this.allDistrict.length == 0) {
                fetch("./Tainan_json/Tainan_Attrations.json")
                    .then(res => res.json())
                    .then(data => {
                        this.obj = data
                        this.obj.forEach(item => {
                            if (!this.allDistrict.includes(item.district)) {
                                this.allDistrict.push(item.district)
                            }
                        });
                    })
            }
        },

        disSelect() {
            this.arr.length = 0
            this.allDistrict.forEach(item => {
                const locationName = document.getElementById("locationName")
                if (selectIn.value == item) {
                    this.obj.forEach(item1 => {
                        if (selectIn.value == item1.district) {
                            locationName.innerText = item
                            this.arr.push(item1.name)
                        }
                    })
                }
            })
            console.log(this.arr);
        },

        category() {
            if (this.allCategory.length == 0) {
                fetch("./Tainan_json/Tainan_Attrations.json")
                    .then(res => res.json())
                    .then(data => {
                        this.obj = data
                        this.obj.forEach(item => {
                            if (!this.allCategory.includes(item.category[0], [1], [2], [3])) {
                                this.allCategory.push(item.category[0])
                            }
                            // if (!this.allCategory.includes(item.category="歷史古蹟")) {  
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="宗教廟宇")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="無障礙設施")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="在地藝文")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="地方展館")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="戶外運動")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="休閒農漁")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="生態教育")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="休閒農漁")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="主題園區")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="消費娛樂")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="公園綠地")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="自然景觀")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="風景區")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="觀光工廠")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // if (!this.allCategory.includes(item.category="熱門景點")) {
                            //     this.allCategory.push(item.category)
                            // }
                            // console.log(this.allCategory[0]);
                        });
                        this.allCategory.pop()
                        console.log((this.allCategory));
                    })
            }
        },

        catSelect() {
            this.arr.length = 0
            this.allCategory.forEach(item => {
                const locationName = document.getElementById("locationName")
                if (selectIn2.value == item) {
                    this.obj.forEach(item1 => {
                        if (selectIn2.value == item1.category) {
                            locationName.innerText = item
                            this.arr.push(item1.name)
                        }
                    })
                }
            })
            console.log(this.arr);
        },

        locationInfo() {
            let locObj = {
                title: "",
                title2: "",
                tag: "",
                introduction: "",
                address: "",
            }

            const xxx = document.querySelectorAll("span.xxx")

            xxx.forEach(item => {
                item.addEventListener("click", () => {
                    this.obj.forEach(item1 => {
                        // if(item1.name.includes(item.innerText)){
                        //     console.log(item1)
                        // }
                        // if(item.innerText == "台南高爾夫球場" && item1.name == "台南高爾夫球場"){

                        //     console.log(item1)
                        // }
                        // if (item.innerText.toString() == item1.name.toString()) {
                        if (item1.name.includes(item.innerText)) {
                            locObj.title = item1.name
                            locObj.tag = item1.category[0]
                            locObj.title2 = item1.summary
                            locObj.introduction = item1.introduction
                            locObj.address = item1.address
                            this.info = locObj
                            // console.log(this.info);

                        }
                    })
                })

            })
        },
    }
}

</script>


<template>
    <div class="imgBox1">

        <div class="img1_Title">
            依地區搜尋
        </div>
        <div class="img1"></div>
        <div class="selectBox1">
            <select class="selectIn" name="" id="selectIn" v-model="this.dis" @focus="district()" @change="disSelect()">
                <option value="">想去什麼地方</option>
                <option :value="item" v-for="( item, index ) in this.allDistrict">{{ item }}</option>
            </select>
        </div>
    </div>


    <div class="imgBox2">
        <!-- <div class="selectBox2">
                                            <select class="selectIn" name="" id="" v-model="this.cat" @focus="category()">
                                                <option value="">想去什麼類型</option>
                                                <option :id="item" :value="item" v-for="( item, index ) in this.allCategory">{{ item }}</option>
                                            </select>
                                        </div> -->

        <div class="selectBox2">
            <select class="selectIn" name="" id="selectIn2" v-model="this.cat" @focus="category()" @change="catSelect()">
                <option value="">想去什麼類型</option>
                <option :value="item" v-for="( item, index ) in this.allCategory">{{ item }}</option>
            </select>
        </div>

        <div class="img2"></div>
        <div class="img2_Title">
            依分類搜尋
        </div>
    </div>

    <!-- p1//////////////////////////////////////////////////////////////////////////// p2-->
    <div class="page2">
        <span id="locationName" class="location"></span>

        <div class="district">

            <div class="districtBox" id="box" @click="locationInfo()" v-for="item3 in arr">
                <span class="xxx">{{ item3 }}</span>
            </div>

        </div>
    </div>
    <!-- p2//////////////////////////////////////////////////////////////////////////// p3-->
    <div class="page3">
        <div class="card">
            <div class="img"></div>
            <div class="imgbg"></div>
            <div class="text2">
                <p class="info">
                    {{ info.introduction }}
                </p>
            </div>
        </div>

        <div class="text">
            <p class="title">
                {{ info.title }}
            </p>
            <p class="tag">
                {{ info.tag }}
            </p>
            <p class="title2">
                {{ info.title2 }}
            </p>

            <p class="address">
                {{ info.address }}
            </p>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.imgBox1 {
    width: 100%;
    height: 42vh;
    background-color: #FEFCF3;
    display: flex;
    padding: 1%;
    position: relative;
}

.img1_Title {
    width: 70vw;
    height: 41vh;
    font-size: 4em;
    line-height: 40vh;
    z-index: 1;
    position: absolute;
    color: #F0DBDB;
    border: #F0DBDB 1px solid;
    text-shadow: gray 1px 0 2px;

}

.img1 {
    width: 70vw;
    height: 41vh;
    background-image: url("../material/photo_1.jpg");
    background-size: cover;
    filter: brightness(80%) blur(2px);
    z-index: 0;
    position: absolute;

}

.selectBox1 {
    width: 29vw;
    height: 39vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 71vw;
}

.selectIn {
    width: 20vw;
    height: 6vh;
    border: 0px;
    border-radius: 50px;
    box-shadow: 2px 2px 4px rgba(20%, 20%, 40%, 0.5);
    color: #DBA39A;
    font-size: 1.5em;
    text-align: center;
}

.selectBox2 {
    width: 29vw;
    height: 39vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}

.imgBox2 {
    width: 100%;
    height: 43vh;
    background-color: #FEFCF3;
    display: flex;
    padding-left: 1%;
    padding-right: 1%;
    padding-bottom: 1%;
}

.img2_Title {
    width: 70vw;
    height: 40vh;
    font-size: 4em;
    line-height: 40vh;
    z-index: 3;
    color: #F0DBDB;
    border: #F0DBDB 1px solid;
    text-shadow: gray 1px 0 2px;
    position: absolute;
    left: 29vw;
    top: 58vh
}

.img2 {
    width: 70vw;
    height: 40vh;
    background-image: url("../material/photo_2.jpg");
    background-size: cover;
    filter: brightness(85%) blur(2px);
    position: absolute;
    z-index: 1;
    left: 29vw;
    top: 58vh
}

.page2 {
    width: 100%;
    height: 100vh;
    padding: 2%;
    background-color: #FEFCF3;
    position: relative;
    display: flex;
    justify-content: center;
}

.location {
    width: 30%;
    height: 10%;
    // border: black solid 1px;
    color: #DBA39A;
    font-size: 4em;
    top: 5%;
    position: absolute;
    line-height: 9vh;
}

.district {
    width: 98%;
    height: 80%;
    padding: 2%;
    top: 20%;
    position: absolute;
    // border: black solid 1px;
    background-color: rgb(249, 234, 234);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow-y: overlay;
}

.districtBox {
    width: 20%;
    height: 20%;
    // height: auto;
    // border: #DBA39A solid 1px;
    color: #DBA39A;
    background-color: rgb(249, 234, 234);
    font-size: 1.6em;
    display: flex;
    justify-content: center;
    align-items: center;
    // transition: 0.3s;
}

.districtBox:hover {
    color: rgb(249, 234, 234);
    background-color: #DBA39A;
    transition: 0.3s;
    scale: (1.1);
    font-size: 1.8em;
}

.page3 {
    width: 100vw;
    height: auto;
    display: flex;
    background-color: #FEFCF3;
}

.card {
    margin-left: 2vw;
    margin-top: 2vw;
    width: 50vw;
    height: 97vh;
    // border: 2px black solid;
    position: relative;

}

.img {
    width: 50vw;
    height: 97vh;
    background-image: url("../material/photo_3-1.png");
    background-size: cover;
    // border: 2px #DBA39A solid;
    position: absolute;
    z-index: 1;

    bottom: 0px;
    transform-origin: bottom;
    transition: 2s;
}

.card:hover .img {
    transform: scale(1.1);

}

.imgbg {
    width: 50vw;
    height: 97vh;
    background-image: url("../material/photo_3.jpg");
    background-size: cover;
    border: 2px #DBA39A solid;
    position: absolute;
    z-index: 0;

    transform-origin: bottom;
    overflow: hidden;
    transition: 2s;
}

.card:hover .imgbg {
    transform: perspective(1000px) rotateX(30deg) skewX(-20deg);

}

.text2 {
    width: 50vw;
    height: auto;
    padding: 2%;
    // border: 1px black solid;
    position: absolute;
    z-index: 2;
    font-size: 1.2em;

    top: 30vh;
    opacity: 0;
    transition: 2s;
}

.card:hover .text2 {
    opacity: 1;
    transform: translateX(70%);
}

.info {
    width: 100%;
    height: auto;
    // border: 1px blue solid;
    color: #A8645A;
    background-color: #F0DBDB;
    font-size: 1.2em;
    text-align: left;

}

.text {
    // border: 1px black solid;
    width: 48vw;
    height: auto;
    position: absolute;
    left: 52%;
}

.title {
    width: 43vw;
    height: 9vh;
    // border: 1px red solid;
    color: #A8645A;
    margin: 2vw;
    font-size: 2em;
    text-align: left;
}

.tag {
    width: 25vw;
    height: 4vh;
    // border: 1px orange solid;
    color: #BE867C;
    margin-left: 20vw;
    font-size: 1.5em;
    text-align: left;
}

.title2 {
    width: 35vw;
    height: auto;
    // border: 1px green solid;
    color: #DBA39A;
    margin: 2vw;
    margin-left: 10vw;
    font-size: 1.8em;
    text-align: left;
}

.address {
    width: 43vw;
    height: 15vh;
    // border: 1px blue solid;
    color: #BC9A75;
    margin: 2vw;
    margin-bottom: 1vw;
    font-size: 2em;
    text-align: left;
}</style>