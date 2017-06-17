<!--导航条-->
<template>
  <div class="app-header" v-show="visible">
  <div class="app-nav" v-togglenav>
    <div class="nav-mask"></div>
    <div class="nav-body">
      <div class="container-fluid">
        <ul class="nav">
          <li>
            <router-link class="nav-logo" :to="{ name: 'index'}" activeClass="active" exact title="首页">
              <icon type="ios-home-outline"></icon><span>爱知室</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'blog'}" activeClass="active" title="博客">
              <icon type="ios-book-outline"></icon><span>博客</span>
            </router-link>
          </li>
          <li v-show="isLogin" >
            <router-link  :to="{ name: 'admin-dashboard'}" activeClass="active" title="控制台">
              <icon type="ios-speedometer"></icon><span>控制台</span>
            </router-link>
          </li>
          <li v-show="isLogin" >
            <router-link  :to="{ name: 'admin-myinfo'}" activeClass="active" title="我的资料">
              <icon type="person"></icon><span>我的资料</span>
            </router-link>
          </li>
          <li v-show="isLogin">
            <router-link  :to="{ name: 'admin-tag'}" activeClass="active" title="标签管理">
              <icon type="ios-pricetag"></icon><span>标签管理</span>
            </router-link>
          </li>
          <li v-show="isLogin">
            <router-link  :to="{ name: 'admin-articleManager'}" activeClass="active" title="文章管理">
              <icon type="ios-list"></icon><span>文章管理</span>
            </router-link>
          </li>
          <li v-show="isLogin">
            <router-link  :to="{ name: 'admin-commentList'}" activeClass="active" title="文章评论">
              <icon type="chatbubbles"></icon><span>文章评论</span>
            </router-link>
          </li>
        </ul>
        <ul class="side">
          <li v-show="isLogin">
            <a  title="退出" @click="logout()">
              <icon type="log-out" size="18" color="#000"></icon>
            </a>
          </li>
          <li>
            <router-link :to="{ name: 'labs'}" activeClass="active" title="实验室">实验室</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-appname">
      <i class="l-icon l-icon-layLogo"></i>爱知室
	  </div>
    <a class="nav-morebtn" href="javascript:void(0)" title="导航">
      <span class="nav-btn-ico nav-btn-ico-1"></span>
      <span class="nav-btn-ico nav-btn-ico-2"></span>
      <span class="nav-btn-ico nav-btn-ico-3"></span>
    </a>
  </div>
  </div>
</template>
<style scoped lang="scss">
  // base
  @import "../../theme/theme.scss";

  .app-header {
    height: 50px
  }

  .app-nav {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    a {
      text-decoration: none;
      color: #333;
      cursor: pointer;
    }
  }

  .nav-mask {

  }
  .nav-body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 2px solid #59bfff;
    box-shadow: 0 0 5px rgba(0,0,0,.4);
    z-index: 2;
  }

  .nav {
    li {
      float: left;
      a {
        display: block;
        height: 48px;
        line-height: 48px;
        padding: 0 15px;
        outline: 0;
        overflow: hidden;
        color: #333;
        text-align: center;
        font-size: 16px;
        transition: all .2s linear;
        -moz-transition: all .2s linear;
        -webkit-transition: all .2s linear;
        -o-transition: all .2s linear;
        i {

          display: inline-block;
          vertical-align: middle;
          height: 30px;
          line-height: 30px;
          margin-right: 6px;
          text-align: center;
          font-size: 24px;
          display: none;
        }
        span {
          display: inline-block;
          vertical-align: middle;
          height: 30px;
          line-height: 30px
        }
        &:hover {
          color: #f70
        }
      }
      .active {
        color: #f70
      }
      &:nth-child(1) a i {
        display: inline-block
      }

    }
  }

  .side {
    float: right;
    font-size: 0;
    li {
      display: inline-block;
      height: 48px;
      line-height: 48px;
      padding: 0 10px;
      a {
        font-size: 12px
      }
      .active{
        color: #f70;
      }
    }
  }

  .nav-appname {
    display: none;
  }
  .nav-morebtn {
    display: none
  }

  @media screen and (max-width: 1024px) {

    .app-nav {
      height: 50px;
      background: #fff;
      box-shadow: 0 0 4px #000;
      .nav-body {
        width: 100%;
        height: auto;
        top: -600px;
        left: 0;
        border: 0;
        box-shadow: 0 2px 2px rgba(0,0,0,.4);
        opacity: 0;
        z-index: 2;
        transition: all .2s ease;
        -moz-transition: all .2s ease;
        -webkit-transition: all .2s ease;
        -o-transition: all .2s ease;
        .nav {
          float: none;
          margin: 20px 0;
          li {
            float: none;
            a {
              i {
                display: inline-block;
              }
              span {
                width: 5em;
                padding-left: 5px;
                font-size: 14px;
                text-align: left;
              }
            }
          }
        }
        .side {
          float: none;
          text-align: center;
          border-top: 1px solid #eee;
          li {
            padding: 0 30px
          }
        }
      }
      .nav-appname {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        z-index: 2;
        i {
          margin-right: .5em
        }
        background: #fff;
      }
      .nav-morebtn {
        position: absolute;
        display: block;
        width: 40px;
        height: 40px;
        top: 5px;
        right: 10px;
        z-index: 3;
        .nav-btn-ico {
          display: block;
          position: absolute;
          width: 26px;
          height: 3px;
          left: 9px;
          border-radius: 2px;
          background: #333;
          transition: all .2s ease;
          -moz-transition: all .2s ease;
          -webkit-transition: all .2s ease;
          -o-transition: all .2s ease
        }
        .nav-btn-ico-1 {
          top: 10px
        }
        .nav-btn-ico-2 {
          top: 18px
        }
        .nav-btn-ico-3 {
          top: 26px
        }
      }
    }
  }

  .nav-slidedown {
    .nav-body {
      top: 48px;
      opacity: 1;
    }
    .nav-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1
    }
    .nav-appname {
      color: #aaa
    }
    .nav-btn-ico-1 {
      transform: translate(0,8px) rotate(-45deg);
      -moz-transform: translate(0,8px) rotate(-45deg);
      -webkit-transform: translate(0,8px) rotate(-45deg);
      -o-transform: translate(0,8px) rotate(-45deg)
    }
    .nav-btn-ico-2 {
      opacity: 0;
      transform: translate(10px,0);
      -moz-transform: translate(10px,0);
      -webkit-transform: translate(10px,0);
      -o-transform: translate(10px,0)
    }
    .nav-btn-ico-3 {
      transform: translate(0,-8px) rotate(45deg);
      -moz-transform: translate(0,-8px) rotate(45deg);
      -webkit-transform: translate(0,-8px) rotate(45deg);
      -o-transform: translate(0,-8px) rotate(45deg)
    }
  }

</style>
<script type="text/javascript">

  import icon from '../icon'
  import search from '../search'
  import API from '../../config'
  import {mapState, mapActions} from 'vuex';
  export default{
    data(){
      return {
        bgIndexNow: '',
        isMobile: window.ua.mobile,
      }
    },
    computed: {
      ...mapState({
        isLogin: 'isLogin',
      }),
      visible: function(){
        return this.$route.path.indexOf('login') == -1;
      }
    },
    methods: {
      ...mapActions({
        setLoginState: 'setLoginState',
        setCommentInfoStatus: 'setCommentInfoStatus',
      }),
      logout: function () {

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
      }
    },
    directives: {
      togglenav: {
        bind: function(el){

            $(el).bind('click', function(){
              var $this = $(event.target);
              if($this.hasClass('nav-btn-ico')||$this.hasClass('nav-morebtn') || $this.hasClass('nav-mask')){
                $('body').toggleClass('nav-slidedown');
              }else if($this.parent().is('li') || $this.parent().parent().is('li')){
                $('body').removeClass('nav-slidedown');
              }
            })
        }
      }
    },
    components: {
      icon, search
    }
  }

</script>
