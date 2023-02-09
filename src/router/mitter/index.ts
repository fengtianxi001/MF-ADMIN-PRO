import type {
  RouteLocationNormalized,
  RouteRecordNormalized,
} from "vue-router";
import Mitter from "@/utils/mitter";

const emitter = new Mitter();
const key = Symbol();
let lastChangeTab: RouteLocationNormalized;

export function setRouteChange(lastChangeRoute: RouteLocationNormalized) {
  const value = getRawRoute(lastChangeRoute);
  emitter.emit(key, value);
  lastChangeTab = value;
}

export function listenerRouteChange(
  callback: (route?: RouteLocationNormalized) => void,
  immediate = true
) {
  emitter.on(key, callback);
  immediate && lastChangeTab && callback(lastChangeTab);
}

export function removeTabChangeListener() {
  emitter.clear();
}

function getRawRoute(route: RouteLocationNormalized): RouteLocationNormalized {
  if (!route) return route;
  const { matched, ...rest } = route;
  return {
    ...rest,
    matched: (matched
      ? matched.map((item) => ({
          meta: item.meta,
          name: item.name,
          path: item.path,
        }))
      : undefined) as RouteRecordNormalized[],
  };
}
