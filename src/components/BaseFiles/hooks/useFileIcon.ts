import { computed, watch } from "vue";
import type { FileItem } from "../types";
import { getFileIcon } from "../utils";

export function useFileIcon(data: FileItem | undefined) {
  console.log("data", data);
  const icon = computed(() => {
    const ext = data?.type === "folder" ? "folder" : data?.suffix;
    return getFileIcon(ext);
  });
  return {
    icon,
  };
}
