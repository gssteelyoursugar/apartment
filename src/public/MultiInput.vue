<template>
  <div class="multi-input border" :class="{'multi-input-top-position':isHeaderInfo}" @click="boomTop">
    <div class="input-wrapper">
      <div class="input-item address-input border-right">
        <el-input
          placeholder="目的地/关键词"
          v-model="dataSet.address">
          <i slot="prefix" class="el-input__icon el-icon-location-information"></i>
        </el-input>
      </div>
      <div class="input-item time-input border-right">
        <el-date-picker
          v-model="dataSet.timeValue"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00', '12:00:00']"
        >
        </el-date-picker>
      </div>
      <div class="input-item member-input">
        <el-select v-model="dataSet.checkedOption" clearable placeholder="人数">
          <el-option
            v-for="item in dataSet.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="input-item submit-btn border-right" @click="doSearch">
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatTime} from "../utils/date";

  export default {

    name: "MultiInput",
    data() {
      return {}
    },
    computed: {
      //  将日期时间选择器中选中的 中国标准时间 转化成时间戳。
      timeSet() {
        let values = {}
        let startTime = new Date(formatTime(this.dataSet.timeValue[0], 'Y-M-D h:m:s')).getTime();
        let endTime = new Date(formatTime(this.dataSet.timeValue[1], 'Y-M-D h:m:s')).getTime();
        if (this.dataSet.timeValue.length === 0) {
          values = {}
        } else {
          values = {
            'startTime': startTime,
            'endTime': endTime
          }
        }
        return values
      }
    },
    methods: {
      //  子组件向父组件 传值
      doSearch() {
        //  嵌套查询的内容
        let datas = {
          'address': this.dataSet.address, // 目的地/关键词
          'timeSet': this.timeSet,    //  时间集合
          'option': this.dataSet.checkedOption  //  人数选项
        }
        this.$emit('multiSearch', datas)
      },
      //  点击嵌套查询组件时，页面滚动300（ 跳到scrollTop = 300 的位置）
      boomTop() {
        if (this.isHeaderInfo === false) {
          document.documentElement.scrollTop = 0;
          if (document.documentElement.scrollTop < 300 || document.documentElement.scrollTop === 0) {
            document.documentElement.scrollTop = 300;
          }
          // console.log(document.documentElement.scrollTop)
        }
      }
    },

    props: {
      dataSet: {
        type: Object
      },
      isHeaderInfo: {
        type: Boolean
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .multi-input >>> .el-input__inner {
    height: 50px;
    line-height: 50px;
    border-radius: 0;
    border: 0;
    border-right: 1px solid #e5e5e5;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .multi-input >>> .el-input input::placeholder, .multi-input >>> .el-input__inner input::placeholder {
    color: #888;
  }

  .multi-input >>> .el-date-editor input, .multi-input >>> .el-input__inner {
    color: #333;
  }

  .multi-input >>> .el-date-editor .el-range-separator {
    line-height: 40px;
  }

  .multi-input >>> .el-range-editor .el-range-input {
    background-color: rgba(255, 255, 255, 0);
  }

  .multi-input {
    position: absolute;
    top: 320px;
    left: 20%;
    right: 20%;
    width: 60%;
    height: 50px;
    background: rgba(255, 255, 255, 0.5);
    z-index: 8;
  }

  .multi-input-top-position {
    top: 100px;
  }

  .multi-input:before {
    border-color: #000;
  }

  .input-wrapper {
    display: flex;
  }

  .input-item {
    flex: 1;
  }

  .border-right {
    border-color: #333;
  }

  .address-input {
    flex: 4;
  }

  .member-input {
    flex: 2;
  }

  .member-input >>> .el-input__inner input {

    font-size: 14px;
  }

  .submit-btn {
    flex: 2;
    background-color: #8cc5ff;
    border-color: #8cc5ff;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .submit-btn:before {
    border-color #8cc5ff;
  }

  .submit-btn:hover {
    cursor: pointer;
  }
</style>
