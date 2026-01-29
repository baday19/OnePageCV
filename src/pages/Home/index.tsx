import Menu from "@/components/Menu"
import Preview from "@/components/Preview"
import PreviewHeader from "@/components/PreviewHeader"
import type { NodeSchema } from "@/components/Renderer/config"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Photo from "@/assets/images/22351053.jpg"
import SchoolIcon from "@/assets/images/logo.jpg"
import { defaultConfigData, type ConfigDataProps } from "@/utils/types"
import { changeRootStyle } from "@/utils/utils"

// 能否编辑，再编辑组件渲染器里处理？
const defaultSchema: NodeSchema = {
  id: 0,
  componentType: "resume",
  children: [
    {
      id: 1,
      componentType: "commonProfileModule",
      props: {
        name: "邓乐",
        photo: Photo,
        schoolIcon: SchoolIcon,
        value: [["15978018778 | dengle@zju.edu.cn"], ['<a href="https://github.com/baday19">github.com/baday19</a>']],
      },
    },
    {
      id: 2,
      componentType: "commonExperienceModule",
      props: {
        title: "校园经历",
        value: [['浙江大学'], ["<b>浙江大学</b>", "2023.09 - 2026.03", "1231"]]
      }
    }
  ]
}

export interface OutletContextProps {
  configData: ConfigDataProps;
  setConfigData: (data: ConfigDataProps) => void;
  resumeData: NodeSchema;
  setResumeData: (data: NodeSchema) => void;
}

const Home = () => {

  const [resumeData, setResumeData] = useState<NodeSchema>(defaultSchema)
  const [configData, setConfigData] = useState<ConfigDataProps>(defaultConfigData)

  useEffect(() => {
    changeRootStyle("--paper-line-spacing", `${configData.lineSpacing}mm`)
    changeRootStyle("--paper-line-height", `${configData.lineHeight}mm`)
    changeRootStyle("--theme-color", configData.themeColor)
    changeRootStyle("--border-color", configData.borderColor)
  }, [configData])

  const handleExport = () => {
    window.print()
  }

  const handleStore = () => {

  }

  return (
    <main className="print-reset flex h-screen">
      {/* 左边区域 */}
      <div className="print-hidden flex-1 min-w-[210mm] border-r border-gray-300">
        <Menu />
        <Outlet context={{configData, setConfigData, resumeData, setResumeData}} />
      </div>
      {/* 右边区域 */}
      <div className="flex-1 min-w-[210mm] bg-gray-100">
        <PreviewHeader onExport={handleExport} onStore={handleStore} />
        <div className="print-reset h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="print-reset flex m-14 justify-center">
            <div className="print-reset shadow">
              <Preview schema={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home