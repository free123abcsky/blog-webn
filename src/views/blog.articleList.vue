<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9">
        <div class="aritcle-list"
             v-infinite-scroll="loadMore"
             infinite-scroll-disabled="infiniteDisabled"
             infinite-scroll-distance="10">
          <article class="article" v-for="article in articleList" :key="article._id">
            <div class="article-header">
              <h2 class="article-header-title">
                <router-link :to="{ name: 'article',params: { articleId: article._id }}" activeClass="active" tag="a">
                  {{article.title}}
                  </router-link>
              </h2>
              <div class="article-header-content">
                {{article.abstract}}
                </div>
            </div>
            <div class="article-infobox">
              <div class="article-info">
                <div class="article-info-each">
                  <icon type="calendar"></icon>
                  <span>{{article.publish_time  | moment("from","now")}}</span>
                </div>
                <div class="article-info-each">
                  <icon type="ios-book"></icon>
                  阅读数
                  <span class="article-readnum">{{article.read_num}}</span>
                </div>
                <div class="article-info-each">
                  <icon type="chatbubble"></icon>
                  <router-link  class="article-comment" :to="{ name: 'article',params: { articleId: article._id }}" activeClass="active" tag="span">
                    评论数 {{article.comment_num}}
                    </router-link>
                </div>
                <div class="meta-tags article-info-each hidden-xs" v-show="article.tags.length > 0">
                  <icon type="ios-pricetag"></icon>
                  <router-link v-for="tag of article.tags" :to="{ name: 'tagListFindByTagId',query: { listType: 'tagList',tagId: tag._id }}"
                               tag="span">
                    {{tag.name}}
                </router-link>
                </div>
              </div>
              <div class="article-readmore hidden-xs">
                <router-link :to="{ name: 'article',params: { articleId: article._id }}" activeClass="active" tag="span">
                  阅读全文
                </router-link>
              </div>
            </div>
          </article>

          <no-data v-if="!hasData && !isLoading"></no-data>
          <!--<no-data v-if="!hasData && !isLoading"></no-data>-->
          <loading v-if="!!isLoading" class="loading" :number=9></loading>
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
  @import "../theme/theme.scss";

  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%!important;
    height: 50px;
    margin:0 auto;
  }

  .aritcle-list {
    margin: 0 auto;
    margin-left: -35px;
    color: $base-word-color;
    box-sizing: border-box;
    position: relative;
    z-index: 999;

    .article {
      box-sizing: border-box;
      margin-bottom: 15px;
      overflow: hidden;
      &:hover .article-header .article-header-title {
        color: $base-theme-color;
        cursor: pointer;
        &:after {
          border-top: 3px solid $base-theme-color;
        }
      }
      //标题
      .article-header {
        padding: 35px;
        color: $base-word-color;
        font-size: 20px;
        line-height: 28px;
        border-bottom: 1px solid #999;
        background: #fff;
        position: relative;
        //title
        .article-header-title {
          text-align: right;
          transition: color ease 200ms;
          position: relative;
          padding-bottom: 20px;
          margin: 0;
          font-size: 30px;
          font-weight: 500;
          line-height: 1.2;
          a {
            text-decoration:none;
          }
          &:after {
            transition: color ease 200ms;
            content: '';
            position: absolute;
            bottom: 10px;
            right: 0;
            height: 0;
            border-top: 3px solid $base-theme-color;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;

            //background: #333;
            width: 10%;
          }
        }
        //内容
        .article-header-content {
          line-height: 24px;
          font-size: 16px;
          overflow: hidden;
          p {
            margin: 0;
          }
        }
      }

    }
    //文章信息
    .article-infobox {
      @include display-flex;
      @include justify-content(space-between);
      @include align-items(center);
      background: $base-background-color;
      padding: 14px 35px;
      transition: all ease 200ms;
      .article-info {
        @include display-flex;
        @include justify-content(flex-start);
        @include align-items(center);
        .article-info-each {
          color: #999;
          margin-right: 20px;
          font-size: 14px;
          white-space: nowrap;
          .article-comment {
            cursor: pointer;
          }
        }

      }
      //阅读更多
      .article-readmore {
        span {
          background-color: #ccc;
          border: 1px solid #ccc;
          transition: all ease 200ms;
          border-radius: 34px;
          color: #eee;
          padding: 4px 22px;
          font-size: 16px;
          &:hover {
            cursor: pointer;
            border: 1px solid $base-theme-color;
            background-color: $base-theme-color;
          }
        }
      }
    }

    .meta-tags {
      float: left;
      font-size: 20px;
      display: inline-block;
      height:24px;
      line-height: 24px;
      color: #999;;
      span {
        position: relative;
        max-width: 100%;
        margin-right: 10px;
        padding: 0px 8px 0px 16px;
        border-radius: 0 4px 4px 0;
        background: #eee;
        font-size: 12px;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        &:before {
          position: absolute;
          content: "";
          top: 0px;
          left: 0px;
          width: 0px;
          height: 0px;
          border-width: 8px 12px 12px 0px;
          border-color: rgb(255, 255, 255) transparent;
          border-style: solid;
        }
        &:after {
          position: absolute;
          content: "";
          width: 3px;
          height: 3px;
          top: 7px;
          left: 8px;
          border-radius: 100%;
          background: white;
        }
      }
    }
  }

  @include media("<=desktop") {
    .aritcle-list{
      margin-left:0px;
    }
  }

  @include media(">desktop_small", "<=desktop") {
    .aritcle-list {
      padding: 35px 20px 0px 65px;
    }
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
    .aritcle-list {
      max-width: 780px;
      width: 100%;
      .article {
        .article-header {
          padding: 30px;
        }
        .article-infobox {
          padding: 14px 20px
        }
      }
    }
  }

  @include media("<=phone") {
    .aritcle-list {
      max-width: 780px;
      width: 100%;
      .article {
        margin-bottom: 10px;
        &:hover .article-header .article-header-title {
          color: inherit;
          &:after {
            border-top: 3px solid inherit;
          }
        }
        &:hover .article-infobox .arrticle-readmore span {
          background-color: inherit;
        }
        .article-header {
          padding: 30px 10px 10px;
          .article-header-title {
            font-size: 28px;
          }
          .article-header-content {
            font-size: 14px;
          }
        }
        .article-infobox {
          padding: 10px 0px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .article-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .article-info-each {
              font-size: 12px;
              margin: 0 10px;
            }
          }
        }
      }
    }
  }

</style>
<script type="text/javascript">
  import API from "../config.js"
  import noData from "../components/nodata"
  import loading from "../components/loading"
  import sidebar from '../components/sidebar'
  import backtop from '../components/back-top'
  import icon from '../components/icon'
  import {GetArticleListForFrontEnd} from "../api/api_article"
  import Vue from 'vue'
  import InfiniteScroll from 'InfiniteScroll';
  Vue.use(InfiniteScroll);

  export default{
    data: function () {
      return {
        isLoading: true,//loading提示
        articleList: [],
        hasData: true,//hasData提示
        pageNow: 0,
        infiniteDisabled: false,//是否禁用无限加载
      }
    },
    methods: {
      loadMore() {
        let _this = this;
        _this.isLoading = true;
        console.log('loading')
        _this.getArticleList();
      },
      getArticleList: function () {
        let _this = this;

        /**
         * 文章列表会根据
         * "最新-latest"、"标签筛选-tagList"进行区分,
         * 不同的type进行不同的url搜索
         * */
        console.log('get article list');
        let listType = _this.$route.query.listType || 'latest';
        let url;
        switch (listType) {
          case 'latest':
            url = API.newUpdateArticle.replace("from", parseInt(_this.pageNow)).replace("to", parseInt(API.ArticleNum));
            break;
          case 'tagList':
            url = API.getArticlesWithTagId.replace("from", parseInt(_this.pageNow)).replace("to", parseInt(API.ArticleNum)).replace('id', _this.$route.query.tagId);
            break;
        }
        // 数据请求根据url参数会发生改变,故get时传入url
        GetArticleListForFrontEnd(url).then(function (data) {
          if (data.length > 0) {
            _this.articleList = _this.articleList.concat(data);
            _this.pageNow += parseInt(API.ArticleNum);
            if (data.length == API.ArticleNum) {
              _this.infiniteDisabled = false;
            } else {
              _this.infiniteDisabled = true;
              _this.isLoading = false;
            }
          } else {
            _this.infiniteDisabled = true;
            _this.isLoading = false;
          }
        }, function () {
          _this.hasData = false;
        }).then(function () {
          _this.articleList.length === 0 ? (_this.hasData = false, _this.isLoading = false) : ('');
          // Indicator.close();
        })
      },
    },
    created: function () {
      const _this = this;
    },
    destroyed: function () {
    },
    components: {
      noData, loading,sidebar,backtop, icon
    },
  }
</script>
