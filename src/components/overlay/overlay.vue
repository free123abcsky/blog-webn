<template>
  <div :class="classes" >
    <div class="overlay-inner">
      <h3 class="overlay-header"><slot name="header"> </slot></h3>
      <p class="overlay-body"><slot></slot></p>
      <router-link class="animated fadeIn" :to="{ name: routename}"></router-link>
    </div>
  </div>
</template>
<style lang="scss">

  .overlay {
    min-height: 200px;
    //padding: 0;
    //margin: 0;
    margin-bottom: 20px;
    position: relative;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    cursor: pointer;
    overflow: hidden
  }

  .overlay-border {

    .overlay-img {
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      position: relative;
      -webkit-transition: all .4s ease-in-out;
      -moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -ms-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
      opacity: 1;
      overflow: hidden;
    }
    &:hover .overlay-img {
      position: absolute;
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      opacity: .6
    }
    .overlay-inner {
      color: #fff;
      padding: 0;
      margin: 0;
      -moz-backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transition: all .4s ease-in-out;
      -moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -ms-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
      overflow: hidden;
      .overlay-header {
        font-size: 1.3em;
        font-weight: 700;
        text-align: center;
        width: 80%;
        position: absolute;
        top: 20%;
        left: 10%;
        -webkit-transition: all .5s ease-in-out;
        -moz-transition: all .5s ease-in-out;
        -o-transition: all .5s ease-in-out;
        -ms-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        overflow: hidden;
        opacity: 1
      }
      .overlay-body {
        font-size: 1em;
        text-align: center;
        width: 80%;
        position: absolute;
        top: 60%;
        left: 10%;
        -webkit-transition: all .4s ease-in-out;
        -moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -ms-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
        overflow: hidden;
        opacity: 0
      }
      &::before, &::after {
        position: absolute;
        content: '';
        opacity: 0;
        -webkit-transition: opacity 0.4s, -webkit-transform .4s;
        -moz-transition: opacity 0.4s, -moz-transform .4s;
        -o-transition: opacity 0.4s, -o-transform .4s;
        transition: opacity 0.4s, transform .4s
      }
      &::before {
        top: 8%;
        right: 10%;
        bottom: 8%;
        left: 10%;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: scale(0, 1);
        -moz-transform: scale(0, 1);
        -o-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -o-transform-origin: 0 0;
        transform-origin: 0 0
      }
      &::after {
        top: 8%;
        right: 10%;
        bottom: 8%;
        left: 10%;
        border-right: 1px solid #fff;
        border-left: 1px solid #fff;
        -webkit-transform: scale(1, 0);
        -moz-transform: scale(1, 0);
        -o-transform: scale(1, 0);
        transform: scale(1, 0);
        -webkit-transform-origin: 100% 0;
        -moz-transform-origin: 100% 0;
        -o-transform-origin: 100% 0;
        transform-origin: 100% 0
      }
    }
  }

  .overlay-border:hover .overlay-inner::before, .overlay-border:hover .overlay-inner::after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1)
  }

  .overlay-border .overlay-inner, .overlay-border .overlay-inner > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    overflow: hidden;
    z-index: 1000
  }

  .overlay-border:hover .overlay-body {
    top: 45%;
    opacity: 1
  }

  .overlay-default{
    background-image: linear-gradient(to bottom, #76838f 30%, #ccd5db 60%,#76838f 100%)
  }

  .overlay-primary{
    background-image: linear-gradient(to bottom, #4e97d9 30%, #89bceb 60%,#4e97d9 100%)
  }

  .overlay-success{
    background-image: linear-gradient(to bottom, #36ab7a 30%, #5cd29d 60%,#36ab7a 100%)
  }

  .overlay-info{
    background-image: linear-gradient(to bottom, #47b8c6 30%, #77d6e1 60%,#47b8c6 100%)
  }

  .overlay-warning{
    background-image: linear-gradient(to bottom, #e79857 30%, #f4b066 60%,#e79857 100%)
  }

  .overlay-danger{
    background-image: linear-gradient(to bottom, #e9595b 30%, #fa7a7a 60%,#e9595b 100%)
  }

</style>
<script>

    import { oneOf } from '../../utils/assist';
    const prefixCls = 'overlay';

    export default {
        components: {},
        props: {
            type: {
              validator (value) {
                return oneOf(value, ['border']);
              },
              default: 'border'
            },
            bgcolor: {
              validator (value) {
                return oneOf(value, ['default', 'primary', 'success', 'info', 'warning', 'danger'])
              },
              default: 'default'
            },
            routename: {
              type: String,
              default: '404'
            }
        },
        data () {
            return {
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.bgcolor}`]: !!this.bgcolor,
                    }
                ];
            }
        },
        methods: {

        },
        mounted () {

        }
    };
</script>
