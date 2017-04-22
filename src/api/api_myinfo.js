/**
 * User: kfs
 * Date：2017/3/26
 * Desc：获取更新我的个人信息的api,只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */

import API from "../config.js";
import Vue from "vue";

export const GetMyInfo = function () {
    return new Promise(function (resolve, reject) {
        let url = API.getMyInfo;
        let tmp = Vue.$sessionStorage[url];
        if (!!tmp) {
            console.log("个人数据使用缓存!")
            resolve(tmp);
            return;
        }
        Vue.http.get(url).then((response) => {
            // success callback
            let data = response.data;
            let status = response.status;
            if (parseInt(status.code) === 0) {
              resolve(data);
              Vue.$sessionStorage.$set(url, data);
            } else {
              reject(status);
            }
        }).catch(function(error){
            console.log(error)
        });
    })
};

export const GetMyInfoWithOriginal = function () {
    return new Promise(function (resolve, reject) {
        Vue.http.get(API.getMyInfoWithOriginal).then((response) => {
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


export const PostMyInfo = function (params) {
    return new Promise(function (resolve, reject) {
        Vue.http.put(API.postMyInfo, params).then((response) => {
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

