import React from 'react'
import Image from 'next/image'
import MagnifyingGlassIcon from '@/public/search-md.svg'


const  Input = () => {
  return (
        <div className='w-full relative flex flex-row items-center'>
            <Image src={MagnifyingGlassIcon} height={16} width={16} alt='' className='w-5 h-5 absolute ml-3' />
         <input className='pr-3 pl-10 py-2 w-full rounded-lg bg-gray-50 border border-[#eaeaea] placeholder:text-[#737373]  focus:outline-[#f14643]' type="text" placeholder='Search EmberMail' />
        </div>
  )
}

export default Input
