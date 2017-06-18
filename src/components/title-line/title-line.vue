<template>
  <div class="line" v-if="showSlot">
    <a>
      <slot></slot>
    </a>
  </div>
</template>
<style lang="scss">

  .line{
    position: relative;
    padding: 20px 0;
    text-align: center;
    &:before, &:after{
      display: block;
      position: absolute;
      top: 28px;
      width: 44%;
      content: "";
      border-top: 1px solid #ededed
    }
    &:before{
      left: 0
    }
    &:after{
      right: 0
    }
    a{
      display: inline-block;
      font-size: 16px;
      color: #999;
      &:hover {
        text-decoration: none
      }
    }
  }

</style>
<script>

    export default {
        name: 'TitleLine',
        data () {
            return {
              showSlot: false
            };
        },
        mounted () {
          this.showSlot = this.$slots.default !== undefined
        }
    };
</script>
