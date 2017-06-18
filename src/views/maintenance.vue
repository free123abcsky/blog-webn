<template>
  <div class="page">
      <div class="err-page">
          <icon type="paintbucket"></icon>
          <h4>正在维护中…</h4>
          <p>系统正在维护中，请稍后访问</p>
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

