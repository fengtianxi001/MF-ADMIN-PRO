import { isEmpty, size } from "lodash";
import { ref, computed, type Ref } from "vue";
import type { FileItem } from "../types";

export function useFileSystemSelector(dataSource: Ref<FileItem[]>) {
  //已选中的文件
  const selected = ref<FileItem[]>([]);
  //是否全选
  const isSelectAll = computed(() => {
    return (
      size(selected.value) === size(dataSource.value) &&
      size(selected.value) > 0
    );
  });
  //是否半选
  const isSelectHalf = computed(() => {
    return size(selected.value) > 0 && !isSelectAll.value;
  });
  //是否有选中的文件
  const hasSelected = computed(() => isEmpty(selected.value));

  const selectorActions = {
    onAddSelected(file: FileItem) {
      const flag = selected.value.some((item) => item.id === file.id);
      if (!flag) selected.value.push(file);
    },
    onRemoveSelected(file: FileItem) {
      selected.value = selected.value.filter((item) => item.id !== file.id);
    },
    onClearSelected() {
      selected.value = [];
    },
    onAllSelected() {
      selected.value = [...dataSource.value];
    },
    onToggleSelector(value: boolean) {
      console.log("value", value);
      if (value) {
        selected.value = [...dataSource.value];
      } else {
        selectorActions.onClearSelected();
      }
    },
  };
  return {
    selected,
    isSelectAll,
    isSelectHalf,
    hasSelected,
    selectorActions,
  };
}
