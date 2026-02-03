import PanelHeader from "@/components/PanelHeader"
import { useState } from "react"
import type { NodeType, ResumeData, ResumeSchema } from "@/components/Renderer/core"
import RoundedMenu from "@/components/RoundedMenu"
import { SparklesIcon, PaintBrushIcon } from "@heroicons/react/24/outline"
import CustomPanel from "./components/CustomPanel"



interface TemplatePanelProps {
  resumeData: ResumeData;
  onChange: (e: ResumeSchema) => void;
}



const TemplatePanel = ({
  resumeData,
  onChange
}: TemplatePanelProps) => {
  const [activeType, setActiveType] = useState(1)

  const profileType = resumeData?.metadata.default.profile ?? null
  const experienceType = resumeData?.metadata.default.experience ?? null

  const handleComponentTypeChange = (type: NodeType, key: string = 'profile') => {
    const oldType = [profileType, experienceType][key === 'profile' ? 0 : 1];
    const newType = type;
    if (oldType === newType) return;
    const newResume = {
      ...resumeData,
      id: resumeData?.id ?? Date.now(),
      children: resumeData?.children.map((item) => {
        if (item.componentType === oldType) {
          return {
            ...item,
            componentType: newType
          }
        }
        return item
      }) ?? [],
      metadata: {
        ...resumeData?.metadata,
        default: {
          ...resumeData?.metadata.default,
          [key]: newType
        }
      }
    }
    onChange(newResume)
  }



  const componentTypeList = [
    {
      label: '预设模板',
      value: (<div></div>),
      icon: SparklesIcon
    },
    {
      label: '自定义模板',
      value: <CustomPanel profileType={profileType} experienceType={experienceType} onChangeExperience={(type) => handleComponentTypeChange(type, 'experience')} onChangeProfile={(type) => handleComponentTypeChange(type, 'profile')} />,
      icon: PaintBrushIcon
    },
  ]


  return (
    <div>
      <PanelHeader title="简历模板选择" desc="选择预设的简历模板或者自定义组装出您喜欢的模板样式" />
      <div className="text-sm">
        {/* 全部 or 自定义切换栏 */}
        <RoundedMenu
          className="my-6"
          active={activeType}
          items={componentTypeList}
          onChange={(_, index) => {
            setActiveType(index)
          }} />
        {/* 展示区 */}
        {
          componentTypeList.map((item, index) => {
            return (
              <div key={index} className={activeType === index ? "block" : "hidden"}>
                {item.value}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TemplatePanel