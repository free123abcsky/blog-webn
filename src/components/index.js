
import Message from './message';
import Modal from './modal/index';
import Notice from './notice';

const kComps = {
    Message,
    Modal,
    Notice
};

const install = function (Vue, opts = {}) {

    Object.keys(kComps).forEach((key) => {
        Vue.component(key, kComps[key]);
    });

    Vue.prototype.$Message = Message;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Notice = Notice;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(kComps, {install});
