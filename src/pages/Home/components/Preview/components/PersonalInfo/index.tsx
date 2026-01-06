import classNames from 'classnames';
import styles from './index.module.css'
import type { BaseInfo } from '@/types/resume'

type PersonalInfoProps = BaseInfo & {
  hasPhoto: boolean;
  mainInfoPosition: boolean;
};


const PersonalInfo = ({
  schoolLogo,
  name,
  photo,
  content,
  hasPhoto,
  mainInfoPosition,
}: PersonalInfoProps) => {
  return (
    <div className={styles.container}>
      {
        hasPhoto && mainInfoPosition && (
          <div className={styles.schoolLogo}>
            {
              hasPhoto && schoolLogo && <img
                src={schoolLogo}
                alt="校徽"
                style={{
                  height: '100%'
                }}
              />
            }
          </div>
        )
      }
      <div className={classNames(styles.mainInfo, {
        [styles.isCenter]: mainInfoPosition
      }
      )}>
        <div className={styles.name}>{name}</div>
        {/* 信息区域 */}
        {
          content?.map((item) =>
            <div className={styles.contentLine}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          )
        }
      </div>
      {
        hasPhoto && (
          <div className={styles.photo}>
            {
              photo
                ? <img
                  src={photo}
                  alt="photo"
                  style={{
                    width: '100%'
                  }}
                />
                : <div className={styles.defaultPhoto}>照片</div>
            }
          </div>
        )
      }
    </div>
  )
}


export default PersonalInfo