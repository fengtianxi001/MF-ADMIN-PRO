import { Api } from "@/apis/table";
import { uniqueId } from "lodash";
const config = {
  [Api.GetTablePage]: () => {
    return {
      data: new Array(10).fill(0).map((item, index) => ({
        id: uniqueId(),
        name: `工程${index}`,
        principal: `肛肠科冯主任`,
        code: `#${index}`,
        category: `类别${index}`,
        scale: `规模${index}`,
        organization: `组织${index}`,
        status: Math.round(Math.random() * 1),
        createTime: new Date().getTime(),
      })),
      current: 1,
      size: 10,
      total: 100,
    };
  },
  [Api.GetTableDetail]: () => {
    return {
      id: uniqueId(),
      name: `工程1`,
      principal: `肛肠科冯主任`,
      code: `#1`,
      category: `类别1`,
      scale: `规模1`,
      organization: `组织1`,
      status: 1,
      createTime: new Date().getTime(),
    };
  },
  [Api.AddTableItem]: () => {
    return true;
  },
  [Api.UpdateTableItem]: () => {
    return true;
  },
  [Api.DeleteTableItem]: () => {
    return true;
  },
};
export default config;
