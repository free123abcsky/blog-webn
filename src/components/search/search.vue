<template>
  <div class="search-box">
    <div class="search-body">
      <input type="text" class="form-control" placeholder="Search">
    </div>
     <k-button><icon type="ios-search" size="18" color="#000"></icon></k-button>
  </div>
</template>

<style scoped lang="scss">

  .search-body {
    display:inline-block;
    padding: 0px 12px;
    input {
      display:inline-block;
    }
  }


</style>

<script type="text/javascript">

  import icon from '../icon'
  import kButton from '../button'

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
    },
    components: {
      icon, kButton
    }
  };
</script>
