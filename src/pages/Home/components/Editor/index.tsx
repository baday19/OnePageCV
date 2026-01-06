import { useState } from 'react'
import styles from './index.module.css'
import classNames from 'classnames'
import Writer from './components/Writer'
import Assistant from './components/Assistant'

const menuList = [
  {
    title: '简历编辑',
    component: <Writer />
  },
  {
    title: '智能助手',
    component: <Assistant />
  }
]

const Editor = () => {
  const [menuIndex, setMenuIndex] = useState(0)
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
                style={{display: index === menuIndex? 'block' : 'none'}}
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