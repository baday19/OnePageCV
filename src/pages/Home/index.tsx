import Menu from "@/components/Menu"
import Preview from "@/components/Preview"
import PreviewHeader from "@/components/PreviewHeader"
import type { NodeSchema, ResumeSchema } from "@/components/Renderer/config"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Photo from "@/assets/images/22351053.jpg"
import SchoolIcon from "@/assets/images/logo.jpg"
import { defaultConfigData, type ConfigDataProps } from "@/utils/types"
import { changeRootStyle } from "@/utils/utils"


const defaultSchema: ResumeSchema = {
  id: 0,
  children: [
    {
      id: 1,
      componentType: "commonProfileModule",
      props: {
        name: "邓乐",
        photo: Photo,
        schoolIcon: SchoolIcon,
        items: [
          {
            type: 'single',
            value: ['15978018778 | dengle@zju.edu.cn']
          },
          {
            type: 'single',
            value: ['<a href="https://github.com/baday19">github.com/baday19</a>']
          }
        ],
        option: {
          hasSchoolIcon: true,
          hasPhoto: true,
          valuePosition: 'center',
          photoPosition: 'right'
        }
      },
    },
    {
      id: 2,
      componentType: "commonExperienceModule",
      props: {
        title: "校园经历",
        items: [
          {
            type: 'single',
            value: ['<b>浙江大学</b>']
          },
          {
            type: 'double',
            value: ['浙江大学', '2023.09 - 2026.03']
          },
          {
            type: 'sequence',
            value: ['浙江大学']
          }
        ]
      }
    },
    {
      id: 3,
      componentType: "commonExperienceModule",
      props: {
        title: "实习经历",
        items: [
          {
            type: 'single',
            value: ['<b>浙江大学</b>']
          },
          {
            type: 'double',
            value: ['浙江大学', '2023.09 - 2026.03']
          },
          {
            type: 'sequence',
            value: ['浙江大学']
          }
        ]
      }
    }
  ]
}

export const defaultUserInfo = {
  name: '邓乐',
  phone: '15978018778',
  email: 'dengle@zju.edu.cn',
  education: [
    {
      school: '浙江大学',
      start: '2023.09',
      end: '2025.04',
      major: '软件工程',
      degree: '硕士'
    },
    {
      school: '西北工业大学',
      start: '2019.09',
      end: '2023.07',
      major: '软件工程',
      degree: '本科'
    }
  ],
  work: [
    {
      company: '哈哈哈有限责任公司',
      start: '',
      end: '',
      city: '杭州',
      department: '',
      position: ''
    }
  ],
  skill: ['你好啊1', '你好啊2']
}

export interface OutletContextProps {
  configData: ConfigDataProps;
  setConfigData: (data: ConfigDataProps) => void;
  resumeData: ResumeSchema;
  setResumeData: (data: ResumeSchema) => void;
}

const Home = () => {

  const [resumeData, setResumeData] = useState<ResumeSchema>(defaultSchema)
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
        <Outlet context={{ configData, setConfigData, resumeData, setResumeData }} />
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