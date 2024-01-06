import "./index.less"

interface RContentProps {
  baseInfo: {
    name: string;
    infoList: string[];
    photo: string;
    schoolLogo: string
  };
  experiences: any[]
}

export const RContent = ({
  baseInfo,
  experiences
}: RContentProps) => {

  const handleExperiences = (experiences: any) => {
    console.log(experiences)
    return experiences.map((line: any) => {
      if (line.className === 'line-title') {
        return (
          <div className="line-title">
            {line.value[0].value}
          </div>
        )
      } else if (line.className === 'line-two-sides') {
        return (
          <div className="line-two-sides">
            {
              line.value.map((item: any, index: number) => {
                const className = line.value.length >= 2 && index == 0 ? 'bold-text' : 'line-normal'
                return (item.type && item.type === 'li') ? <li key={index} className={item.className}>{item.value}</li> :
                  <div key={index} className={className}>{item.value}</div>
              })
            }

            {/* <div className={line.value[1].className}>{line.value[1].value}</div> */}
          </div>
        )
      }
    })
  }

  return (
    <div id="resume0-content">
      <div className="header"></div>
      <div className="main">
        <div className="base-info">
          <div className="school-logo">
            {
              baseInfo.schoolLogo && <img src={baseInfo.schoolLogo} alt="学校" style={{ height: '100%' }} />
            }
          </div>
          <div className="personal-info">
            <div className="name">{baseInfo.name}</div>
            {
              baseInfo.infoList.map((item, index) => {
                return (
                  <div className="more" key={index}>{item}</div>
                )
              })
            }
          </div>
          <div className="photo">
            {
              baseInfo.photo ?
                <img src={baseInfo.photo} alt="照片" style={{ width: '100%' }} /> :
                <div className='photo-block'>照片</div>
            }
          </div>
        </div>
        {/* 教育经历 */}
        {
          handleExperiences(experiences)
        }
        {/* 实习经历 */}
        {/* 项目经历 */}
        {/* 专业技能 */}
      </div>
    </div>
  )
}
