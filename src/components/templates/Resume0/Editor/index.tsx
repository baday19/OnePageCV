import "./index.less"
import { useState } from 'react'
import { BaseInfoEditor } from "./base_info_editor";
import { ExperiencesEditor } from "./experiences_editor";




interface EditorProps {
  onBaseInfoChange: (baseInfo: any) => void;
  onExperiencesChange: (experences: any) => void;
  baseInfo: {
    name: string;
    infoList: string[];
    photo: string;
    schoolLogo: string
  };
  experiences: any[]
}
export const Editor = ({
  onBaseInfoChange,
  onExperiencesChange,
  baseInfo,
  experiences,
}: EditorProps) => {
  const handleInput = (e: any) => {
    console.log(e.target.value)
  }

  const [paper, setPaper] = useState([])

  const handleClick = () => {
    const data = [
      {
        title: '教育经历',
        data: [
          {
            className: 'line-two-sides',
            value: [
              { className: 'bold-text', value: '浙江大学' }, { className: 'normal-text', value: '2023年09月 - 2026年04月' }
            ]
          },
          {
            className: 'line-normal',
            value: '软件工程 硕士'
          },
          {
            className: 'line-normal',
            value: 'GPA：92.5 / 100'
          },
          {
            className: 'line-normal',
            value: '相关课程：面向对象系统分析和设计、智能移动应用开发技术、智能化软件质量保证、软件测试技术、数据可视化技术'
          },
          {
            className: 'line-two-sides',
            value: [
              { className: 'bold-text', value: '西北工业大学' }, { className: 'normal-text', value: '2019年09月 - 2023年06月' }
            ]
          },
          {
            className: 'line-normal',
            value: '软件工程 本科'
          },
          {
            className: 'line-normal',
            value: 'GPA：3.58 / 4.10（专业前10）'
          },
          {
            className: 'line-normal',
            value: '荣誉奖项：科为奖学金（年级仅2位）、一等奖学金、全国大学生软件测试大赛全国二等奖、中国大学生计算机设计大赛省级一等奖'
          }
        ]
      },
      {
        title: '专业技能',
        data: [
          {
            className: 'line-normal',
            type: 'li',
            value: '熟悉'
          }
        ]
      }
    ]
    onExperiencesChange(data)
  }

  return (
    <div id='resume0-editor'>
      <BaseInfoEditor onBaseInfoSubmit={onBaseInfoChange} baseInfo={baseInfo} />
      <ExperiencesEditor onExperiencesSubmit={onExperiencesChange} experiences={experiences} />
    </div>
  )
}