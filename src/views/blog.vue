<template>
  <core-layout>
    <div class="page">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
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
  import coreLayout from "../components/layout/core-layout";
  module.exports = {
    components: {
      coreLayout
    }
  }


</script>
