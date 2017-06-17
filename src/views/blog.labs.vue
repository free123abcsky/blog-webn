<template>
  <core-layout>
    <div class="page">
      <div class="container">
        <recommend-line>实例项目</recommend-line>
        <div class="row">
          <div class="col-sm-4">
            <overlay routename="video">
              <span slot="header">VIP视频</span>
                通过爬虫搜索 + VIP视频解析接口
            </overlay>
          </div>
        </div>
      </div>
    </div>
  </core-layout>
</template>
<style scoped lang="scss">

  .page {
    padding-top: 15px;
    height: auto;
    min-height: 600px;
    overflow: initial;
  }

</style>
<script type="text/javascript">
  import Vue from 'vue'
  import API from "../config";
  import panel from "../components/panel";
  import overlay from "../components/overlay";
  import ribbon from "../components/ribbon";
  import recommendLine from "../components/recommend-line";
  import coreLayout from "../components/layout/core-layout";
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
    components: {
      panel, overlay, ribbon, recommendLine, coreLayout
    },
    created: function () {

    },
    mounted: function () {

    }
    ,
  }


</script>
