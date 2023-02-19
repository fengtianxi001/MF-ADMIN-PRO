import { computed, inject, ref, watch } from "vue";
import type { BaseFileProvider, FileItem } from "../types";
import { useFileSystemBaseItem } from "./useFileSystemBaseItem";

export function useFileSystemGridItem(data: FileItem) {
  const isItemCheck = ref(false);
  const isFocus = ref(false);
  const isHeaderShow = computed(() => isItemCheck.value || isFocus.value);
  // const proviceFormParent = inject<BaseFileProvider>("base-file");
  const { proviceFormParent, onOpen } = useFileSystemBaseItem();
  const selectedKeys = computed(() => {
    const selected = proviceFormParent?.selected;
    if (selected?.value) {
      return selected.value.map((item) => item.id);
    } else {
      return [];
    }
  });

  watch(
    selectedKeys,
    (selected) => {
      if (!selected) return void 0;
      isItemCheck.value = selected.includes(data.id);
    },
    {
      immediate: true,
      deep: true,
    }
  );
  const onMouseEnter = (e: MouseEvent) => {
    e.stopPropagation();
    proviceFormParent?.onChangeFocusItem(data);
    isFocus.value = true;
  };
  const onMouseLeave = (e: MouseEvent) => {
    e.stopPropagation();
    isFocus.value = false;
  };
  const onContextMenu = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    proviceFormParent?.onAddSelected(data);
  };
  const onToggleChecked = (value: any) => {
    if (value) {
      proviceFormParent?.onAddSelected(data);
    } else {
      proviceFormParent?.onRemoveSelected(data);
    }
  };

  return {
    isItemCheck,
    isHeaderShow,
    proviceFormParent,
    selectedKeys,
    onMouseEnter,
    onMouseLeave,
    onContextMenu,
    onToggleChecked,
    onOpen,
  };
}
