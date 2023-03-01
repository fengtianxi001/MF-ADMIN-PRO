import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { some, filter, size, isEmpty } from "lodash";

export interface FileItem {
  id: string;
  ext: string;
  name: string;
  path: string;
  size: number;
  isFile: boolean;
  parentId: string;
  createTime: number;
  updateTime: number;
}

export const useFileSystem = defineStore("file-system", () => {
  const mode = ref<"grid" | "list">("grid");
  const loading = ref(false);
  const fileList = ref<FileItem[]>([]);
  const focusItem = ref<FileItem>();
  const selectedItem = ref<FileItem[]>([]);
  const currentItem = ref<FileItem>();

  const isCompleteSelected = computed(() => {
    return (
      size(fileList.value) === size(selectedItem.value) &&
      !isEmpty(selectedItem.value)
    );
  });
  const isEmptySelected = computed(() => {
    return isEmpty(selectedItem.value);
  });

  const addSelected = (file: FileItem) => {
    const isExsit = some(selectedItem.value, ["id", file.id]);
    !isExsit && selectedItem.value.push(file);
  };
  const removeSelected = (file: FileItem) => {
    const rest = filter(selectedItem.value, (i) => i.id !== file.id);
    selectedItem.value = rest;
  };
  const clearSelected = () => {
    selectedItem.value = [];
  };
  const toggleSelected = (payload: boolean) => {
    const reset = payload ? [] : [...fileList.value];
    selectedItem.value = reset;
  };
  const completeSelected = () => {
    selectedItem.value = [...fileList.value];
  };
  const fetchFileList = async (path: string) => {};

  const actions = {
    onFileUpload: () => {},
    onFileDelete: () => {},
    onSelectedItemDelete: () => {},
    onSelectedItem: () => {},
  };

  return {
    mode,
    loading,
    fileList,
    focusItem,
    selectedItem,
    currentItem,
    isCompleteSelected,
    isEmptySelected,
    addSelected,
    removeSelected,
    clearSelected,
    toggleSelected,
    completeSelected,
    fetchFileList,
  };
});
