<template>
  <div class="waterfall">
    <div
      class="item"
      v-for="(item, index) in items"
      :index="index"
      :key="index">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.waterfall{
  position: relative;
  margin: 0 10px;
  width: auto;
}
.item{
  margin-bottom: 20px;
  background:#fff;
}
</style>

<script>

export default {
  name: 'Waterfall',
  props: {
    items: {
      default: () => ({})
    },
    columnGap: {
      default: 20,
      validator: (val) => val >= 0
    },
    columnBaseWidth: {
      default: 300,
      validator: (val) => val >= 0
    },
    offset: {
      default: 30,
      validator: (val) => val >= 0
    },
    animate: {
      type: String,
      default: 'fadeOutUp',
    }
  },
  data(){
    return {
      list: [],
      last_row: [],
      column_width: 200,
      column_num: 0,
      last_time: 0,
      timer: null
    }
  },
  methods: {
    updateLayout () {
      this.$nextTick(() => {
        let len = this.list.length
        for(let i=len; i<this.$el.childNodes.length; i++){
          this.fixItemPosition(this.$el.childNodes[i]);
        }
        this.$emit('reflowed', this)
      })
    },
    fixItemPosition (item) {
      if(this.column_num > 1){
        var column_index,
          top = 0;
        if(this.list.length < this.column_num){
          //第一排item
          column_index = this.list.length;
          this.last_row.push(item.clientHeight);
        }else{
          //其余
          top = Math.min.apply(null,this.last_row);
          column_index = this.last_row.indexOf(top);
          top = top + this.columnGap;
        }
        setCss(item,{
          position : 'absolute',
          top: top,
          left: Math.round(column_index * (this.column_width + this.columnGap)),
          width: Math.round(this.column_width)
        });
        addClass(item, this.animate);
        setTimeout(() => {
          removeClass(item, this.animate);
        },1000);
        this.last_row[column_index] = top + item.clientHeight;
        setCss(this.$el,{
          height: Math.max.apply(null,this.last_row) + this.columnGap
        });
      }else{
        setCss(item,{
          position : 'static',
          width: 'auto'
        });
      }
      this.renderLen++
      this.list.push(item);
    },
    buildLayout () {

      var width = this.$el.clientWidth;
      this.list = [];
      this.last_row = [];
      this.renderLen = 0;
      this.column_num = Math.floor((width+this.columnGap)/(this.columnBaseWidth+this.columnGap));
      this.column_width = (width + this.columnGap)/this.column_num - this.columnGap;
    },
    refresh () {

      this.buildLayout();
      if(this.column_num == 1){
        this.$el.style.height = 'auto';
      }
      for(let i=0; i<this.$el.childNodes.length; i++){
        this.fixItemPosition(this.$el.childNodes[i]);
      }
      this.$emit('reflowed', this)
    },
    scrollListener () {
      var now = new Date().getTime();
      if(now - this.last_time > 500 && (getScrollTop() + window.innerHeight >= document.body.scrollHeight - this.offset)){
        this.$emit('loadMore', this)
        this.last_time = now;
      }
    },
    resizeListener () {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.refresh();
      },500);
    }
  },
  mounted () {
    this.buildLayout();
    this.updateLayout();
    this.$watch(() => (
      this.items
    ), this.updateLayout)
    on(document,'scroll',this.scrollListener);
    on(window,'resize',this.resizeListener);
  },
  destroyed () {
    off(document,'scroll',this.scrollListener);
    off(window,'resize',this.resizeListener);
    clearTimeout(this.timer);
  }
}

/**
 * 判断dom是否拥有某个class
 */
function hasClass(elem,classSingle){
  return (elem.className && elem.className.match(new RegExp('(\\s|^)' + classSingle + '(\\s|$)'))) ? true : false;
}
function addClass(elem, cls) {
  if (!hasClass(elem, cls)) elem.className += " " + cls;
}
function removeClass(elem, cls) {
  if (hasClass(elem, cls)) {
    var reg = new RegExp('(\\s+|^)' + cls + '(\\s+|$)');
    elem.className.replace(reg, ' ');
  }
}
/**
 * 设置css
 * 精简后的方法，没处理数字型非像素的属性，如line-height、z-index
 *
 **/
function setCss(elem,cssObj){
  each(cssObj,function(prop,value){
    if (isNum(value)) value += "px";
    elem.style[prop] = value;
  });
}

/**
 * 遍历数组或对象
 *
 */
function each(arr,fn){
  //检测输入的值
  if(typeof(arr) != 'object' || typeof(fn) != 'function'){
    return;
  }
  var Length = arr.length;
  if( isNum(Length) ){
    for(var i=0;i<Length;i++){
      if(fn.call(this,i,arr[i]) === false) break;
    }
  }else{
    for(var i in arr){
      if (!arr.hasOwnProperty(i)) continue;
      if(fn.call(this,i,arr[i]) === false) break;
    }
  }
}

/**
 * 获取浏览器滚动尺寸
 *  为了兼容firefox
 */
function getScrollTop(){
  return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

/**
 * 检测是否为数字
 * 兼容字符类数字 '23'
 */
function isNum(ipt){
  return (ipt !== '') && (ipt == +ipt) ? true : false;
}

function on (elem, type, listener, useCapture = false) {
  elem.addEventListener(type, listener, useCapture)
}

function off (elem, type, listener, useCapture = false) {
  elem.removeEventListener(type, listener, useCapture)
}
</script>
