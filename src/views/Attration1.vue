<script>
export default {

    data() {
        return {
            obj: [],
            allDistrict: [],
            allCategory: [],
            nameArr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            arr: [],
            dis: "",
            cat: "",
            title: "",
        }
    },
    methods: {
        district() {
            this.arr.length=0
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
            // console.log(this.allDistrict);
            // console.log(this.obj);
            this.allDistrict.forEach(item => {
                const ccc = document.getElementById("ccc")
                // const xxx=document.getElementById("xxx")
                // console.dir(ccc);
                if (zzz.value == item) {
                    this.obj.forEach(item1 => {
                        if (zzz.value == item1.district) {
                            ccc.innerText = item
                            // console.log(item1.name);
                            // xxx.innerText=item1.name
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
        }

    }
}

</script>


<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="box" id="box" v-for="item3 in arr">
                        <span id="xxx">{{ item3 }}</span>


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>


    <div class="imgBox1">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        <div class="img1_Title">
            <h5 id="ccc">依地區搜尋</h5>


        </div>
        <div class="img1"></div>
        <div class="selectBox1">
            <select name="" id="zzz" v-model="this.dis" @focus="district()" @change="disSelect()">
                <option value="">想去什麼地方</option>
                <option :value="item" v-for="( item, index ) in this.allDistrict">{{ item }}</option>
            </select>
        </div>
    </div>


    <div class="imgBox2">
        <div class="selectBox2">
            <select name="" id="" v-model="this.cat" @focus="category()">
                <option value="">想去什麼類型</option>
                <option :id="item" :value="item" v-for="( item, index ) in this.allCategory">{{ item }}</option>
            </select>
        </div>
        <div class="img2"></div>
        <div class="img2_Title">依分類搜尋</div>
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
    font-size: 1em;
    line-height: 40vh;
    // z-index: 1;
    // position: absolute;
    color: #F0DBDB;
    border: #F0DBDB 1px solid;
    text-shadow: gray 1px 0 2px;

}

.box {
    margin-top: 0px;
}

.img1 {
    width: 70vw;
    height: 41vh;
    background-image: url("../material/photo_1.jpg");
    background-size: cover;
    filter: brightness(80%) blur(2px);
    // z-index: 0;
    // position: absolute;

    .btn {
        //         z-index: 5;
        // position: absolute;
    }
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

select {
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
</style>