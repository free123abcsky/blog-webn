<template>
  <core-layout>
    <div class="app-index">

      <section class="index-aboutme gallayer zoom-show">
        <div class="aboutme-body">
          <h3>秋之殇</h3>
          <p>90后白羊男，前端工程师，全栈开发尝试者</p>
          <div class="my-sns-links">
            <a href="https://github.com/bh-lay?from=bh-lay" title="github">
              <icon type="social-octocat"></icon>
            </a>
            <a href="http://www.zhihu.com/people/imju-zhong-ren?from=bh-lay" title="知乎">
              知
            </a>
          </div>

        </div>
      </section>
      <section class="index-about-design">
        <h3>尝试实现响应式设计</h3>
        <p>配合单页架构提升使用体验</p>
        <div class="linkindex-aboutmes">
          单页组件<a href="http://bh-lay.github.io/lofox/index.html">lofox.js</a>
          <a href="http://bh-lay.github.io/iframer/app.html">iframer</a>
        </div>
        <div class="device-cnt">
          <div class="device mobile"><span></span><i></i><i></i></div>
          <div class="device pc"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <div class="device pad"><i></i><i></i><i></i><i></i></div>
        </div>
      </section>
      <section class="index-about-backend">
        <div class="language">
          <div class="nodeJS-logo"></div>
          <p>NODEJS强力驱动</p>
        </div>
        <div class="frameworks">
          <p>无耻地没有使用以下框架</p>
          <p>express hexo bones rrestjs koa hapi<a href="https://github.com/bh-lay/blog/">博客源码</a></p>
        </div>
      </section>
      <section class="index-about-links">
        <router-link :to="{ name: 'blog'}" title="关于我" class="btn btn-warning">
          <span>关于我</span>
        </router-link>
        <router-link :to="{ name: 'music'}" title="我的音乐" class="btn btn-default">
          <span>我的音乐</span>
        </router-link>
      </section>
    </div>
  </core-layout>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";
    //首次进入页面,主页展示切换文字
    /*index的内容*/

    .app-index {
      min-height:600px;
      background: #f4f4f4 url(../assets/mask.png);
    }
    .inde-cnt section {
      position: relative;
      font-size: 1rem
    }

    .gallayer {
      position: fixed;
      z-index: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%
    }

    .index-aboutme {
      position: relative;
      max-height: 94vh;
      min-height: 300px;
      color: #fff;
      text-shadow: 1px 0 2px rgba(0,0,0,.3);
      background: url(../assets/index-aboutme.jpg) center center;
      background-size: cover;
      visibility: hidden;
      overflow: hidden
    }

    .index-aboutme.zoom-show {
      display: block;
      visibility: visible;
      -webkit-mask-image: url(data:image/png;base64,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);
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center center;
      -webkit-mask-size: 300%;
      -webkit-animation: circle_zoom 1.2s ease-in
    }

    .index-aboutme:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDNGMUY5MUI1RTIwMTFFNThCMkZCNzc4RkVEN0I4Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDNGMUY5MUE1RTIwMTFFNThCMkZCNzc4RkVEN0I4Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTYxQUJDRjk1RTFGMTFFNThCMkZCNzc4RkVEN0I4Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTYxQUJDRkE1RTFGMTFFNThCMkZCNzc4RkVEN0I4Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wHI2DAAAAFUlEQVR42mJgYGCQYsADpAhzAAIMAA14AGmJYjBIAAAAAElFTkSuQmCC);
      z-index: 0
    }

    .index-aboutme:after {
      content: '';
      display: block;
      padding-top: 66%
    }

    .index-aboutme .aboutme-body {
      position: absolute;
      width: 100%;
      height: 160px;
      top: 50%;
      left: 0;
      margin-top: -80px;
      text-align: center
    }

    .index-aboutme h3 {
      padding-left: 10px;
      margin-bottom: .3em;
      line-height: 1em;
      font-size: 2.4em;
      font-weight: 500
    }

    .index-aboutme p {
      padding-left: 10px;
      margin-bottom: 2em;
      font-size: 1.1em
    }

    .index-aboutme .my-sns-links a {
      display: inline-block;
      vertical-align: middle;
      width: 2.2em;
      height: 2.2em;
      margin: 0 10px;
      line-height: 2.2em;
      border: 1px solid rgba(255,255,255,.4);
      border-radius: 100%;
      font-size: 1.4em;
      color: #fff;
      text-align: center;
      opacity: .7;
      transition: all .3s ease-in-out;
      -moz-transition: all .3s ease-in-out;
      -webkit-transition: all .3s ease-in-out;
      -o-transition: all .3s ease-in-out
    }

    .index-aboutme .my-sns-links a:hover {
      opacity: 1;
      background: rgba(255,255,255,.5)
    }

    .index-about-design {
      position: relative;
      padding: 5em 0;
      line-height: 1.8em;
      text-align: center;
      background: #fff
    }

/*    .index-about-design:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: -4rem;
      left: 0;
      border-style: solid;
      border-width: 4rem 100vw 0 0;
      border-color: transparent #fff
    }*/

    .index-about-design h3 {
      margin-bottom: .6em;
      font-size: 2em;
      font-weight: 400;
      letter-spacing: .2em;
      color: #333
    }

    .index-about-design p {
      margin-bottom: 2.5em;
      padding-right: .4em;
      font-size: 1.3em;
      color: #000;
      opacity: .8
    }

    .index-about-design .links {
      font-size: .85em;
      color: #333
    }

    .index-about-design .links a {
      padding: 0 .5em;
      text-decoration: underline
    }

    .index-about-design .device-cnt {
      position: relative;
      height: 176px;
      max-width: 600px;
      margin: 1.5em auto 0;
      border-bottom: 1px solid #fff;
      overflow: hidden
    }

    .index-about-design .device-cnt:after {
      content: '';
      position: absolute;
      height: 10px;
      left: 10px;
      right: 10px;
      bottom: -10px;
      box-shadow: 0 0 10px #000
    }

    .index-about-design .device {
      position: absolute;
      bottom: 0;
      border-radius: 8px 8px 0 0;
      background: #d6d6d6;
      border: 1px solid #444;
      border-width: 10px 6px 0;
      line-height: 0
    }

    .index-about-design .device:before {
      content: '';
      display: block;
      height: 10px;
      margin-bottom: 6px;
      background: #fff;
      box-shadow: 0 0 2px #444
    }

    .index-about-design .device i {
      display: inline-block;
      position: relative;
      width: 58px;
      height: 75px;
      background: #fff;
      margin: 0 3px 8px
    }

    .index-about-design .device i:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 62%;
      left: 0;
      top: 0;
      background: #aaa
    }

    .index-about-design .mobile {
      width: 52px;
      height: 88px;
      border-width: 17px 4px 0;
      left: 10px;
      z-index: 1
    }

    .index-about-design .mobile:after {
      content: '';
      display: block;
      position: absolute;
      background: #000;
      width: 3px;
      height: 3px;
      top: -13px;
      left: 24px;
      border-radius: 3px
    }

    .index-about-design .mobile span {
      display: block;
      position: absolute;
      background: #000;
      width: 10px;
      height: 2px;
      top: -7px;
      left: 20px;
      border-radius: 2px
    }

    .index-about-design .mobile i {
      display: block;
      width: auto;
      height: 55px;
      margin-bottom: 4px
    }

    .index-about-design .pc {
      width: 280px;
      height: 166px;
      left: 50%;
      margin-left: -146px
    }

    .index-about-design .pc:before {
      margin-bottom: 10px
    }

    .index-about-design .pad {
      width: 105px;
      height: 113px;
      right: 10px;
      border-top-width: 17px
    }

    .index-about-design .pad:after {
      content: '';
      display: block;
      position: absolute;
      background: #000;
      width: 4px;
      height: 4px;
      top: -11px;
      left: 51px;
      border-radius: 100%
    }

    .index-about-design .pad i {
      width: 44px;
      height: 55px
    }

    .index-about-backend {
      padding-top: 12em;
      margin-bottom: 20em;
      line-height: 1.8em;
      text-align: center;
      color: #000;
      background: rgba(255,255,255,.5)
    }

    .index-about-backend .nodeJS-logo {
      width: 90px;
      height: 120px;
      margin: 0 auto 1em;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAB5CAMAAACOTsaoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1QTFRF0OSl////hLgW5/HSsrKys9Nw8vfmmcwzjLwmmcxmmLVZncdGwduJ3uzA////N4erwgAAAA90Uk5T//////////////////8A1NyYoQAAAyZJREFUeNrsmuGSqyAMhSMIhAL7/o97rW0VFUnAOHtnp/m1s+t+1SMhyaHw0xDet1wN/EujmiLegUY1B4qjg1oiiKKN2oQRQ0dUu0AhtFOFcALooE4iXEQbVQlzBY2qGtiNdooM14X2ihW+GW0UO0wbGlVDYAPaqcZwTLRXHeEZ6Kg6I1JoVN2BVXSo/WsAraF+xSm6uuAwDXMk5C5EYGoRhyUiUxVgLThjhyysYS1EYCy4oIdd6MBYiECLDB9gCuuHAJ37wBbZzk/mLVty4IocTz7rXPLqg7n1+fG4DCeFqrdVQ8PZW+NJDgyRTU0o04wmXxcteRntGHKS10CTyE2SF35peAm9kbx0KZwvOFZRWB/QUWi0rDVbkNxSaOCIXJYcCLTliVyS3BLo4qPRMbMZ6FQX10Tj95ul7kGHlNJnc8KYFYVkrqJh3SjMrtZkr+QiGoZDgAw6DoWIEmh8iwDTS/RmEd0JoOM++VMuySV0OvxlxmkBtD7sWH6+bRRC62OeCKBfS8/GvFwZY4KAIH7NlATeoUCiL+t61/jpFJ0UGg9N5aC91B4S7RHuZNDTe0t7ukUh9FMX52PSdreLiKCXhAGbVdsr6Gf5s7si/9pFLqOhULNxzfQr6Fiox17mrn2hoRISRL0r1tr6OMg2bIFS8EzwBBEgbcvMtcWXhkpxlK/oy4K/3IfsN6gUpLan2bd4p7i1Gjo2VVtNdBe8D66jnTw0wVCf4Bqa4EPrnkg0t3U/DBw265HqAwfyx6S59c2SuT6Z0mPSpm+0+mQCYs3TUDVX6nN4KBoP1CC9SY5EuDu6YZDeZl7ZfovkTHxuWrw3TW26jAfCalEYsMHdaUIv96jzsRqZxgPQZvWraYp8kT+2Fun+xn4zjjwYWC1Elzk3tGvLMT5d6jc+b7VrW0xmaDWZb7XGKUPfPw1932fo33oMUTwSZYLjbx75kJLTIv/S8VrbeZX5f44ybz2AvfXY+NbD7prkV4/ob/1iwa1fh5jisSU/BL8fMo75adI4iqLHx8cNfozS6Ak+azH/KI2e4I/3D/LoJb7oL/qL/qK/6D+E/ifAAI35BZMFavr+AAAAAElFTkSuQmCC)
    }

    .index-about-backend .language p {
      color: #80bd01;
      margin-bottom: .5em;
      line-height: 50px;
      font-size: 2.6em
    }

    .index-about-backend .frameworks p {
      height: 30px;
      line-height: 30px
    }

    .index-about-backend .frameworks p:nth-child(1) {
      margin-bottom: .5em;
      font-size: 1.5em;
      color: #555
    }

    .index-about-backend .frameworks p:nth-child(2) {
      background: #555;
      color: #fff
    }

    .index-about-backend .frameworks a {
      padding-left: .5em;
      color: #80bd01
    }

    .index-about-backend .frameworks a:hover {
      text-decoration: underline
    }

    .index-about-links {
      padding: 3em 0;
      text-align: center;
      background: rgba(255,255,255,.5)
    }

    .index-about-links .btn {
      margin: 0 20px
    }

    @-webkit-keyframes circle_zoom {
      0% {
        opacity: 0;
        -webkit-mask-size: 30%
      }

      40% {
        opacity: .6;
        -webkit-mask-size: 60%
      }

      100% {
        opacity: 1;
        -webkit-mask-size: 300%
      }
    }

    @media screen and (min-width: 660px) {
      .index-aboutme .aboutme-body {
        top:20%;
        margin-top: 0;
        margin-left: 60px;
        text-align: left
      }
    }

    @media (min-width: 800px) and (-webkit-min-device-pixel-ratio:2) {
      .index-aboutme {
        background-image:url(//dn-lay.qbox.me/build/single-page/images/gallery/aboutme_@2x_c6c10f5.jpg)
      }
    }
</style>
<script type="text/javascript">

    import icon from '../components/icon'
    import coreLayout from "../components/layout/core-layout";

    module.exports = {
        data: function () {
            return {
                now: 1,
                clearInterval: '',
            }
        },
        mounted: function () {
            let _this = this;
            let count = $('#headlines h1').length;
            _this.clearInterval = setInterval(function () {
                _this.now >= count ? _this.now = 1 : _this.now++;
            }, 1000);
        },
        destroyed: function () {
            clearInterval(this.clearInterval)
        },
        components: {
          icon, coreLayout
        }
    }

</script>


