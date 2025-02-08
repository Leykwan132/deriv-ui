'use client';
import { Fraud } from '@/constants/data-fraud';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action-fraud';

export const columns: ColumnDef<Fraud>[] = [
  {
    accessorKey: 'buyer_name',
    header: 'Buyer Name'
  },
  {
    accessorKey: 'seller_name',
    header: 'Seller Name'
  },
  {
    accessorKey: 'assignee_name',
    header: 'Assignee Name'
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
    accessorKey: 'description',
    header: 'Description'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
