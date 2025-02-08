import FormCardSkeleton from '@/components/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import FraudViewPage from '@/features/frauds/components/fraud-view-page';

export const metadata = {
  title: 'Dashboard : Fraud View'
};

type PageProps = { params: { caseId: string } };

export default function Page({ params }: PageProps) {
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <FraudViewPage fraudId={params.caseId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
