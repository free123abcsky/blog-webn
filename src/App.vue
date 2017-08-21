<!--内容区-->
<template>
      <router-view></router-view>
</template>

<style lang="scss">

  @import "./theme/theme.scss";

  * {
    /*outline: 1px solid #ddd;*/
  }

  /*解决ie下右侧出现滚动条的情况,因为如果使用modal时,会出现抖动*/
  @-ms-viewport {
    width: device-width;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    min-width: 320px;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-family: $font-family-sans-serif !important;
    background: #f1f4f9;
    opacity: 1;
    &.isLogin {
      .admin_btn {
        display: block;
      }
    }
    .admin_btn {
      display: none;
    }
  }

  @include media(">desktop_small") {
    body {
      /*padding-left: 45px;*/
    }
  }

  @include media("<=desktop_small") {
    body {
      margin-top: 45px;
    }
  }

  @include media("<=phone") {
    html {
      /*background:#fff;*/
    }

  }
</style>

<script type="text/javascript">

  require('./utils/flexible.js')
  import Vue from "vue";
  import API from "./config";
  import store from './vuex/store'
  import vStorage from './utils/vStorage.js'
  import vueMoment from 'vue-moment';
  import moment from 'moment';
  import axios from './utils/axios';
  import {num2MMM, uppercase, addImgPrefix} from "./utils/filters.js";
  import {Sign} from "./api/api_statistic";
  import {mapState, mapActions} from 'vuex';
  /**
   * 设置本地存储
   * */
  Vue.use(vStorage, {
    storageKeyPrefix: 'izl-'
  });

  /**
   * 时间格式化插件-过滤器
   * */
  moment.locale('zh-cn')
  Vue.use(vueMoment);

  /**
   * filter全局注册
   * */
  Vue.filter('num2MMM', num2MMM);
  Vue.filter('uppercase', uppercase);
  Vue.filter('addImgPrefix', addImgPrefix);

  /**
   * vue-resource 配置
   * */
  //Vue.use(VueResource);
  Vue.use(axios);
  Vue.http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  Vue.http.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

  export default {
    store,
    data: function () {
      return {}
    },
    computed: {
      ...mapState({
        isLogin: 'isLogin',
      }),
      classes () {
        return [
          {
            'login-bg' : this.$route.path.indexOf('login') != -1,
          }
        ];
      }

    },
    methods: {
      //vuex
      ...mapActions({
        setLoginState: 'setLoginState'
      }),
    },
    created: function () {
      const _this = this;
      /**
       * 进入检查是否有token,是否能直接登录
       * */
      if (!!_this.$localStorage.authorization) {
        let authorization = _this.$localStorage.authorization;
        let time = parseInt(authorization.time);
        if ((new Date().getTime() - time) < 1000 * 60 * 60 * 2) {
          //token有效,能进入
          _this.setLoginState(true);
          // 设置请求的token
          Vue.http.defaults.headers.common['authorization'] = "Bearer " + authorization.token;
        }
      }
    },
    mounted: function () {
      //更改loading状态,，隐藏index中的loading画面
      window.hideLoadingPage();
    }
  }


</script>
