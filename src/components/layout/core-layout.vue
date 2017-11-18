<template>
  <div class="app">
    <!--导航条-->
    <blog-nav></blog-nav>
    <!-- 路由外链 -->
    <div class="app-container">
      <slot></slot>
    </div>
    <!--导航条-->
    <blog-footer></blog-footer>
    <!--qq,微信弹出层-->
   <!-- <social-info></social-info>-->
    <!--游客设置-->
    <visitor-set></visitor-set>
  </div>
</template>

<script type="text/javascript">

  import blogNav from "../navbar";
  import blogFooter from "../footer";
  import socialInfo from "../social-info";
  import visitorSet from '../visitor-set'

  export default {
    props: {

    },
    data () {
      return {

      };
    },
    computed: {

    },
    mounted () {
    },
    components: {
      blogNav,
      blogFooter,
      socialInfo,
      visitorSet
    },
  };
</script>


<style lang="scss">

  .app {
    width: 100%;
    min-height: 100%;
  }

  .app-container {
    position: relative;
    overflow: hidden;
  }
</style>
