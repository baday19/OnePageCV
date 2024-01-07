import "./index.less"
import { useState } from "react";
import { Editor } from "@/components/templates/Resume0/Editor";
import { RContent } from "@/components/templates/Resume0/RContent";
import { defaultExperiences, defaultBaseInfo, defaultConfig } from "./config";

const Index = () => {

  const [config, setConfig] = useState(defaultConfig)

  const [experiences, setExperiences] = useState(defaultExperiences)

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
        item.data.map(it => {
          res.push(it)
        })
      }
    })
    return res
  }

  const [baseInfo, setBaseInfo] = useState(defaultBaseInfo)

  return (
    // when you print your resume, this dom will be print(except 'opcv-editor-container')
    // so do not change 'className'
    // id: use the name of your resume template
    <div id="resume0" className="opcv-main">
      {/* donot change 'id' */}
      <div id="opcv-paper-container">
        <RContent experiences={convertExperiences()} baseInfo={baseInfo} isLeft={config.isLeft} isHeaderShow={config.isHeaderShow} titleType={config.titleType} />
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
            onConfigChange={(e)=>{
              setConfig(e)
            }}
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