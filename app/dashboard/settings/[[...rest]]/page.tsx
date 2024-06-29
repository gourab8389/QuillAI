import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center justify-center h-full ml-20 w-50% mt-5'>
      <UserProfile/>
    </div>
  )
}

export default Settings
