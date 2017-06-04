<template>
  <div class="page">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style scoped lang="scss">

  .page {
    padding-top: 15px;
    height: auto;
    min-height: 600px;
    overflow: initial;
  }
</style>
<script type="text/javascript">
  import Vue from "vue";
  import {mapState} from 'vuex';
  module.exports = {
    data: function () {
      return {
      }
    },
    computed: {
      ...mapState({
        isLogin: 'isLogin',
      }),
    },
    components: {

    },
  }


</script>
