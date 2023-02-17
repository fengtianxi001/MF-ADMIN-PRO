export interface GetUserInfoModel {
  avatar: string;
  name: string;
  roles: string[];
  email: string;
  introduction: string;
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
