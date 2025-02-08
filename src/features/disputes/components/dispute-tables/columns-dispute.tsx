'use client';
import { Dispute } from '@/constants/data-dispute';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action-dispute';

export const columns: ColumnDef<Dispute>[] = [
  {
    accessorKey: 'buyer_name',
    header: 'Buyer Name'
  },
  {
    accessorKey: 'seller_name',
    header: 'Seller Name'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
    cell: ({ row }) => {
      const date = new Date(row.getValue('created_at'));
      return date.toLocaleDateString(); // Formats date
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
