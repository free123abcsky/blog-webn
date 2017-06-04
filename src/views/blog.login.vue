<template>
  <div class="page" :style="pageStyle">
    <button class="reback">
        <icon type="chevron-left"></icon>
    </button>
    <div class="login-box">
      <div class="user-avatar">
        <div class="round-avatar">
          <icon type="ios-person"></icon>
        </div>
      </div>
      <div class="form-horizontal" v-on:keydown.enter="loginBtn()">
        <div class="form-group">
          <div class="col-sm-12">
            <input autofocus v-on:keydown="errText=''" class="form-control" id="email" type="text" name="email"
                   v-model="email" placeholder="用户名">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-12">
            <input v-on:keydown="errText=''" class="form-control" id="password" type="password" name="password"
                   v-model="password" placeholder="密码">
          </div>
        </div>
        <button @click="loginBtn()" class="btn btn-primary btn-block">登陆</button>
        <span class="err-text">{{errText}}</span>
      </div>
    </div>
  </div>
</template>
<style _thisd lang="scss">
  //base
  @import "../theme/theme.scss";

  body {
    background: url(../assets/login_bg.jpg);
  }
  .user-avatar {
    height: 140px;
    padding: 30px;
    .round-avatar {
      margin: 0 auto;
      width:80px;
      height:80px;
      font-size: 70px;
      text-align: center;
      color: #eee;
      border-radius: 50px;
      background: #00b2e2;
    }
  }

  .login-box {
    position: absolute;
    margin: auto;
    left: 10px;
    top: 0;
    right: 10px;
    bottom: 0;
    min-width: 300px;
    max-width: 340px;
    height:310px;
    padding: 0px 30px 30px 30px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    .err-text {
      color: $base-red-color;
      display: inline-block;
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
</style>


<script type="text/javascript">
  import Vue from "vue";
  import md5 from "js-md5";
  import icon from '../components/icon'
  import API from "../config.js"
  import {Login} from "../api/api_auth";
  import {mapState, mapActions} from 'vuex';

  module.exports = {
    data: function () {
      return {
        screenHeight: document.body.clientHeight,
        email: '990080536@qq.com',
        password: '123456abc',
        errText: '',
        timer: null
      }
    },
    computed: {
      ...mapState({
        isLogin: 'isLogin',
      }),
      pageStyle () {
          return {
              height: this.screenHeight + 'px'
          }
      }
    },
    methods: {
      ...mapActions({
        setLoginState: 'setLoginState',
        setCommentInfoStatus: 'setCommentInfoStatus',
      }),
      loginBtn: function () {

        const _this = this;
        if (!_this.email) {
          _this.errText = "请输入邮箱!";
          return;
        }
        if (!_this.password) {
          _this.errText = "请输入密码!";
          return;
        }

        Login({
          email: _this.email,
          password: _this.password
        }).then(function (response) {

          //权限信息
          _this.$localStorage.$set('authorization', {
            token: response.token,
            time: new Date().getTime()
          });
          //我进行评论的信息
          _this.$localStorage.$set('commentInfo', {
            "name": API.MY,
            "email": API.EMAIL
          });
          _this.setCommentInfoStatus(true);
          // 设置请求的token
          Vue.http.defaults.headers.common['authorization'] = "Bearer " + response.token;
          _this.setLoginState(true);//设置全局登录状态
          _this.$router.replace({//跳转
            name: 'index'
          });

        }, (err)=> {

          _this.errText = err.msg;
      })
      }
    },
    watch: {
      screenHeight (val) {
        if (!this.timer) {
          this.screenHeight = val
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      }
    },
    mounted: function () {

      const that = this
      window.onresize = () => {
        return (() => {
          that.screenHeight = document.body.clientHeight
        })()
      }
    },
    destroyed: function () {
    },
    components: {
      icon
    },

  }
</script>
