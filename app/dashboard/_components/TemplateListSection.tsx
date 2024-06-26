import Templates from '@/app/(data)/Templates'
import React from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    label:string,
    field:string,
    name:string,
    required:boolean,    
}

const TemplateListSection = (item:TEMPLATE, index:number) => {
  return (
    <div>
      {Templates.map((item, index)=>(

        <TemplateCard {...item}/>
      ))}
    </div>
  )
}

export default TemplateListSection
