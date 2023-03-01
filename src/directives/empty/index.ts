import {
  type Directive,
  type App,
  reactive,
  createVNode,
  render,
  defineComponent,
  h,
} from "vue";
import Empty from "./index.vue";
enum EmptyParams {
  tipAttr = "empty-tip",
  tipDefault = "暂无数据",
}

const emptyDirective: Directive = {
  mounted(el, binding) {
    const tip = el.getAttribute(EmptyParams.tipAttr) ?? EmptyParams.tipDefault;
    const instance = createLoading(
      {
        tip,
        empty: !!binding.value,
      },
      el
    );
    el.instance = instance;
  },
  updated(el, binding) {
    const instance = el.instance;
    if (!instance) return;
    instance.setTip(
      el.getAttribute(EmptyParams.tipAttr) ?? EmptyParams.tipDefault
    );
    if (binding.oldValue !== binding.value) {
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
    empty: false,
    ...props,
  });
  const component = defineComponent({
    render() {
      return h(Empty, { ...dataSource });
    },
  });
  const instance = createVNode(component);
  render(instance, document.createElement("div"));

  const setTip = (tip: string) => (dataSource.tip = tip);
  const setEmpty = (loading: boolean) => {
    dataSource.empty = loading;
  };
  const closeEmpty = () => {
    if (!instance.el || !instance.el.parentNode) return void 0;
    instance.el.parentNode.removeChild(instance.el);
  };

  const openEmpty = (target: HTMLElement = document.body) => {
    if (!instance || !instance.el) return void 0;
    target.appendChild(instance.el as HTMLElement);
  };

  if (target) openEmpty(target);

  return {
    instance,
    closeEmpty,
    openEmpty,
    setTip,
    setEmpty,
    get empty() {
      return dataSource.empty;
    },
    get element() {
      return instance?.el as HTMLElement;
    },
  };
}

export function setupEmptyDirective(app: App) {
  app.directive("empty", emptyDirective);
}

export default emptyDirective;
