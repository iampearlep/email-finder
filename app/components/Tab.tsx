"use client"
import {useState} from 'react'
import Image from "next/image"
import ArrowDown from "@/public/chevron-down.svg"
import PlusIcon from "@/public/plus.svg"
import History from './History'
const Tab = () => {
    const [activeTab, setActiveTab] = useState('history')
    
    const tabs  = [ 
        {
            id: 'finder',
            label: 'Finder',
            component: 'Coming soon!',
        },
        {
            id: 'history',
            label: 'History',
            component: <History />,
        }
    ]
  return (
    <div className="w-full mx-auto">
      <div className='flex flex-row justify-between items-center border-b'>
      <div className="flex px-3">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 font-medium text-base transition-colors duration-200
              ${activeTab === tab.id
                ? 'text-red-500 border-b-2 border-red-500 -mb-px'
                : 'text-gray-600'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
        
      </div>
      <div className='px-6'>
        <button className="flex flex-row gap-x-2 justify-center items-center px-4 py-2 text-xs border rounded-lg">
        <Image
                    src={PlusIcon}
                    height={16}
                    width={16}
                    alt=""
                    className=""
                  />
            Type
            <Image
                    src={ArrowDown}
                    height={14}
                    width={14}
                    alt=""
                    className=""
                  />
            </button>
        </div>
      </div>

      <div className="m-6">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </div>
  )
}

export default Tab
