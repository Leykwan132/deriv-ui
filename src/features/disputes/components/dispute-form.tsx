'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Dispute } from '@/constants/mock-api-dispute';
import React from 'react';
import { Image } from 'antd';
import { FileText, Video } from 'lucide-react';

// Hardcoded case logs
// Case logs for different dispute cases
const disputeCaseLogs = {
  1: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Deric AI',
      details: 'Dispute case automatically created.',
      timestamp: '2024-02-08 10:45 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Dispute Raised by Seller',
      user: 'Emma Lii',
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
      timestamp: '2024-02-08 10:46 AM',
      type: 'assignment'
    },
    {
      id: 4,
      action: 'Request for Proof',
      user: 'Deric AI',
      details:
        'Deric AI requests the buyer to provide proof of the transaction. A timeout is set for response.',
      timestamp: '2024-02-08 10:46 AM',
      type: 'assignment'
    },
    {
      id: 5,
      action: 'Buyer Submitted Proof',
      user: 'Angel Chan',
      details: 'Buyer provides transaction proof.',
      timestamp: '2024-02-08 10:52 AM',
      type: 'assignment'
    },
    {
      id: 6,
      action: 'Proof Verification',
      user: 'Deric AI',
      details: 'Deric AI analyzes the provided proof.',
      timestamp: '2024-02-08 10:53 AM',
      type: 'assignment'
    },
    {
      id: 7,
      action: 'Proof is Not Valid',
      user: 'Deric AI',
      details:
        'Deric AI detects inconsistencies and rejects the buyer’s appeal, providing reasons. Funds are released to the seller.',
      timestamp: '2024-02-08 10:54 AM',
      type: 'system'
    },
    {
      id: 8,
      action: 'Case Closed',
      user: 'Deric AI',
      details: 'Dispute case automatically closed.',
      timestamp: '2024-02-08 10:54 AM',
      type: 'system'
    }
  ],
  2: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Deric AI',
      details: 'Dispute case automatically created.',
      timestamp: '2024-02-08 10:44 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Dispute Raised by Buyer',
      user: 'Clover Mint',
      details: 'Buyer claims that the seller has not yet released the amount.',
      timestamp: '2024-02-08 10:44 AM',
      type: 'assignment'
    },
    {
      id: 3,
      action: 'Context Analysis',
      user: 'Deric AI',
      details:
        'Deric AI analyzes the chat history between the buyer and seller.',
      timestamp: '2024-02-08 10:44 AM',
      type: 'assignment'
    },
    {
      id: 4,
      action: 'Request for Proof',
      user: 'Deric AI',
      details:
        'Deric AI requests the buyer to provide proof of the transaction. A timeout is set for response.',
      timestamp: '2024-02-08 10:44 AM',
      type: 'assignment'
    },
    {
      id: 5,
      action: 'Waiting Buyer to Submit Proof',
      user: 'Clover',
      details: 'Pending proof submission from the buyer.',
      timestamp: '2024-02-08 10:45 AM',
      type: 'assignment'
    }
  ],
  3: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Deric AI',
      details: 'Dispute case automatically created.',
      timestamp: '2024-02-08 10:43 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Dispute Raised by Seller',
      user: 'Lina Ng',
      details: 'Seller claims that the buyer underpaid.',
      timestamp: '2024-02-08 10:43 AM',
      type: 'assignment'
    },
    {
      id: 3,
      action: 'Context Analysis',
      user: 'Deric AI',
      details:
        'Deric AI analyzes the chat history between the buyer and seller.',
      timestamp: '2024-02-08 10:43 AM',
      type: 'assignment'
    },
    {
      id: 4,
      action: 'Request for Proof',
      user: 'Deric AI',
      details:
        'Deric AI requests the seller to provide proof of the receipt. A timeout is set for response.',
      timestamp: '2024-02-08 10:43 AM',
      type: 'assignment'
    },
    {
      id: 5,
      action: 'Waiting Seller to Submit Proof',
      user: 'Lina Ng',
      details: 'Pending proof submission from the seller.',
      timestamp: '2024-02-08 10:44 AM',
      type: 'assignment'
    }
  ],
  4: [
    {
      id: 1,
      action: 'Case Created',
      user: 'Deric AI',
      details: 'Dispute case automatically created.',
      timestamp: '2024-02-07 10:45 AM',
      type: 'system'
    },
    {
      id: 2,
      action: 'Dispute Raised by Buyer',
      user: 'Lee Anne',
      details: 'Buyer claims they overpaid and requests a refund.',
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
      action: 'Request for Proof',
      user: 'Deric AI',
      details:
        'Deric AI requests the buyer to provide proof of the transaction. A timeout is set for response.',
      timestamp: '2024-02-07 10:46 AM',
      type: 'assignment'
    },
    {
      id: 5,
      action: 'Buyer Submitted Proof',
      user: 'Angel Chan',
      details: 'Buyer provides transaction proof.',
      timestamp: '2024-02-07 10:55 AM',
      type: 'assignment'
    },
    {
      id: 6,
      action: 'Proof Verification',
      user: 'Deric AI',
      details: 'Deric AI analyzes the provided proof.',
      timestamp: '2024-02-07 10:55 AM',
      type: 'assignment'
    },
    {
      id: 7,
      action: 'Overpayment is Verified',
      user: 'Deric AI',
      details:
        'Deric AI prompts the seller to confirm if they received the overpaid amount. Timeout is set for response.',
      timestamp: '2024-02-07 10:54 AM',
      type: 'system'
    },
    {
      id: 8,
      action: 'Seller Acknowledges Overpayment',
      user: 'Deric AI',
      details: 'Seller processed a refund.',
      timestamp: '2024-02-07 11:08 AM',
      type: 'system'
    },
    {
      id: 9,
      action: 'Case Closed',
      user: 'Deric AI',
      details: 'Dispute case automatically closed.',
      timestamp: '2024-02-07 11:08 AM',
      type: 'system'
    }
  ]
};

const disputeSummaries = {
  1: 'This dispute involves a seller claiming that the buyer has not transferred the payment. Deric AI automatically created the dispute case and analyzed the chat history. It then requested the buyer to provide proof of payment, which the buyer submitted. However, after analyzing the proof, Deric AI detected inconsistencies, deemed the proof invalid, and ruled in favor of the seller, releasing the funds to them. The case was then closed.',
  2: "This dispute involves a buyer claiming that the seller has not yet released the payment amount. Deric AI automatically created the case and analyzed the chat history. It then requested the buyer to submit proof of the transaction, setting a timeout for the response. The case is currently pending as the system awaits the buyer's proof submission.",
  3: "This dispute involves a seller claiming that the buyer underpaid. Deric AI automatically created the case and analyzed the chat history. It then requested the seller to submit proof of the receipt, setting a timeout for the response. The case is currently pending as the system awaits the seller's proof submission.",
  4: 'This dispute involves a buyer claiming they overpaid and requesting a refund. Deric AI analyzed the chat history and requested proof from the buyer, which was later submitted and verified. The system then prompted the seller to confirm receipt of the overpaid amount. The seller acknowledged the overpayment and processed a refund, leading to the automatic closure of the case.'
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

export default function DisputeForm({
  initialData,
  pageTitle
}: {
  initialData: Dispute | null;
  pageTitle: string;
}) {
  if (!initialData) {
    return (
      <div className='flex min-h-[400px] items-center justify-center'>
        <p className='text-gray-400'>No dispute details found.</p>
      </div>
    );
  }

  // Get the appropriate case logs and summary based on the dispute ID
  const caseLogs =
    disputeCaseLogs[initialData.id as keyof typeof disputeCaseLogs] || [];
  const summary =
    disputeSummaries[initialData.id as keyof typeof disputeSummaries] ||
    'No summary available for this dispute case.';

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
            <div className='grid grid-cols-3 gap-4'>
              <div className='rounded-lg bg-gray-800 p-4'>
                <p className='mb-1 text-sm text-gray-400'>Dispute ID</p>
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
                Summary of this Dispute Case
              </p>
              <p className='text-m text-justify font-medium text-white'>
                {summary}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
