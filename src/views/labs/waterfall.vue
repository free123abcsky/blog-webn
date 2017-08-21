<template>
  <div class="page">
    <waterfall
      class="article-list"
      :items="items"
      @reflowed="reflowed"
      @loadMore="loadMore"
      ref="waterfall">
      <template scope="scope">
      <header>
        <div class="title">{{scope.item.title}}</div>
      </header>
      <div class="body">
        <p>
          {{scope.item.content}}
        </p>
      </div>
      <footer>
        <div class="tags">
          <strong>tags</strong>
          <a href="/blog?tag=xxxxx" v-for="tag of scope.item.tags">{{tag}}</a>
        </div>
        <div class="time">{{scope.item.time}}</div>
      </footer>
      </template>
    </waterfall>
    <loader :loading="isBusy"></loader>
  </div>
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
  import waterfall from '../../components/waterfall'
  import loader from '../../components/loader'

  import {mapState, mapActions} from 'vuex'
  var ItemFactory = (function () {

    var lastIndex = 0

    function generateRandomItems (count) {
      var items = [], i
      for (i = 0; i < count; i++) {
        items[i] = {
          index: lastIndex++,
          style: {
            background: getRandomColor()
          },
          title: '瀑布流标题',
          content: '瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流',
          tags: ['标签一', '标签二'],
          time: '06-12 2017'
        }
      }
      return items
    }

    function getRandomColor () {
      var colors = [
        'rgba(21,174,103,.5)',
        'rgba(245,163,59,.5)',
        'rgba(255,230,135,.5)',
        'rgba(194,217,78,.5)',
        'rgba(195,123,177,.5)',
        'rgba(125,205,244,.5)'
      ]
      return colors[~~(Math.random() * colors.length)]
    }

    return {
      get: generateRandomItems
    }

  })()


  export default{
    data(){
      return {
        items: ItemFactory.get(20),
        isBusy: false
      }
    },
    components: {
      waterfall, loader
    },
    computed: {

    },
    methods: {
      loadMore: function () {
        if (!this.isBusy && this.items.length < 60) {
          this.isBusy = true
          setTimeout(() => {
            this.items.push.apply(this.items, ItemFactory.get(20))
          }, 1000)
        }
      },
      reflowed: function () {
        this.isBusy = false
      }
    },
    created: function () {

    },
    mounted: function () {


    }
  }


</script>
