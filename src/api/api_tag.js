/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 标签相关的api
 * 只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */
import API from "../config.js";
import Vue from "vue";
import {doError} from "../api/api_doError";
/**
 * 博客的标签库使用到的,带有数据结构的标签列表
 * */
export const GetTagsListWithStructure = function () {
    return new Promise(function (resolve, reject) {
        let url = API.getTagsListWithStructure;
        let tmp = Vue.$sessionStorage[url];
        if (!!tmp) {
            console.log("标签库数据使用缓存!")
            resolve(tmp);
            return;
        }
        Vue.http.get(url).then((response) => {
            // success callback
            let data = response.data;
            let status = response.status;
            if (parseInt(status.code) === 0) {
              resolve(data);
              Vue.$sessionStorage.$set(url,rdata);
            } else {
              reject(status);
            }
        }).catch(function(error){
            console.log(error)
        });
    })
};

/**
 * 后台列表展示时用的,纯列表
 * */
export const GetTagsList = function () {
    return new Promise(function (resolve, reject) {
        Vue.http.get(API.getTagsList).then((response) => {
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
 * 新增标签
 * */
export const AddTag = function (params) {
    return new Promise(function (resolve, reject) {
        Vue.http.post(API.addTag,params).then((response) => {
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
 * 删除标签
 * */
export const DeleteTag = function (id) {
    return new Promise(function (resolve, reject) {
        Vue.http.delete(API.deleteTag.replace('id', id)).then((response) => {
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
 * 修改标签
 * */
export const EditTag = function (params) {
    return new Promise(function (resolve, reject) {
        Vue.http.put(API.editTag,params).then((response) => {
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
