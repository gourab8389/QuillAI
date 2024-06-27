"use client"
import { MenuList } from '@/constants'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    })

    return (
        <div className='h-screen p-5 shadow-sm border bg-white'>
            <div className="flex justify-center">

                <Image src={'/logo.svg'} alt='logo' width={60} height={70} />
                <Image src={'/logo2.svg'} alt='logo2' width={70} height={80}/>
            </div>
            <hr className='my-6 border' />
            <div className="mt-3">

                {MenuList.map((menu, index) => (
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path==menu.path&&'bg-primary text-white'}`}>
                        <menu.icon className='w-6 h-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav
