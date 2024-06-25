import { MenuList } from '@/constants'
import Image from 'next/image'
import React from 'react'

const SideNav = () => {
    return (
        <div className='h-screen p-5 shadow-sm border'>
            <div className="flex justify-center">

                <Image src={'/logo.svg'} alt='logo' width={60} height={70} />
                <Image src={'/logo2.svg'} alt='logo2' width={70} height={80}/>
            </div>
            <div className="mt-10">

                {MenuList.map((menu, index) => (
                    <div className="flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer">
                        <menu.icon />
                        <h2>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav
