import React, { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { toast } from 'sonner';


interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className }) => {
  const [label, setLabel] = useState('Copy');
  const clipboard = useClipboard();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast('Copied to clipboard');
    } catch (err) {
      console.error('Failed to copy the text: ', err);
    }
  };

  const handleClick = () => {
    copyToClipboard(text);
    setLabel('Copied!');
    setTimeout(() => setLabel('Copy'), 3000); 
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
    >
      {label}
    </button>
  );
};

export default CopyButton;
