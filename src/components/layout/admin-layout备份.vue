<template>
  <div :class="drawerClass" ref="drawer">
    <header class="drawer-navbar" role="banner">
      <div class="drawer-container">
        <div class="drawer-navbar-header">
          <a class="drawer-brand" href="javascript:void(0)">
            <slot name='logo'></slot>
          </a>
          <button type="button" class="drawer-toggle drawer-hamburger" @click="toggle">
            <span class="sr-only">toggle navigation</span>
            <span class="drawer-hamburger-icon"></span>
          </button>
<!--          <div class="drawer-search" title="搜索" @click.stop="searchToggle">
            <i class="ion ion-ios-search"></i>
          </div>-->
        </div>
        <nav class="drawer-nav" role="navigation">
          <div v-show="isLogin" title="退出" @click="logout()" class="drawer-login">
            <icon type="log-out" size="18" color="#000"></icon>
          </div>
          <ul class="drawer-menu">
            <li v-for="nav in navs" @click="close">
              <router-link  :to="{ name: nav.toRoute}" :title="nav.text" class="drawer-menu-item">
                <icon :type="nav.icon"></icon><span>{{nav.text}}</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <transition name="slide-fade">
          <div class="drawer-search-input" v-show="showSearch">
            <div class="search-form">
              <input type="search" placeholder="输入关键词并回车">
              <button class="search-btn" type="submit">
                <i class="ion ion-ios-search"></i>
              </button>
            </div>
          </div>
        </transition>
      </div>
    </header>
    <slot name="main"></slot>
    <slot name="footer"></slot>
    <div class="drawer-mask" :class="{'active': state}" @click="close"></div>
  </div>
</template>
<script type="text/javascript">

  import {mapState, mapActions} from 'vuex';

  export default{
    name: 'Drawer',
    props: {
      pos: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['top', 'left', 'right'].indexOf(value) !== -1;
        }
      },
      mpos: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['top', 'left', 'right'].indexOf(value) !== -1;
        }
      },
      fixed: {
        type: Boolean,
        default: false
      },
      goback: {
        type: Boolean,
        default: false
      },
      navs: Array
    },
    data(){
      return {
        isMobile: window.ua.mobile,
        translateX:0,
        state: false,
        showSearch: false
      }
    },
    computed: {
      ...mapState({
        isLogin: 'isLogin',
      }),
      drawerClass () {
        return [
          'drawer',
          [`drawer-${this.mpos}`],
          {
              'drawer-navbar-fixed': this.fixed,
              'drawer-open': this.state,
          }
        ];
      },
    },
    watch: {
      state: function (value) {
        if (value){
          this.$emit('on-show');
        }
        else{
          this.$emit('on-hide');
        }
      }
    },
    methods: {
      toggle() {
        this.state = !this.state;
      },
      close() {
        this.state = false;
      },
      searchToggle() {
        this.showSearch=!this.showSearch;
        this.close();
      },
      logout() {

        this.close();
        this.$Modal.confirm({
          title: '确认对话框标题',
          content: '<p>确定退出后台管理?</p>',
          loading: true,
          onOk: () => {
            const _this = this;
            setTimeout(function () {
              _this.$localStorage.$delete('authorization');
              _this.$localStorage.$delete('commentInfo');
              _this.setLoginState(false);// 登录状态
              _this.setCommentInfoStatus(false);// 评论信息状态
              _this.$Modal.remove();
              _this.$router.push({
                name: 'index'
              });
            }, 200);
          }
        });
      },
      init() {

        window.onresize = () => {
          return (() => {
            this.state = false;
          })()
        }

        document.body.addEventListener('click', (e) => {
          if(e.target.nodeName === 'INPUT'
            || e.target.className.indexOf('search-btn') != -1 || e.target.className.indexOf('search') != -1){
            return;
          }else{
            this.showSearch = false;
          }
        })
      }
    },
    created() {
    },
    mounted() {
      this.init()
    }
  }

</script>

<style lang="scss">

  .drawer-navbar {
    position: relative;
    z-index:101;
    height: 50px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.18);
    border-top: 2px solid #59bfff;
    background-color: #fff;
  }

  .drawer-navbar-fixed{
    padding-top: 50px;
  }

  .drawer-navbar-fixed .drawer-navbar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .drawer-navbar .drawer-container {
    margin: 0 auto;
  }

  .drawer-navbar a:hover {
    color: #f70;
  }

  .drawer-navbar-header {
    position: relative;
    display: block;
    float: left;
    width: 100%;
    height: 50px;
    padding: 0;
    border: 0;
  }

  .drawer-brand {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    padding: 0 10px;
    color: #5A5454;
  }

  .drawer-navbar .drawer-brand {
    text-decoration: none;
    cursor: pointer;
  }

  .drawer-login {
    background: transparent;
    position: absolute;
    right: 50px;
    height: 50px;
    width: 50px;
    line-height: 50px;
    font-size: 28px;
    text-align: center;
  }

  .drawer-search {
    background: transparent;
    position: absolute;
    right: 0px;
    top: 0;
    height: 50px;
    width: 50px;
    line-height: 50px;
    font-size: 28px;
    text-align: center;
    cursor: pointer;
    z-index: 1;
  }

  .drawer-search-input{
    position: absolute;
    left: 0px;
    right: 0px;
    width: 100%;
    margin-top: 2px;
    border: 1px solid #eee;
    background: rgba(255,255,255,.9);
  }

  .search-form{
    padding: 25px 25%;
    overflow: hidden;
    input{
      width: 90%;
      height: 50px;
      float: left;
      padding-right: 10px;
      margin: 0 auto;
      font-size: 17px;
      line-height: 30px;
      border: solid 2px #ddd;
      border-right: none;
      border-radius: 2px;
    }
    button{
      color: #fff;
      border: none;
      background: #45B6F7;
      height: 50px;
      font-size: 16px;
      padding: 0 12px;
      border-radius: 0 2px 2px 0;
      width: 10%;
      cursor: pointer;
      -webkit-transition: all 0.25s;
      -moz-transition: all 0.25s;
      -ms-transition: all 0.25s;
      -o-transition: all 0.25s;
      transition: all 0.25s;
    }
  }

  .drawer-hamburger {
    position: absolute;
    z-index: 104;
    top: 0;
    display: none;
    padding: 10px;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    -webkit-transition: all .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: all .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    border: 0;
    outline: 0;
    background-color: transparent;
  }

  .drawer-hamburger:hover {
    cursor: pointer;
    background-color: transparent;
  }

  .drawer-hamburger-icon {
    position: relative;
    display: block;
  }

  .drawer-hamburger-icon,
  .drawer-hamburger-icon:before,
  .drawer-hamburger-icon:after {
    width: 100%;
    height: 2px;
    -webkit-transition: all .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: all .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    background-color: #222;
  }

  .drawer-hamburger-icon:before,
  .drawer-hamburger-icon:after {
    position: absolute;
    top: -10px;
    left: 0;
    content: ' ';
  }

  .drawer-hamburger-icon:after {
    top: 10px;
  }

  .drawer-open .drawer-hamburger-icon {
    background-color: transparent;
  }

  .drawer-open .drawer-hamburger-icon:before,
  .drawer-open .drawer-hamburger-icon:after {
    top: 0;
  }

  .drawer-open .drawer-hamburger-icon:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .drawer-open .drawer-hamburger-icon:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  /*!------------------------------------*\
    accessibility
\*!------------------------------------*/

  /*!
   * Only display content to screen readers
   * See: http://a11yproject.com/posts/how-to-hide-content
   */

  .sr-only {
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  /*!
   * Use in conjunction with .sr-only to only display content when it's focused.
   * Useful for "Skip to main content" links; see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
   * Credit: HTML5 Boilerplate
   */

  .sr-only-focusable:active,
  .sr-only-focusable:focus {
    position: static;
    overflow: visible;
    clip: auto;
    width: auto;
    height: auto;
    margin: 0;
  }

  .drawer-nav {
    position: relative;
    overflow: visible;
    width: auto;
    height: 50px;
    padding-top: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .drawer-menu {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .drawer-menu i{
    display: none;
  }

  .drawer-navbar .drawer-menu li {
    float: left;
  }

  .drawer-navbar .drawer-menu-item {
    display: block;
    padding: 0px 15px;
    line-height: 50px;
    font-size: 16px;
    text-decoration: none;
    color: #222;
  }

  .drawer-navbar .drawer-menu-item.active{
    color: #f70;
  }

  .drawer-mask.active{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(6, 6, 6, 0.08);
  }

  @media (max-width: 640px) {

    .drawer-navbar{
      border-top: initial;
    }

    .drawer-open .drawer-hamburger{
      position: fixed;
    }

    .drawer-navbar-header {
      width: 100%;
      text-align: center;
      border-top: 2px solid #59bfff;
    }

    .drawer-navbar .drawer-hamburger{
      display: block;
    }

    .drawer-navbar .drawer-menu li {
      float: none;
    }

    .drawer-menu .drawer-menu-item.active{
      background: #59A550;
    }

    .drawer-menu i{
      display: inline-block;
      margin: 0 10px;
    }

    .drawer-search-input{
      padding-top: 50px;
      .search-form{
        padding: 0;
      }
    }

    .drawer-left .drawer-nav, .drawer-right .drawer-nav {
      position: fixed;
      z-index: 101;
      top: 0;
      overflow: hidden;
      width: 16.25rem;
      height: 100%;
      background: #34393d;
    }


    .drawer-left .drawer-menu-item, .drawer-right .drawer-menu-item{
      height: 45px;
      line-height: 45px;
      padding: 0 10px 0 28px;
      color:#fff;
      font-size: 14px;
      display: block;
      text-decoration: none;
    }

    .drawer-left .drawer-menu-item:hover, .drawer-right .drawer-menu-item:hover {
      background: #59A550;
    }

    .drawer-left .drawer-login, .drawer-right .drawer-login{
      position: static;
      width: 100%;
      height: 120px;
      line-height: 120px;
      margin-bottom: 20px;
      background: url("../../assets/drawer-bg.jpg");
      background-size: cover;
    }

    .drawer-top .drawer-login{
      right: 0;
      bottom: 10px;
    }

    .drawer-top.drawer-open .drawer-navbar-header{
      position: fixed;
      background-color: #fff;
    }

    .drawer-top .drawer-menu-item.active{
      color: #f70;
      background: none;
    }

    .drawer-right .drawer-search, .drawer-top .drawer-search  {
      left: 0px;
    }

    /*!------------------------------------*\
      Top
  \*!------------------------------------*/

    .drawer-top .drawer-nav {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      height: auto;
      max-height: 100%;
      background: #fff;
      -webkit-transition: top .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
      transition: top .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    }

    .drawer-top.drawer-open .drawer-nav {
      top: 50px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.18);
    }

    .drawer-top .drawer-hamburger,
    .drawer-top.drawer-open .drawer-hamburger {
      right: 0;
    }
    .drawer-top.drawer-open .drawer-menu{
      margin: 10px 80px 20px;
    }
    .drawer-top.drawer-open .drawer-menu-item{
      height: 42px;
      text-align: center;
    }

    /*!------------------------------------*\
      Left
  \*!------------------------------------*/

    .drawer-left .drawer-nav {
      left: -16.25rem;
      -webkit-transition: left .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
      transition: left .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    }

    .drawer-left.drawer-open .drawer-nav,
    .drawer-left .drawer-hamburger,
    .drawer-left.drawer-open .drawer-navbar .drawer-hamburger {
      left: 0;
    }

    /*!------------------------------------*\
        Right
    \*!------------------------------------*/

    .drawer-right .drawer-nav {
      right: -16.25rem;
      -webkit-transition: right .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
      transition: right .6s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    }

    .drawer-right.drawer-open .drawer-nav,
    .drawer-right .drawer-hamburger,
    .drawer-right.drawer-open .drawer-navbar .drawer-hamburger {
      right: 0;
    }

  }

  @media (min-width: 640px) {
    .drawer-container {
      max-width: 60rem;
    }
    .drawer-navbar {
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.18);
      border-top: 2px solid #59bfff;
    }
    .drawer-menu{
      position: absolute;
      right: 120px;
    }

  }

  @media (min-width: 750px) {
    .drawer-container {
      max-width: 70rem;
    }
  }
</style>
