import Link from 'next/link'
import MobileMenu from './MobileMenu'
import ScrambleTitle from './ScrambleTitle'
import styles from './topbar.module.css'

const TopBar = () => {
  return (
  <>
    <div className={`w-full sticky flex justify-between place-items-center h-14 ${styles.sticky} top-0 backdrop-blur-xl bg-[#fbfbfb]/95 z-10`}>
      <Link href="/" id="title" className={`uk-logo ${styles['uk-logo']}`}>
        <ScrambleTitle />
      </Link>
      <nav className='hidden lg:inline-flex text-xl mr-10 gap-8'>
        <Link href="/about" className='text-[#101010] hover:text-[#737373] transition-colors duration-150 hover:no-underline'>About</Link>
        <Link href="/gallery" className='text-[#101010] hover:text-[#737373] transition-colors duration-150 hover:no-underline'>Gallery</Link>
        <Link href="/products" className='text-[#101010] hover:text-[#737373] transition-colors duration-150 hover:no-underline'>Products</Link>
        <Link href="/now" className='text-[#101010] hover:text-[#737373] transition-colors duration-150 hover:no-underline'>Now</Link>
        <Link href="/links" className='text-[#101010] hover:text-[#737373] transition-colors duration-150 hover:no-underline'>Links</Link>
      </nav>
      <MobileMenu />
    </div>
  </>
  )
}
export default TopBar;
