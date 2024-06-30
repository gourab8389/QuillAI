import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row items-center mt-0 h-screen text-black text-center px-6'>
            <div className='flex-1 mt-1 p-6 rounded-lg'>
                <h1 className='text-5xl font-bold mt-2'>
                    AI <span className='text-blue-400'>Content Generator</span>
                </h1>
                <h2 className='font-bold text-3xl mt-4'>
                    Generate high-quality content on more than 50 topics effortlessly
                </h2>
                <p className='mt-4'>
                    Our AI Content Generator leverages state-of-the-art technology to produce engaging and informative content across various topics. Whether you need articles, blog posts, marketing copy, or educational materials, our tool ensures top-notch quality with minimal effort.
                </p>
                <div className="mt-4">
                    <Link href='/dashboard'>
                        <Button>
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='flex-1 mt-1'>
                <Image
                    src='/AI-content1.png'
                    alt='AI Content Generator'
                    width={500}
                    height={700}
                    className='mx-auto'
                />
            </div>
        </div>
    )
}

export default Hero
