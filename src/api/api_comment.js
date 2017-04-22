/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 评论相关的api
 * 只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */
import API from "../config.js";
import Vue from "vue";
import {doError} from "../api/api_doError";
/**
 * 根据文章的id查找此文章的评论列表,附带展示结构
 * */
export const GetArticleComments = function (articleId) {
    return new Promise(function (resolve, reject) {
        Vue.http.get(API.getArticleComments.replace('article_id', articleId)).then((response) => {
            // success callback
            let data = response.data;
            let status = response.status;
            if (parseInt(status.code) === 0) {
              resolve(data);
            } else {
              reject(status);
            }
        }).catch(function(error){
            console.log(error)
        });
    })
};
/**
 * 对评论进行回复
 * */
export const SendComment = function (params) {
    return new Promise(function (resolve, reject) {
        Vue.http.post(API.postComment, params).then((response) => {
            // success callback
            let data = response.data;
            let status = response.status;
            if (parseInt(status.code) === 0) {
              resolve(data);
            } else {
              reject(status);
            }
        }).catch(function(error){
            console.log(error)
        });
    });
};

/**
 * 获取评论列表
 * */
export const GetCommentToArticleList = function () {
    return new Promise(function (resolve, reject) {
        Vue.http.get(API.getCommentToArticleList).then((response) => {
            // success callback
            let data = response.data;
            let status = response.status;
            if (parseInt(status.code) === 0) {
              resolve(data);
            } else {
              reject(status);
            }
        }).catch(function(error){
            console.log(error)
        });
    });
};

/**
 * 修改评论的审核状态
 * */
export const ChangeCommentAuthState = function (params) {
    return new Promise(function (resolve, reject) {
        Vue.http.post(API.changeCommentAuthState, params).then((response) => {
            // success callback
            let data = response.data;
            let status = response.status;
            if (parseInt(status.code) === 0) {
              resolve(data);
            } else {
              reject(status);
            }
        }).catch(function(error){
            console.log(error)
        });
    });
};

/**
 * 删除评论
 * */
export const DeleteComment = function (id) {
    return new Promise(function (resolve, reject) {
        Vue.http.delete(API.delComment.replace('id', id)).then((response) => {
            // success callback
            let data = response.data;
            let status = response.status;
            if (parseInt(status.code) === 0) {
              resolve(data);
            } else {
              reject(status);
            }
        }).catch(function(error){
            console.log(error)
        });
    });
};

/**
 *  如果对用户的文章评论进行了评论,则标记此评论为已阅读
 *  此接口只对我有效
 * */
export const ChangeCommentReplyState = function (params) {
    return new Promise(function (resolve, reject) {
        Vue.http.post(API.changeCommentReplyState, params).then((response) => {
            // success callback
            let data = response.data;
            let status = response.status;
            if (parseInt(status.code) === 0) {
              resolve(data);
            } else {
              reject(status);
            }
        }).catch(function(error){
            console.log(error)
        });
    });
};
