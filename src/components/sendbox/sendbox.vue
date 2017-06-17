<template>
  <div class="com-sendbox">
    <div class="sendbox" :class="{'sendbox-active': conmentActive}">
      <div class="send-side">
        <div class="send-avatar set-userinfo">
          <img src="../../assets/default-avatar.png"/></div>
          <a href="javascript:void(0)" class="send-username set-userinfo" title="留个名呗" @click="setUserInfo()">{{name || '留个名呗'}}</a>
      </div>
      <div class="sendbox-main">
        <div class="send-textarea">
          <textarea v-model="content" @blur="commenting" ref="cbox"></textarea>
          <div class="send-placeholder" @click.stop="commenting">要说点什么嘛...</div>
        </div>
        <div class="send-footer">
          <div class="send-footer-left">
            <a href="javascript:void(0)" title="插入表情" class="send-face"><span class="l-icon l-icon-face"></span></a>
            <div class="send-count"><b>500</b><i>/</i><span>500</span></div>
          </div>
          <div class="send-footer-right">
           <!-- <k-button type="warning" :disabled="!content" @click="submit()">发布</k-button>-->
            <button class="btn btn-warning com-send-submit" :disabled="!content" @click="submit()">发布</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  //base
  @import "../../theme/theme.scss";

  .com-sendbox {
    margin-bottom: 20px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0,0,0,.2)
  }

  .sendbox {
    padding: 20px 20px 20px 80px;
    background: #fff;
    position: relative;
    overflow: hidden;
  }

  .send-side {
    position: absolute;
    top: 20px;
    left: 0;
    width: 80px
  }
  .send-avatar {
    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 8px;
    overflow: hidden;
    background: #eee;
    img {
      display: block;
      width: 100%;
      height: 100%
    }
  }
  .send-username {
    display: block;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      color: #f60
    }
  }

  .sendbox-main {
    position: relative;
    z-index: 1;
  }

  .send-textarea {
    border: 1px solid #ddd;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      display: block;
      width: 14px;
      height: 14px;
      top: 14px;
      left: -7px;
      border: 1px solid #ddd;
      border-width: 0 0 1px 1px;
      background: #fff;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      transform: rotate(45deg)
    }
    textarea {
      position: relative;
      display: block;
      width: 100%;
      height: 80px;
      padding: 4px 10px;
      margin: 0;
      border: 0;
      resize: none;
      font-family: inherit;
      line-height: 24px;
      font-size: 1rem;
      color: #333;
      transition: all .2s ease;
      -moz-transition: all .2s ease;
      -webkit-transition: all .2s ease;
      -o-transition: all .2s ease;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      &:focus {
        outline: 0
      }
    }
    .send-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      line-height: 80px;
      text-indent: 1em;
      font-size: 1rem;
      color: #888;
      cursor: text;
      background: #fff
    }
  }

  .send-footer {
    position: relative;
    height: 0;
    padding: 0;
    overflow: hidden;
    background: #fff;
    opacity: 0;
    transition: all .1s linear;
    -moz-transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -o-transition: all .1s linear;
    .send-footer-left {
      float: left;
      .send-face {
        display: block;
        float: left;
        padding: 0 5px;
        font-size: 24px;
        height: 30px;
        line-height: 30px;
        color: #bbb;
        transition: all .1s linear;
        -moz-transition: all .1s linear;
        -webkit-transition: all .1s linear;
        -o-transition: all .1s linear;
        &:hover {
          color: #f70
        }
      }
      .send-count {
        display: block;
        float: left;
        line-height: 30px;
        padding: 0 10px;
        display: none;
        b {
          font-size: 14px;
          color: #aaa;
          font-weight: 400
        }
        i {
          font-style: normal;
          font-size: 16px;
          color: #ddd
        }
        span {
          font-size: 12px;
          color: #ccc
        }
      }
    }

    .send-footer-right {
      float: right;
      .com-send-submit {
        padding: 0 20px;
        font-size: 12px;
        color: #fff;
        background: #f90;
        border-radius: 2px;
        display: block;
        float: left;
        height: 30px;
        line-height: 30px;
        &:hover {
          color: #fff;
          background: #f70;
          text-decoration: none
        }
      }
    }
  }

  .sendbox-active .send-footer {
    height: 40px;
    padding-top: 10px;
    opacity: 1
  }

  .sendbox-active .send-textarea,.sendbox-active .send-textarea:before {
    border-color: #fa0;
    transition: all .2s linear;
    -moz-transition: all .2s linear;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear
  }

  .sendbox-active .send-placeholder {
    display: none
  }

  .l_sendBox_user {
    overflow: hidden
  }

  .l_sendBox_user p {
    text-align: center;
    padding: 5px 0;
    line-height: 18px;
    font-size: 12px;
    color: #aaa
  }

  .l_sendBox_user p a {
    color: #888
  }

  .l_sendBox_user p a:hover {
    text-decoration: underline
  }

  .l_sendBox_user input {
    display: block;
    width: 100%;
    margin: 0;
    padding: 10px 20px;
    line-height: 15px;
    border: 0;
    border-bottom: 1px solid #ddd;
    font-family: inherit;
    font-size: 16px;
    color: #333;
    transition: all .2s linear;
    -moz-transition: all .2s linear;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box
  }

  .l_sendBox_user input:focus {
    outline: 0;
    background: #f4f4f4
  }

  @keyframes insert {
    0% {
      opacity: .2;
      height: 0
    }

    50% {
      opacity: .2;
      height: 110px
    }

    100% {
      opacity: 1
    }
  }

  @-moz-keyframes insert {
    0% {
      opacity: .2;
      height: 0
    }

    50% {
      opacity: .2;
      height: 110px
    }

    100% {
      opacity: 1
    }
  }

  @-webkit-keyframes insert {
    0% {
      opacity: .2;
      height: 0
    }

    50% {
      opacity: .2;
      height: 110px
    }

    100% {
      opacity: 1
    }
  }

  @keyframes commentsActive {
    0% {
      background: #fff
    }

    40% {
      background: #fa7
    }

    80% {
      background: #fa7
    }

    100% {
      background: #fff
    }
  }

  @-moz-keyframes commentsActive {
    0% {
      background: #fff
    }

    40% {
      background: #fa7
    }

    80% {
      background: #fa7
    }

    100% {
      background: #fff
    }
  }

  @-webkit-keyframes commentsActive {
    0% {
      background: #fff
    }

    40% {
      background: #fa7
    }

    80% {
      background: #fa7
    }

    100% {
      background: #fff
    }
  }

</style>
<script type="text/javascript">

  import Vue from 'vue';
  import Toast from 'Toast';
  import kButton from '../button'
  import {GetArticleComments, SendComment} from "../../api/api_comment"
  import {mapState,mapActions} from 'vuex';

  export default{
    data(){
      return {
        conmentActive: false,  //评论输入框激活
        content: null,//评论信息
        name: null,//评论人名称
        email: null,//评论人邮箱
        timer: null //定时器
      }
    },
    computed:{
      ...mapState({
        hasCommentInfo: 'hasCommentInfo',
      }),
    },
    props: {
      //文章id
      articleId: {
        type: String,
        require: true,
      },
      //前置id，如果是根评论则是文章id，如果是子评论则为父评论的id
      preId: {
        type: String,
        require: true,
      }
    },
    methods: {
      ...mapActions({
        setCommentInfoStatus: 'setCommentInfoStatus',
        setVisitorSetStatus: 'setVisitorSetStatus'
      }),
      setUserInfo: function () {
        //$('#visitorSet').modal()
        this.setVisitorSetStatus(true);
      },
      commenting: function() {

        clearTimeout(this.timer);

        this.timer = setTimeout(() => {

          //校验字符是否发生改变
          if(!!this.content){
            return;
          }
          if(!this.conmentActive){
              this.$refs.cbox.focus();
              this.conmentActive = true;
          }else{
              this.conmentActive = false;
          }
        }, 300);

      },
      submit: function () {

        let _this = this;
        if (!_this.hasCommentInfo) {
          if (!_this.name) {
            Toast({
              message: '请输入昵称', iconClass: 'fa fa-warning',
              position: 'center',
              duration: 3000
            });
            return
          }
          if (!_this.email) {
            Toast({
              message: '请输入邮箱', iconClass: 'fa fa-warning',
              position: 'center',
              duration: 3000
            });
            return
          }
          if (!/^\w+@[1-9a-z]+(\.[a-z]+){1,3}$/.test(_this.email)) {
            Toast({
              message: '邮箱格式输入错误',
              iconClass: 'fa fa-warning',
              position: 'center',
              duration: 3000
            });
            return
          }
          _this.$localStorage.$set({
            commentInfo: {
              name: _this.name,
              email: _this.email
            }
          });
          _this.setCommentInfoStatus(true);
        }
        let commentInfo = _this.$localStorage.commentInfo
        let params = {
          article_id: _this.articleId,
          pre_id: _this.preId,
          next_id: [],
          name: commentInfo.name,
          email: commentInfo.email,
          time: new Date(),
          content: _this.content,
          state: false,
          isIReplied: false
        }

        SendComment(params).then(()=> {
          Toast({
            message: '评论成功，正在审核',
            iconClass: 'fa fa-check',
            position: 'center',
            duration: 3000
          });
          this.toggle = !this.toggle;
          _this.content = '';
        }, (error)=> {
          Toast({
            message: '评论失败',
            iconClass: 'fa fa-check',
            position: 'center',
            duration: 3000
          });
        });
      }
    },
    created: function () {
      var _this = this;
      if(!_this.hasCommentInfo){
        /**
         * 获取游客昵称及邮箱,并设置input显示与否
         * */
        let commentInfo = _this.$localStorage.commentInfo
        if (!!commentInfo && !!commentInfo.name && !!commentInfo.email) {
          _this.setCommentInfoStatus(true);
          _this.name = commentInfo.name;
          _this.email = commentInfo.email;
        }
      }
    },
    components:{
      kButton
    }
  }

</script>
