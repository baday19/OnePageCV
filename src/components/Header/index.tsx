import { Button } from 'antd'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { i18n, t } = useTranslation()

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')
    localStorage.setItem('lang', i18n.language)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>OnePageCV</div>
        <Button size='small' onClick={changeLang} type='text'>
          {t('lang')}
        </Button>
      </header>
      <div className={styles.block} />
    </>
  )
}
