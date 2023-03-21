import Link from 'next/link'
import ScrambleTitle from './ScrambleTitle'
import styles from './topbar.module.css'

const TopBar = () => (
  <>
    <div className={`${styles.sticky} top-0`}>
      <Link href="/" legacyBehavior>
        <a id="title" className={`uk-logo ${styles['uk-logo']}`}>
          <ScrambleTitle />
        </a>
      </Link>
      <span className={`${styles.toplinks} uk-link-text`}>
        <Link href="/about" legacyBehavior><a className={styles.toplink}>ABOUT</a></Link>
        <Link href="/gallery" legacyBehavior><a className={styles.toplink}>GALLERY</a></Link>
        <Link href="/now" legacyBehavior><a className={styles.toplink}>NOW</a></Link>
        <Link href="/links" legacyBehavior><a className={styles.toplink}>LINKS</a></Link>
      </span>
    </div>
  </>
)

export default TopBar;


