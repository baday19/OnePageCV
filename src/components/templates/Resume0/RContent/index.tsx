import "./index.less"

interface RContentProps {
  baseInfo: {
    name: string;
    infoList: string[];
    photo: string;
    schoolLogo: string;
  };
  experiences: any[];
  isLeft?: boolean;
  isHeaderShow?: boolean;
  titleType: number;
  hasPhoto: boolean;
}


export const RContent = ({
  baseInfo,
  experiences,
  isLeft = false,
  isHeaderShow = true,
  titleType,
  hasPhoto,
}: RContentProps) => {

  const handleExperiences = (experiences: any) => {
    console.log(experiences)
    return experiences.map((line: any) => {
      if (line.className === 'line-title') {
        return (
          <div className={`line-title${titleType}`}>
            <div className="title-main">{line.value[0].value}</div>
            <div className="title-hr" />
          </div>
        )

      } else if (line.className === 'line-two-sides') {
        return (
          <div className="line-two-sides">
            {
              line.value.map((item: any, index: number) => {
                const className = line.value.length >= 2 && index === 0 ? 'bold-text' : 'line-normal'
                return (item.type && item.type === 'li') ? <li key={index} className={item.className} dangerouslySetInnerHTML={{ __html: item.value }} /> :
                  <div key={index} className={className} dangerouslySetInnerHTML={{ __html: item.value }} />
              })
            }

            {/* <div className={line.value[1].className}>{line.value[1].value}</div> */}
          </div>
        )
      } else {
        return <div></div>
      }
    })
  }

  return (
    <div id="resume0-content" contentEditable suppressContentEditableWarning>
      {
        isHeaderShow && <div className="header" />
      }
      <div className="main">
        <div className="base-info">
          {
            !isLeft && hasPhoto && <div className="school-logo">
              {
                baseInfo.schoolLogo && <img src={baseInfo.schoolLogo} alt="学校" style={{ height: '100%' }} />
              }
            </div>
          }
          <div className="personal-info" style={{
            alignItems: isLeft ? 'stretch' : 'center'
          }}>
            <div className="name">{baseInfo.name}</div>
            {
              baseInfo.infoList.map((item, index) => {
                return (
                  <div className="more" key={index} dangerouslySetInnerHTML={{ __html: item }} />
                )
              })
            }
          </div>
          {
            hasPhoto && <div className="photo">
              {
                baseInfo.photo ?
                  <img src={baseInfo.photo} alt="照片" style={{ width: '100%' }} /> :
                  <div className='photo-block'>照片</div>
              }
            </div>
          }
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
