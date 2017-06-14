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
          <li>
            <router-link class="animated fadeIn" :to="{ name: 'labs'}" activeClass="active" title="实验室">
              <icon type="ios-flask"></icon><span>实验室</span>
            </router-link>
          </li>
<!--          <li>
            <router-link :to="{ name: 'music'}" activeClass="active" title="音乐">
              <icon type="music-note"></icon><span>音乐</span>
              <section class="right-bottom-status">
                <i class="fa fa-lg" :class="{true:'fa-pause-circle-o',false:' fa-play-circle-o playing'}[!isPlaying]"></i>
              </section>
            </router-link>
          </li>-->
          <li v-show="isLogin" >
            <router-link class="animated fadeIn" :to="{ name: 'admin-dashboard'}" activeClass="active" title="控制台">
              <icon type="ios-speedometer"></icon><span>控制台</span>
            </router-link>
          </li>
          <li v-show="isLogin" >
            <router-link class="animated fadeIn" :to="{ name: 'admin-myinfo'}" activeClass="active" title="我的资料">
              <icon type="person"></icon><span>我的资料</span>
            </router-link>
          </li>
          <li v-show="isLogin">
            <router-link class="animated fadeIn" :to="{ name: 'admin-tag'}" activeClass="active" title="标签管理">
              <icon type="ios-pricetag"></icon><span>标签管理</span>
            </router-link>
          </li>
          <li v-show="isLogin">
            <router-link class="animated fadeIn" :to="{ name: 'admin-articleManager'}" activeClass="active" title="文章管理">
              <icon type="ios-list"></icon><span>文章管理</span>
            </router-link>
          </li>
          <li v-show="isLogin">
            <router-link class="animated fadeIn" :to="{ name: 'admin-commentList'}" activeClass="active" title="文章评论">
              <icon type="chatbubbles"></icon><span>文章评论</span>
            </router-link>
          </li>
        </ul>
        <ul class="side">
<!--          <li>
            <search></search>
          </li>-->
          <li v-show="isLogin">
            <a class="animated fadeIn" title="退出" @click="doLoginout()">
              <icon type="log-out" size="18" color="#000"></icon>
            </a>
          </li>
<!--          <li>
            <a class="changebg animated fadeIn" title="切换背景" @click="changeBG()">
              <icon type="photo"></icon>
              <section class="right-bottom-status">
                <icon type="refresh" :class="{true:'',false:'fa-spin'}[!isChangeBG]"></icon>
              </section>
            </a>
          </li>-->
          <li>
            <a title="前端英雄榜" href="/directories">前端英雄榜</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-appname">
      <i class="l-icon l-icon-layLogo"></i>爱知室
	</div>
    <a class="nav-morebtn" href="javascript:void(0)" title="导航">
      <span class="nav-btn-ico nav-btn-ico_1"></span>
      <span class="nav-btn-ico nav-btn-ico_2"></span>
      <span class="nav-btn-ico nav-btn-ico_3"></span>
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
    .nav {
      float: left;
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
  }
  .nav-appname {
    display: none;
  }
  .nav-morebtn {
    display: none
  }

  .changebg {
    position: relative;
    .right-bottom-status {
      display: block;
      position: absolute;
      font-size: 14px;
      right: -6px;
      bottom: 5px;
      width: 18px;
      height: 18px;
      color: #999;
      i {
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        overflow: hidden;
        font-size: 18px;
        bottom: 0;
        left: 0;
      }
      .fa {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .playing {
        //color:$base-theme-color;
      }
    }
  }



  @media screen and (max-width: 1024px) {
    .blog-container {
      transition:all .2s ease;
      -moz-transition: all .2s ease;
      -webkit-transition: all .2s ease;
      -o-transition: all .2s ease
    }

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
        .nav-btn-ico_1 {
          top: 10px
        }
        .nav-btn-ico_2 {
          top: 18px
        }
        .nav-btn-ico_3 {
          top: 26px
        }
      }
    }
  }

  .nav-slidedown {
    .nav-body {
      top: 48px;
      opacity: 1
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
    .nav-btn-ico_1 {
      transform: translate(0,8px) rotate(-45deg);
      -moz-transform: translate(0,8px) rotate(-45deg);
      -webkit-transform: translate(0,8px) rotate(-45deg);
      -o-transform: translate(0,8px) rotate(-45deg)
    }
    .nav-btn-ico_2 {
      opacity: 0;
      transform: translate(10px,0);
      -moz-transform: translate(10px,0);
      -webkit-transform: translate(10px,0);
      -o-transform: translate(10px,0)
    }
    .nav-btn-ico_3 {
      transform: translate(0,-8px) rotate(45deg);
      -moz-transform: translate(0,-8px) rotate(45deg);
      -webkit-transform: translate(0,-8px) rotate(45deg);
      -o-transform: translate(0,-8px) rotate(45deg)
    }
    .app-container,.app-footer {
      opacity: .4;
      transform: translateY(100px);
      -moz-transform: translateY(100px);
      -webkit-transform: translateY(100px);
      -o-transform: translateY(100px)
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
        isChangeBG: false,
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
      navBack: function () {
        this.$router.back();
      },
      doLoginout: function () {

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
      clearSessionStorage(){
        this.$sessionStorage.$reset();
      },
      //加载资源,成功执行回调
      _loadImg(url, cb) {
        if (/.png$|.jpg$|.gif$/.test(url)) {
          let _TagObjs = new Image();
          _TagObjs.src = url;
          _TagObjs.onload = function () {
            !!cb && cb();
          };
        }
      },
      //随机返回列表中的地址
      _randomImage() {
        const _this = this;
        let imageList = API.imageList;//图片列表
        let imageCount = imageList.length;
        //返回 v_from 和 v_to 之间的随机整数
        function _selectFrom(v_from, v_to) {
          let range = v_to - v_from + 1;
          let selected = Math.floor(Math.random() * range + v_from);
          if (selected === parseInt(_this.bgIndexNow)) {
            // console.log('和上一个相同,再去随机取值')
            return _selectFrom(v_from, v_to);
          } else {
            // console.log("当前取值为:" + (selected+1))
            _this.bgIndexNow = selected;
            return selected
          }
        }

        return imageList[_selectFrom(0, imageCount - 1)]
      },

      /**
       * 更换背景
       * */
      changeBG(imgUrl){
        const _this = this;
        if (_this.isChangeBG) {
          return false;
        }
        if (!imgUrl) {
          imgUrl = _this._randomImage();
        }
        _this.isChangeBG = true;

//        let $body = $('html');
        // 检查是否有用户自己保存过背景图片,如果保存过,则自动切换
        _this._loadImg(imgUrl, function () {

          var css = function (t, s) {
            s = document.createElement('style');
            s.innerText = t;
            document.body.appendChild(s);
          };

          let cssRules = '.background:before{' +
            'content:"";' +
            'position: fixed;' +
            'z-index: -1;' +
            'top: 0;' +
            'right: 0;' +
            'bottom: 0;' +
            'left: 0;' +
            'background-repeat: no-repeat;' +
            'background-size: cover;' +
            'background-attachment: fixed;' +
            'background-position: center center;' +
            'background-image: ' + `url(${imgUrl});` +
            '}';

          // 保存用户切换的壁纸信息,下次直接自动切换
          _this.$localStorage.$set('userBackground', imgUrl);
          css(cssRules);
          // 动画是500ms
          setTimeout(function () {
            _this.isChangeBG = false;
          }, 1000);
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
    created: function () {

      const _this = this;
      /**
       * 背景初始化
       * */
      if (!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)) {
        if (!!_this.$localStorage.userBackground) {
          setTimeout(function () {
            _this.changeBG(_this.$localStorage.userBackground)
          }, 3000)
        }
      }

    },
    mounted: function () {
      const _this = this;

    },
    components: {
      icon, search
    }
  }

</script>
