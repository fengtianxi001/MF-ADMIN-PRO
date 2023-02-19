// import { isEmpty, size } from "lodash";
import { ref } from "vue";
import type { FileItem } from "../types";
import { useFileSystemSelector } from "./useFileSystemSelector";
import { useFileSystemData } from "./useFileSystemData";
export function useFileSystem() {
  const mode = ref<"grid" | "table">("grid");
  const { dataSource, currentPath, isEmptyData, loading, onChangeCurrentPath } =
    useFileSystemData();
  //全选按钮相关
  const { selected, isSelectAll, isSelectHalf, hasSelected, selectorActions } =
    useFileSystemSelector(dataSource);

  const focuesItem = ref<FileItem>();
  const onChangeFocusItem = (item: FileItem) => {
    console.log("inter");
    focuesItem.value = item;
  };
  return {
    mode,
    dataSource,
    currentPath,
    isEmptyData,
    focuesItem,
    loading,
    selected,
    isSelectAll,
    isSelectHalf,
    hasSelected,
    selectorActions,
    onChangeCurrentPath,
    onChangeFocusItem,
  };
}
