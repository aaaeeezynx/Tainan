<script>
export default {

    data() {
        return {
            let: location,
            obj: [],
            allAttrations: [],
            district: [],
        }
    },
    methods: {
        test() {
            fetch("./Tainan_json/Tainan_Attrations.json")
                .then(res => res.json())
                .then(data => {
                    this.obj = data
                    this.obj.forEach(item => {
                        this.allAttrations.push(item)
                        // console.log(item);
                    });
                })
            this.district = this.allAttrations.filter(item => {
                return array.indexOf(item) === index;
                console.log(this.district);
            })
        }
    }
}

</script>


<template>
    <div class="imgBox1">
        <div class="img1"></div>

        <button type="button" @click="test()">btn</button>
        <select name="" id="" @change="location()" class="location">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>

    </div>
    <div class="imgBox2">
        <div class="img2"></div>
    </div>
</template>


<style>
.imgBox1 {
    width: auto;
    height: 41vh;
    background-color: aqua;
    display: flex;
    padding: 2vh;
}

.img1 {
    width: 70vw;
    height: 40vh;
    background-image: url("../material/photo_1.jpg");
    background-size: cover;
    filter: blur(5px);
}



.imgBox2 {
    width: 100vw;
    height: 40vh;
    background-color: aqua;
    padding: 2vh;
}

.img2 {
    margin-left: 30vw;
    width: 70vw;
    height: 40vh;
    background-image: url("../material/photo_2.jpg");
    background-size: cover;
    filter: blur(5px);
}
</style>