import type { ResumeSchema } from "@/components/Renderer/core";
import type { ConfigDataProps } from "@/types/config";

export interface ResumeStorage {
  id: number;
  name: string;
  updateTime: number;
  resume: ResumeSchema;
  config: ConfigDataProps;
}

export const getResumeList = () => {
  const list = localStorage.getItem("resumeList");
  return list ? JSON.parse(list) : [];
};

export const updateResumeList = (list: ResumeStorage[]) => {
  localStorage.setItem("resumeList", JSON.stringify(list));
};


export const updateResume = (resume: ResumeStorage) => {
  const list = getResumeList();
  const index = list.findIndex((item: ResumeStorage) => item.id === resume.id);
  if (index === -1) {
    list.push(resume);
  } else {
    list[index] = resume;
  }
  updateResumeList(list);
  return list;
};

export const removeResume = (id: number) => {
  const list = getResumeList();
  const index = list.findIndex((item: ResumeStorage) => item.id === id);
  if (index !== -1) {
    list.splice(index, 1);
  }
  updateResumeList(list);
  return list;
};

export const getResume = (id: number) => {
  const list = getResumeList();
  const index = list.findIndex((item: ResumeStorage) => item.id === id);
  return index !== -1 ? list[index] : null;
};
