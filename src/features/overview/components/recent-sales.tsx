import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

export function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Urgent (Escalation) Cases</CardTitle>
        <CardDescription>
          30 urgent (escalation) cases this month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {[
            {
              id: `ID1`,
              name: 'Category: Buyer Not Paid',
              email: 'In Progress',
              date: '08/02/2025'
            },
            {
              id: `ID2`,
              name: 'Category: Seller Not Released',
              email: 'In Progress',
              date: '08/02/2025'
            },
            {
              id: `ID3`,
              name: 'Category: Buyer Not Paid',
              email: 'In Progress',
              date: '08/02/2025'
            },
            {
              id: `ID4`,
              name: 'Category: Buyer Overpaid',
              email: 'Done',
              date: '08/02/2025'
            },
            {
              id: `ID5`,
              name: 'Category: Buyer Underpaid',
              email: 'Done',
              date: '07/02/2025'
            }
          ].map((caseItem) => (
            <div key={caseItem.id} className='flex items-center'>
              <div className='flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium'>
                {caseItem.id}
              </div>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {caseItem.name}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {caseItem.email}
                </p>
              </div>
              <div className='ml-auto font-medium'>{caseItem.date}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
