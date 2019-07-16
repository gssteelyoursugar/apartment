<template>
  <div class="main-page">
    <!-- 头部导航 -->
    <header-navbar :isHeaderInfo="isHeaderInfo"/>
    <!-- 轮播图 -->
    <swiper :imgList="imgList"/>
    <!-- 嵌套查询 -->
    <multi-input :dataSet="dataSet" @multiSearch="multiSearch" :isHeaderInfo="isHeaderInfo"/>
    <!-- 玩转民宿公寓-->
    <banner-item :apartment="apartment"/>
    <!-- 当季热门 -->
    <banner-item :apartment="hotSale"/>
    <!-- 安心住保障 -->
    <guarentee-icon :guarentees="guarentees"/>
    <my-footer/>
  </div>
</template>

<script>
  import HeaderNavbar from '../../public/HeaderNavbar'
  import Footer from '../../public/Footer'
  import Swiper from './component/Swiper'
  import MultiInput from '../../public/MultiInput'
  import BannerItem from './component/BannerItem'
  import GuarenteeIcon from './component/GuarenteeIcon'

  export default {
    name: 'Index',
    data() {
      return {
        isHeaderInfo:false,
        //  轮播图
        imgList: [
          {
            id: '01',
            // url: 'http://p1.music.126.net/7N2n7cHVGRd9IJGn-kS79w==/109951163645087710.jpg'
            url: 'https://staticfile.tujia.com/upload/travelfocuspic/day_181024/thumb/201810241437238678_1190_450.jpg'
          },

          {
            id: '02',
            // url: 'http://p1.music.126.net/3cyDU_KT01Lni9PY8kouYw==/109951163649404185.jpg'
            url: 'https://staticfile.tujia.com/upload/travelfocuspic/day_181115/thumb/201811151122029056_1190_450.jpg'
          },
          {
            id: '03',
            // url: 'http://p1.music.126.net/MEl979XoEzg_llrPrLPr4w==/109951163649396809.jpg'
            url: 'https://staticfile.tujia.com/upload/travelfocuspic/day_181210/thumb/201812101031382299_1190_450.jpg'
          },
          {
            id: '04',
            // url: 'http://p1.music.126.net/g6WLzJriqy8OreY5Y8UXrA==/109951163642515765.jpg'
            url: 'https://staticfile.tujia.com/upload/travelfocuspic/day_181112/thumb/201811121111111927_1190_450.jpg'
          }
        ],
        //  嵌套查询
        dataSet: {
          address: '', // 目的地
          timeValue: '', // 日期时间选择器
          options: [
            {
              value: '1人',
              label: '1人'
            }, {
              value: '2人',
              label: '2人'
            }, {
              value: '3人',
              label: '3人'
            }, {
              value: '4人',
              label: '4人'
            }, {
              value: '4人+',
              label: '4人+'
            }], //  选择器
          checkedOption: '',
        },
        //  玩转民宿公寓
        apartment: {
          title: '玩转民宿公寓',
          banner: [
            {
              id: '01',
              url: 'https://wpp.tujia.com/static/img/sy1.c2a67b9.jpg',
              title: '轰趴聚会',
              desc: '亲密空间 亲朋好友尽兴玩',
              color: 'background:#f66'
            },
            {
              id: '02',
              url: 'https://wpp.tujia.com/static/img/sy2.37692a8.jpg',
              title: '家庭出游',
              desc: '一房多卧 家人合住好照看',
              color: 'background:#ffb000'
            },
            {
              id: '03',
              url: 'https://wpp.tujia.com/static/img/sy3.50a66e6.jpg',
              title: '实惠常住',
              desc: '洗衣做饭 设备齐全又省钱',
              color: 'background:#36c48f'
            },
            {
              id: '04',
              url: 'https://wpp.tujia.com/static/img/sy4.3bcbca2.jpg',
              title: '新奇体验',
              desc: '房型丰富 风格各异更养眼',
              color: 'background:#404a54'
            },
          ]
        },
        //  当季热门
        hotSale: {
          title: '当季热门',
          banner: [
            {
              id: '01',
              url: 'https://pic1.tujia.com/upload/config/day_190405/201904050004488392.png'
            },
            {
              id: '02',
              url: 'https://pic2.tujia.com/upload/config/day_180917/20180917171730580.jpg'
            },
            {
              id: '03',
              url: 'https://pic3.tujia.com/upload/config/day_180917/201809171715275778.jpg'
            },
            {
              id: '04',
              url: 'https://pic4.tujia.com/upload/config/day_180917/201809171713061947.jpg'
            },
            {
              id: '05',
              url: 'https://pic.tujia.com/upload/config/day_180917/201809171716233065.jpg'
            },
          ]
        },
        //  安心住保障
        guarentees: {
          title: '安心住保障',
          banner: [
            {
              id: '01',
              url: '/static/img/grt1.png',
              title: '先行赔付',
              desc: '1000万保障金'
            },
            {
              id: '02',
              url: '/static/img/grt2.png',
              title: '赠送保险',
              desc: '21万人身保险'
            },
            {
              id: '03',
              url: '/static/img/grt3.png',
              title: '贴心客服',
              desc: '7*24小时在线'
            },
            {
              id: '04',
              url: '/static/img/grt4.png',
              title: '房屋保真',
              desc: '4项上房审核'
            }
          ]
        }
      }
    },
    methods: {
      //  嵌套查询
      multiSearch(val) {
        // code
        console.log(val);
      }
    },
    components: {
      HeaderNavbar,
      Swiper,
      MultiInput,
      BannerItem,
      GuarenteeIcon,
      MyFooter: Footer
    }
  }
</script>

<style lang="stylus" scoped>
</style>
