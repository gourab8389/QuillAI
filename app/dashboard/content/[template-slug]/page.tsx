"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Templates } from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'

interface PROPS {
  params: {
    'template-slug': string
  }
}

const CreateNewContent = (props: PROPS) => {

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug']);
  const [loading, setLoading] = useState(false)

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAiPrompt = JSON.stringify(formData)+", "+SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);

    console.log(result.response.text());
    setLoading(false)

  }

  return (
    <div className="bg-slate-100 p-5">
      <Link href={'/dashboard'}>
      <Button> <ArrowLeft/> Back</Button>
      </Link>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 py-5'>
        {/* FormSection */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} loading={loading} />

        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
