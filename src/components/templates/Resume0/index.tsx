import "./index.less"
import { useEffect, useState } from "react";
import { Editor } from "@/components/templates/Resume0/Editor";
import { RContent } from "@/components/templates/Resume0/RContent";
import { configType } from "./config";
import { templates } from "./templates_data";
import { copyToClipboard } from "@/utils/utils";

const defaultCVInfo = templates[0].data
const Index = ({
  cvInfo = defaultCVInfo
}: {
  cvInfo?: {
    config: configType;
    baseInfo: any;
    experiences: {
      title: string;
      isShow: boolean;
      data: any[]
    }[];
  }
}) => {

  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('config');
      return saved ? JSON.parse(saved) : cvInfo.config;
    } catch {
      return cvInfo.config
    }
  })

  const [baseInfo, setBaseInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('baseInfo');
      return saved ? JSON.parse(saved) : cvInfo.baseInfo;
    } catch {
      return cvInfo.baseInfo
    }
  })

  const [experiences, setExperiences] = useState(() => {
    try {
      const saved = localStorage.getItem('experiences');
      return saved ? JSON.parse(saved) : cvInfo.experiences;
    } catch {
      return cvInfo.experiences
    }
  })

  useEffect(() => {
    localStorage.setItem('config', JSON.stringify(config))
    localStorage.setItem('baseInfo', JSON.stringify(baseInfo))
    localStorage.setItem('experiences', JSON.stringify(experiences))

    const docStyle = document.documentElement.style
    docStyle.setProperty(
      "--r-line-height", config.lineHeight + 'mm'
    )
    docStyle.setProperty(
      "--r-line-margin", config.lineMargin + 'mm'
    )
    docStyle.setProperty(
      "--r-theme-color", config.themeColor
    )
    docStyle.setProperty(
      "--r-border-color", config.borderColor
    )
  }, [config, baseInfo, experiences])

  const convertExperiences = () => {
    const res: any[] = []
    experiences.forEach((item: { isShow: boolean; title: string; data: any[]; }, index: number) => {
      if (item.isShow) {
        res.push(
          {
            className: 'line-title',
            value: [
              {
                className: 'line-title',
                value: item.title,
              },
            ],
            type: 'div'
          },
        )
        item.data.forEach(it => {
          res.push(it)
        })
      }
    })
    return res
  }

  const handleStore = () => {
    const data = {
      config,
      baseInfo,
      experiences
    }
    copyToClipboard(JSON.stringify(data))
    alert('已保存至剪切板（用于导入），请及时备份')
  }

  const handleImport = (e:any) => {
    setConfig(e.config)
    setBaseInfo(e.baseInfo)
    setExperiences(e.experiences)
  }



  return (
    // when you print your resume, this dom will be print(except 'opcv-editor-container')
    // so do not change 'className'
    // id: use the name of your resume template
    <div id="resume0" className="opcv-main">
      {/* donot change 'id' */}
      <div id="opcv-paper-container">
        <RContent experiences={convertExperiences()} baseInfo={baseInfo} config={config} />
      </div>
      {/* cannot change 'id', it will be none when print */}
      <div id="opcv-editor-container">
        <div className="edit-box">
          <Editor
            onBaseInfoChange={(e) => {
              setBaseInfo(e)
            }}
            onExperiencesChange={(e) => {
              // console.log(e)
              setExperiences(e)
            }}
            onConfigChange={(e) => {
              setConfig(e)
            }}
            onImport={handleImport}
            onStore={handleStore}
            baseInfo={baseInfo}
            experiences={experiences}
            config={config}
          />
        </div>
      </div>
    </div>
  )
}

export default Index