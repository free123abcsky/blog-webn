<template>
  <div class="app-container" :class="{unlogined: !isLogin}">
    <!-- 路由外链 -->
    <transition name="slide-fade">
        <router-view></router-view>
    </transition>
  </div>
</template>
<style scoped lang="scss">

  //base
  @import "../theme/theme.scss";

  .app-container {
    padding-top: 15px;
    position: relative;
  }
  .unlogined {
    background: #f4f4f4 url(../assets/mask.png);
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
