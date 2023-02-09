import { createApp } from "vue";
import { setupStore } from "@/stores";
import { setupRouterGuard } from "@/router/guard";
import { router, setupRouter } from "@/router";
import { setupMock } from "@/mock";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";

async function bootstrap() {
  const app = createApp(App);
  setupMock();
  setupStore(app);
  setupRouter(app);
  setupRouterGuard(router);
  app.mount("#app");
}
bootstrap();
