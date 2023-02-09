import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";
import routes from "./routes";
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...routes],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
