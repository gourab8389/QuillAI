"use client"
import React, { useEffect, useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import moment from 'moment';
import { toast } from 'sonner';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import CopyButton from './CopyButton';

interface HistoryItem {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}

const HistoryItems = () => {

    
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const clipboard = useClipboard();

  useEffect(() => {
    const fetchHistoryItems = async () => {
      const fetchedItems = await db.select().from(AIOutput).execute();
      const historyItems = fetchedItems.map((item) => ({
        ...item,
        aiResponse: item.aiResponse ?? '',
        createdAt: item.createdAt ?? '',
      }));
      setHistoryItems(historyItems);
    };
    fetchHistoryItems();
  }, []);

  const handleCopy = (text: string) => {
    clipboard.copy(text);
    toast('Copied to clipboard');
  };

  return (
    <div className="p-5">
      {historyItems.length === 0 ? (
        <p>No history items found.</p>
      ) : (
        historyItems.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{item.templateSlug}</h3>
              <p className="text-sm text-gray-500">
                {moment(item.createdAt, 'DD/MM/YYYY').format('MMM DD, YYYY')}
              </p>
            </div>
            <p className="my-2">{item.aiResponse}</p>
            <CopyButton
              text={item.aiResponse || ''}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryItems;
