import { NavItem } from 'types';

export type Fraud = {
  id: number;
  buyer_name: string;
  seller_name: string;
  assignee_name: string;
  description: string;
  created_at: string;
  category: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Overview',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Urgent',
    url: '/dashboard/urgent',
    icon: 'warning',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Dispute',
    url: '/dashboard/dispute',
    icon: 'users',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Fraud',
    url: '/dashboard/fraud',
    icon: 'shieldAlert',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];

// export interface SaleUser {
//   id: number;
//   name: string;
//   email: string;
//   amount: string;
//   image: string;
//   initials: string;
// }

// export const recentSalesData: SaleUser[] = [
//   {
//     id: 1,
//     name: 'Olivia Martin',
//     email: 'olivia.martin@email.com',
//     amount: '+$1,999.00',
//     image: 'https://api.slingacademy.com/public/sample-users/1.png',
//     initials: 'OM'
//   },
//   {
//     id: 2,
//     name: 'Jackson Lee',
//     email: 'jackson.lee@email.com',
//     amount: '+$39.00',
//     image: 'https://api.slingacademy.com/public/sample-users/2.png',
//     initials: 'JL'
//   },
//   {
//     id: 3,
//     name: 'Isabella Nguyen',
//     email: 'isabella.nguyen@email.com',
//     amount: '+$299.00',
//     image: 'https://api.slingacademy.com/public/sample-users/3.png',
//     initials: 'IN'
//   },
//   {
//     id: 4,
//     name: 'William Kim',
//     email: 'will@email.com',
//     amount: '+$99.00',
//     image: 'https://api.slingacademy.com/public/sample-users/4.png',
//     initials: 'WK'
//   },
//   {
//     id: 5,
//     name: 'Sofia Davis',
//     email: 'sofia.davis@email.com',
//     amount: '+$39.00',
//     image: 'https://api.slingacademy.com/public/sample-users/5.png',
//     initials: 'SD'
//   }
// ];
