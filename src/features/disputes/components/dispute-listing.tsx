import { Dispute } from '@/constants/data-dispute';
import { fakeDisputes } from '@/constants/mock-api-dispute';
import { searchParamsCache } from '@/lib/searchparams';
import { DataTable as DisputeTable } from '@/components/ui/table/data-table-dispute';
import { columns } from './dispute-tables/columns-dispute';

type DisputeListingPage = {};

export default async function DisputeListingPage({}: DisputeListingPage) {
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

  const data = await fakeDisputes.getDisputes(filters);
  const totalDisputes = data.total_disputes;
  const disputes: Dispute[] = data.disputes;

  return (
    <DisputeTable
      columns={columns}
      data={disputes}
      totalItems={totalDisputes}
    />
  );
}
