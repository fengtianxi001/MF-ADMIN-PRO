import { Message } from "@arco-design/web-vue";
import { reduce } from "lodash";
import { inject } from "vue";
import type { BaseFileProvider, FileItem } from "../types";

const ACCEPT_FILE_TYPE = {
  video: ["mp4"],
  document: ["doc", "pdf"],
  music: ["mp3"],
  image: ["jpeg"],
};

const ACCEPT_FILE_TYPE_LIST = reduce(
  ACCEPT_FILE_TYPE,
  (prev, cur) => {
    prev.push(...cur);
    return prev;
  },
  [] as string[]
);

export function useFileSystemBaseItem() {
  const proviceFormParent = inject<BaseFileProvider>("base-file");

  const onOpen = (data: FileItem) => {
    console.log("onOpen");
    const isFolder = data.type === "folder";
    if (isFolder) {
      proviceFormParent?.onChangeCurrentPath(data.path);
    } else {
      const isAccept = ACCEPT_FILE_TYPE_LIST.includes(data.suffix);
      if (!isAccept) return Message.warning("此文件暂不支持在线预览");
    }
  };

  return {
    onOpen,
    proviceFormParent,
  };
}
