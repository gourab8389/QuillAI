"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Templates } from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PROPS {
  params: {
    'template-slug': string
  }
}

const CreateNewContent = (props: PROPS) => {

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug']);

  const GenerateAIContent = (formData: any) => {

  }

  return (
    <div className="bg-slate-100 p-5">
      <Link href={'/dashboard'}>
      <Button> <ArrowLeft/> Back</Button>
      </Link>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 bg-slate-100 py-5'>
        {/* FormSection */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => console.log(v)} />

        {/* OutputSection */}
        <div className="">
          <OutputSection />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent

