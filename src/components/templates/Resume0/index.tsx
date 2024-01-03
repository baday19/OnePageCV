import SchoolLogo from '@/assets/logo.jpg'
import Photo from '@/assets/photo.jpg'
import "./index.less"
import { useState } from 'react'

export const RContent = ({
  paper = []
}) => {

  const convertArr2Dom = (paper: any[]) => {
    return paper.map((item: any) => {
      return (
        <div className="common-info">
          <div className="common-title">
            {item.title}
          </div>
          {
            item.data.map((line: any) => {
              if (line.className === 'line-two-sides') {
                return (
                  <div className="line-two-sides">
                    <div className={line.value[0].className}>{line.value[0].value}</div>
                    <div className={line.value[1].className}>{line.value[1].value}</div>
                  </div>
                )
              } else if (line.className === 'line-normal') {
                return line.type === 'li' ? <li className="line-normal">{line.value}</li> :
                  <div className="line-normal">{line.value}</div>

              }
            })
          }
        </div>
      )
    })
  }

  return (
    <div id="resume0">
      <div className="header"></div>
      <div className="main">
        <div className="base-info">
          <div className="school-logo">
            <img src={SchoolLogo} alt="学校" style={{ height: '100%' }} />
          </div>
          <div className="personal-info">
            <div className="name">邓乐</div>
            <div className="more">15978018778 | dengle@zju.edu.cn</div>
          </div>
          <div className="photo">
            <img src={Photo} alt="照片" style={{ width: '100%' }} />
          </div>
        </div>
        {/* 教育经历 */}
        {
          convertArr2Dom(paper)
        }
        {/* 实习经历 */}
        <div className="common-info">
          <div className="common-title">
            实习经历
          </div>
          <div className="line-two-sides">
            <div className="bold-text">华为技术有限公司</div>
            <div className="normal-text">2022年07月 - 2022年09月</div>
          </div>
          <div className="line-two-sides">
            <div className="normal-text">通用软件开发工程师（实习） 终端BG软件集成与维护部</div>
            <div className="normal-text">西安</div>
          </div>
          <div className="line-normal">针对搭载HarmonyOS的手机、平板、电脑、音响、智慧屏等进行缺陷漏洞调研测试，负责维护和升级HarmonyOS中的互联互通能力。</div>
        </div>
        {/* 项目经历 */}
        <div className="common-info">
          <div className="common-title">
            项目经历
          </div>
          <div className="line-two-sides">
            <div className="bold-text">智慧校园招生项目</div>
            <div className="normal-text">2022年10月 - 2023年02月</div>
          </div>
          <div className="line-normal">前端开发工程师</div>
          <li className="line-normal">使用技术：React+Taro+styled-components+jotai</li>
          <li className="line-normal">项目描述：智慧校园招生项目部署于微信小程序平台，由“探星者 AI志愿”和若干个高校“招生办”组成。“探星者”为用户提供高校信息查询和志愿智能推荐等功能；“招生办”为学生提供高校详细信息。小程序最高用户量已达3.6万。</li>
          <li className="line-normal">责任描述：负责“探星者”的整体架构，负责其大学查询模块、AI选大学模块；负责西工大、西安文理学院、陕西学前师范学院招生办小程序的开发。</li>
          <div className="line-two-sides">
            <div className="bold-text">全国大学生软件创新大赛官网</div>
            <div className="normal-text">2021年09月 - 2021年11月</div>
          </div>
          <div className="line-normal">前端开发工程师</div>
          <li className="line-normal">使用技术：Vue+ElementUI</li>
          <li className="line-normal">项目描述：全国大学生软件创新大赛的官方网站，用于提供比赛介绍、最新动态等信息并为所有参赛选手提供队伍及作品管理功能。该系统于第十五、十六届使用。</li>
          <li className="line-normal">责任描述：负责前端项目的整体搭建（路由配置、网络请求封装等），负责用户信息模块、队伍管理模块和作品管理模块，负责页面的响应式布局。</li>
        </div>
        {/* 专业技能 */}
        <div className="common-info">
          <div className="common-title">
            专业技能
          </div>
          <li className='line-normal'>熟悉JS/TS、HTML、CSS等前端开发语言，能熟练使用React及Vue等MVVN框架</li>
          <li className='line-normal'>熟悉微信小程序开发，能熟练使用原生框架及Taro进行开发</li>
          <li className='line-normal'>熟悉Linux的使用，了解docker和nginx等工具的使用</li>
          <li className='line-normal'>熟练使用Git工具，有丰富的团队协作开发经验</li>
          <li className='line-normal'>掌握计算机基础知识，如计算机网络、计算机操作系统等</li>
        </div>
      </div>
    </div>
  )
}

export const EditBox = ({
  onPaperChange = (paper:any) => {}
}) => {
  const handleInput = (e: any) => {
    console.log(e.target.value)
  }

  const [paper, setPaper] = useState([])

  const handleClick = () => {
    const paper = [
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
    onPaperChange(paper)
  }

  return (
    <div id='edit0'>
      <div className="edit-item">
        <div className="title-line">
          <input type="text" />
          <div className="visible-btn">1</div>
        </div>
        <div className="editor-two-sides">
          <input type="text" />
          <input type="text" />
        </div>
        <div className="editor-normal">
          <input type="text" />
          <div className='is-li'>1</div>
        </div>
      </div>
      <div className="edit-add-btn">添加</div>
      <div onClick={handleClick}>test</div>
    </div>
  )
}