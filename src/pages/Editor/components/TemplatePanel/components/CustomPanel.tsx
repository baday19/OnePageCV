import BlockTitle from "@/components/BlockTitle"
import type { NodeType } from "@/components/Renderer/core"
import { experienceStyleList, profileStyleList } from "../../../../../config/template"

interface CustomPanelProps {
  profileType: NodeType | null;
  experienceType: NodeType | null;
  onChangeProfile: (type: NodeType) => void;
  onChangeExperience: (type: NodeType) => void;
}

const CustomPanel = ({
  profileType,
  experienceType,
  onChangeProfile,
  onChangeExperience,
}: CustomPanelProps) => {
  const containerClassName = "grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4";
  const imgCardClassName = "w-full overflow-hidden rounded-md border aspect-[5/2]";
  return (
    <div>
      <div className="mb-4">
        {/* 基本信息 */}
        <BlockTitle text="基本信息" className="mb-3" iconClassName="bg-blue-500" />
        <div
          className={containerClassName}
        >
          {
            profileStyleList.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    onChangeProfile(item.componentType)
                  }}
                >
                  <div className={`${imgCardClassName} ${profileType === item.componentType ? 'border-blue-400' : 'border-gray-200'}`}>
                    <img
                      className="w-full h-full object-cover"
                      src={item.picture} alt={item.title} />
                  </div>
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
          className={containerClassName}
        >
          {
            experienceStyleList.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    onChangeExperience(item.componentType)
                  }}
                >
                  <div className={`${imgCardClassName} ${experienceType === item.componentType ? 'border-purple-400' : 'border-gray-200'}`}>
                    <img
                      className="w-full h-full object-cover"
                      src={item.picture} alt={item.title} />
                  </div>
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

export default CustomPanel