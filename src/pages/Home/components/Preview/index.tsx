import { useResume } from '@/context/ResumeContext'
import styles from './index.module.css'
import HeaderLine from './components/HeaderLine'
import PersonalInfo from './components/PersonalInfo'
import ExperienceList from './components/ExperienceList'

const Preview = () => {
  const { paperConfig, baseInfo, experiences } = useResume()
  return (
    <div className={styles.preview} contentEditable suppressContentEditableWarning>
      {/* 头部条 */}
      {
        paperConfig.showHeaderLine && <HeaderLine backgroundColor={paperConfig.themeColor} />
      }
      <div className={styles.main}>
        {/* 基础信息区 */}
        <PersonalInfo {...baseInfo} hasPhoto={paperConfig.hasPhoto} mainInfoPosition={paperConfig.mainInfoPosition} />
        {/* 经历区域 */}
        <ExperienceList experiences={experiences} titleType={paperConfig.titleType} />
      </div>
    </div>
  )
}

export default Preview