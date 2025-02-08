import FormCardSkeleton from '@/components/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import DisputeViewPage from '@/features/disputes/components/dispute-view-page';

export const metadata = {
  title: 'Dashboard : Dispute View'
};

type PageProps = { params: Promise<{ caseId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <DisputeViewPage disputeId={params.caseId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
