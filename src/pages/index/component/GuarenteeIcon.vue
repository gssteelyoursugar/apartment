<template>
  <div class="guarentees">
    <h1>{{ guarentees.title }}</h1>
    <div class="guarentee-wrapper">
      <div class="grt-item" v-for="item of guarentees.banner" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.url" alt="">
        </div>
        <div class="grt-title">
          <p>{{ item.title }}</p>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuarenteeIcon",
    props:{
      guarentees:{
        type:Object
      }
    }
  }
</script>

<style  scoped>
  .guarentees h1 {
    font-size: 31px;
    font-weight: 300;
    text-align: center;
    padding: 50px 0 40px;
    margin: 0;
  }

  .guarentee-wrapper {
    display: flex;
  }

  .grt-item {
    flex: 1;
  }

  .img-wrapper {
    width: 30%;
    margin: 0 35%;
  }

  .img-wrapper img {
    width: 100%;
  }

  .grt-title {
    margin: 0 10%;
    width: 80%;
    text-align: center;
    font-family: "Microsoft YaHei"
  }

  .grt-title p:first-child {
    font-size: 22px;
    font-weight: 300;
    color: #333;
    margin: 12px 0;
  }

  .grt-title p:last-child {
    font-size: 16px;
    font-weight: 200;
  }
</style>
