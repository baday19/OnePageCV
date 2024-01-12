import "./index.less"
import { useEffect, useState } from "react";
import { Editor } from "@/components/templates/Resume0/Editor";
import { RContent } from "@/components/templates/Resume0/RContent";
import { configType, defaultCVInfo } from "./config";
import { copyToClipboard } from "@/utils/utils";

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

  const [config, setConfig] = useState(cvInfo.config)

  const [baseInfo, setBaseInfo] = useState(cvInfo.baseInfo)

  const [experiences, setExperiences] = useState(cvInfo.experiences)

  useEffect(() => {
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
  }, [config])

  const convertExperiences = () => {
    const res: any[] = []
    experiences.forEach((item, index) => {
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