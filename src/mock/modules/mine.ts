import { Api } from "@/apis/mine";

const config = {
  [Api.GetMineDevicePage]: () => {
    return {
      data: new Array(10).fill(0).map((item, index) => ({
        id: new Date().getTime(),
        code: `#${index}`,
        name: `设备${index}`,
        model: `型号${index}`,
        brand: `品牌${index}`,
        category: `类别${index}`,
        sequence: `序列号${index}`,
        level: `等级${index}`,
        number: 10,
        department: `部门${index}`,
        storager: `入库人${index}`,
        storageTime: new Date().getTime(),
        purchaseTime: new Date().getTime(),
        status: 1,
        remark: `备注${index}`,
      })),
      current: 1,
      size: 10,
      total: 100,
    };
  },
  [Api.GetMineDeviceDetail]: () => {
    return {
      id: new Date().getTime(),
      code: `#1`,
      name: `设备1`,
      model: `型号1`,
      brand: `品牌1`,
      category: `类别1`,
      sequence: `序列号1`,
      level: `等级1`,
      number: 10,
      department: `部门1`,
      storager: `保管人1`,
      storageTime: new Date().getTime(),
      purchaseTime: new Date().getTime(),
      status: 1,
      remark: `备注1`,
    };
  },
};
export default config;
