<script>
export default {

    data() {
        return {
            obj: [],
            allDistrict: [],
            allCategory: [],
            /////////////////
            dis: "",
            cat: "",
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
        category() {
            if (this.allCategory.length == 0) {
                fetch("./Tainan_json/Tainan_Attrations.json")
                    .then(res => res.json())
                    .then(data => {
                        this.obj = data
                        this.obj.forEach(item => {
                            if (!this.allCategory.includes(item.category)) {
                                this.allCategory.push(item.category)
                            }
                        });
                        let aaa=this.allCategory.find(item => {
                            return item.category =='地'
                        })
                        console.log(typeof(aaa));
                    })
            }
        }
    }
}

</script>


<template>
    <div class="imgBox1">
        <div class="img1_Title">依地區搜尋</div>
        <div class="img1"></div>

        <div class="selectBox1">
            <select name="" id="" v-model="this.dis" @focus="district()">
                <option value="">想去什麼地方</option>
                <option :value="item" v-for="( item, index ) in this.allDistrict">{{ item }}</option>
            </select>
        </div>
    </div>

    <div class="imgBox2">
        <div class="selectBox2">
            <select name="" id="" v-model="this.cat" @focus="category()">
                <option value="">想去什麼類型</option>
                <option :value="item" v-for="( item, index ) in this.allCategory">{{ item }}</option>
            </select>
        </div>
        <div class="img2"></div>
        <div class="img2_Title">依分類搜尋</div>
    </div>
</template>


<style>
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
    z-index: 3;
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
    z-index: 1;
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