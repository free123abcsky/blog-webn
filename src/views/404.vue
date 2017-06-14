<template>
  <div class="page">
      <div class="err-page">
          <icon type="alert"></icon>
          <h4>404</h4>
          <p>抱歉，您指定的页面已丢失</p>
      </div>
  </div>
</template>
<style scoped lang="scss">

  .err-page{
    position: absolute;
    margin: auto;
    left: 10px;
    top: 0;
    right: 10px;
    bottom: 0;
    min-width: 300px;
    max-width: 340px;
    height:180px;
    text-align: center;
    i {
      font-size: 70px;
      color:#76838f;
    }
    h4 {
      color: #37474f;
    }
    p {
      color:#76838f;
    }
  }

</style>
<script type="text/javascript">
  import Vue from 'vue'
  import icon from '../components/icon'
  export default{
    data(){
      return {

      }
    },
    computed: {

    },
    methods: {

    },
    created: function () {

    },
    mounted: function () {

    },
    components: {
      icon
    },
  }


</script>
