import PanelHeader from "@/components/PanelHeader"
import { defaultUserInfo } from "@/pages/Home"
import { resolveValue } from "@/utils/utils"
import { useState } from "react"

const componentTypeList = ['信息模块', '经历模块']

const AddComponentPanel = () => {
  const [activeType, setActiveType] = useState(0)
  const activeButtonClass = 'bg-white rounded-full h-full'

  return (
    <div>
      <PanelHeader title="添加简历组件" desc="选择组件类型并选择您喜欢的风格后添加到简历中" />
      <div className="text-sm">
        <div
          className="my-4 flex bg-gray-200 h-9 items-center rounded-full w-full p-[3px] gap-2"
        >
          {
            componentTypeList.map(
              (item, index) =>
                <button
                  className={`flex-1 ${activeType === index && activeButtonClass}`}
                  onClick={() => setActiveType(index)}
                >
                  {item}
                </button>
            )
          }
        </div>
        <div>类型展示列表</div>
      </div>
    </div>
  )
}

export default AddComponentPanel