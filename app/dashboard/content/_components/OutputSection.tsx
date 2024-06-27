import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

interface props {
  aiOutput:string
}

function OutputSection({aiOutput}:props) {

  const [label, setLabel] = useState<any>('copy')
  const editorRef:any =useRef();

  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy the text: ", err);
    }
  };

  const handleClick = () => {
    copyToClipboard(aiOutput);
    setLabel("copied!");
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className="flex justify-between items-center p-5">
        <h2 className='font-medium text-lg '>Your Result</h2>
        <Button onClick={handleClick} className='flex gap-2'><Copy className='w-4 h-4'/>{label}</Button>
      </div>
      <Editor
      ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height='600px'
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection

