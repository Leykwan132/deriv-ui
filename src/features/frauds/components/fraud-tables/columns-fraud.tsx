'use client';
import { Fraud } from '@/constants/data-fraud';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action-fraud';

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Actions Needed':
      return 'text-red-500';
    case 'Reviewing':
      return 'text-yellow-400';
    case 'Solved':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
};

export const columns: ColumnDef<Fraud>[] = [
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
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => {
      const category: string = row.getValue('category');
      return <span className={getCategoryColor(category)}>{category}</span>;
    }
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
