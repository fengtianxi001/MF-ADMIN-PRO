import {
  type Directive,
  type App,
  reactive,
  createVNode,
  render,
  defineComponent,
  h,
} from "vue";
import Loading from "./index.vue";

enum LoadingParams {
  tipAttr = "loading-tip",
  tipDefault = "数据加载中...",
  sizeAttr = "loading-size",
  sizeDefault = 30,
}

const loadingDirective: Directive = {
  mounted(el, binding) {
    const tip =
      el.getAttribute(LoadingParams.tipAttr) ?? LoadingParams.tipDefault;
    const size =
      el.getAttribute(LoadingParams.sizeAttr) ?? LoadingParams.sizeDefault;
    const fullscreen = !!binding.modifiers.fullscreen;
    const elPosition = el.style.position;

    //如果不是fullscreen需要在el上设置position
    if (!fullscreen && !elPosition) {
      el.style.position = "relative";
    }
    const instance = createLoading(
      {
        tip,
        size,
        fullscreen,
        loading: !!binding.value,
      },
      fullscreen ? document.body : el
    );
    el.instance = instance;
  },
  updated(el, binding) {
    const instance = el.instance;
    console.log("instance", binding);
    if (!instance) return;
    instance.setTip(
      el.getAttribute(LoadingParams.tipAttr) ?? LoadingParams.tipDefault
    );
    if (binding.oldValue !== binding.value) {
      console.log("binding.value", binding.value);
      instance.setLoading?.(binding.value);
    }
  },
  unmounted(el) {
    el?.instance?.closeLoading();
  },
};

function createLoading(props: any, target: HTMLElement) {
  const dataSource = reactive({
    tip: "",
    loading: true,
    ...props,
  });
  const component = defineComponent({
    render() {
      return h(Loading, { ...dataSource });
    },
  });
  const instance = createVNode(component);
  render(instance, document.createElement("div"));

  const setTip = (tip: string) => (dataSource.tip = tip);
  const setLoading = (loading: boolean) => {
    dataSource.loading = loading;
  };
  const closeLoading = () => {
    if (!instance.el || !instance.el.parentNode) return void 0;
    instance.el.parentNode.removeChild(instance.el);
  };

  const openLoading = (target: HTMLElement = document.body) => {
    if (!instance || !instance.el) return void 0;
    target.appendChild(instance.el as HTMLElement);
  };

  if (target) openLoading(target);

  return {
    instance,
    closeLoading,
    openLoading,
    setTip,
    setLoading,
    get loading() {
      return dataSource.loading;
    },
    get element() {
      return instance?.el as HTMLElement;
    },
  };
}

export function setupLoadingDirective(app: App) {
  app.directive("loading", loadingDirective);
}

export default loadingDirective;
