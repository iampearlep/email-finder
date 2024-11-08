import Image from 'next/image'
import Logo from "@/public/LOGO (2).svg"
import TabIcon from "@/public/tabIcon.svg"
import HomeIcon from "@/public/home-02.svg"
import MailIcon from "@/public/mail-03.svg"
import ContactIcon from "@/public/user-square.svg"
import InboxIcon from "@/public/Icon (1).svg"
import MailIcon2 from "@/public/message-plus-square.svg"
const Sidebar = () => {
  return (
  <div className='bg-[#ffffff] fixed top-0 left-0 h-screen w-72 border-r border-[#eaeaea]'>
  <div className='py-6 flex flex-col items-center gap-y-5'>
    <div className='flex flex-row gap-x-14 items-center'>
    <div className='flex flex-row items-center gap-x-2'>
    <div className='px-1.5 py-1.5 rounded-lg border border-gray-300'>
      <Image src={Logo} height={24} width={24} alt='' className='w-full h-full' />
    </div>
    <div>
        <p className='text-base font-semibold'>Charlie's Workspace</p>
    </div>
    </div>
    <div>
    <Image src={TabIcon} height={14} width={14} alt='' className='w-full h-full' />
    </div>
    </div>
    <div className='grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3'>
    <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={HomeIcon} height={20} width={20} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Overview</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={MailIcon} height={20} width={20} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Mailboxes</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={ContactIcon} height={20} width={20} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Contact</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={InboxIcon} height={18} width={18} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Unified inbox</p>
        </div>
    </div>
    <div className='grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3'>
        <div><p className='uppercase text-xs px-4 text-[#828282]'>Tools</p></div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={HomeIcon} height={20} width={20} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Email warmer</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 bg-[#ffede9] rounded-lg transition-all ease-linear'>
        <Image src={MailIcon2} height={20} width={20} alt='' className=' ' />
        <p className='text-[#f14643] text-base font-semibold'>Email finder</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={ContactIcon} height={20} width={20} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Email validator</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={InboxIcon} height={18} width={18} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Phone finder</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={InboxIcon} height={18} width={18} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Sequencer</p>
        </div>
    </div>
    <div className='grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3'>
    <div><p className='uppercase text-xs px-4 text-[#828282]'>Support</p></div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={HomeIcon} height={20} width={20} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Settings</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Image src={MailIcon2} height={20} width={20} alt='' className=' ' />
        <p className='text-[#737373] text-base font-semibold'>Help center</p>
        </div>
    </div>
    {/* <div>
    <div className=''>
      <Image src="" height={20} width={16} alt='' className='w-full h-full' />
    </div>
    <div className=''>
      <Image src="" height={20} width={16} alt='' className='w-full h-full' />
    </div>
    <div className=''>
      <Image src="" height={20} width={16} alt='' className='w-full h-full' />
    </div>
    <div className=''>
      <Image src="" height={20} width={16} alt='' className='w-full h-full' />
    </div>
    <div className=''>
      <Image src="" height={20} width={16} alt='' className='w-full h-full' />
    </div>
    <div className=''>
      <Image src="" height={20} width={16} alt='' className='w-full h-full' />
    </div>
    </div>
    <div>
    <div className=''>
      <Image src="" height={20} width={16} alt='' className='w-full h-full' />
    </div>
    <div className=''>
      <Image src="" height={20} width={16} alt='' className='w-full h-full' />
    </div>
    </div> */}
  </div>
  </div>
  )
}

export default Sidebar