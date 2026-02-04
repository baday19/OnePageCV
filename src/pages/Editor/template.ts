import type { NodeType } from "@/components/Renderer/core";
const profiles: string[] = Object.values(import.meta.glob('@/assets/images/profile_*.png', {
  eager: true,
  import: 'default'
}))

const experiences: string[] = Object.values(import.meta.glob('@/assets/images/experience_*.png', {
  eager: true,
  import: 'default'
}))


export interface StyleProps {
  title: string;
  componentType: NodeType;
  picture: string;
}

export const profileStyleList: StyleProps[] = [
  {
    title: '校徽-信息-照片',
    componentType: 'commonProfileModule0',
    picture: profiles[0],
  },
  {
    title: '信息',
    componentType: 'commonProfileModule1',
    picture: profiles[1],
  },
  {
    title: '信息-照片',
    componentType: 'commonProfileModule2',
    picture: profiles[2],
  },
  {
    title: '照片-信息',
    componentType: 'commonProfileModule3',
    picture: profiles[3],
  },
  {
    title: '校徽-信息-照片(无强调线)',
    componentType: 'commonProfileModule4',
    picture: profiles[4],
  },
  {
    title: '信息(无强调线)',
    componentType: 'commonProfileModule5',
    picture: profiles[5],
  },
  {
    title: '信息-照片(无强调线)',
    componentType: 'commonProfileModule6',
    picture: profiles[6],
  },
  {
    title: '照片-信息(无强调线)',
    componentType: 'commonProfileModule7',
    picture: profiles[7],
  }
]


export const experienceStyleList: StyleProps[] = [
  {
    title: '简约',
    componentType: 'commonExperienceModule0',
    picture: experiences[0],
  },
  {
    title: '简约1',
    componentType: 'commonExperienceModule1',
    picture: experiences[1],
  },
]

export type ModuleType = 'work' | 'project' | 'education' | 'skill' | 'profile' | 'custom'