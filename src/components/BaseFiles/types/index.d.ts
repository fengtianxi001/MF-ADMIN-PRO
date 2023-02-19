import type { Ref } from "vue";

export interface FileItem {
  id: string;
  name: string;
  size: number;
  path: string;
  parent: string;
  type: "file" | "folder";
  suffix: string;
  createdTime: string;
}

export interface BaseFileProvider {
  mode: Ref<"grid" | "table">;
  selected: Ref<FileItem[]>;
  currentPath: Ref<string>;
  onAddSelected: (file: FileItem) => void;
  onRemoveSelected: (file: FileItem) => void;
  onClearSelected: () => void;
  onAllSelected: () => void;
  onToggleSelector: (value: boolean) => void;
  onChangeCurrentPath: (path: string) => void;
  onChangeFocusItem: (file: FileItem) => void;
}
