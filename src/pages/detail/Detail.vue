<template>
  <div class="detail">
    <header-navbar :isHeaderInfo="isHeaderInfo"/>
    <!-- 大图banner -->
    <div class="detail-banner">
      <img src="https://pic.tujia.com/upload/ordercunit/day_190612/thumb/201906121308383313_1500_1003.jpg" alt="">
      <div class="show-swiper" @click="showSwiper">查看更多照片({{ this.swiperItem.length}})</div>
    </div>
    <!-- 隐藏的轮播图 -->
    <div class="collapse-swiper" v-if="isShow">
      <div class="close-btn" @click="closeSwiper">
        <i class="el-icon-circle-close"></i>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperItem" :key="item.id">
          <div class="photo-wrapper">
            <img :src="item.url" alt="">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <!-- 上半部分结束-->

    <!-- 房间信息-->
    <div class="detail-info">
      <div class="info info-left">
        <!-- code -->
      </div>
      <div class="info info-right">
        <div class="owner-info">
          <div class="price-item">
            <p>
              <span>¥</span>21999 <span>每晚</span>
            </p>
          </div>
          <div class="day-picker">
            <el-date-picker
              v-model="dates"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="go-purchase">
            立刻预定 (1晚 ¥21999)
          </div>
          <div class="owner border-top">
            <div class="owner-img">
              <img src="https://pic.tujia.com/upload/landlordstorelogo/day_190326/201903261405549095.jpg" alt="">
            </div>
            <div class="owner-name">
              <p>龙源里精品民宿</p>
              <p>商户经营 · 营业执照已验证</p>
            </div>
          </div>
          <div class="contact">
            <span class="border-right"><i class="el-icon-phone-outline"></i> 拨打电话</span>
            <span><i class="el-icon-chat-line-square"></i> 在线咨询</span>
          </div>
        </div>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
  import HeaderNavbar from '../../public/HeaderNavbar'
  import Footer from '../../public/Footer'

  export default {
    name: "Detail",
    data() {
      return {
        isHeaderInfo: false,
        isShow: false,
        //  轮播图片
        swiperItem: [
          {
            id: '01',
            url: 'https://pic.tujia.com/upload/ordercunit/day_190612/thumb/201906121308383313_670_390.jpg'
          },
          {
            id: '02',
            url: 'https://pic.tujia.com/upload/ordercunit/day_190612/thumb/201906121309288610_670_390.jpg'
          },
          {
            id: '03',
            url: 'https://pic.tujia.com/upload/ordercunit/day_190612/thumb/201906121308173832_670_390.jpg'
          },
          {
            id: '04',
            url: 'https://pic.tujia.com/upload/ordercunit/day_190612/thumb/201906121308183556_670_390.jpg'
          },
          {
            id: '05',
            url: 'https://pic.tujia.com/upload/ordercunit/day_190612/thumb/201906121309326973_670_390.jpg'
          },
        ],
        //  vue-awesome-swiper 配置
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        dates: ''

      }
    },
    methods: {
      showSwiper() {
        this.isShow = !this.isShow
        console.log(1);
      },
      closeSwiper() {
        this.isShow = !this.isShow
      }
    },
    components: {
      HeaderNavbar,
      MyFooter: Footer
    }
  }
</script>

<style lang="stylus" scoped>
  .detail >>> .swiper-slide {
    width: 100% !important;
  }

  .detail >>> .swiper-pagination-fraction {
    color: #fff;
  }

  .detail >>> .swiper-button-prev {
    left: 100px;
  }

  .detail >>> .swiper-button-next {
    right: 100px;
  }

  .detail >>> .el-date-editor {
    width: 100%;
  }

  .detail {
    position: relative;
  }

  .detail-banner {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    position: relative;
  }

  .detail-banner img {
    width: 100%;
  }

  .show-swiper {
    position: absolute;
    right: 50px;
    bottom: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color #fff;
    color: #555;
    text-align: center;
    padding: 10px 15px;
    font-size: 12px;
  }

  .show-swiper:hover {
    cursor: pointer;
  }

  //  隐藏banner
  .collapse-swiper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 99;
  }

  .close-btn {
    padding: 50px 60px 0;
    text-align: right;
    color: #fff;
    font-size: 30px;
  }

  .close-btn:hover {
    cursor: pointer;
  }

  .photo-wrapper {
    width: 52%;
    overflow: hidden;
    margin: 0 24%;
  }

  .photo-wrapper img {
    width: 100%;
  }

  //  房间信息
  .detail-info {
    display: flex;
    width: 100%;
    height: 500px;
    background-color #f5f5f5;
    padding: 20px 0;
  }

  .owner-info {
    padding: 0 20px;

  }

  .info {
    flex: 1;
    margin: 0 20px;
    background-color #fff;
  }

  .info-left {
    flex: 2;
  }
  .info-right {
    height: 450px;
  }
  .info-left, .info-right {
    box-shadow: 0 0 10px 6px #eaeaea;
  }

  .price-item p {
    font-size: 30px;
    color: #333;
    font-weight: 400;
  }

  .price-item p span {
    font-size: 16px;
    padding: 0 3px;
    font-weight 300;
  }

  .go-purchase, .day-picker {
    margin: 10px 0 20px;
    display: inline-block;
  }

  .go-purchase {
    padding: 15px 20px;
    margin: 20px 0;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    width: 89%;
    text-align: center;
    font-size: 16px;
    font-weight 400;
    color: #fff;
    background-color: #f66;
  }

  .go-purchase:hover {
    background-color: #fff;
    color: #f66;
    cursor: pointer;
    border-color: #f66;
  }

  .owner {
    display: flex;
  }

  .owner-img {
    flex: 1;
  }

  .owner-name {
    flex: 2
  }

  .owner-name p:first-child {
    font-size: 18px;
    margin: 10px 0;
  }

  .owner-name p:last-child {
    font-size: 14px;
    color: #666;
    font-weight: 300;
  }

  .owner-img img {
    width: 100%;
  }

  .contact {
    display: flex;
  }

  .contact span {
    flex: 1;
    text-align: center;
    padding: 18px 0;
    background-color: #f8f8f8;
    font-size: 14px;
    font-weight: 300;
    color: #333;
  }
  .contact span:last-child {
    color: #3e97e2;
  }
  .contact span:hover {
    cursor: pointer;
  }
</style>
