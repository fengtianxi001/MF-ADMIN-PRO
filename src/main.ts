import { createApp } from "vue";
import { setupStore } from "@/stores";
import { setupRouterGuard } from "@/router/guard";
import { router, setupRouter } from "@/router";
import { setupMock } from "@/mock";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.less";
import "@/assets/styles/reset.scss";
async function bootstrap() {
  const app = createApp(App);
  app.use(ArcoVue);
  setupMock();
  setupStore(app);
  setupRouter(app);
  setupRouterGuard(router);
  app.mount("#app");
}
bootstrap();
