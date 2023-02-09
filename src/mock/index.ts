import { forEach } from "lodash";
import mock from "mockjs";

export async function setupMock() {
  mock.setup({ timeout: "600-1000" });
  const modules = import.meta.globEager("./modules/*.ts");
  forEach(modules, (module: any) => {
    if (!module.default) return void 0;
    setupModules(module.default);
  });
}

function successResponse(data: any) {
  return {
    data,
    success: true,
    message: "success",
  };
}

function setupModules(config: any) {
  Object.keys(config).forEach((key) => {
    mock.mock(new RegExp(key), () => successResponse(config[key]()));
  });
}
