// 创建Dialog的插件
export default {
    install(Vue) {
      async function createDialog(DialogComp, opt) {
        let Comp = DialogComp;
        if (typeof DialogComp === "function") {
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            fullscreen: false,
            spinner: "el-icon-loading"
          });
          Comp = (await DialogComp()).default;
          loading.close();
        }
  
        const options = {
          destroyOnClose: false,
          ...opt
        };
  
        const attrs = Vue.observable({
          visible: true,
          ...options.attrs
        });
  
        const props = Vue.observable({
          ...options.props
        });
  
        const vm = new Vue({
          store: this.$store,
          router: this.$router,
          render: h =>
            h(Comp, {
              ref: "dialog",
              attrs,
              props,
              on: {
                "update:visible": v => {
                  attrs.visible = v;
                },
                closed: () => {
                  if (options.destroyOnClose) {
                    vm.$destroy();
                  }
                },
                ...options.on
              }
            })
        }).$mount();
        const destroy = () => vm.$destroy();
        const open = () => (attrs.visible = true);
        const close = () => (attrs.visible = false);
        this.$once("hook:beforeDestroy", destroy);
        const dialog = vm.$refs.dialog;
        return {
          open,
          close,
          destroy,
          attrs,
          props,
          dialog
        };
      }
      Vue.prototype.$createDialog = createDialog;
    }
  };
  