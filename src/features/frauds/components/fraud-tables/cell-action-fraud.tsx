'use client';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import { Fraud } from '@/constants/data-fraud';
import { Edit, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: Fraud;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <div className='flex justify-end'>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      {/* <Button
        variant='outline'
        className='h-8 px-4 flex items-center gap-2'
        onClick={() => router.push(`/dashboard/fraud/${data.id}`)}
      >
        <Edit className='h-4 w-4' /> View More
      </Button> */}
    </div>
  );
};
