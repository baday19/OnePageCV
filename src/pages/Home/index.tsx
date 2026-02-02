import Menu from "@/pages/Home/components/Menu"
import Preview from "@/pages/Home/components/Preview"
import PreviewHeader from "@/pages/Home/components/PreviewHeader"
import type { ResumeData, ResumeSchema } from "@/components/Renderer/config"
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
            type: 'rich',
            value: ['浙江大学']
          }
        ]
      }
    },
    {
      id: 4,
      componentType: "commonExperienceModule",
      props: {
        title: "项目经历",
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
            type: 'rich',
            value: ['<p>浙江大学</p><p><strong>你好</strong></p>']
          }
        ]
      }
    },
    {
      id: 5,
      componentType: "commonExperienceModule",
      props: {
        title: "专业技能",
        items: [
          {
            type: 'rich',
            value: ['<p>浙江大学</p><p><strong>你好</strong></p>']
          },
        ]
      }
    }
  ],
  metadata: {
    default: {
      profile: { id:1, componentType: 'commonProfileModule', option: {} },
      experience: { id:1, componentType: 'commonExperienceModule', option: {} }
    }
  }
}

export const defaultUserInfo = {
  name: 'OnePageCV',
  phone: '19977883344',
  email: 'dengle@zju.edu.cn',
  homepage: 'github.com/baday19',
  education: [
    {
      school: '浙江大学',
      start: '2023年09月',
      end: '2025年04月',
      major: '软件工程',
      degree: '硕士',
      college: '软件学院',
      content: '荣誉奖项: 优秀毕业研究生、好罡创新创业奖学金、一等学业优秀奖助金、优秀研究生、五好研究生'
    },
    {
      school: '西北工业大学',
      start: '2019年09月',
      end: '2023年07月',
      major: '软件工程',
      degree: '本科',
      college: '软件学院',
      content: '荣誉奖项: 优秀毕业⽣、科为奖学⾦、⼀等奖学⾦、全国软件测试⼤赛⼆等奖、中国⼤学⽣计算机设计⼤赛省级⼀等奖'
    }
  ],
  work: [
    {
      company: 'XX计算机系统有限公司',
      start: '2025年06月',
      end: '2025年08月',
      city: '深圳',
      department: 'XXX产业事业群-XX部门',
      position: '大模型应用',
      content: '简短介绍公司与自己负责的任务，分条罗列在什么项目中，通过某些动作或技能达到可量化的结果。'
    },
    {
      company: 'XX科技集团股份有限公司',
      start: '2024年09月',
      end: '2025年04月',
      city: '杭州',
      department: 'XXX产业事业群-XX部门',
      position: '学术研究',
      content: '简短介绍公司与自己负责的任务，分条罗列在什么项目中，通过某些动作或技能达到可量化的结果'
    }
  ],
  project: [
    {
      name: '',
      role: '',
      department: '',
      city: '',
      start: '',
      end: '',
      content: '简短介绍公司与自己负责的任务，分条罗列在什么项目中，通过某些动作或技能达到可量化的结果'
    }
  ],
  skill: ''
}

export interface OutletContextProps {
  configData: ConfigDataProps;
  setConfigData: (data: ConfigDataProps) => void;
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

const Home = () => {

  const [resumeData, setResumeData] = useState<ResumeData>(defaultSchema)
  const [configData, setConfigData] = useState<ConfigDataProps>(defaultConfigData)
  // 记录正在使用的各种模块的样式

  useEffect(() => {
    changeRootStyle("--paper-line-spacing", `${configData.lineSpacing}mm`)
    changeRootStyle("--paper-line-height", `${configData.lineHeight}mm`)
    changeRootStyle("--theme-color", configData.themeColor)
    changeRootStyle("--border-color", configData.borderColor)
    changeRootStyle("--paper-font-family", configData.fontFamily)
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
            <div className="print-reset shadow"
              style={{
                fontFamily: configData.fontFamily
              }}
            >
              <Preview schema={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home