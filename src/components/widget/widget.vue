<template>
  <div class="widget">
    <div class="widget-head" v-if="showHead"><slot name="title"></slot></div>
    <div class="widget-extra" v-if="showExtra"><slot name="extra"></slot></div>
    <div class="widget-body"><slot></slot></div>
  </div>
</template>

<style scoped lang="scss">

  @import "../../theme/theme.scss";

  .widget {
    width: 100%;
    margin-bottom: 15px;
    background-color: #fff;
    box-sizing: border-box;
  }

  .widget-head {
    padding: 16px 0px;
    margin: 0px 20px;
    border-bottom: 1px solid #90bba8;
    p {
      margin: 0;
      font-size: 16px;
      font-weight: normal;
      color: #1abc9c;
    }
  }

  .widget-extra {
    position: absolute;
    right: 16px;
    top: 14px;
  }

  .widget-body {
    ul li {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

</style>

<script type="text/javascript">

  export default {
    props: {

    },
    data () {
      return {
        showHead: true,
        showExtra: true
      };
    },
    computed: {

    },
    mounted () {
      this.showHead = this.$slots.title !== undefined;
      this.showExtra = this.$slots.extra !== undefined;
    }
  };
</script>
