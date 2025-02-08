import { fakeDisputes, Dispute } from '@/constants/mock-api-dispute';
import { notFound } from 'next/navigation';
import DisputeForm from './dispute-form';

type TDisputeViewPageProps = {
  disputeId: string;
};

export default async function DisputeViewPage({
  disputeId
}: TDisputeViewPageProps) {
  let dispute = null;
  let pageTitle = 'Dispute';

  if (disputeId !== 'new') {
    const data = await fakeDisputes.getDisputeById(Number(disputeId));
    dispute = data.dispute as Dispute;
    if (!dispute) {
      notFound();
    }
    pageTitle = `Dispute Case`;
  }

  return <DisputeForm initialData={dispute} pageTitle={pageTitle} />;
}
