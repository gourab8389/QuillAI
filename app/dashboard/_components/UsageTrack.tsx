"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import {eq} from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import { HistoryItem } from '../history/_components/HistoryItems'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'

const UsageTrack = () => {

    const {user} = useUser();
    const {totalUsage, setTotalUsage}= useContext<any>(TotalUsageContext) 
    

    useEffect(()=>{
        user&&GetData()
    
    },[user])

    const GetData = async() => {
        const result:HistoryItem[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))

        GetTotalUsage(result)
    }
    
    const GetTotalUsage = (result:HistoryItem[])=>{
        let total:number =0;
        result.forEach(element => {
            total = total+Number(element.aiResponse?.length)
        });
        setTotalUsage(total);
        console.log(total)
    }

    return (
        <div className='mr-10'>
            <div className="bg-primary text-white rounded-lg p-1">
                <h2 className='ml-6  text-xl'>Credits</h2>
                <div className="h-2 bg-gray-600 w-full rounded-md mt-1">

                    <div className="h-2 bg-white rounded-md" style={{
                        width:(totalUsage/30000)*100+'%'
                    }}>

                    </div>
                </div>
                <h2 className='text-sm my-1 ml-1'>{totalUsage}/30,000 credit used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-1 text-primary'>Upgrade</Button>
        </div>
    )
}

export default UsageTrack
