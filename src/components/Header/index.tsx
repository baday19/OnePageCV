import { Button } from 'antd'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { i18n, t } = useTranslation()

  const changeLang = async () => {
    const newLang: string = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(newLang).then();
    localStorage.setItem('lang', newLang)
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
