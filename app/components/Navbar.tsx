"use client"
import React from 'react'
import Image from 'next/image'
import Profile from '@/public/Profile.svg'
import BellIcon from "@/public/bell-01.svg"
import Input from './Input'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const [isClicked, setIsClicked] = React.useState(false)
//   const [isOpen, setIsOpen] = React.useState(false)
//   const [isToggle, setIsToggle] = React.useState(false);
//   const handleToggle = () => {
//     setIsToggle(!isToggle);
//   };

  return (
    <div className='bg-[#ffffff] text-[#737373]  w-full mx-auto border-b'>
      <div className='flex flex-row items-center justify-between py-5 px-3 md:px-6'>
        {/* Desktop screens */}
        <div className='hidden w-full md:flex flex-row justify-between items-center gap-x-4'>
          <div className='w-5/12'>
            <Input />
          </div>
          <div className='relative flex flex-row items-center gap-x-3'>
          <div className=''>
              <button onClick={() => setIsClicked(!isClicked)} className='flex px-2 py-2 justify-center items-center'>
             <Image src={BellIcon} height={24} width={24} alt='' className='' /> 
              </button>
              {isClicked && 
              <div className='absolute -ml-20 bg-white shadow-lg text-sm py-4 px-4 mt-3 rounded-md'>
              <p>You have no notifications yet...</p>
            </div>
              }
            </div>
            <div>
            <button onClick={() => setOpen(!open)} className='flex flex-row px-2 py-2 justify-between items-center rounded-full border border-[#eaeaea] gap-x-2'>
               <Image src={Profile} height={113} width={32} alt='' className='w-full h-full' />
            </button>
            </div>
          </div>
        </div>
        {/* Mobile screens */}
        {/* <div className="md:hidden flex flex-row">
          <div className="flex flex-row items-center gap-x-4">
            <button onClick={handleToggle}>
              {isToggle ? (
                <Cross1Icon className="w-6 h-6" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6 " />
              )}
            </button>
          </div>
          {isToggle && (
            <div
              className="fixed top-0 right-0 h-full w-2/12 bg-white dark:bg-[#111827] z-10 flex flex-col justify-start items-start "
            >
              <button onClick={handleToggle} className="absolute top-5 right-5">
                <Cross1Icon className="w-5 h-5" />
              </button>
              <div className="mt-20 max-h-screen overflow-y-auto w-full">
                <div className='px-2 pb-2 flex flex-col justify-center gap-y-5 items-center text-center'>
                  <BellIcon className='w-6 h-6 text-[#958d89]' />
                  <Image src={Profile} height={113} width={32} alt='' className='w-6 h-6' />
                </div>
                <div className='px-2 py-2 flex flex-col justify-center gap-y-5 items-center text-center'>
                  <div className='flex flex-col items-center justify-center'>
                    <div className=''>
                      <Image src={} height={20} width={20} alt='' className='w-10 h-full' />
                    </div>
                    <div className=''>
                      <Image src={} height={20} width={20} alt='' className='w-10 h-full' />
                    </div>
                    <div className=''>
                      <Image src={} height={20} width={20} alt='' className='w-10 h-full' />
                    </div>
                    <div className=''>
                      <Image src={} height={20} width={20} alt='' className='w-10 h-full' />
                    </div>
                    <div className=''>
                      <Image src={} height={20} width={20} alt='' className='w-10 h-full' />
                    </div>
                    <div className=''>
                      <Image src={} height={20} width={20} alt='' className='w-10 h-full' />
                    </div>
                  </div>
                  <div>
                    <div className=''>
                      <Image src={} height={20} width={20} alt='' className='w-10 h-full' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
