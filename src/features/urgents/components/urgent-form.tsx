'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Urgent } from '@/constants/mock-api-urgent';
import React from 'react';
import { Image } from 'antd';
import { FileText, Video } from 'lucide-react';

// Hardcoded case logs
// Case logs for different urgent cases
const urgentCaseLogs = {
  1: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Deric AI',
      details:
        'Dispute case automatically created. A timeout is set for response.',
      timestamp: '2024-02-08 10:45 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Dispute Raised by Seller',
      user: 'Tommy Woo',
      details:
        'Seller claims that the buyer has not yet transferred the payment.',
      timestamp: '2024-02-08 10:45 AM',
      type: 'assignment'
    },
    {
      id: 3,
      action: 'Context Analysis',
      user: 'Deric AI',
      details:
        'Deric AI analyzes the chat history between the buyer and seller.',
      timestamp: '2024-02-08 10:45 AM',
      type: 'assignment'
    },
    {
      id: 4,
      action: 'Request for Proof from Buyer',
      user: 'Deric AI',
      details:
        'Deric AI requests the buyer to provide proof of the transaction.',
      timestamp: '2024-02-08 10:46 AM',
      type: 'assignment'
    },
    {
      id: 5,
      action: 'Buyer Submitted Proof',
      user: 'Billy Joe',
      details: 'Buyer provides transaction proof.',
      timestamp: '2024-02-08 10:55 AM',
      type: 'assignment'
    },
    {
      id: 6,
      action: 'Proof Verification',
      user: 'Deric AI',
      details: 'Deric AI analyzes the provided proof from buyer.',
      timestamp: '2024-02-08 10:55 AM',
      type: 'assignment'
    },
    {
      id: 7,
      action: 'Buyer Proof is Valid, Request for Proof from Seller',
      user: 'Deric AI',
      details:
        'Deric AI requests the seller to provide Proof of Not Receiving Transaction.',
      timestamp: '2024-02-08 10:56 AM',
      type: 'system'
    },
    {
      id: 8,
      action: 'Seller Submitted Proof',
      user: 'Tommy Woo',
      details: 'Seller provides proof that no transaction was received.',
      timestamp: '2024-02-08 11:08 AM',
      type: 'assignment'
    },
    {
      id: 9,
      action: 'Proof Verification',
      user: 'Deric AI',
      details: 'Deric AI analyzes the provided proof from seller.',
      timestamp: '2024-02-08 11:08 AM',
      type: 'assignment'
    },
    {
      id: 10,
      action: 'Seller Proof is Valid.',
      user: 'Deric AI',
      details: 'Proof is valid.',
      timestamp: '2024-02-08 11:09 AM',
      type: 'system'
    },
    {
      id: 11,
      action: 'Escalation',
      user: 'Deric AI',
      details:
        'Deric AI escalates dispute case due to verified conflicting evidence.',
      timestamp: '2024-02-08 11:09 AM',
      type: 'system'
    },
    {
      id: 12,
      action: 'Assigned to Agent',
      user: 'Deric AI',
      details: 'Case assigned to Agent.',
      timestamp: '2024-02-08 11:10 AM',
      type: 'system'
    }
  ],
  2: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Deric AI',
      details:
        'Dispute case automatically created. A timeout is set for response.',
      timestamp: '2024-02-07 10:45 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Dispute Raised by Buyer',
      user: 'George Doe',
      details:
        'Buyer claims that the seller has not yet transferred the payment.',
      timestamp: '2024-02-07 10:45 AM',
      type: 'assignment'
    },
    {
      id: 3,
      action: 'Context Analysis',
      user: 'Deric AI',
      details:
        'Deric AI analyzes the chat history between the buyer and seller.',
      timestamp: '2024-02-07 10:45 AM',
      type: 'assignment'
    },
    {
      id: 4,
      action: 'Request for Proof from Buyer',
      user: 'Deric AI',
      details:
        'Deric AI requests the buyer to provide proof of the transaction.',
      timestamp: '2024-02-07 10:46 AM',
      type: 'assignment'
    },
    {
      id: 5,
      action: 'Buyer Submitted Proof',
      user: 'Billy Joe',
      details: 'Buyer provides transaction proof.',
      timestamp: '2024-02-07 10:55 AM',
      type: 'assignment'
    },
    {
      id: 6,
      action: 'Proof Verification',
      user: 'Deric AI',
      details: 'Deric AI analyzes the provided proof from buyer.',
      timestamp: '2024-02-07 10:55 AM',
      type: 'assignment'
    },
    {
      id: 7,
      action: 'Buyer Proof is Valid, Request for Proof from Seller',
      user: 'Deric AI',
      details:
        'Deric AI requests the seller to provide Proof of Not Receiving Transaction.',
      timestamp: '2024-02-07 10:56 AM',
      type: 'system'
    },
    {
      id: 8,
      action: 'Seller Submitted Proof',
      user: 'Quincy Woo',
      details: 'Seller provides proof that no transaction was received.',
      timestamp: '2024-02-07 11:08 AM',
      type: 'assignment'
    },
    {
      id: 9,
      action: 'Proof Verification',
      user: 'Deric AI',
      details: 'Deric AI analyzes the provided proof from seller.',
      timestamp: '2024-02-07 11:08 AM',
      type: 'assignment'
    },
    {
      id: 10,
      action: 'Seller Proof is Valid.',
      user: 'Deric AI',
      details: 'Proof is valid.',
      timestamp: '2024-02-07 11:09 AM',
      type: 'system'
    },
    {
      id: 11,
      action: 'Escalation',
      user: 'Deric AI',
      details:
        'Deric AI escalates dispute case due to verified conflicting evidence.',
      timestamp: '2024-02-08 11:09 AM',
      type: 'system'
    },
    {
      id: 12,
      action: 'Assigned to Agent',
      user: 'Deric AI',
      details: 'Case assigned to Agent.',
      timestamp: '2024-02-08 11:10 AM',
      type: 'system'
    },
    {
      id: 13,
      action: 'Agent Settled Dispute',
      user: 'Ricky Lee',
      details: 'Case closed.',
      timestamp: '2024-02-08 11:29 AM',
      type: 'system'
    }
  ]
};

const urgentSummaries = {
  1: 'A dispute case was created where the seller claimed the buyer had not transferred the payment. Deric AI analyzed the chat history and requested proof from both parties. The buyer provided transaction proof, which was verified as valid, while the seller submitted proof showing no transaction was received, which was also verified as valid. Due to the conflicting evidence, the case was escalated and assigned to a human agent for further review.',
  2: 'A dispute case was created where the buyer claimed the seller had not released the amount. Deric AI analyzed the chat history and requested proof from both parties. The buyer provided transaction proof, which was verified as valid, while the seller submitted proof showing no transaction was received, which was also verified as valid. Due to the conflicting evidence, the case was escalated and assigned to a human agent. The agent reviewed the case and settled the dispute, closing it.'
};

const mockProofs = {
  seller: [
    {
      id: 1,
      type: 'image',
      name: 'Transaction.jpg',
      url: 'https://assets.aseannow.com/forum/uploads/monthly_2022_10/wise_receipt_p2.jpg.ddb745e9c798904b2138abf530f1a7d0.jpg'
    },
    { id: 2, type: 'pdf', name: 'Transaction_Receipt.pdf', url: '#' },
    { id: 3, type: 'video', name: 'Video_Proof.mp4', url: '#' }
  ],
  buyer: [
    {
      id: 1,
      type: 'image',
      name: 'Transaction.jpg',
      url: 'https://assets.aseannow.com/forum/uploads/monthly_2022_10/wise_receipt_p2.jpg.ddb745e9c798904b2138abf530f1a7d0.jpg'
    },
    { id: 2, type: 'pdf', name: 'Receipt.pdf', url: '#' },
    { id: 3, type: 'video', name: 'Video_Proof.mp4', url: '#' }
  ]
};

const FileIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'video':
      return <Video className='h-8 w-8 text-gray-400' />;
    case 'pdf':
      return <FileText className='h-8 w-8 text-gray-400' />;
    default:
      return <FileText className='h-8 w-8 text-gray-400' />;
  }
};

const ProofCard = ({ title, proofs }: { title: string; proofs: any[] }) => (
  <Card className='border-gray-800 bg-gray-900'>
    <CardHeader className='border-b border-gray-800'>
      <CardTitle className='text-xl font-bold text-white'>
        <div className='flex items-center space-x-2'>
          <span>📎</span>
          <span>{title}</span>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className='p-4'>
      <div className='grid grid-cols-2 gap-4'>
        {proofs.map((proof) => (
          <div
            key={proof.id}
            className='group relative rounded-lg border border-gray-800 p-4 transition-colors hover:border-gray-700'
          >
            {proof.type === 'image' ? (
              <div className='relative mb-2 aspect-video w-full overflow-hidden rounded-lg'>
                <Image
                  src={proof.url}
                  alt={proof.name}
                  className='object-cover'
                  preview={{
                    maskClassName: 'backdrop-blur-sm',
                    mask: (
                      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white'>
                        Click to view
                      </div>
                    )
                  }}
                />
              </div>
            ) : (
              <div className='mb-2 flex aspect-video items-center justify-center rounded-lg'>
                <FileIcon type={proof.type} />
              </div>
            )}
            <div className='space-y-1'>
              <p className='truncate text-sm font-medium text-white'>
                {proof.name}
              </p>
              <p className='text-xs uppercase text-gray-400'>{proof.type}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function UrgentForm({
  initialData,
  pageTitle
}: {
  initialData: Urgent | null;
  pageTitle: string;
}) {
  if (!initialData) {
    return (
      <div className='flex min-h-[400px] items-center justify-center'>
        <p className='text-gray-400'>No urgent details found.</p>
      </div>
    );
  }

  // Get the appropriate case logs and summary based on the urgent ID
  const caseLogs =
    urgentCaseLogs[initialData.id as keyof typeof urgentCaseLogs] || [];
  const summary =
    urgentSummaries[initialData.id as keyof typeof urgentSummaries] ||
    'No summary available for this urgent case.';

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'in progress':
        return 'text-yellow-500';
      case 'done':
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
            <div className='grid grid-cols-4 gap-4'>
              <div className='rounded-lg bg-gray-800 p-4'>
                <p className='mb-1 text-sm text-gray-400'>Urgent ID</p>
                <p className='text-lg font-medium text-white'>
                  {initialData.id}
                </p>
              </div>
              <div className='rounded-lg bg-gray-800 p-4'>
                <p className='mb-1 text-sm text-gray-400'>Category</p>
                <p className={`text-lg font-medium`}>{initialData.category}</p>
              </div>
              <div className='rounded-lg bg-gray-800 p-4'>
                <p className='mb-1 text-sm text-gray-400'>Created At</p>
                <p className='text-lg font-medium text-white'>
                  {initialData.created_at}
                </p>
              </div>
              <div className='rounded-lg bg-gray-800 p-4'>
                <p className='mb-1 text-sm text-gray-400'>Assignee</p>
                <p className='text-lg font-medium text-white'>
                  {initialData.assignee_name || 'Unassigned'}
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
                <p
                  className={`text-lg font-medium ${getStatusColor(initialData.status)}`}
                >
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
              <span>📝</span>
              <span>Deric AI Summary</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className='p-4'>
          <div className='space-y-4'>
            <div>
              <p className='mb-6 text-sm text-gray-400'>
                Summary of this Urgent Case
              </p>
              <p className='text-m text-justify font-medium text-white'>
                {summary}
              </p>
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

      <div className='grid grid-cols-2 gap-4'>
        <ProofCard title='Seller Proof' proofs={mockProofs.seller} />
        <ProofCard title='Buyer Proof' proofs={mockProofs.buyer} />
      </div>
    </div>
  );
}
