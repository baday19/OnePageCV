import styles from './index.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>OnePageCV</div>
      </header>
      <div className={styles.block} />
    </>
  )
}
