<template>
  <core-layout>
  <div class="page">
    <div id="category_nav_bar">
      <div class="wrapper" style="width: 1244px;"><div class="title beauty"></div><div class="navs"><a data-type="pin" data-id="beauty" href="/favorite/beauty/" class="x selected">采集</a><a data-type="board" data-id="beauty" href="/boards/favorite/beauty/" class="x ">推荐画板</a><a data-type="user" data-id="beauty" href="/users/favorite/beauty/" class="">推荐用户</a></div></div></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <waterfall
            class="article-list"
            :items="articleList"
            offset="300"
            @loadMore="loadMore"
            ref="waterfall">
            <template scope="scope">
              <header>
                <div class="title">{{scope.item.title}}</div>
              </header>
              <div class="body">
                <p>
                  {{scope.item.abstract}}
                </p>
              </div>
              <footer>
                <div class="tags">
                  <strong>tags</strong>
                  <router-link  v-for="tag of scope.item.tags" :to="{ name: 'tagListFindByTagId',query: { listType: 'tagList',tagId: tag._id }}">
                    {{tag.name}}
                </router-link>
                </div>
                <div class="time">{{scope.item.publish_time  | moment("from","now")}}</div>
              </footer>
            </template>
          </waterfall>
          <loader :loading="isBusy"></loader>
        </div>
      </div>
    </div>
  </div>
  </core-layout>
</template>
<style scoped lang="scss">

  .page {
    padding-top: 15px;
    height: auto;
    min-height: 600px;
    overflow: initial;
  }

  .article-list {
    font-size: 1.2em;
    overflow: hidden;
    header {
      background: url(//dn-lay.qbox.me/build/single-page/images/blog_card_1f52c08.jpg) no-repeat top right #fff;
      background-size: 170px 34px;
      .title {
        display: block;
        padding: 1em .5em .2em;
        font-weight: 400;
        line-height: 1.5em;
        text-align: center;
        font-size: 18px;
        color: #000;
        outline: 0;
      }
    }
    .body {
      padding: 10px 20px;
      line-height: 1.4;
      font-size: 13px;
      color: #888;
      text-indent: 2em;
    }
    footer {
      display: table;
      width: 100%;
      padding: 10px 0;
      border-top: 1px solid #e8e8e8;
      background: #fbfbfb;
      .tags {
        display: table-cell;
        width: 99%;
        padding-left: 10px;
        font-size: 13px;
        strong {
          margin-right: 5px;
          color: #aaa;
          font-weight: 400;
        }
        a {
          display: inline-block;
          margin-right: 5px;
          color: #777;
        }
      }
      .time {
        display: table-cell;
        vertical-align: middle;
        width: 1%;
        padding-right: 10px;
        white-space: nowrap;
        color: #888;
        font-size: 12px;
      }
    }
  }

</style>
<script type="text/javascript">
  import Vue from 'vue'
  import API from "../../config";
  import {GetArticleListForFrontEnd} from "../../api/api_article"
  import loader from "../../components/loader"
  import waterfall from '../../components/waterfall'
  import coreLayout from "../../components/layout/core-layout";

  import {mapState, mapActions} from 'vuex'

  export default{
    data(){
      return {
        articleList: [],
        pageNow: 0,
        hasData: true,//hasData提示
        isBusy: false
      }
    },
    components: {
      waterfall, loader, coreLayout
    },
    computed: {

    },
    methods: {
      loadMore() {
        if (!this.isBusy && this.hasData){
          this.isBusy = true
          this.getArticleList()
        }
      },
      getArticleList() {
        let _this = this;

        /**
         * 文章列表会根据
         * "最新-latest"、"标签筛选-tagList"进行区分,
         * 不同的type进行不同的url搜索
         * */
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

          }

          _this.isBusy = false;
        }, function () {

          _this.hasData = false;
        }).then(function () {

          _this.articleList.length === 0 ? (_this.hasData = false, _this.isBusy = false) : ('');
        })
      },
    },
    created: function () {
      this.loadMore()
    }
  }


</script>
