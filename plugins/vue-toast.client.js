import Vue from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

Vue.use(Toast, {
  // Tùy chỉnh các tùy chọn cấu hình chung cho toast tại đây
  maxToasts: 4,
});

// Tùy chỉnh toast success riêng
Vue.prototype.$toast.success = (message, options) => {
  Vue.prototype.$toast(message, {
    type: 'success',
    timeout: 5000,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    draggablePercent: 2,
    icon: {
      iconClass: "material-icons-round",
      iconChildren: "done",
      iconTag: "span"
    },
  });
};
