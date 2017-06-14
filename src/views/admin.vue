<template>
  <core-layout>
    <div class="page">
      <div class="admin-box" :class="{'preview':isShowBigAdmin}">
        <div class="box-header">
          <h1 class="text-right text-item">
            <small class="blue">后台管理</small>
          </h1>
        </div>
        <!--修改信息的内部-->
        <div class="box-content">
          <!-- 路由外链 -->
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </core-layout>
</template>
<style scoped lang="scss">

  @import "../theme/theme.scss";

  .page {
    padding-top: 15px;
    height: auto;
    min-height: 600px;
    overflow: initial;
    -webkit-overflow-scrolling: touch;
  }

  .admin-box {
    width: 780px;
    padding: 0 30px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    border-radius: 3px;
    border-bottom: 2px solid #00b2e2;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    user-select: none;
    min-height:90vh;
    .box-header h1 {
      display: inline-block;
      float: right;
      padding: 20px 30px 10px 0;
      margin: 0;
      border-top: 2px solid #00b2e2;
      position: absolute;
      top: 0;
      right: 0;
      border-top-right-radius: 3px;
    }

    .box-content {
      width: 100%;
      padding-top: 50px;
      height: 100%;
    }
  }

  .blue {
    color: $base-theme-color;
  }

  .text-item {
    color: #fff;
  }

  .admin-box {
    &.preview {
      width: 1530px;
    }
  }

  @include media("<=tablet") {
    .app-container {
      padding-top: 10px;
      .admin-box {
        max-width: 780px;
        min-width: inherit;
        width: auto;
        margin-left: 15px;
        margin-right: 15px;
      }
    }
  }
</style>
<script type="text/javascript">
  import {mapState} from 'vuex';
  import coreLayout from "../components/layout/core-layout";
  export default{
    data(){
      return {
      }
    },
    computed: {
      ...mapState({
        isShowBigAdmin: 'isShowBigAdmin',
      }),
    },
    components: {
      coreLayout
    }
  }

</script>
