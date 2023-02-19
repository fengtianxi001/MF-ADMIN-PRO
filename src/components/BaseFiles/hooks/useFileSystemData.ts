import { isEmpty, uniqueId } from "lodash";
import { ref, computed, watch } from "vue";
import type { FileItem } from "../types";
export function useFileSystemData() {
  //当前目录下的文件
  const dataSource = ref<FileItem[]>([]);
  //当前所在的地址
  const currentPath = ref<string>("/");
  const loading = ref<boolean>(false);
  const isEmptyData = computed(() => isEmpty(dataSource.value));
  watch(
    currentPath,
    async () => {
      loading.value = true;
      dataSource.value = await service(currentPath.value);
      loading.value = false;
    },
    {
      immediate: true,
    }
  );
  const onChangeCurrentPath = (path: string) => {
    currentPath.value = path;
  };
  return {
    dataSource,
    currentPath,
    loading,
    isEmptyData,
    onChangeCurrentPath,
  };
}

const service = (path: string): Promise<FileItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: uniqueId(),
          type: "folder",
          name: "我的文件夹",
          path: "/我的文件夹",
          suffix: "",
          parent: "/",
          size: 0,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "浏览地球",
          path: "/我的祖国.mp4",
          suffix: "mp4",
          parent: "/",
          size: 1000,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "难忘今宵",
          path: "/难忘今宵.mp3",
          suffix: "mp3",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "图标工程文件",
          path: "/图标工程文件.ai",
          suffix: "ai",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "设计海报",
          path: "/设计海报.pad",
          suffix: "psd",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "母猪的产后护理",
          path: "/母猪的产后护理.pdf",
          suffix: "pdf",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "个人简历",
          path: "/个人简历.doc",
          suffix: "doc",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "得意黑",
          path: "/得意黑.ttf",
          suffix: "ttf",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "随手记",
          path: "/随手记.txt",
          suffix: "txt",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "学习资料",
          path: "/学习资料.zip",
          suffix: "zip",
          parent: "/",
          size: 500000,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "前端开发计划",
          path: "/前端开发计划.xls",
          suffix: "xls",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "年度汇报",
          path: "/年度汇报.ppt",
          suffix: "ppt",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
        {
          id: uniqueId(),
          type: "file",
          name: "谷歌浏览器",
          path: "/谷歌浏览器.exe",
          suffix: "exe",
          parent: "/",
          size: 500,
          createdTime: "2020-12-12 12:12:12",
        },
      ]);
    }, 1000);
  });
};
