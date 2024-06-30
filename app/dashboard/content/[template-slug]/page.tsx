"use client"
import React, { useContext, useState, useEffect } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Templates } from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCredit'

interface PROPS {
  params: {
    'template-slug': string
  }
}

const CreateNewContent = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug']);

  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>('');

  const { user } = useUser();
  const router = useRouter();

  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const {UpdateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)

  useEffect(() => {
    document.getElementById('form-section')?.scrollIntoView();
  }, []);

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 30000) {
      console.log("pls upgrade")
      router.push('/dashboard/billing')
      return;
    }
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);
    const aiResponseText = await result?.response.text();

    setAiOutput(aiResponseText);
    await SaveInDb(formData, selectedTemplate?.slug, aiResponseText);
    

    setTotalUsage(totalUsage + aiResponseText.length); 
    setLoading(false)
    
    setUpdateCreditUsage(Date.now)
  }


  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("User email address is undefined");
      return;
    }
    
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user.primaryEmailAddress.emailAddress, 
      createdAt: moment().format('DD/MM/YYYY'),
    })
    console.log(result);
  }

  return (
    <div className="bg-slate-100 p-5">
      <Link href={'/dashboard'}>
        <Button> <ArrowLeft /> Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* FormSection */}
        <div className='col-span-1 md:col-span-1' id="form-section">
          <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} loading={loading} />
        </div>

        {/* OutputSection */}
        <div className="col-span-1 md:col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
