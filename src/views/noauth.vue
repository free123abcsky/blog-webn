<template>
  <div class="page">
      <div class="err-page">
          <icon type="ios-locked"></icon>
          <h4>没有权限</h4>
          <p>您没有权限访问此页面，请联系管理员</p>
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

  export default{
  }

</script>
