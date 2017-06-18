<template>
  <div :class="classes" >
    <div class="panel-heading" v-if="showHead">
      <h3 class="panel-title">
        <slot name="header"> </slot>
      </h3>
    </div>
    <div class="panel-body"><slot></slot></div>
    <div class="panel-footer" v-if="showFooter"><slot name="footer"></slot></div>
  </div>
</template>
<style lang="scss">

</style>
<script>

    import { oneOf } from '../../utils/assist';
    const prefixCls = 'panel';

    export default {
        name: 'Panel',
        props: {
            type: {
              validator (value) {
                return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'error']);
              }
            },
            loading: Boolean,
            bordered: {
              type: Boolean,
              default: false
            }
        },
        data () {
            return {
                showHead: false,
                showFooter: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-bordered`]: this.bordered,
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                    }
                ];
            }
        },
        mounted () {
          this.showHead = this.$slots.header !== undefined;
          this.showFooter = this.$slots.footer !== undefined;
        }
    };
</script>
