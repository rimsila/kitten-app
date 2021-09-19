import faker from 'faker';

export const fakerData = (isDebug?: boolean) => {
  if (isDebug) {
    console.log('mock Arr', faker);
  }
  return faker;
};

export const genMockArr = ({ data, isDebug, length = 6 }: { data: () => void; isDebug?: boolean; length?: number }) => {
  let getArr;
  if (data) {
    getArr = Array.from({ length }, data);
  }
  if (isDebug) {
    console.log('genArr', getArr);
  }
  return getArr as [];
};
