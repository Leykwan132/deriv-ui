'use client';
import { Urgent } from '@/constants/data-urgent';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action-urgent';

export const columns: ColumnDef<Urgent>[] = [
  {
    accessorKey: 'id', // Added ID column
    header: 'ID'
  },
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
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status: string = row.getValue('status');

      const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
          case 'in progress':
            return 'text-yellow-500';
          case 'done':
            return 'text-green-500';
          case 'pending':
            return 'text-orange-500';
          case 'canceled':
            return 'text-red-500';
          default:
            return 'text-gray-500';
        }
      };

      return <span className={getStatusColor(status)}>{status}</span>;
    }
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
