<template>
    <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
        <icon class="ion-load-loop" type="load-c" v-if="loading"></icon>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<style lang="scss">

  /*质感按钮和扁平按钮*/
  .btn-raised {
    -webkit-box-shadow: 0 0 2px rgba(0,0,0,.18),0 2px 4px rgba(0,0,0,.21);
    box-shadow: 0 0 2px rgba(0,0,0,.18),0 2px 4px rgba(0,0,0,.21);
    -webkit-transition: -webkit-box-shadow .25s cubic-bezier(.4,0,.2,1);
    -o-transition: box-shadow .25s cubic-bezier(.4,0,.2,1);
    transition: -webkit-box-shadow .25s cubic-bezier(.4,0,.2,1);
    transition: box-shadow .25s cubic-bezier(.4,0,.2,1);
    transition: box-shadow .25s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .25s cubic-bezier(.4,0,.2,1)
  }

  .btn-raised.active,.btn-raised:active,.btn-raised:hover,.open>.dropdown-toggle.btn-raised {
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15),0 3px 6px rgba(0,0,0,.2);
    box-shadow: 0 0 3px rgba(0,0,0,.15),0 3px 6px rgba(0,0,0,.2)
  }

  .btn-raised.disabled,.btn-raised[disabled],fieldset[disabled] .btn-raised {
    -webkit-box-shadow: none;
    box-shadow: none
  }
</style>
<script>
    import icon from '../icon';
    import { oneOf } from '../../utils/assist';
    const prefixCls = 'btn';

    export default {
        components: { icon },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'error']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['lg', 'sm', 'xs']);
                }
            },
            loading: Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            icon: String,
            raised: {
              type: Boolean,
              default: false
            },
            long: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showSlot: true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-raised`]: this.raised,
                        [`${prefixCls}-block`]: this.long,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
                    }
                ];
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    };
</script>
