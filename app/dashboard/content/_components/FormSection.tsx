import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'

interface PROPS {
    selectedTemplate?:TEMPLATE
}

function FormSection({selectedTemplate}:PROPS) {
  return (
    <div className='p-5 shadow-md border rounded-lg'>
        {/* @ts-ignore*/}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70}/>
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
      <form action="">
        {selectedTemplate?.form?.map((item, index)=>(
            <div className="">
                <label htmlFor="">
                    {item.label}
                </label>
            </div>
        ))}
      </form>
    </div>
  )
}

export default FormSection
