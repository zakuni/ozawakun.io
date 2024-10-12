import Link from 'next/link'
import MobileMenu from './MobileMenu'
import ScrambleTitle from './ScrambleTitle'
import styles from './topbar.module.css'

const TopBar = () => {
  return (
  <>
    <div className={`w-full sticky flex justify-between place-items-center h-14 ${styles.sticky} top-0`}>
      <Link href="/" id="title" className={`fixed top-2 uk-logo ${styles['uk-logo']}`}>
        <ScrambleTitle />
      </Link>
      <nav className='hidden lg:inline-flex text-lg mr-10 gap-8'>
        <Link href="/about" className='hover:text-black hover:no-underline'>About</Link>
        <Link href="/gallery" className='hover:text-black hover:no-underline'>Gallery</Link>
        <Link href="/products" className='hover:text-black hover:no-underline'>Products</Link>
        <Link href="/now" className='hover:text-black hover:no-underline'>Now</Link>
        <Link href="/links" className='hover:text-black hover:no-underline'>Links</Link>
      </nav>
      <MobileMenu />
    </div>
  </>
  )
}
export default TopBar;
