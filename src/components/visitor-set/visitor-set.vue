<template>
<!--  <div class="modal fade" id="visitorSet" tabindex="-1" role="dialog"
       v-on:keyup.enter="!!name&&!!email&&submit()">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <h4 class="modal-title"><i class="fa fa-address-book"></i>留个名呗</h4>
        </div>
        <div class="modal-body">
          <form name="addTags">
            <div class="form-group" :class="{true:'has-error',false:''}[!name]">
              <label class="control-label">昵称</label>
              <input type="text" class="form-control" name="nickname" v-model="name" placeholder="请输入昵称"
                     required>
            </div>
            <div class="form-group" :class="{true:'has-error',false:''}[!email]">
              <label class="control-label">邮箱</label>
              <input type="text" class="form-control" name="email" v-model="email"
                     placeholder="请输入邮箱" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <span class="submitText">{{submitText}}</span>
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button v-bind:disabled="!name||!email" @click="submit()"
                  type="button" class="btn btn-success">保存
            </button>
        </div>
      </div>
    </div>
  </div>-->
  <Modal
    v-model="isShowVisitorSet"
    title="留个名呗"
    :loading="loading"
    @on-ok="submit"
    @on-cancel="cancel">
    <form name="addTags">
      <div class="form-group" :class="{true:'has-error',false:''}[!name]">
        <label class="control-label">昵称</label>
        <input type="text" class="form-control" name="nickname" v-model="name" placeholder="请输入昵称"
               required>
      </div>
      <div class="form-group" :class="{true:'has-error',false:''}[!email]">
        <label class="control-label">邮箱</label>
        <input type="text" class="form-control" name="email" v-model="email"
               placeholder="请输入邮箱" required>
      </div>
    </form>
  </Modal>
</template>
<style>

</style>
<script type="text/javascript">
  import {mapState, mapActions} from 'vuex';
  import Toast from 'Toast';
  export default{
    data(){
      return {
        name: null,//游客名称
        email: null,//游客邮箱
        submitText: '',
        loading: true
      }
    },
    computed: {
      ...mapState({
        isShowVisitorSet: 'isShowVisitorSet',
      }),
    },
    methods: {
      ...mapActions({
        setCommentInfoStatus: 'setCommentInfoStatus',
        setVisitorSetStatus: 'setVisitorSetStatus'
      }),
      cancel: function(){
        this.setVisitorSetStatus(false);
      },
      submit: function () {
        let _this = this;
        if (!_this.name) {
          this.submitText = '请输入昵称';
          return
        }
        if (!_this.email) {
          this.submitText = '请输入邮箱';
          return
        }
        if (!/^\w+@[1-9a-z]+(\.[a-z]+){1,3}$/.test(_this.email)) {
          this.submitText = '邮箱格式输入错误';
          return
        }
        _this.$localStorage.$set({
          commentInfo: {
            name: _this.name,
            email: _this.email
          }
        });
        _this.setCommentInfoStatus(true);
        _this.setVisitorSetStatus(false);

      },
    },
    created: function () {
      //获取游客昵称及邮箱
      let visitorInfo = this.$localStorage.visitorInfo;
      if (!!visitorInfo && !!visitorInfo.name && !!visitorInfo.email) {
        this.setCommentInfoStatus(true);
        this.name = visitorInfo.name;
        this.email = visitorInfo.email;
      }
    },
  }

</script>
