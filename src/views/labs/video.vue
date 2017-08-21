<template>
  <div class="page">
    <waterfall
      :line-gap="320"
      :min-line-gap="320"
      :max-line-gap="560"
      :watch="items"
      @reflowed="reflowed"
      ref="waterfall"
    >
      <waterfall-slot
        v-for="(item, index) in items"
        :width="320"
        :height="item.height"
        :order="index"
        :key="item.index"
        move-class="item-move"
      >
        <div class="item" :style="item.style" :index="item.index"></div>
      </waterfall-slot>
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

  .item {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    font-size: 1.2em;
    color: rgb(0,158,107);
  }
  .item:after {
    content: attr(index);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  .wf-transition {
    transition: opacity .3s ease;
    -webkit-transition: opacity .3s ease;
  }
  .wf-enter {
    opacity: 0;
  }

</style>
<script type="text/javascript">
  import Vue from 'vue'
  import API from "../../config";
  import panel from "../../components/panel"
  import loader from "../../components/loader"
  import Waterfall from '../../components/waterfall'

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
          height: 100 + ~~(Math.random() * 50)
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
      panel, loader,
      Waterfall: Waterfall.Waterfall,
      WaterfallSlot: Waterfall.WaterfallSlot
    },
    computed: {

    },
    methods: {
      addItems: function () {
        if (!this.isBusy && this.items.length < 500) {
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

      window.addEventListener('scroll', () => {

        let scrolltop = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
        if(scrolltop+document.documentElement.clientHeight >=document.documentElement.scrollHeight ){
          this.addItems()
        }
      })
    }
    ,
  }


</script>
