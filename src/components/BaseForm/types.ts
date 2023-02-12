export type BaseFormConfigType = {
  name: string;
  component: string;
  label?: string;
  props?: Record<any, any>;
  formItemProps?: Record<any, any>;
  defaultValue?: any;
  rules?: Array<any>;
  required?: boolean;
  formateKey?: Array<string>;
  formatter?: (arg: any) => any;
  methods?: any;
};
