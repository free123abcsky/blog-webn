<template>
  <div class="app-footer" v-show="visible">
    <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <p>design &amp; code by @kfs<span class="hidden-xs">,base on nodeJS + mongoDB + vue2</span></p>
        <p><a href="../../login">后台管理</a></p>
        <p>© 2016-2017。感谢七牛云存储提供静态资源空间。</p>
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped lang="scss">

  .app-footer {
    position: relative;
    padding: 30px 0 25px 0;
    width:100%;
    background: #333;
    color: #888;
    p {
      margin-bottom: 1em;
    }
    a {
      text-decoration: none;
      &:visited {
        color: #888;
      }
    }
  }

</style>

<script type="text/javascript">

  import Vue from 'vue';
  import {mapState} from 'vuex';

  export default{
    data(){
      return {
       // visible: true
      }
    },
    computed:{
      visible: function(){
        return this.$route.path.indexOf('login') == -1;
      }
    },
    props: {

    },
    methods: {

    }
  }

</script>

