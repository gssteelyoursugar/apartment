<template>
  <div class="room-list">
    <div class="list-title">
      <div class="list list-left">
        <span>推荐排序</span>
        <!-- code -->
      </div>
      <div class="list list-right">
        38000+ 套房屋符合要求
      </div>
    </div>
    <div class="list-photo">
      <div class="list-wrapper" v-for="(item,index) of roomList" :key="item.id">
        <div class="item img-item">
          <img :src="item.url" alt="">
        </div>
        <div class="item desc-item">
          <p class="desc-name">{{item.name}}</p>
          <p class="desc-type">{{item.type}}</p>
          <p class="desc-tag">
            <span v-if="item.isBargain">连住优惠</span>
            <span v-if="item.isIntelligence">智能门锁</span>
          </p>
        </div>
        <div class="item price-item">
          <p class="desc-price"><span>¥</span> {{ item.price|money }}</p>
          <div class="look-over">
            <span @click="goDetail(item.id)">立即查看</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RoomList",
    props: {
      roomList: {
        type: Array
      }
    },
    methods: {
      goDetail(val) {
        this.$emit('goDetail',val)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .room-list {
    margin-top: 20px;
  }

  //   排序文字 （推荐排序）
  .room-list {
    padding: 0 20px;
  }

  .list-title, .list-wrapper {
    display: flex;
    padding: 20px 40px;
  }

  .list {
    flex: 1;
    font-size 14px;
    color: #333;
    font-weight: 400;
  }

  .list-right {
    text-align: right;
  }

  //  房间列表（图文）
  .list-wrapper:hover {
    box-shadow: 0 0 10px 10px #f3f3f3;
  }

  .item {
    flex: 1;
  }

  .img-item img {
    width: 100%;
  }

  .desc-item {
    flex: 3;
  }

  .desc-item p {
    margin: 5px 20px 10px 40px;
  }

  .desc-item p.desc-name {
    font-size: 20px;
    font-weight 400;
    color: #333;
    margin-bottom: 25px;
  }

  .desc-item p.desc-type {
    font-size: 14px;
    font-weight 200;
    color: #666;
    margin-bottom: 25px;
  }

  .desc-item p.desc-tag span {
    border: 1px solid #f5f5f5;
    font-size 12px;
    font-weight 200;
    padding: 3px 8px;
    color: #fff;
    background-color: #f66;
  }

  .price-item p.desc-price {
    font-size: 24px;
    color: #f66;
  }

  .price-item p.desc-price span {
    font-size: 16px;
    margin: 30px 0;
  }

  .look-over {
    margin-top: 50px;
  }

  .look-over span {
    border: 1px solid #fd8137;
    padding: 10px 20px;
    font-size: 14px;
    background-color: #fd8137;
    color: #fff;
    border-radius: 5px;
  }

  .look-over span:hover {
    cursor: pointer;
    background-color: #fff;
    color: #fd8137;
  }
</style>
