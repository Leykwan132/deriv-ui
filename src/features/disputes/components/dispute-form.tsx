'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Dispute } from '@/constants/mock-api-dispute';

// Message sets for different dispute cases
const conversationMessages = {
  1: [
    {
      id: 1,
      sender: 'buyer',
      message: "Hi, I'll do the transaction soon",
      timestamp: '2024-02-08 10:30 AM'
    },
    {
      id: 2,
      sender: 'seller',
      message: 'Ohh... my app is running very slow. ',
      timestamp: '2024-02-08 10:35 AM'
    },
    {
      id: 3,
      sender: 'seller',
      message: "Let's continue on Telegram.",
      timestamp: '2024-02-08 10:37 AM'
    },
    {
      id: 4,
      sender: 'seller',
      message:
        "This is my Telegram link: <a href='https://t.me/johnsmith?xabdjsdvf' class='text-blue-400 underline' target='_blank'>t.me/johnsmith?xabdjsdvf</a>",
      timestamp: '2024-02-08 10:40 AM'
    }
  ],
  2: [
    {
      id: 1,
      sender: 'buyer',
      message: 'Hello, I want to ask you something about our deal.',
      timestamp: '2024-02-08 11:30 AM'
    },
    {
      id: 2,
      sender: 'seller',
      message: 'Sure, please make the payment first',
      timestamp: '2024-02-08 11:35 AM'
    },
    {
      id: 3,
      sender: 'buyer',
      message: 'Payment done!',
      timestamp: '2024-02-08 11:40 AM'
    },
    {
      id: 4,
      sender: 'seller',
      message: "Let's chat on WhatsApp for faster response",
      timestamp: '2024-02-08 11:45 AM'
    }
  ],
  3: [
    {
      id: 1,
      sender: 'buyer',
      message: 'Hello, are you there...',
      timestamp: '2024-02-08 11:30 AM'
    },
    {
      id: 2,
      sender: 'seller',
      message: "Wait a moment, I'm checking the payment",
      timestamp: '2024-02-08 11:35 AM'
    },
    {
      id: 3,
      sender: 'buyer',
      message:
        "No...I didn't make any payment. Add me on Messenger first <a href='https://t.me/johnsmith?xabdjsdvf' class='text-black underline' target='_blank'>messenger/.?1ucbakjknx</a>",
      timestamp: '2024-02-08 11:40 AM'
    }
  ],
  4: [
    {
      id: 1,
      sender: 'buyer',
      message: 'Hello.',
      timestamp: '2024-02-08 11:30 AM'
    },
    {
      id: 2,
      sender: 'seller',
      message: 'Hi, please join telegram group',
      timestamp: '2024-02-08 11:35 AM'
    },
    {
      id: 3,
      sender: 'seller',
      message:
        "<a href='https://t.me/?xabdjsdvf' class='text-blue-400 underline' target='_blank'>https://t.me/?xabdjsdvf</a>",
      timestamp: '2024-02-08 11:40 AM'
    }
  ],
  5: [
    {
      id: 1,
      sender: 'buyer',
      message: 'Hello.',
      timestamp: '2024-02-03 11:30 AM'
    },
    {
      id: 2,
      sender: 'seller',
      message: 'Hi',
      timestamp: '2024-02-03 11:35 AM'
    },
    {
      id: 3,
      sender: 'buyer',
      message: 'contact me on WhatsApp. 019-555555555',
      timestamp: '2024-02-03 11:40 AM'
    }
  ]
};

// Hardcoded case logs
// Case logs for different dispute cases
const disputeCaseLogs = {
  1: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Dispute Detection System',
      details: 'Dispute case automatically created.',
      timestamp: '2024-02-08 10:45 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Assigned to Agent',
      user: 'Dispute Detection System',
      details: 'Case assigned to Support Team Lead',
      timestamp: '2024-02-08 10:50 AM',
      type: 'assignment'
    }
  ],
  2: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Dispute Detection System',
      details: 'Potential dispute detected - External platform redirection',
      timestamp: '2024-02-09 11:50 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Assigned to Agent',
      user: 'Dispute Detection System',
      details: 'Case assigned to Dispute Investigation Team',
      timestamp: '2024-02-09 11:55 AM',
      type: 'assignment'
    },
    {
      id: 3,
      action: 'Note Added',
      user: 'Dispute Detection System',
      details: 'Seller attempting to move conversation to WhatsApp',
      timestamp: '2024-02-09 12:00 PM',
      type: 'note'
    }
  ],
  3: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Dispute Detection System',
      details: 'Potential fraud detected - External platform redirection',
      timestamp: '2024-02-03 11:50 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Assigned to Agent',
      user: 'Fraud Detection System',
      details: 'Case assigned to Fraud Investigation Team',
      timestamp: '2024-02-03 11:55 AM',
      type: 'assignment'
    },
    {
      id: 3,
      action: 'Status Updated',
      user: 'Fraud Detection System',
      details: 'Case escalated to high priority',
      timestamp: '2024-02-03 12:05 PM',
      type: 'status'
    },
    {
      id: 4,
      action: 'Account Temporarily Locked',
      user: 'Fraud Detection System',
      details: 'Account access restricted due to security concerns.',
      timestamp: '2024-02-03 12:15 PM',
      type: 'security'
    },
    {
      id: 5,
      action: 'Status Updated',
      user: 'Lisa BP',
      details: 'Case closed as resolved.',
      timestamp: '2024-02-03 12:35 PM',
      type: 'status'
    }
  ],
  4: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Fraud Detection System',
      details: 'Potential fraud detected - External platform redirection',
      timestamp: '2024-02-02 11:50 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Assigned to Agent',
      user: 'Fraud Detection System',
      details: 'Case assigned to Fraud Investigation Team',
      timestamp: '2024-02-02 11:55 AM',
      type: 'assignment'
    },
    {
      id: 3,
      action: 'Note Added',
      user: 'Fraud Detection System',
      details: 'Seller attempting to move conversation to Telegram',
      timestamp: '2024-02-02 12:00 PM',
      type: 'note'
    },
    {
      id: 4,
      action: 'Account Temporarily Locked',
      user: 'Fraud Detection System',
      details: 'Account access restricted due to security concerns.',
      timestamp: '2024-02-03 12:15 PM',
      type: 'security'
    },
    {
      id: 5,
      action: 'Status Updated',
      user: 'Rosie Anne',
      details: 'Case closed as resolved.',
      timestamp: '2024-02-03 12:35 PM',
      type: 'status'
    }
  ],
  5: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Fraud Detection System',
      details: 'Potential fraud detected - External platform redirection',
      timestamp: '2024-02-08 11:50 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Assigned to Agent',
      user: 'Fraud Detection System',
      details: 'Case assigned to Fraud Investigation Team',
      timestamp: '2024-02-08 11:55 AM',
      type: 'assignment'
    },
    {
      id: 3,
      action: 'Account Temporarily Locked',
      user: 'Fraud Detection System',
      details: 'Account access restricted due to security concerns.',
      timestamp: '2024-02-03 11:55 AM',
      type: 'security'
    },
    {
      id: 4,
      action: 'Note Added',
      user: 'Fraud Detection System',
      details: 'Seller attempting to move conversation to WhatsApp',
      timestamp: '2024-02-08 12:00 PM',
      type: 'note'
    },
    {
      id: 5,
      action: 'Status Updated',
      user: 'Rachel Green',
      details: 'Case closed as resolved.',
      timestamp: '2024-02-03 12:35 PM',
      type: 'status'
    }
  ]
};

export default function DisputeForm({
  initialData,
  pageTitle
}: {
  initialData: Dispute | null;
  pageTitle: string;
}) {
  const [isOpen, setIsOpen] = useState(true); // Add this here

  if (!initialData) {
    return (
      <div className='flex min-h-[400px] items-center justify-center'>
        <p className='text-gray-400'>No dispute details found.</p>
      </div>
    );
  }

  // Get the appropriate messages and case logs based on the dispute ID
  const messages =
    conversationMessages[initialData.id as keyof typeof conversationMessages] ||
    [];
  const caseLogs =
    disputeCaseLogs[initialData.id as keyof typeof disputeCaseLogs] || [];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Actions Needed':
        return 'text-red-500';
      case 'Reviewing':
        return 'text-yellow-400';
      case 'Solved':
        return 'text-green-500';
      default:
        return 'text-white';
    }
  };

  return (
    <div className='mx-auto w-full max-w-2xl space-y-4 p-4'>
      <Card className='border-gray-800 bg-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-white'>
            🛡️ {pageTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
            {/* Case Information */}
            <div className='grid grid-cols-3 gap-4'>
              <div className='rounded-lg bg-gray-800 p-4'>
                <p className='mb-1 text-sm text-gray-400'>Dispute ID</p>
                <p className='text-lg font-medium text-white'>
                  {initialData.id}
                </p>
              </div>
              <div className='rounded-lg bg-gray-800 p-4'>
                <p className='mb-1 text-sm text-gray-400'>Category</p>
                <p
                  className={`text-lg font-medium ${getCategoryColor(initialData.category)}`}
                >
                  {initialData.category}
                </p>
              </div>
              <div className='rounded-lg bg-gray-800 p-4'>
                <p className='mb-1 text-sm text-gray-400'>Created At</p>
                <p className='text-lg font-medium text-white'>
                  {initialData.created_at}
                </p>
              </div>
            </div>

            {/* User Information */}
            <div className='grid grid-cols-3 gap-4'>
              <div className='rounded-lg bg-gray-800 p-4'>
                <div className='mb-1 flex items-center space-x-2'>
                  <span className='text-sm text-gray-400'>Buyer</span>
                  <span className='rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-400'>
                    👤
                  </span>
                </div>
                <p className='text-lg font-medium text-white'>
                  {initialData.buyer_name || 'N/A'}
                </p>
              </div>

              <div className='rounded-lg bg-gray-800 p-4'>
                <div className='mb-1 flex items-center space-x-2'>
                  <span className='text-sm text-gray-400'>Seller</span>
                  <span className='rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs text-yellow-400'>
                    🏪
                  </span>
                </div>
                <p className='text-lg font-medium text-white'>
                  {initialData.seller_name || 'N/A'}
                </p>
              </div>

              <div className='rounded-lg bg-gray-800 p-4'>
                <div className='mb-1 flex items-center space-x-2'>
                  <span className='text-sm text-gray-400'>Status</span>
                  <span className='rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400'>
                    👨‍💼
                  </span>
                </div>
                <p className='text-lg font-medium text-white'>
                  {initialData.status || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='border-gray-800 bg-gray-900'>
        <CardHeader className='border-b border-gray-800'>
          <CardTitle className='text-xl font-bold text-white'>
            <div className='flex items-center space-x-2'>
              <span>📋</span>
              <span>Case Logs</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className='p-4'>
          {caseLogs.length > 0 ? (
            <div className='space-y-4'>
              {caseLogs.map((log) => (
                <div
                  key={log.id}
                  className='relative border-l-2 border-gray-800 pl-4'
                >
                  <div className='flex items-start gap-3'>
                    <div
                      className={`-ml-5 mt-2 h-2 w-2 rounded-full ${
                        log.type === 'system'
                          ? 'bg-blue-500'
                          : log.type === 'assignment'
                            ? 'bg-purple-500'
                            : log.type === 'status'
                              ? 'bg-yellow-500'
                              : log.type === 'priority'
                                ? 'bg-red-500'
                                : 'bg-green-500'
                      }`}
                    />

                    <div className='flex-1'>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-white'>
                          {log.action}
                        </p>
                        <span className='text-xs text-gray-400'>
                          {log.timestamp}
                        </span>
                      </div>

                      <p className='mt-1 text-sm text-gray-400'>
                        {log.details}
                      </p>

                      <p className='mt-1 text-xs text-gray-500'>
                        by {log.user}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex h-[200px] items-center justify-center'>
              <p className='text-gray-400'>No case logs available.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card className='border-gray-800 bg-gray-900'>
          <CollapsibleTrigger className='w-full'>
            <CardHeader className='border-b border-gray-800 transition-colors hover:bg-gray-800/50'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-xl font-bold text-white'>
                  <div className='flex items-center space-x-2'>
                    <span>💬</span>
                    <span>Conversation History</span>
                  </div>
                </CardTitle>
                {isOpen ? (
                  <ChevronUp className='h-5 w-5 text-gray-400' />
                ) : (
                  <ChevronDown className='h-5 w-5 text-gray-400' />
                )}
              </div>
            </CardHeader>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <CardContent className='p-0'>
              <div className='min-h-[300px] space-y-3 bg-gray-950 p-4'>
                {messages.length > 0 ? (
                  messages.map((msg, index) => {
                    const isLastMessage = index === messages.length - 1;
                    const isConsecutive =
                      index > 0 && messages[index - 1].sender === msg.sender;

                    return (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'} ${isConsecutive ? 'mt-1' : 'mt-3'}`}
                      >
                        <div
                          className={`relative max-w-[85%] rounded-2xl px-4 py-2 ${
                            msg.sender === 'buyer'
                              ? 'rounded-br-none bg-blue-600 text-white'
                              : 'rounded-bl-none bg-gray-800 text-white'
                          }`}
                        >
                          {!isConsecutive && (
                            <div className='mb-1 text-xs font-medium opacity-80'>
                              {msg.sender === 'buyer' ? (
                                'Buyer'
                              ) : (
                                <span className='text-yellow-400'>Seller</span>
                              )}
                            </div>
                          )}
                          <p
                            className='break-words text-sm leading-relaxed'
                            dangerouslySetInnerHTML={{ __html: msg.message }}
                          ></p>
                          <div className='mt-1 select-none text-right text-[10px] text-gray-300 opacity-75'>
                            {msg.timestamp}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className='flex h-[300px] items-center justify-center'>
                    <p className='text-gray-400'>
                      No conversation history available.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
}
