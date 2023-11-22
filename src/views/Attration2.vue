<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="attration2">
        <div class="img"></div>
        <div class="text">
            <p class="title">
                Title
            </p>
            <p class="tag">
                Tag
            </p>
            <p class="title2">
                Title2
            </p>
            <p class="info">
                Info
            </p>
            <p class="address">
                Address
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.attration2 {
    width: 100vw;
    height: auto;
    display: flex;
    background-color: #FEFCF3;
}

.img {
    margin-left: 2vw;
    margin-top: 2vw;
    width: 50vw;
    height: 78vh;
    background-image: url("../material/_1037481.jpg");
    background-size: cover;
    border: 5px aqua solid;
}

.text {
    // border: 1px black solid;
    width: 48vw;
    height: auto;
}

.title {
    width: 43vw;
    height: 9vh;
    border: 1px red solid;
    margin: 2vw;
    font-size: 3em;
    text-align: left;
}

.tag {
    width: 25vw;
    height: 5vh;
    border: 1px orange solid;
    margin: 2vw;
    margin-left: 20vw;
    font-size: 1em;
    text-align: left;
}

.title2 {
    width: 35vw;
    height: 15vh;
    border: 1px green solid;
    margin: 2vw;
    margin-left: 10vw;
    font-size: 2em;
    text-align: left;
}

.info {
    width: 43vw;
    height: 25vh;
    border: 1px blue solid;
    margin: 2vw;
    font-size: 1em;
    text-align: left;
}

.address {
    width: 43vw;
    height: 12vh;
    border: 1px blue solid;
    margin: 2vw;
    margin-bottom: 1vw;
    font-size: 2em;
    text-align: left;
}
</style>