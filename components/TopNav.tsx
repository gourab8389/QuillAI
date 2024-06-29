"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/router'
import { SignedIn, SignedOut } from '@clerk/nextjs'

const TopNav = () => {


    return (
        <div className='relative p-5 items-center justify-between bg-slate-100 border border-spacing-1'>
            <div className="flex justify-between">
                <Link href={'/'}>
                    <div className="flex cursor-pointer">

                        <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
                        <Image src={'/logo2.svg'} alt='logo2' width={40} height={40} />
                    </div>
                </Link>
                <div className=" rounded-md w-40 text-white">
                    <SignedOut>
                        <Button>
                            <Link href={'/sign-in'}>LogIn</Link>
                        </Button>
                    </SignedOut>

                    <SignedIn>
                        <Link href={'/dashboard'} >
                            <Button>
                                Get Started
                            </Button>
                        </Link>
                    </SignedIn>
                </div>

            </div>
        </div>
    )
}

export default TopNav
