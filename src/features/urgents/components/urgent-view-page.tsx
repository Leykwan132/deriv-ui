import { fakeUrgents, Urgent } from '@/constants/mock-api-urgent';
import { notFound } from 'next/navigation';
import UrgentForm from './urgent-form';

type TUrgentViewPageProps = {
  urgentId: string;
};

export default async function UrgentViewPage({
  urgentId
}: TUrgentViewPageProps) {
  let urgent = null;
  let pageTitle = 'Urgent';

  if (urgentId !== 'new') {
    const data = await fakeUrgents.getUrgentById(Number(urgentId));
    urgent = data.urgent as Urgent;
    if (!urgent) {
      notFound();
    }
    pageTitle = `Urgent Case`;
  }

  return <UrgentForm initialData={urgent} pageTitle={pageTitle} />;
}
