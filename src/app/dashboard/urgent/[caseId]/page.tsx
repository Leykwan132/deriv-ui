import FormCardSkeleton from '@/components/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import UrgentViewPage from '@/features/urgents/components/urgent-view-page';

export const metadata = {
  title: 'Dashboard : Urgent View'
};

type PageProps = { params: Promise<{ caseId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <UrgentViewPage urgentId={params.caseId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
