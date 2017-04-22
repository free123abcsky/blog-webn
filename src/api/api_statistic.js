/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 获取更新我的个人信息的api,
 * 只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */


import API from "../config.js";
import Vue from "vue";
import {doError} from "../api/api_doError";

/**
 * 今天，月，年的访问统计
 * */
export const GetTotal = function () {
  return new Promise(function (resolve, reject) {
    Vue.http.get(API.getTotal).then((response) => {
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
 * 当天访问统计，时间访问数
 * */
export const GetChart = function () {
  return new Promise(function (resolve, reject) {
    Vue.http.get(API.getChart).then((response) => {
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
 * 当天访问分布图
 * */
export const GetMap = function () {
  return new Promise(function (resolve, reject) {
    Vue.http.get(API.getMap).then((response) => {
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
 * 签到
 * */
export const Sign = function () {
  return new Promise(function (resolve, reject) {
    Vue.http.get(API.sign).then((response) => {
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
