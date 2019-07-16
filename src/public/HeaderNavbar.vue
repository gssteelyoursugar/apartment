<template>
  <div :class="{'header-info':isHeaderInfo,'header':!isHeaderInfo}" class="border-bottom">
    <div class="logo-wrapper">
      <img src="@/assets/image/logo.png" alt="">
    </div>
    <div class="nav-items">
      <router-link tag="span" :to="item.path" v-for="item of navbar" :key="item.id" active-class="active"
                   exact>{{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderNavbar",
    data () {
      return {
        navbar:[
          {
            id:'01',
            name: '首页',
            path:'/index'
          },
          {
            id:'02',
            name: '精品房源',
            path:'/info'
          }
        ]
      }
    },
    props: {
      isHeaderInfo: Boolean
    }
  }
</script>

<style lang="stylus" scoped>
  .header-info {
    display: flex;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 1);
    color: #333;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    box-shadow: 0 0 10px 3px #f5f5f5;
  }

  .header {
    display: flex;
    padding: 10px 15px;
    background: rgba(31, 35, 37, 0.2);
    position: absolute;
    color: #fff;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .border-bottom:before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .logo-wrapper {
    width: 10%;
  }

  .logo-wrapper img {
    width: 100%;
  }

  .nav-items {
    line-height: 41px;
    font-size: 14px;
    text-align: right;
    width: 90%;
    padding-right: 30px;
  }

  .nav-items span {
    display: inline-block;
    padding: 0 10px;

  }

  .nav-items span:hover {
    cursor: pointer;
    color: #8cc5ff;
  }

  .el-dropdown-link {
    cursor: pointer;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
