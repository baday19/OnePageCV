import { UserIcon, AcademicCapIcon, BriefcaseIcon, BoltIcon, BeakerIcon, FolderIcon } from "@heroicons/react/24/outline";
import type { ModuleType } from "@/pages/Editor/template";

export type CssNamedColor = 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple' | 'indigo' | 'pink'

// 预设一些logo+颜色,通过匹配title关键词来使用
export const logoPresets: Record<ModuleType, any> = {
  profile: { keyword: ['基本信息', '个人信息', '基础信息'], icon: UserIcon, iconColor: 'blue' },
  education: { keyword: ['教育经历', '教育背景', '在校经历', '校园经历', '学习经历'], icon: AcademicCapIcon, iconColor: 'green' },
  work: { keyword: ['工作经历', '实习经历', '实践经历', '研究经历'], icon: BriefcaseIcon, iconColor: 'purple' },
  skill: { keyword: ['专业技能'], icon: BoltIcon, iconColor: 'cyan' },
  project: { keyword: ['项目经历'], icon: FolderIcon, iconColor: 'pink' },
  custom: { keyword: [], icon: BeakerIcon, iconColor: 'yellow' },
};

export function matchLogoPreset(title: string) {
  const titleLower = title.toLowerCase();
  for (const key in logoPresets) {
    const preset = logoPresets[key as ModuleType];
    if (preset.keyword.some((keyword: string) => titleLower.includes(keyword))) {
      return preset;
    }
  }
  return logoPresets.custom;
}