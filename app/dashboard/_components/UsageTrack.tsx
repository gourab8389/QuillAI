import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const UsageTrack = () => {
    return (
        <div className='mr-10'>
            <div className="bg-primary text-white rounded-lg p-1">
                <h2 className='ml-6  text-xl'>Credits</h2>
                <div className="h-2 bg-gray-600 w-full rounded-md mt-1">

                    <div className="h-2 bg-white rounded-md" style={{
                        width: '35%'
                    }}>

                    </div>
                </div>
                <h2 className='text-sm my-1 ml-1'>350/10,000 credit used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-1 text-primary'>Upgrade</Button>
        </div>
    )
}

export default UsageTrack
