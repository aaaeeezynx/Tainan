<script>
export default {

    data() {
        return {
            obj: [],
            attrations: [],
        }
    },
    methods: {
        test() {
            fetch("./Tainan_json/Tainan_Attrations.json")
                .then(res => res.json())
                .then(data => {
                    this.obj = data
                    this.obj.forEach(item => {
                        this.attrations.push(item.name)
                        console.log(item);
                        // this.attrations += `<option value=${item.district}>${item.district}</option>\n`
                    });
                })
        }
    }
}

</script>


<template>
    <button type="button" @click="test()">btn</button>
    <div class="imgBox1">
        <div class="img1"></div>
    </div>
    <div class="imgBox2">
        <div class="img2"></div>
    </div>
</template>


<style>
.imgBox1 {
    width: 100vw;
    height: 42.5vh;
    background-color: aqua;
}

.img1,
.img2 {
    width: 70vw;
    height: 42.5vh;
    background-image: url("../material/_1037481.jpg");
    background-size: cover;
}

.img2 {
    margin-left: 30vw;
}


.imgBox2 {
    width: 100vw;
    height: 42.5vh;
    background-color: aqua;
}
</style>