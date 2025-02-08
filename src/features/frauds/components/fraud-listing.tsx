import { Fraud } from '@/constants/data-fraud';
import { fakeFrauds } from '@/constants/mock-api-fraud';
import { searchParamsCache } from '@/lib/searchparams';
import { DataTable as FraudTable } from '@/components/ui/table/data-table-fraud';
import { columns } from './fraud-tables/columns-fraud';

type FraudListingPage = {};

export default async function FraudListingPage({}: FraudListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');
  const categories = searchParamsCache.get('categories');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories })
  };

  const data = await fakeFrauds.getFrauds(filters);
  const totalFrauds = data.total_frauds;
  const frauds: Fraud[] = data.frauds;

  return (
    <FraudTable columns={columns} data={frauds} totalItems={totalFrauds} />
  );
}
