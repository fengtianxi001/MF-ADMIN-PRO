import { Api } from "@/apis/user";

const config = {
  [Api.Login]: () => ({ tokenValue: "5a9c6766-a7cb-44a6-9632-c186d94ef0f2" }),
  [Api.Logout]: () => true,
  [Api.GetUserInfo]: () => ({
    name: "fengtianxi001",
    email: "625362207@qq.com",
    avatar: "https://avatars.githubusercontent.com/u/12554487?v=4",
    introduction: "I am a super administrator",
    roles: ["admin"],
  }),
  [Api.GetPermission]: () => [
    "/table",
    "/form",
    "/apply",
    "/chart",
    "/disk",
    "/file-preview",
    "/rich-text",
    "/md",
    "/image-edit",
    "/org-tree",
    "/panorama",
    "/setup",
    "/cesium",
    "/threejs",
    "/log",
  ],
};
export default config;
