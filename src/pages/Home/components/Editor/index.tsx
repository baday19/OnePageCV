import { useState } from 'react'
import styles from './index.module.css'
import classNames from 'classnames'
import Writer from './components/Writer'
import Assistant from './components/Assistant'
import { useTranslation } from 'react-i18next'


const Editor = () => {
  const [menuIndex, setMenuIndex] = useState(0)
  const { t } = useTranslation()

  const menuList = [
    {
      title: t('editor.menu.resume'),
      component: <Writer />
    },
    {
      title: t('editor.menu.assistant'),
      component: <Assistant />
    }
  ]

  return (
    <div className={styles.container}>
      {/* 菜单 */}
      <div className={styles.menu}>
        {
          menuList.map((item, index) => {
            return <div
              className={classNames(styles.menuItem, { [styles.isActive]: index === menuIndex })}
              key={index}
              onClick={() => setMenuIndex(index)}
            >
              {item.title}
            </div>
          })
        }
      </div>
      <div className={styles.menuBlock} />
      {/* 根据菜单切换子组件 */}
      <div className={styles.editors}>
        {
          menuList.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: index === menuIndex ? 'block' : 'none' }}
              >
                {item.component}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Editor