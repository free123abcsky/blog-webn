<template>
  <core-layout>
    <div class="page">
        <router-view></router-view>
    </div>
  </core-layout>
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
  import Vue from 'vue'
  import coreLayout from "../../components/layout/core-layout";
  export default{
    components: {
      coreLayout
    }
  }
</script>
