import type { ResumeSchema } from "@/components/Renderer/core";
import type { ConfigDataProps } from "@/types/config";

interface ResumeStorage {
  id: number;
  name: string;
  updateTime: number;
  resume: ResumeSchema;
  config: ConfigDataProps;
}

const getResumeStorageList = () => {
  const list = localStorage.getItem("resumeList");
  return list ? JSON.parse(list) : [];
};

const addResumeStorage = (resume: ResumeStorage, oldList: ResumeStorage[]) => {
  const list = [...oldList];
  const index = list.findIndex((item: ResumeStorage) => item.id === resume.id);
  if (index === -1) {
    list.push(resume);
  } else {
    list[index] = resume;
  }
  return list;
};

const removeResumeStorage = (id: number, oldList: ResumeStorage[] ) => {
  const list = [...oldList];
  const index = list.findIndex((item: ResumeStorage) => item.id === id);
  if (index !== -1) {
    list.splice(index, 1);
  }
  return list;
};

const saveResumeStorageList = (list: ResumeStorage[]) => {
  localStorage.setItem("resumeList", JSON.stringify(list));
};

export {
  getResumeStorageList,
  addResumeStorage,
  saveResumeStorageList,
  removeResumeStorage,
};

export type {
  ResumeStorage,
};