<template>
  <div class="page">
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
  import Vue from 'vue'
  import API from "../config";
  import {mapState, mapActions} from 'vuex';
  export default{
    data(){
      return {
        clear: '',
        musicList: API.musicList,
      }
    },
    computed: {

    },
    methods: {

    },
    components: {
    },
    created: function () {

    },
    mounted: function () {

    }
    ,
  }


</script>
