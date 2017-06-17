<template>
    <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
        <icon class="ion-load-loop" type="load-c" v-if="loading"></icon>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<style lang="scss">


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
            outline: {
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
                        [`${prefixCls}-outline`]: this.outline,
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
