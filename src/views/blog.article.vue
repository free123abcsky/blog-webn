<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9">
        <div class="article-detail">
          <div class="article-section" :class="{'loading':isLoading}">
            <header class="article-header">
              <h1 class="article-title">{{article.title}}</h1>
              <div class="meta">
                  <span class="time">
                    <span class="time-icon">
                      <i class="fa fa-calendar-o"></i>
                    </span>
                    <span class="time-text">发表于</span>
                    <span title="publish time" datetime="2017-03-21T20:18:32+08:00">
                      {{article.publish_time  | moment("from","now")}}
                    </span>
                  </span>
                <span class="comments-count">
                    <span class="meta-divider">|</span>
                    <span class="comments-icon">
                      <i class="fa fa-comment-o"></i>
                    </span>
                    <span class="comments-num"></span>
                  </span>
                <span class="leancloud_visitors">
                    <span class="post-meta-divider">|</span>
                    <span class="post-meta-item-icon">
                      <i class="fa fa-eye"></i>
                    </span>
                    <span class="read-text">阅读次数 </span>
                    <span class="read-count">43</span>
                  </span>
              </div>
            </header>
            <!--              <section class="paper-info">
                            <div class="paper-info-span">
                              <i class="fa fa-calendar"></i>
                              <span>{{article.publish_time  | moment("from","now")}}</span>
                            </div>
                            <div class="paper-info-span">
                              <i class="fa fa-book"></i>
                              阅读数
                              <span>{{article.read_num}}</span>
                            </div>
                            <a href="#comment" class="paper-info-span">
                              <i class="fa fa-comments"></i>
                              评论数
                              <span>{{recountCommentNum}}</span>
                            </a>
                            &lt;!&ndash;hidden-xs&ndash;&gt;
                            <div class="paper-info-span hidden-xs" v-for="tag of article.tags">
                              <i class="fa fa-tag"></i> <span>{{tag.name}}</span>
                            </div>
                          </section>-->
            <section class="paper-content">
              <div class="paper-content-inner markdown-body hljs" v-html="article.html">
                <!--{{{article.content}}}-->
              </div>
              <!--page-->
            </section>

            <footer class="article-footer">
              <div class="article-tags"><i class="fa fa-tags"></i>
                <a href="" rel="tag" title="查看关于 网络配色 的文章">网站配色</a>
                <a href="" rel="tag"  title="">配色工具</a>
                <a href="" rel="tag" title="">配色方案</a>
              </div>
            </footer>
            <!--the end-->
          </div>

          <section class="comments-section">
            <ol class="commentlist">
              <li class="comment">
                <img class="c-avatar" src="../assets/avatar.jpg"/>
                <div class="c-main">
                  这是我的评论1
                  <div class="c-meta">
                  <span class="c-author">呃呃呃1</span>
                  2016-10-18 00:35
                  <span class="c-reply">回复</span>
                </div>
                </div>
              </li>
              <li class="comment">
                <img class="c-avatar" src="../assets/avatar.jpg"/>
                <div class="c-main">
                  这是我的评论2
                  <div class="c-meta">
                  <span class="c-author">呃呃呃2</span>
                  2016-10-18 00:35
                  <span class="c-reply">回复</span>
                </div>
                </div>
              </li>
              <li class="comment">
                <img class="c-avatar" src="../assets/avatar.jpg"/>
                <div class="c-main">
                  这是我的评论3
                  <div class="c-meta">
                  <span class="c-author">呃呃呃3</span>
                  2016-10-18 00:35
                  <span class="c-reply">回复</span>
                </div>
                </div>
              </li>
            </ol>
          </section>

          <!--评论-->
          <!--<section id="comment" class="commentbox">
            &lt;!&ndash;标题&ndash;&gt;
            <div class="commentbox-header">
              <h3><span class="commentbox-header&#45;&#45;Comments">Comments</span><span class="commentbox-header-count">{{recountCommentNum}}</span>
              </h3>
            </div>
            &lt;!&ndash;提问题&ndash;&gt;
            &lt;!&ndash;hidden-xs&ndash;&gt;
            <div class="commentbox-question " @click="replyBtn('')">
              <comment-box :article-id="article._id" :pre-id="article._id"></comment-box>
            </div>

            &lt;!&ndash;问题盒子&ndash;&gt;
            <div class="commentbox-inner">
              <div class="comments" v-for="comment of commentList">
                &lt;!&ndash;{{comment._id}}{{'&#45;&#45;'}}{{chain.selectId ==comment._id}}{{'&#45;&#45;'}}{{toggle}}{{'&#45;&#45;'}}{{chain.selectId}}&ndash;&gt;
                <div class="comments-ask">
                  <div class="comments-ask-header">
                    <span class="name">{{comment.name}}</span>&ensp;·&ensp;
                  <span>{{comment.time | moment("from","now")}}</span>
                    &lt;!&ndash;hidden-xs&ndash;&gt;
                    <span class="">&ensp;·&ensp;<span class="reply"
                                                      @click="replyBtn(comment._id)">回复</span></span>
                  </div>
                  <div class="comments-ask-content">
                    <span>{{comment.content}}</span>
                  </div>
                </div>
                <div class="comments-reply" :class="{'active':(comment._id==selectId && toggle)}">
                  <div class="commentbox-question">
                    <comment-box :article-id="comment.article_id" :pre-id="comment._id"></comment-box>
                  </div>
                  <div class="comments-reply-each" v-for="reply of comment.next_id">
                    <div class="comments-reply-header">
                    <span
                      class="name">{{reply.name}}</span>&ensp;·&ensp;
                    <span>{{reply.time | moment("from","now")}}</span>
                    </div>
                    <div class="comments-reply-content">
                      <span>{{reply.content}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>-->

        </div>
      </div>
      <div class="col-lg-3 visible-lg clearfix">
        <sidebar></sidebar>
      </div>
    </div>
    <!--返回最上层-->
    <div id="toTop" class="backToTop">
      <i class="fa fa-arrow-up"></i>
    </div>
  </div>
</template>
<style scoped lang="scss">
  //base
  @import "../theme/theme.scss";

  .article-detail {
    margin: 0 auto;
    margin-left: -35px;
    line-height: 1.2;
    font-size: 2em;
    font-weight: 500;
    color: $base-word-color;
    box-sizing: border-box;
    position: relative;
    z-index: 999;
    .article-section {
      //background-color: transparent;
      background: #fff;
      /*margin-bottom: 30px;*/
      /*border-radius: 4px;*/
      overflow: hidden;
      margin-bottom: 30px;
      .article-header {
        text-align: center;
        padding: 2px 20px 12px;
        border-bottom: 1px solid #eee;
        h1 {
          color: #444;
          font-weight: normal;
          font-size: 30px;
          line-height: 60px;
          padding: 5px 0;
        }
        .meta{
          margin: 3px 0 15px 0;
          color: #999;
          font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
          font-size: 12px;
          text-align: center;
        }
      }
      .article-footer {
        background-color: #fff;
        border-top: 1px solid #f7f7f7;
        padding: 15px 20px;
        overflow: hidden;
        .article-tags {
          float: left;
          font-size: 15px;
          display: inline-block;
          padding: 2px 6px 3px;
          margin: 0 2px;
          color: #fff;
         /* background-color: #4a4a4a;*/
          opacity: .7;
          i {
            margin-right: 10px;
            color: #bbb;
          }
        }
      }
      &.loading {

        .paper-info {
          .paper-info-span {
            opacity: 0.3;
            background: #fff;
            min-width: 70px;
            text-decoration: none;
          }
        }
        .paper-content {
          .paper-content-inner {
            background-image: url(../assets/pleasehole-img.png);
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: center top;
            min-height: 834px;
            width: 100%;
          }
        }

      }
      .paper-header {
        border: 1px solid transparent;
        padding: 35px 35px 0;
        background: #fff;
        text-align: right;
        a {
          text-decoration: none;
        }
        h1 {
          min-height: 52px;
          width: 100%;
          box-sizing: border-box;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.2;
          margin: 20px 0 10px;
        }
      }
      .paper-info {
        @include display-flex;
        @include justify-content(flex-end);
        @include align-items(center);
        background: $base-background-color;
        padding: 10px 35px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.8) inset;
        transition: all ease 200ms;
        .paper-info-span {
          color: #eee;
          margin-left: 20px;
          font-size: 14px;
          //min-width: 70px;
          white-space: nowrap;
          text-decoration: none;
        }
        a:hover {
          color: $base-theme-color;
        }
      }
      .paper-content {
        padding: 35px;
        background: #fff;
        //min-height: 800px;
        .paper-content-inner {
          padding: 5px 0 0;
          //border-bottom: 1px dashed #464646;
        }
      }
      .paper__navBox {
        background-color: #fff;
        .paper__navBox__inner {
          padding: 20px 0;
          text-align: center;
          list-style: none;
          color: $base-word-color;
          //border: 1px solid transparent;
          //padding: 35px;
          @include display-flex;
          @include justify-content(center);
          @include align-items(center);
          border-bottom: 1px solid #000;
          div {
            margin: 0 10px;
            //border: 1px solid #464646;
            padding: 5px 20px;
            font-size: 16px;
            //border-radius: 28px;
            //transition: all ease 200ms;
            //cursor: pointer;
            //&:hover {
            //  color: #fff;
            //  border-color: $base-theme-color;
            //  background-color: $base-theme-color;
            //}

          }
        }

      }

    }
    .comments-section {
      position: relative;
      background-color: #fff;
      .commentlist {
        padding: 12px 20px 0 20px;
        margin: 0;
        list-style: none;
        .comment {
          padding: 12px 0 10px 0;
          line-height: 20px;
          display: list-item;
          text-align: -webkit-match-parent;
          img {
            display: block;
            position: absolute;
            width: 54px;
            height: 54px;
            border-radius: 2px;
            webkit-transition: all 300ms ease-in-out;
            -o-transition: all 300ms ease-in-out;
            -moz-transition: all 300ms ease-in-out;
            -ms-transition: all 300ms ease-in-out;
            -webkit-transition: all .3s ease-out;
          }
          .c-main {
            padding: 10px 15px;
            line-height: 25px;
            margin-top: -2px;
            margin-left: 72px;
            border-radius: 3px;
            position: relative;
            background: #fbfdfb;
            border: 1px #eee solid;
            font-size: 15px;
            word-wrap: break-word;
            &:before {
              content: '';
              display: inline-block;
              border-top: 9px solid transparent;
              border-bottom: 9px solid transparent;
              border-right: 9px solid #eee;
              position: absolute;
              top: 15px;
              left: -9px;
            }
            &:after {
              content: '';
              display: inline-block;
              border-top: 7px solid transparent;
              border-bottom: 7px solid transparent;
              border-right: 7px solid #fbfdfb;
              position: absolute;
              top: 17px;
              left: -7px;
            }
            .c-meta {
              color: #bbb;
              font-size: 14px;
              .c-author {
                margin-right: 10px;
              }
              .comment-reply{
                margin-left: 6px;
                color: #00a67c;
              }
            }
          }
        }
      }
    }
    .commentbox {
      background-color: $base-background-color;
      padding: 0;
      border-radius: 3px;
      //border-top: 3px solid $base-theme-color;
      border-bottom: 3px solid $base-theme-color;
      position: relative;
      overflow: hidden;
      margin-bottom: 30px;
      &::after {
        /*content: '';*/
        position: absolute;
        top: 0;
        right: 0;
        border-top: 4px solid $base-theme-color;
        border-top-right-radius: 3px;
        width: 40%;
        height: 0;
      }

      .commentbox-header {
        padding: 0 10px;
        //border-bottom: 1px solid #fff;
        margin-bottom: 0;
        text-align: right;
        h3 {
          margin: 0;
          height: 72px;
          @include display-flex;
          @include justify-content(flex-end);
          @include align-items(center);

          .commentbox-header-comments {
            font-size: 50px;
            color: #fff;
            margin-right: 10px;
          }
          .commentbox-header-count {
            top: 2px;
            background: $base-theme-color;
            font-size: 20px;
            color: #fff;
            border-radius: 5px;
            padding: 3px 6px;
            position: relative;
            font-weight: 400;
            vertical-align: baseline;
            min-width: 30px;
            min-height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      //问题盒子
      .commentbox-question {
        padding: 0 35px;
      }
      //用户评论内容盒子
      .commentbox-inner {
        padding: 0 35px 35px 35px;
        .comments {
          margin-bottom: 10px;
          .comments-ask {
            box-sizing: content-box;
            padding: 10px;
            margin-bottom: 5px;
            cursor: pointer;
            border-bottom: 1px solid #1b1b1b;
            position: relative;

            &:after {
              content: '';
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 0px;
              border-top: 1px solid #6f6f6f;

            }

            /*&:hover {*/
            /*.reply {*/
            /*<!--color: $base-theme-color-o;-->*/
            /*}*/
            /*}*/
            .comments-ask-header {
              font-size: 14px;
              line-height: 130%;
              padding: 5px 0;
              color: #ececec;
              .name {
                font-size: 18px;
                color: $base-theme-color;
              }
              .reply {
                transition: all ease 200ms;
                color: $base-theme-color-o;
              }

            }
            .comments-ask-content {
              font-size: 14px;
              line-height: 150%;
              padding: 5px 0;
              color: #555;
            }
          }
          .comments-reply {
            padding-left: 80px;
            .commentbox-question {
              display: block;
              height: 0;
              opacity: 0;
              overflow: hidden;
              padding: 0;
            }
            &.active {
              //height: 100px;
              //margin-top: 10px;
              .commentbox-question {
                display: block;
                height: auto;
                opacity: 1;
                overflow: visible;
                -webkit-overflow-scrolling: touch;
                //height: 100px;
                margin-top: 10px;
                &.active {
                  height: 100px;
                }
              }
            }
            .comments-reply-each {
              padding: 5px;
              margin-bottom: 0;
              border-bottom: 1px solid #1b1b1b;
              position: relative;
              &:after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 0;
                border-top: 1px solid #6f6f6f;

              }
              .comments-reply-header {
                font-size: 14px;
                line-height: 130%;
                padding: 3px 0;
                color: #fff;
                .name {
                  font-size: 14px;
                  color: $base-theme-color;
                }
              }
              .comments-reply-content {
                font-size: 14px;
                line-height: 150%;
                padding: 3px 0;
                color: #fff;
              }
            }
          }

        }
      }

    }
  }

  .backToTop {
    position: fixed;
    left: 700px;
    width: 60px;
    height: 60px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100%;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease 200ms;
    z-index: 999;
    margin-left: 40px;
    bottom: 20px;
    opacity: 0;
    &:hover {
      background: $base-theme-color;
    }
  }

  @include media("<=desktop") {
    .backToTop {
      margin-left: 0;
    }
    .article-detail{
      margin-left:0px;
    }
  }

  @include media(">desktop_small", "<=desktop") {
    .article-detail {
      padding: 35px 20px 0px 65px;
    }
    .container {
      width: 100%;
    }
  }

  @include media("<=desktop_small") {
    .article-detail {
      padding-top: 60px;
    }
    .container {
      width: 100%;
    }
  }

  @include media("<=tablet") {
    .article-detail {
      max-width: 780px;
      min-width: inherit;
      width: auto;
    }
  }

  @include media("<=phone") {
    .article {
      padding-left: 6px;
      padding-right: 6px;
      padding-top: 51px;
      .row {
        margin: 0;
        #article {
          padding: 0;
        }
      }
      .article-detail {
        .paper {
          margin-bottom: 10px;
          .paper-header {
            padding: 30px 10px 10px;
            h1 {
              font-size: 28px;
              font-weight: 500;
              line-height: 120%;
              margin: 0;
              min-height: inherit;
            }
          }
          .paper-info {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 8px 0px;
            background: rgba(0, 0, 0, 0.5);
            .paper-info-span {
              margin: 0 10px;
              font-size: 12px;
            }
          }
          .paper-content {
            padding: 20px 10px 20px;
            .paper-content-inner {
              font-size: 14px !important;
            }
          }
        }
        .commentbox {
          margin-bottom: 10px;
          .commentbox-header {
            h3 {
              .commentbox-header-comments {
                font-size: 30px;
                margin-right: 8px;
              }
              .commentbox-header-count {
                font-size: 16px;
                min-width: 26px;
                min-height: 26px;
              }
            }
          }
          .commentbox-question {
            padding: 0 10px;
          }

          .commentbox-inner {
            padding: 0 10px 20px 10px;
            .comments {
              .comments-ask {
                .comments-ask-header {
                  padding: 5px 0 0 0;
                }
                .comments-ask-content {
                  padding: 5px 0 0 0;
                  font-size: 14px;
                }
              }
              .comments-reply {
                padding-left: 30px;
                .comments-reply-each {
                  padding: 5px 0 0 0;
                  .comments-reply-header {
                    /*padding: 3px 0 0 0;*/
                  }
                  .comments-reply-content {
                    /*padding: 3px 0 0 0;*/
                    font-size: 14px;
                  }
                }
              }
            }
          }

        }
      }
    }

  }


</style>
<script type="text/javascript">
  import API from "../config.js"
  import {GetArticleById, GetArticleTop} from "../api/api_article"
  import {GetArticleComments, SendComment} from "../api/api_comment"
  import commentReplyBox from '../components/commentReplyBox.vue'
  import loading from '../components/loading.vue'
  import "../theme/codeHighLight.css";
  import "../theme/markdown.scss";
  import "bootstrap/scss/bootstrap/_breadcrumbs.scss";
  import sidebar from '../components/sidebar.vue';
  import Toast from 'Toast';
  module.exports = {
    replace: true,
    data: function () {
      return {
        article: {},
        commentList: [],
        articleTop: {},
        toggle: true,
        selectId: '',
        isLoading: true,
        hasNickName: false,
        name: '',//评论人的昵称
        email: '',//评论人的email
        topNum: 5,//top 榜单
      }
    },
    watch: {
      '$route': function (val) {
        // 获取文章
        this.getArticleById(val.params.articleId);
      },
    },
    computed: {
      //文章是有评论计数的，但是文章缓存后此信息并不准确，但commentList是不缓存的。
      recountCommentNum: function () {
        let _this = this;
        let _count = 0;
        _count = _this.commentList.length;
        for (let i = 0, len = _this.commentList.length; len > i; i++) {
          _count +=_this.commentList[i].next_id.length
        }
        return _count
      }
    },
    methods: {
      replyBtn: function (id) {
        if (this.selectId == id) {
          this.toggle = !this.toggle
        } else {
          this.toggle = true;
          this.selectId = id
        }
      },
      scrollTop: ()=> {
        $(window).scrollTop(0);// 滚到顶部
      },
      /**
       * 获取数据
       * @param articleId 文章id
       * */
      getArticleById: function (articleId) {
        const _this = this;
        //获取文章详情
        GetArticleById(articleId).then(function (data) {
          _this.article = data
          _this.isLoading = false;
        }, function (error) {
          if (error == 2) {
            Toast({
              message: '无法获取文章', iconClass: 'fa fa-warning',
              position: 'center',
              duration: 3000
            });

            setTimeout(function () {
              _this.$router.replace({
                name: 'historyList'
              })
            }, 3000)
          }
        });

        //获取文章评论
        GetArticleComments(articleId).then(function (data) {
          _this.commentList = data;
        }, function (error) {
          Toast({
            message: '无法获取评论', iconClass: 'fa fa-warning',
            position: 'center',
            duration: 3000
          });
        });
      },

      /**
       * 获取文章排行榜，榜单
       * @param topNum 排行榜个数
       * */
      getArticleTop: function (topNum) {
        const _this = this;
        /**
         * 使用环境判断 userAgent 如果不是mobile则搜索top榜单
         * */
        if (!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)) {
          GetArticleTop(topNum).then(function (data) {
            _this.articleTop = data;
          }, function (error) {
            Toast({
              message: '无法获取榜单', iconClass: 'fa fa-warning',
              position: 'center',
              duration: 3000
            });
          });
        }
      },

      /**
       * 返回顶部的事件handler
       * */
      backToTopHandler: function () {
        let _width = $(document).width()
        if (_width >= 1200) {
          if ($(this).scrollTop() > 0) {
            $('#toTop').css({
              "opacity": 1,
              'left': $('#article').offset().left + $('#article').width(),
            });
          } else {
            $('#toTop').css({
              "opacity": 0
            });
          }
        } else if (_width < 1200) {
          if ($(this).scrollTop() > 0) {
            $('#toTop').css({
              "opacity": 1,
              'left': $('#article').offset().left + $('#article').width() - $('#toTop').width(),
            });
          } else {
            $('#toTop').css({
              "opacity": 0
            });
          }
        }
      }
    },
    created: function () {
      const _this = this;
      let articleId = _this.$route.params.articleId;

      $(window).scrollTop(0);// 滚到顶部
      // To Top
      $(document)
      .on('scroll', _this.backToTopHandler)
      .on('click', '#toTop', function () {
        $(window).scrollTop(0);
        //$('body, html').animate({scrollTop: 0}, 600);
      });

      // 获取文章
      _this.getArticleById(articleId);
      // 获取文章top榜单
      _this.getArticleTop(_this.topNum);
    },
    mounted: function () {
      this.$emit('notice')
    },
    destroyed: function () {
      $(document).off('scroll')
    },
    components: {
      'comment-box': commentReplyBox,
      loading,
      sidebar
    },
  }

</script>
