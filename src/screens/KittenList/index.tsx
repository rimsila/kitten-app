import { CusBox } from 'components';
import Button from 'components/Button';
import GridView from 'components/List/GridView';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import KittenItemList from './kittenItemList';
import useKitten from './useKitten';

const KittenListScreen = () => {
  const { spacing } = useAppTheme();
  const { filterData, setFilterValue, filterValue } = useKitten();

  return (
    <CusBox paddingHorizontal="s" paddingVertical="s">
      <GridView<typeof filterData[0]>
        data={filterData}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <Button
              borderWidth={1}
              bg={item.value === filterValue ? 'fgSuccess' : 'fgSubdued'}
              height={45}
              onPress={() => setFilterValue(item.value)}
              alignItems="center"
              justifyContent="center"
              marginHorizontal="xs"
              borderRadius="s"
              label={String(item?.value)}
              labelProps={{ color: 'fgContrasting' }}
            />
          );
        }}
        bottomSpacing={spacing.s}
        rightSpacing={spacing.s}
        keyExtractor={(_, i) => String(i)}
      />
      <CusBox height={spacing.xl} />
      <KittenItemList />
    </CusBox>
  );
};

export default KittenListScreen;
