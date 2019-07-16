<template>
  <div class="feature">
    <h1>{{ apartment.title }}</h1>
    <div class="banner-wrapper">
      <div class="banner-item" v-for="item of apartment.banner" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.url" alt="">
        </div>
        <div class="img-desc" :style="item.color" v-if="item.title">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BannerItem",
    props:{
      apartment:{
        type: Object
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .feature h1 {
    font-size: 31px;
    font-weight: 300;
    text-align: center;
    padding: 50px 0 40px;
    margin: 0;
  }

  .banner-wrapper {
    display: flex;
  }

  .banner-item {
    flex: 1;
    position: relative;
  }

  .img-wrapper {
    width: 80%;
    margin: 0 10%;

  }

  .img-wrapper img {
    width: 100%;
  }

  .img-desc {
    position: absolute;
    bottom: 0;
    margin: 0 10%;
    width: 80%;
  }

  .img-desc p {
    padding: 0 10px;
    color: #fff;
  }

  .img-desc p:first-child {
    font-size: 18px;
    font-weight: 300;
    margin: 15px 0;
  }

  .img-desc p:last-child {
    font-size: 14px;
    font-weight: 200;
    margin: 10px 0 20px;
  }
</style>
