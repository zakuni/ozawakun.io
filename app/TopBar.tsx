import Link from 'next/link'
import ScrambleTitle from './ScrambleTitle'
import styles from './topbar.module.css'

const TopBar = () => (
  <>
    <div className={`${styles.sticky} top-0`}>
      <Link href="/" id="title" className={`uk-logo ${styles['uk-logo']}`}>
        <ScrambleTitle />
      </Link>
      <span className={`${styles.toplinks} uk-link-text`}>
        <Link href="/about" className={styles.toplink}>ABOUT</Link>
        <Link href="/gallery" className={styles.toplink}>GALLERY</Link>
        <Link href="/now" className={styles.toplink}>NOW</Link>
        <Link href="/links" className={styles.toplink}>LINKS</Link>
      </span>
    </div>
  </>
)

export default TopBar;


