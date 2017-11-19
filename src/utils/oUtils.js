/**
 * 基本工具库
 */
module.exports = {
    install: function (Vue) {

      /**
       * 浏览器环境判断
       */
      let ua = function() {
        var u = navigator.userAgent;
        var u2 = navigator.userAgent.toLowerCase();
        return { //移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
          iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
          iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
          weixin: u2.match(/MicroMessenger/i) == "micromessenger",
          ali: u.indexOf('AliApp') > -1,
        };
      }()

      /**
       *
       * @desc 判断元素是否有某个class
       * @param {HTMLElement} ele
       * @param {String} cls
       * @return {Boolean}
       */
      let hasClass = function(ele, cls) {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
      }

      /**
       *
       * @desc   为元素添加class
       * @param  {HTMLElement} ele
       * @param  {String} cls
       */
      let addClass = function(ele, cls) {
        if (!hasClass(ele, cls)) {
          ele.className += ' ' + cls;
        }
        return this;
      }

      /**
       *
       * @desc 为元素移除class
       * @param {HTMLElement} ele
       * @param {String} cls
       */
      let removeClass = function (ele, cls) {
        if (hasClass(ele, cls)) {
          var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
          ele.className = ele.className.replace(reg, ' ').trim();
        }
        return this;
      }

      Vue.prototype.oUtils = {
          ua,
          hasClass,
          addClass,
          removeClass
      }
    }

};
