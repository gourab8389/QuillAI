"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { TotalUsageContext } from '../(context)/TotalUsageContext'
import { UpdateCreditUsageContext } from '../(context)/UpdateCredit'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    const [totalUsage, setTotalUsage] = useState<number>(0);
    const [UpdateCreditUsage, setUpdateCreditUsage] = useState<any>()

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <UpdateCreditUsageContext.Provider value={{UpdateCreditUsage, setUpdateCreditUsage}}>
            <div className='h-screen'>
                <div className="md:w-64 hidden md:block fixed">
                    <SideNav />
                </div>
                <div className="md:ml-64">
                    <Header />
                    {children}
                </div>
            </div>
            </UpdateCreditUsageContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default Layout
