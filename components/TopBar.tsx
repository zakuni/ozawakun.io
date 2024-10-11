'use client';
import Link from 'next/link'
import ScrambleTitle from './ScrambleTitle'
import styles from './topbar.module.css'
import { useRef } from 'react';

const TopBar = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    dialogRef.current?.showModal();
  }
  const closeModal = () => {
    dialogRef.current?.close();
  }
  return (
  <>
    <div className={`w-full sticky flex justify-between place-items-center h-14 ${styles.sticky} top-0`}>
      <Link href="/" id="title" className={`uk-logo ${styles['uk-logo']}`}>
        <ScrambleTitle />
      </Link>
      <nav className='hidden lg:inline-flex text-lg mr-10 gap-8'>
        <Link href="/about" className='hover:text-black hover:no-underline'>About</Link>
        <Link href="/gallery" className='hover:text-black hover:no-underline'>Gallery</Link>
        <Link href="/products" className='hover:text-black hover:no-underline'>Products</Link>
        <Link href="/now" className='hover:text-black hover:no-underline'>Now</Link>
        <Link href="/links" className='hover:text-black hover:no-underline'>Links</Link>
      </nav>
      <div className='inline-block absolute lg:hidden right-4 top-5' onClick={openModal}>
        <div className="toggle-menu flex flex-col justify-center w-5 h-5">
          <div className='hamburger-up w-full h-[2px] mb-[4px] bg-black'></div>
          <div className='hamburger-bottom w-full h-[2px] bg-black'></div>
        </div>
      </div>
    </div>
    <dialog ref={dialogRef} className='max-w-[100vw] max-h-[100vh] transition'>
      <div className='inline-block absolute lg:hidden right-4 top-5' onClick={closeModal}>
        <div className="toggle-menu flex flex-col justify-center w-5 h-5">
          <div className='hamburger-up w-full h-[2px] mb-[4px] bg-black'></div>
          <div className='hamburger-bottom w-full h-[2px] bg-black'></div>
        </div>
      </div>
      <div className=' w-[100vw] h-[100vh]'>
        <nav className='inline-flex flex-col mt-20 mx-5 gap-y-4'>
          <Link href="/" className='text-lg text-gray-700 hover:text-black hover:no-underline' onClick={closeModal}>Top</Link>
          <Link href="/about" className='text-lg text-gray-700 hover:text-black hover:no-underline' onClick={closeModal}>About</Link>
          <Link href="/gallery" className='text-lg text-gray-700 hover:text-black hover:no-underline'>Gallery</Link>
          <Link href="/products" className='text-lg text-gray-700 hover:text-black hover:no-underline'>Products</Link>
          <Link href="/now" className='text-lg text-gray-700 hover:text-black hover:no-underline'>Now</Link>
          <Link href="/links" className='text-lg text-gray-700 hover:text-black hover:no-underline'>Links</Link>
        </nav>
      </div>
    </dialog>
  </>
  )
}
export default TopBar;
