import type { App } from "vue";
import { setupLoadingDirective } from "./loading";
import { setupEmptyDirective } from "./empty";

export function setupGlobDirectives(app: App) {
  setupLoadingDirective(app);
  setupEmptyDirective(app);
}
