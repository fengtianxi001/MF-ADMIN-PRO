import { Api } from "@/apis/form";
const config = {
  [Api.GetFormBase]: () => {
    return {
      level: 1,
      size: 1,
      industry: 1,
      type: 1,
      status: 1,
      area: 1000,
      startDate: "2022/01/01",
      endDate: "2022/01/01",
      department: 1,
      structure: 1,
      price: 1000,
      baseType: 1,
      baseHeight: 100,
      monitorType: 0,
      certification: 0,
      maintOutlay: 1000,
      seismicGrade: 10,
    };
  },
};
export default config;
