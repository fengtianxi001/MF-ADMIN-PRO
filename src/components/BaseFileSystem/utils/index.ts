import ai from "../assets/icons/ai.png";
import def from "../assets/icons/default.png";
import doc from "../assets/icons/doc.png";
import exe from "../assets/icons/exe.png";

import folder from "../assets/icons/folder.png";
import html from "../assets/icons/html.png";
import image from "../assets/icons/image.png";
import music from "../assets/icons/music.png";
import pdf from "../assets/icons/pdf.png";
import ppt from "../assets/icons/ppt.png";

import psd from "../assets/icons/psd.png";
import ttf from "../assets/icons/ttf.png";
import txt from "../assets/icons/txt.png";
import video from "../assets/icons/video.png";
import xls from "../assets/icons/xls.png";
import zip from "../assets/icons/zip.png";

export const fileIconEnum = [
  {
    ext: ["ai"],
    icon: ai,
  },
  {
    ext: ["doc", "docx"],
    icon: doc,
  },
  {
    ext: ["exe"],
    icon: exe,
  },
  {
    ext: ["html", "htm"],
    icon: html,
  },
  {
    ext: ["jpg", "jpeg", "png", "gif", "bmp", "svg"],
    icon: image,
  },
  {
    ext: ["mp3", "wav", "wma", "aac", "flac", "ape", "ogg", "m4a"],
    icon: music,
  },
  {
    ext: ["pdf"],
    icon: pdf,
  },
  {
    ext: ["ppt", "pptx"],
    icon: ppt,
  },
  {
    ext: ["psd"],
    icon: psd,
  },
  {
    ext: ["ttf"],
    icon: ttf,
  },
  {
    ext: ["txt"],
    icon: txt,
  },
  {
    ext: [
      "mp4",
      "avi",
      "rmvb",
      "rm",
      "flv",
      "3gp",
      "mkv",
      "mov",
      "wmv",
      "mpg",
      "mpeg",
    ],
    icon: video,
  },
  {
    ext: ["xls", "xlsx"],
    icon: xls,
  },
  {
    ext: ["zip", "rar", "7z", "gz", "tar", "bz2"],
    icon: zip,
  },
  {
    ext: ["folder"],
    icon: folder,
  },
];

export const getFileIcon = (ext: string | undefined) => {
  if (!ext) return def;
  const fileIcon = fileIconEnum.find((item) => item.ext.includes(ext));
  return fileIcon ? fileIcon.icon : def;
};
