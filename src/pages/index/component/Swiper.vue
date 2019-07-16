<template>
  <div class="carousel-wrapper">
    <el-carousel :interval="3000" >
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props:{
      imgList:{
        type: Array
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .carousel-wrapper >>> .el-carousel__container{
    height: 457px;
  }
  .carousel-wrapper {
    background: #eee;
    position: relative;
  }
  .el-carousel__container img {
    width: 100%;
  }

</style>
