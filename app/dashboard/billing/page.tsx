import { Button } from '@/components/ui/button'
import React from 'react'

const Billing = () => {
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
      <div className="w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <h2 className='text-center font-bold text-3xl my-3'>
          Upgrade With Monthly Plan
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center">

          {/* Free Access */}
          <div className="rounded-2xl bg-white border border-gray-200 p-4">
            <div className="text-center">
              <h2 className='text-2xl font-medium text-gray-900'>
                Free{" "}
                <span className=''>
                  Plan
                </span>
              </h2>
              <p className='mt-2 sm:mt-4'>
                <strong className='text-3xl font-bold text-gray-900 sm:text-xl'>
                  ₹0
                </strong>
                <span className='text-lg font-medium text-gray-700'>/month</span>
              </p>
            </div>
            <hr className='my-2 border mx-10' />
            <ul className='text-center'>
              <li className='text-gray-700'>
                30000 Words/month
              </li>
              <li className='text-gray-700'>
                50+ content templates
              </li>
              <li className='text-gray-700'>
                Unlimited download & copy
              </li>
            </ul>
            <div className="flex justify-center mt-4">
              <Button className='p-2 w-40 bg-gray-300 text-gray-600 cursor-not-allowed'>
                Currently Active
              </Button>
            </div>
          </div>

          {/* Monthly Subscription */}
          <div className="rounded-2xl bg-white border border-gray-200 p-4">
            <div className="text-center">
              <h2 className='text-2xl font-medium text-gray-900'>
                Monthly{" "}
                <span className=''>
                  Plan
                </span>
              </h2>
              <p className='mt-2 sm:mt-4'>
                <strong className='text-3xl font-bold text-gray-900 sm:text-xl'>
                  ₹300
                </strong>
                <span className='text-lg font-medium text-gray-700'>/month</span>
              </p>
            </div>
            <hr className='my-2 border mx-10' />
            <ul className='text-center'>
              <li className='text-gray-700'>
                100000 Words/month
              </li>
              <li className='text-gray-700'>
                50+ content templates
              </li>
              <li className='text-gray-700'>
                Unlimited download & copy
              </li>
            </ul>
            <div className="flex justify-center mt-4">
              <Button className='p-2 w-40'>
                Get Started
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Billing
