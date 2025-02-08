import { Urgent } from '@/constants/data-urgent';
import { fakeUrgents } from '@/constants/mock-api-urgent';
import { searchParamsCache } from '@/lib/searchparams';
import { DataTable as UrgentTable } from '@/components/ui/table/data-table-urgent';
import { columns } from './urgent-tables/columns-urgent';

type UrgentListingPage = {};

export default async function UrgentListingPage({}: UrgentListingPage) {
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

  const data = await fakeUrgents.getUrgents(filters);
  const totalUrgents = data.total_urgents;
  const urgents: Urgent[] = data.urgents;

  return (
    <UrgentTable columns={columns} data={urgents} totalItems={totalUrgents} />
  );
}
