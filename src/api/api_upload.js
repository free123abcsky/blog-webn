/**
 * Created by xiangsongtao on 16/8/18.
 * Description: 上传
 * 图片上传前打压缩+方向矫正操作,传入file后接受成功或失败promise
 */
import API from "../config.js";
import Vue from "vue";
/**
 * 图片压缩+方向矫正处理
 * */
import imageResize from "../plugin/imageResize"

//图片上传
export const ImageUpload = function (_file) {
  //1. 传入filer参数
  return new Promise(function (resolve, reject) {
    // 2. 将img值进行方向矫正,裁剪压缩
    imageResize(_file, function (_form) {
      // 3. 文件上传
      Vue.http.post(API.imgUpload, _form).then(function (result) {
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
  });
};
