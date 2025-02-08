import { fakeFrauds, Fraud } from '@/constants/mock-api-fraud';
import { notFound } from 'next/navigation';
import FraudForm from './fraud-form';

type TFraudViewPageProps = {
  fraudId: string;
};

export default async function FraudViewPage({ fraudId }: TFraudViewPageProps) {
  let fraud = null;
  let pageTitle = 'Fraud';

  if (fraudId !== 'new') {
    const data = await fakeFrauds.getFraudById(Number(fraudId));
    fraud = data.fraud as Fraud;
    if (!fraud) {
      notFound();
    }
    pageTitle = `Fraud Case`;
  }

  return <FraudForm initialData={fraud} pageTitle={pageTitle} />;
}
