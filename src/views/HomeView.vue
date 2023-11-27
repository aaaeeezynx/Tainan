<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {

    }
  },
  action: {

  },
  components: {
    RouterLink,
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div class="alll">
    <div class="tainan">
      <h1 class="h1">台南市相關資訊</h1>
    </div>

    <div class="all">
      <div class="one title">
        <button>
          <RouterLink to="/Person" class="header">
            <p>人口</p>
          </RouterLink>
          <i class="fa-solid fa-user-large-slash"></i>
        </button>
      </div>
      <div class="two title">
        <button>
          <RouterLink to="" class="header">餐廳</RouterLink>
          <i class="fa-solid fa-utensils"></i>
        </button>
      </div>
      <div class="three title">
        <button>
          <RouterLink to="" class="header">景點</RouterLink>
          <i class="fa-solid fa-map-location-dot"></i>
        </button>
      </div>
      <div class="four title">
        <button>
          <RouterLink to="" class="header">停車位</RouterLink>
          <i class="fa-solid fa-square-parking"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.alll {
  width: 100%;
  height: 85vh;
  background-color: #F5EBE0;
  position: relative;
  z-index: 30;

  .tainan {
    position: absolute;
    top: -50px;
    width: 100%;
    height: 20%;
    z-index: 1000;

    .h1 {
      width: 100%;
      height: 100%;
      z-index: 1000;
      color: #DBA39A;
    }
  }

  .all {
    width: 100%;
    height: 90%;
    top: -113px;
    position: absolute;
    z-index: -1;
    background-color: #F5EBE0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .title {
      width: 17%;
      height: 80%;
      position: relative;

      button {
        &:hover {
          scale: (1.2);
          background-color: #DBA39A;
          border: 1.7px solid #F5EBE0;
          .header {
            color: #F5EBE0;
          }
          i {
            color: #F5EBE0;
          }
        }


        transition: 0.3s;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 10px;
        top: 150px;
        border-radius: 10px;
        border: 1.7px solid #DBA39A;
        background-color: #FEFCF3;

        .header {
          width: 100%;
          height: 100%;
          display: flex;
          text-decoration: none;
          color: #DBA39A;
          font-size: 35px;
          justify-content: center;
          align-items: center;
        }

        i {
          color: #DBA39A;
          font-size: 35px;
          position: absolute;
          bottom: 320px;
          left: 98px;
        }
      }
    }


  }
}
</style>
