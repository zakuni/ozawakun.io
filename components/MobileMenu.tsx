'use client';
import Link from "next/link"
import { useRef } from "react";

const MobileMenu = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    dialogRef.current?.showModal();

    // don't focus first item when dialog is opened
    setTimeout(() => {
      dialogRef.current?.focus();
    }, 0);
  }
  const closeModal = () => {
    dialogRef.current?.close();
  }
  return (
    <>
      <div className='inline-block fixed lg:hidden right-4 top-5' onClick={openModal}>
        <div className="toggle-menu flex flex-col justify-center w-5 h-5">
          <div className='hamburger-up w-full h-[2px] mb-[4px] bg-black'></div>
          <div className='hamburger-bottom w-full h-[2px] bg-black'></div>
        </div>
      </div>
      <dialog ref={dialogRef} className='max-w-[100vw] max-h-[100vh] min-h-[100vh] open:animate-fadein backdrop:animate-fadein open:overflow-hidden'>
        <div className='inline-block fixed lg:hidden right-4 top-5' onClick={closeModal}>
          <div className="toggle-menu flex flex-col justify-center w-5 h-5">
            <div className='hamburger-up w-full h-[2px] mb-[4px] bg-black rotate-45 translate-y-[3px]'></div>
            <div className='hamburger-bottom w-full h-[2px] bg-black rotate-[-45deg] translate-y-[-3px]'></div>
          </div>
        </div>
        <div className='w-[100vw] h-fit'>
          <nav className='fixed top-24 inline-flex flex-col px-5 w-full gap-y-4'>
            <Link href="/" className='inline-block w-full text-lg tracking-wide text-gray-700 hover:text-black hover:no-underline' onClick={closeModal}>Top</Link>
            <Link href="/about" className='inline-block w-full text-lg tracking-wide text-gray-700 hover:text-black hover:no-underline' onClick={closeModal}>About</Link>
            <Link href="/gallery" className='inline-block w-full text-lg tracking-wide text-gray-700 hover:text-black hover:no-underline' onClick={closeModal}>Gallery</Link>
            <Link href="/products" className='inline-block w-full text-lg tracking-wide text-gray-700 hover:text-black hover:no-underline' onClick={closeModal}>Products</Link>
            <Link href="/now" className='inline-block w-full text-lg tracking-wide text-gray-700 hover:text-black hover:no-underline' onClick={closeModal}>Now</Link>
            <Link href="/links" className='inline-block w-full text-lg tracking-wide text-gray-700 hover:text-black hover:no-underline' onClick={closeModal}>Links</Link>
          </nav>
        </div>
      </dialog>
    </>
  )
}
export default MobileMenu;
