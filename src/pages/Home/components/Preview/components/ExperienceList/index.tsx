import type { ExperienceContentItem, Experiences } from '@/types/resume'
import styles from './index.module.css'
import classNames from 'classnames'


const ExperienceContentLine = ({
  type,
  value,
}: ExperienceContentItem) => {
  return (
    <div className={styles.experienceContentLine}>
      {
        type === 'sequence'
          ? <li
            className={styles.lineInfo}
          >{value[0]}</li>
          : <div
            className={styles.lineInfo}
            style={{
              fontWeight: type === 'doubleColumn' ? 'bold' : 'normal'
            }}
          >{value[0]}</div>
      }
      {
        type === 'doubleColumn' && <div className={styles.lineInfo}>{value[1]}</div>
      }
    </div>
  )
}

const ExperienceList = ({
  titleType,
  experiences,
}: {
  titleType: number,
  experiences: Experiences
}
) => {

  console.log(titleType)
  
  return (
    <div className={styles.container}>
      {
        experiences.map((item) => {
          return (
            <div className={styles.experience}>
              <div className={classNames(styles.title, {
                [styles.titleFirst]: titleType === 0,
                [styles.titleSecond]: titleType === 1,
              }
              )}>{item.title}</div>
              {
                item.content.map((item) => {
                  return (
                    <ExperienceContentLine {...item} />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default ExperienceList