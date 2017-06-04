<template>
    <transition :name="transitionName">
        <div :class="classes" :style="styles">
            <div :class="[baseClass + '-content']" ref="content" v-html="content"></div>
            <a :class="[baseClass + '-close']" @click="close" v-if="closable">
                <i class="ion ion-ios-close-empty"></i>
            </a>
        </div>
    </transition>
</template>

<style lang="scss">
  .ivu-message {
    font-size: 12px;
    position: fixed;
    z-index: 1010;
    width: 100%;
    top: 16px;
    left: 0
  }

  .ivu-message-notice {
    width: auto;
    vertical-align: middle;
    position: absolute;
    left: 50%
  }

  .ivu-message-notice-content {
    position: relative;
    right: 50%;
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background: #fff;
    display: block
  }

  .ivu-message-success .ivu-icon {
    color: #0c6
  }

  .ivu-message-error .ivu-icon {
    color: #f30
  }

  .ivu-message-warning .ivu-icon {
    color: #f90
  }

  .ivu-message-info .ion,.ivu-message-loading .ion {
    color: #39f
  }

  .ivu-message .ivu-icon {
    margin-right: 8px;
    font-size: 14px;
    top: 1px;
    position: relative
  }

  .ivu-notice {
    width: 335px;
    margin-right: 24px;
    position: fixed;
    z-index: 1010
  }

  .ivu-notice-notice {
    margin-bottom: 10px;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background: #fff;
    line-height: 1;
    position: relative;
    overflow: hidden
  }

  .ivu-notice-notice-close {
    position: absolute;
    right: 16px;
    top: 15px;
    color: #999;
    outline: 0
  }

  .ivu-notice-notice-close i {
    font-size: 22px;
    color: #999;
    transition: color .2s ease;
    position: relative;
    top: -3px
  }

  .ivu-notice-notice-close i:hover {
    color: #444
  }

  .ivu-notice-notice-with-desc .ivu-notice-notice-close {
    top: 11px
  }

  .ivu-notice-title {
    font-size: 14px;
    color: #464c5b;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ivu-notice-with-desc .ivu-notice-title {
    margin-bottom: 8px
  }

  .ivu-notice-with-desc.ivu-notice-with-icon .ivu-notice-title {
    margin-left: 51px
  }

  .ivu-notice-desc {
    font-size: 12px;
    color: #999;
    text-align: justify;
    line-height: 1.5
  }

  .ivu-notice-with-desc.ivu-notice-with-icon .ivu-notice-desc {
    margin-left: 51px
  }

  .ivu-notice-with-icon .ivu-notice-title {
    margin-left: 26px
  }

  .ivu-notice-icon {
    position: absolute;
    left: 20px;
    margin-top: -1px;
    font-size: 16px
  }

  .ivu-notice-icon-success {
    color: #0c6
  }

  .ivu-notice-icon-info {
    color: #39f
  }

  .ivu-notice-icon-warning {
    color: #f90
  }

  .ivu-notice-icon-error {
    color: #f30
  }

  .ivu-notice-with-desc .ivu-notice-icon {
    font-size: 36px
  }

  .ivu-notice-custom-content:after {
    content: "";
    display: block;
    width: 4px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0
  }

  .ivu-notice-with-info:after,.ivu-notice-with-normal:after {
    background: #39f
  }

  .ivu-notice-with-success:after {
    background: #0c6
  }

  .ivu-notice-with-warning:after {
    background: #f90
  }

  .ivu-notice-with-error:after {
    background: #f30
  }

</style>

<script>
    export default {
        props: {
            prefixCls: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 1.5
            },
            content: {
                type: String,
                default: ''
            },
            styles: {
                type: Object,
                default: function() {
                    return {
                        right: '50%'
                    };
                }
            },
            closable: {
                type: Boolean,
                default: false
            },
            className: {
                type: String
            },
            name: {
                type: String,
                required: true
            },
            onClose: {
                type: Function
            },
            transitionName: {
                type: String
            }
        },
        data () {
            return {
                withDesc: false
            };
        },
        computed: {
            baseClass () {
                return `${this.prefixCls}-notice`;
            },
            classes () {
                return [
                    this.baseClass,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${this.baseClass}-closable`]: this.closable,
                        [`${this.baseClass}-with-desc`]: this.withDesc
                    }
                ];
            },
            contentClasses () {
                return `${this.baseClass}-content`;
            }
        },
        methods: {
            clearCloseTimer () {
                if (this.closeTimer) {
                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            },
            close () {
                this.clearCloseTimer();
                this.onClose();
                this.$parent.close(this.name);
            }
        },
        mounted () {
            this.clearCloseTimer();

            if (this.duration !== 0) {
                this.closeTimer = setTimeout(() => {
                    this.close();
                }, this.duration * 1000);
            }

            // check if with desc in Notice component
            if (this.prefixCls === 'ivu-notice') {
                this.withDesc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0].innerHTML !== '';
            }
        },
        beforeDestroy () {
            this.clearCloseTimer();
        }
    };
</script>
