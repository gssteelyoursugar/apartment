<template>
  <div class="info">
    <header-navbar :isHeaderInfo="isHeaderInfo"/>
    <div class="multi-input-background"></div>
    <multi-input :dataSet="dataSet" :isHeaderInfo="isHeaderInfo"/>
    <room-list :roomList="defaultPage" @goDetail="goDetail"/>
    <!-- 分页 -->
    <el-pagination
      background
      @current-change="handleChangePage"
      :page-size="paginations.page_size"
      :current-page.sync="paginations.page_index"
      :layout="paginations.layout"
      :total="paginations.total">
    </el-pagination>

    <my-footer/>
  </div>
</template>

<script>
  import HeaderNavbar from '../../public/HeaderNavbar'
  import MultiInput from '../../public/MultiInput'
  import RoomList from './component/RoomList'
  import Footer from '../../public/Footer'

  export default {
    name: "Info",
    data() {
      return {
        isHeaderInfo: true,
        // 分页属性配置
        paginations: {
          page_index: 1,
          page_size: 5,
          layout: "prev,pager,next",
          total: 0 // 暂时的数据
        },
        // 每页显示的内容
        defaultPage: [],
        // 总数据
        allData: [],
        // 嵌套搜索的属性配置
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
        // mock 数据
        roomList: [
          {
            id: '01',
            url: 'https://pic.tujia.com/upload/landlordunit/day_180113/thumb/201801131922588075_300_200.jpg',
            name: '骊品四合院',
            type: '四合院/20室20厅20卫/1200平米/宜住25人/30床',
            isBargain: true,
            isIntelligence: false,
            price: '30000'
          },
          {
            id: '02',
            url: 'https://pic.tujia.com/upload/ordercunit/day_190612/thumb/201906121308383313_300_200.jpg',
            name: '延庆民宿龙源里五号院',
            type: '四合院/2室1厅1卫/600平米/宜住4人/2床',
            isBargain: true,
            isIntelligence: true,
            price: '21999'
          },
          {
            id: '03',
            url: 'https://pic.tujia.com/upload/landlordunit/day_180611/thumb/201806111153347396_300_200.jpg',
            name: '万里长城八达岭东门民宿',
            type: '四合院/8室1厅8卫/666平米/宜住20人/14床',
            isBargain: true,
            isIntelligence: false,
            price: '19888'
          },
          {
            id: '04',
            url: 'https://pic.tujia.com/upload/qualifiedpics/day_180601/thumb/201806010949508653_300_200.jpg',
            name: '潭柘寺 一瓢（THE ONE）半山四合院',
            type: '客栈/5室2厅6卫/700平米/宜住15人/5床',
            isBargain: true,
            isIntelligence: false,
            price: '18800'
          },
          {
            id: '05',
            url: 'https://pic.tujia.com/upload/landlordunit/day_180404/thumb/201804041334274512_300_200.jpg',
            name: '密云水库边卢苑风景墅',
            type: '别墅/5室1厅6卫/550平米/宜住10人/5床',
            isBargain: true,
            isIntelligence: true,
            price: '16000'
          },
          {
            id: '06',
            url: 'https://pic.tujia.com/upload/cunit/day_181028/thumb/201810281701074160_300_200.jpg',
            name: '北京五渡会所整院出租',
            type: '农家乐/1室/600平米/宜住10人/5床',
            isBargain: true,
            isIntelligence: false,
            price: '15600'
          },
          {
            id: '07',
            url: 'https://pic.tujia.com/upload/landlordunit/day_190608/thumb/201906082338542645_300_200.jpg',
            name: '依云·合院天安门故宫网红街前门整套院',
            type: '四合院/6室2厅6卫/300平米/宜住14人/7床',
            isBargain: true,
            isIntelligence: false,
            price: '15104'
          },
          {
            id: '08',
            url: 'https://pic.tujia.com/upload/landlordunit/day_180114/thumb/201801141035188862_300_200.jpg',
            name: '五渡轰趴场所',
            type: '别墅/10室4厅5卫/1500平米/宜住18人/14床',
            isBargain: false,
            isIntelligence: true,
            price: '15000'
          }
        ]
      }
    },
    methods: {
      // 跳转
      goDetail(id) {
        this.$router.push('/detail/' + id)
      },
      // 点击页码时跳转到对应的页数
      handleChangePage(page) {
        //  获取当前页
        let index = this.paginations.page_size * (page - 1)
        //  数据的总数 （相当于total）
        let nums = this.paginations.page_size * page
        //  当前页面数据容器
        let datas = []
        for (let i = index; i < nums; i++) {
          if (this.allData[i]) {
            datas.push(this.allData[i])
          }
          this.defaultPage = datas
        }
        console.log(page);
      },
      // 放到 axios 回调中的操作
      getData() {
        this.allData = this.roomList
        this.paginations.total = this.allData.length
        this.defaultPage = this.allData.filter((item, index) => {
          return index < this.paginations.page_size
        })
      }
    },
    mounted() {
      // 因为没有使用axios 获取数据，所以这里简单赋值，
      // 实际情况将axios 拿到的数据赋值给allData 进行分页即可
      this.getData()
    },
    components: {
      HeaderNavbar,
      MultiInput,
      RoomList,
      MyFooter: Footer
    }
  }
</script>

<style lang="stylus" scoped>
  .multi-input-background {
    width: 100%;
    height: 180px;
    background-color: #f5f5f5;
  }

  .el-pagination {
    text-align: center;
    margin: 30px 0;
  }
</style>
