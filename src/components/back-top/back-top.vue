<template>
  <div :class="['back-top', {'back-top-show': backTop}]" :style="styles" @click="back">
    <slot>
      <div class="back-top-inner">
        <icon type="chevron-up"></icon>
      </div>
    </slot>
  </div>
</template>
<style scoped lang="scss">

  .back-top {
    cursor: pointer;
    display: none;
    position: fixed;
    z-index: 10;
    &.back-top-show {
      display: block
    }
  }

  .back-top-inner{
    background-color: rgba(0,0,0,.6);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    transition: all .2s ease-in-out;
    &:hover {
      background-color: rgba(0,0,0,.7)
    }
    i {
      color: #fff;
      font-size: 24px;
      padding: 8px 12px
    }
  }
</style>
<script>

  import { scrollTop } from '../../utils/assist';
  import icon from '../icon'

  export default {
    props: {
      height: {
        type: Number,
        default: 400
      },
      bottom: {
        type: Number,
        default: 30
      },
      right: {
        type: Number,
        default: 30
      },
      duration: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        backTop: false,
      };
    },
    computed: {
      styles () {
        return {
          bottom: `${this.bottom}px`,
          right: `${this.right}px`
        };
      }
    },
    methods: {
      handleScroll () {
        this.backTop = window.pageYOffset >= this.height;
      },
      back () {
        scrollTop(window, document.body.scrollTop, 0, this.duration);
        this.$emit('on-click');
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll, false);
      window.addEventListener('resize', this.handleScroll, false);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll, false);
      window.removeEventListener('resize', this.handleScroll, false);
    },
    components: {icon}
  };
</script>
