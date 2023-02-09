export interface GetUserInfoModel {
  id: string;
  tenantId: string;
  isAdmin: number;
  account: string;
  mobile: any;
  email: any;
  name: string;
  userFaceInfo: {
    id: string;
    fileOriginName: string;
    filePathName: string;
    domainUrl: string;
  };
  gender: number;
  birthday: string;
  userStatus: number;
  lastLoginTime: string;
  lastLoginIp: string;
  createdTime: string;
  createdBy: string;
  updatedTime: string;
  expandInfo: any;
}

export interface GetTenantInfoModel {
  id: string;
  name: string;
  logoInfo: {
    id: string;
    fileOriginName: string;
    filePathName: string;
    domainUrl: string;
  };
}
