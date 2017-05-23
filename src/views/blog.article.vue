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
                      <icon type="calendar-o"></icon>
                    </span>
                    <span class="time-text">发表于</span>
                    <span title="publish time" datetime="2017-03-21T20:18:32+08:00">
                      {{article.publish_time  | moment("from","now")}}
                    </span>
                  </span>
                <span class="comments-count">
                    <span class="meta-divider">|</span>
                    <span class="comments-icon">
                      <icon type="comment-o"></icon>
                    </span>
                    <span class="comments-num">{{article.comment_num}}</span>
                  </span>
                <span class="leancloud_visitors">
                    <span class="post-meta-divider">|</span>
                    <span class="post-meta-item-icon">
                      <icon type="fa-eye"></icon>
                    </span>
                    <span class="read-text">阅读次数 </span>
                    <span class="read-count">{{article.read_num}}</span>
                  </span>
              </div>
            </header>
            <section class="article-main">
              <div class="article-main-inner markdown-body hljs" v-html="article.html"></div>
            </section>

            <footer class="article-footer">
              <div class="meta-tags">
                <icon type="tags"></icon>
                <router-link v-for="tag of article.tags" :to="{ name: 'tagListFindByTagId',query: { listType: 'tagList',tagId: tag._id }}"
                             :title="'查看关于 ' + tag.name + ' 的文章'" activeClass="active" tag="span">
                  {{tag.name}}
                </router-link>
              </div>
            </footer>
          </div>

          <!--评论-->
          <section class="commentbox">

            <!--评论回复盒子 -->
            <sendbox :article-id="article._id" :pre-id="article._id"></sendbox>
            <div class="com-list">
              <div class="com-item" v-for="comment of commentList">
                <div class="com-body">
                  <div class="avatar">
                    <img src="//dn-lay.qbox.me/build/single-page/images/default_9fa6849.jpg">
                  </div>
                  <div class="content">
                    <div class="caption">{{comment.name}}</div>
                    <div class="text">{{comment.content}}</div>
                    <div class="footer">
                      <div class="time">{{comment.time | moment("from","now")}}</div>
                      <a href="javascript:void(0)" class="btn-reply" @click="replyBtn(comment._id)">{{(comment._id==selectId && toggle) ? '取消回复' : '回复'}}</a>
                    </div>
                  </div>
                </div>
                <div class="com-reply">
                  <div class="com-reply-box" :class="{'active':(comment._id==selectId && toggle)}">
                    <sendbox :article-id="comment.article_id" :pre-id="comment._id"></sendbox>
                  </div>
                  <div class="com-reply-each" v-for="reply of comment.next_id">
                    <div class="com-body">
                      <div class="avatar">
                        <img src="//dn-lay.qbox.me/build/single-page/images/default_9fa6849.jpg">
                      </div>
                      <div class="content">
                        <div class="caption">{{reply.name}}</div>
                        <div class="text">{{reply.content}}</div>
                        <div class="footer">
                          <div class="time">{{reply.time | moment("from","now")}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

        </div>
      </div>
      <div class="col-lg-3 visible-lg clearfix">
        <sidebar></sidebar>
      </div>
    </div>
    <backtop></backtop>
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
  }

  .article-section {
    background: #fff;
    overflow: hidden;
    margin-bottom: 15px;
    &.loading {
      .article-main {
        .article-main-inner {
          background-image: url(../assets/body_placeholder.png);
          background-repeat: no-repeat;
          background-size: 100% auto;
          background-position: center top;
          min-height: 834px;
          width: 100%;
        }
      }

    }
    .article-main {
      padding: 35px;
      background: #fff;
      //min-height: 800px;
      .article-main-inner {
        padding: 5px 0 0;
        //border-bottom: 1px dashed #464646;
      }
    }

  }

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
    padding: 15px 30px;
    overflow: hidden;
    .meta-tags {
      float: left;
      font-size: 20px;
      display: inline-block;
      color: #999;
      span {
        position: relative;
        display: inline-block;
        max-width: 100%;
        height: 24px;
        margin-right:10px;
        line-height: 24px;
        padding: 0 8px 0 18px;
        border-radius: 0 4px 4px 0;
        background: #eee;
        font-size: 12px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        &:before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-width: 12px 12px 12px 0;
          border-color: #fff transparent;
          border-style: solid
        }
        &:after {
          position: absolute;
          content: '';
          width: 4px;
          height: 4px;
          top: 10px;
          left: 8px;
          border-radius: 100%;
          background: #fff
        }
        &:hover {
          background: #333;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  .commentbox {
    background-color: $base-background-color;
    padding: 0;
    border-radius: 3px;
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
  }

  .com-item {
    overflow: hidden;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0,0,0,.2);
    .com-body {
      position: relative;
      padding: 15px;
      border-top: 1px solid #eee;
      cursor: default;
      overflow: hidden;
      transition: all .1s linear;
      -moz-transition: all .1s linear;
      -webkit-transition: all .1s linear;
      -o-transition: all .1s linear;
      &:nth-child(1) {
        border: 0
      }
      &:hover {
        background: #fafafa
      }
      .avatar {
        float: left;
        width: 50px;
        height: 50px;
        border-radius: 12px;
        overflow: hidden;
        background: #ddd
      }
      .avatar img {
        width: 100%;
        height: 100%
      }
      .content {
        margin-left: 60px
      }
      .caption {
        margin-bottom: 10px;
        line-height: 18px;
        font-size: .85rem;
        font-weight: 500
      }
      .text {
        min-height: 20px;
        margin-bottom: 10px;
        line-height: 1.5;
        font-size: .85rem;
        color: #333;
        word-wrap: break-word;
        word-break: break-all
      }
      .footer {
        height: 20px;
        line-height: 20px;
        font-size: .85rem
      }
      .footer .time {
        float: left;
        color: #aaa
      }
      .footer .btn-reply {
        color: #aaa;
        float: right
      }
      .footer .btn-reply:hover {
        color: #333
      }
    }
    .com-reply {
      padding-left: 80px;
      .com-reply-box {
        display: none;
        &.active {
          display: block;
        }
      }
      .avatar {
        width:40px;
        height: 40px;
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
    .container {
      width: 100%;
    }
  }

  @include media("<=desktop_small") {

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

    .article-detail {
      .commentbox {
        margin-bottom: 10px;
        .com-reply {
          padding-left: 25px;
          .com-reply-box {
            display: none;
            &.active {
              display: block;
            }
          }
          .avatar {
            width:40px;
            height: 40px;
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
  import sendbox from '../components/sendbox.vue'
  import loading from '../components/loading.vue'
  import backtop from '../components/back-top.vue'
  import icon from '../components/icon.vue'
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
      }
    },
    created: function () {
      const _this = this;
      let articleId = _this.$route.params.articleId;

      // 获取文章
      _this.getArticleById(articleId);
      // 获取文章top榜单
      _this.getArticleTop(_this.topNum);
    },
    mounted: function () {
      this.$emit('notice')
    },
    destroyed: function () {
    },
    components: {
      sendbox,
      loading,
      sidebar,
      backtop,
      icon
    },
  }

</script>
