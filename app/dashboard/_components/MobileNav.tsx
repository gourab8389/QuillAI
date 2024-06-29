"use client"
import { MenuList } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { X } from 'lucide-react'

const MobileNav = () => {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='md:hidden'>
            <button 
                onClick={toggleNav}
                className="p-2 fixed top-4 left-4 z-50 bg-white rounded-full shadow-lg"
            >
                <div className="w-6 h-6 flex flex-col justify-between items-center">
                    <div className="w-full h-1 bg-black"></div>
                    <div className="w-full h-1 bg-black"></div>
                    <div className="w-full h-1 bg-black"></div>
                </div>
            </button>
            
            {isOpen && (
                <div className="fixed inset-0 bg-white z-40 p-5 shadow-lg">
                    <button onClick={toggleNav} className="absolute top-4 right-4">
                        <X className="w-6 h-6"/>
                    </button>
                    <div className='flex justify-center mb-4'>
                        <Link href={'/'}>
                            <Image src={'/logo.svg'} alt='logo' width={60} height={70} />
                            <Image src={'/logo2.svg'} alt='logo2' width={70} height={80}/>
                        </Link>
                    </div>
                    <hr className='my-6 border' />
                    <div className="mt-2">
                        {MenuList.map((menu, index) => (
                            <Link key={index} href={menu.path}>
                                <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path==menu.path&&'bg-primary text-white'}`}>
                                    <menu.icon className='w-6 h-6'/>
                                    <h2 className='text-lg'>{menu.name}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileNav
