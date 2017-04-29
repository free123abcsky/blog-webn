<template>
  <div class="blog-container animated fadeIn">
    <!-- 路由外链 -->
    <transition name="fade">
        <router-view></router-view>
    </transition>
    <section class="copyright animated fadeIn">
      <copyright></copyright>
    </section>
  </div>
</template>
<style scoped lang="scss">

  //base
  @import "../theme/theme.scss";

  * {
    /*outline: 1px solid #eee;*/
  }

  .blog-container {
    margin-top: 65px;
    position: relative;
  }

</style>
<script type="text/javascript">
  import Vue from "vue";
  import copyright from '../components/copyright.vue'
  import {mapState} from 'vuex';
  module.exports = {
    data: function () {
      return {
      }
    },
    computed: {
      ...mapState({
        isShowMyWords: 'isShowMyWords',
      }),
    },
    components: {
      copyright
    },
  }


</script>
