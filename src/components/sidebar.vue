<template>
  <aside class="article-aside">
    <!--最新排行 for 10-->
    <div class="widget">
      <div class="title">
        <h2>最新排行Top{{topNum}}</h2>
      </div>
      <ul>
        <loading :number="3" color="#38b7ea" class="widget-loading" v-if="!articleTop.latest"></loading>
        <li v-show="articleTop.latest.length>0" class="article-li animated fadeIn"
            v-for="article of articleTop.latest">
          <router-link :to="{ name: 'article',params: { articleId: article._id }}"
                       activeClass="active" tag="a">{{article.title}}
                </router-link>
          <span>({{article.read_num}})</span>
        </li>
      </ul>
    </div>
    <!--阅读排行 for 10-->
    <div class="widget">
      <div class="title">
        <h2>阅读排行Top{{topNum}}</h2>
      </div>
      <ul>
        <loading :number="3" color="#38b7ea" class="widget-loading" v-if="!articleTop.read"></loading>
        <li v-show="articleTop.read.length>0" class="article-li animated fadeIn"
            v-for="article of articleTop.read">
          <router-link :to="{ name: 'article',params: { articleId: article._id }}"
                       activeClass="active" tag="a">{{article.title}}
                </router-link>
          <span>({{article.read_num}})</span>
        </li>
      </ul>
    </div>
    <!--标签 最多10个-->
    <div class="widget tag-cloud">
      <div class="title">
        <h2>标签云</h2>
      </div>
      <ul>
        <loading :number="3" color="#38b7ea" class="widget-loading" v-if="!articleTop.tag"></loading>
        <li v-show="articleTop.tag.length>0" class="meta-tags animated fadeIn" v-for="tag of articleTop.tag">
          <router-link :to="{ name: 'tagListFindByTagId',query: { listType: 'tagList',tagId: tag._id }}"
                       activeClass="active" tag="a">
            {{tag.name}}<span>{{tag.used_num}}</span>
                </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">

  @import "../theme/theme.scss";
  .article-aside {
    width: 350px;
    box-sizing: border-box;
    color: #333;
  }

  .widget {
    width: 100%;
    margin-bottom: 15px;
    background-color: #fff;
    box-sizing: border-box;
    .title {
      padding: 16px 0px;
      margin: 0px 20px;
      border-bottom: 1px solid #90bba8;

      h2 {
        margin: 0;
        font-size: 16px;
        font-weight: normal;
        color: #1abc9c;
        @include display-flex;
        @include justify-content(flex-start);
        @include align-items(center);
        transition: all ease 200ms;
      }
    }
    ul {
      padding: 8px 20px;
      background: #fff;
      list-style-type: none;
      position: relative;
      min-height: 150px;
      margin: 0;
      .widget-loading {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 135px;
      }
      .article-li {
        color: #777;
        position: relative;
        padding: 4px 0;
        font-size: 14px;
        &:before {
          color: #ccc;
          content: "\f0da";
          font-size: 12px;
          margin-right: 6px;
          font-family: FontAwesome;
          transition: all ease 200ms;
        }
        a {
          color: inherit;
          text-decoration: none;
          transition: all ease 200ms;
        }
        span {
          cursor: pointer;
          transition: all ease 200ms;
        }
        &:hover {
          color: $base-theme-color;
          a {
            color: $base-theme-color;
          }
          &:before {
            color: $base-theme-color;
          }
          span {
            color: $base-theme-color;
          }
        }
      }
    }
  }

  .tag-cloud {
    ul {
      margin-top:10px;
    }
  }

  .meta-tags {
    float: left;
    font-size: 20px;
    display: inline-block;
    color: #999;
    a {
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
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      span {
        opacity: .3;
        padding: 0 0 0 5px
      }
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

</style>

<script type="text/javascript">
  /**
   * topbar组件
   * @param articleTop 榜单数据
   * @param color 榜单个数
   */

  import {GetArticleTop} from "../api/api_article"
  import loading from '../components/loading.vue'
  import Toast from 'Toast';

  export default{
    data(){
      return {
        articleTop: {},
        topNum: 5,//top 榜单
      }
    },
    methods: {
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
    },
    created: function () {
      // 获取文章top榜单
      this.getArticleTop(this.topNum);
    },
    components: {
      loading
    },
  }
</script>
