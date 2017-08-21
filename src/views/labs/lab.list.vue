<template>
  <div class="container">
    <title-line>实例项目</title-line>
    <div class="row">
      <div class="col-sm-4">
        <overlay routename="video">
          <span slot="header">VIP视频</span>
          通过爬虫搜索 + VIP视频解析接口
      </overlay>
      </div>
      <div class="col-sm-4">
        <overlay routename="waterfall">
          <span slot="header">瀑布流</span>
          瀑布流测试例子
      </overlay>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">


</style>
<script type="text/javascript">
  import Vue from 'vue'
  import API from "../../config";
  import {mapState, mapActions} from 'vuex';
  export default{
    data(){
      return {
      }
    },
    computed: {

    },
    methods: {

    },
    created: function () {

    },
    mounted: function () {

    }
  }


</script>
