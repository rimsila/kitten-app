import { useMemo, useState } from 'react';

export type FilterData = {
  value: number;
};

const useKitten = () => {
  const filterData: FilterData[] = useMemo(() => [{ value: 30 }, { value: 50 }, { value: 100 }], []);
  const [filterValue, setFilterValue] = useState(filterData[0].value);

  return { filterValue, filterData, setFilterValue };
};

export default useKitten;
