import PanelHeader from "@/components/PanelHeader"
import { defaultUserInfo } from "@/pages/Home"
import { resolveValue } from "@/utils/utils"
import { profileStyleList, experienceStyleList, type StyleProps } from "./config"
import { useState } from "react"
import type { ResumeSchema } from "@/components/Renderer/config"
import RoundedMenu from "@/components/RoundedMenu"
import { SparklesIcon, PaintBrushIcon } from "@heroicons/react/24/outline"
import BlockTitle from "@/components/BlockTitle"

// const componentTypeList = ['全部', '自定义',]

interface TemplatePanelProps {
  resumeData: ResumeSchema;
  onChange: (e: ResumeSchema) => void;
}

const CustomPanel = ({
  profile = -1,
  experience = -1,
  onChangeProfile = (id: number) => { },
  onChangeExperience = (id: number) => { },
}) => {
  return (
    <div>
      <div className="mb-4">
        {/* 基本信息 */}
        <BlockTitle text="基本信息" className="mb-3" iconClassName="bg-blue-500" />
        <div
          className="flex gap-3"
        >
          {
            profileStyleList.map((item, index) => {
              return (
                <div
                  key={index}
                  className=""
                  onClick={() => {
                    onChangeProfile(item.id)
                  }}
                >
                  <img
                    className={`rounded-md border ${profile === item.id ? 'border-blue-400' : 'border-gray-200'}`}
                    src={item.picture} alt={item.title} />
                  <div className="mt-2 text-center">{item.title}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="mb-4">
        {/* 模块样式 */}
        <BlockTitle text="经历模块" className="mb-3" iconClassName="bg-purple-500" />
        <div
          className="flex gap-3"
        >
          {
            experienceStyleList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1"
                  onClick={() => {
                    onChangeExperience(item.id)
                  }}
                >
                  <img
                    className={`rounded-md border ${experience === item.id ? 'border-blue-400' : 'border-gray-200'}`}
                    src={item.picture} alt={item.title} />
                  <div className="mt-2 text-center">{item.title}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const TemplatePanel = ({
  resumeData,
  onChange
}: TemplatePanelProps) => {
  const [activeType, setActiveType] = useState(1)

  const profileId = resumeData.metadata?.default?.profile?.id ?? -1
  const experienceId = resumeData.metadata?.default?.experience?.id ?? -1

  const handleProfileChange = (val: number) => {
    
  }

  const handleExperienceChange = (val: number) => {

  }

  // 这一层需要把整个新的resumeData onChange
  const handleTemplateChange = (newResume: ResumeSchema) => {
    onChange(newResume)
  }

  const componentTypeList = [
    {
      label: '全部',
      value: (<div></div>),
      icon: SparklesIcon
    },
    {
      label: '自定义',
      value: <CustomPanel profile={profileId} experience={experienceId} onChangeExperience={handleExperienceChange} onChangeProfile={handleProfileChange} />,
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