import { CusBox, CusText } from 'components';
import Button from 'components/Button';
import GridView from 'components/List/GridView';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import useKitten from '../useKitten';

const KittenItemList = () => {
  const { spacing } = useAppTheme();
  const { filterData, setFilterValue, filterValue } = useKitten();
  const cardOuterHeight = 150;

  return (
    <GridView<typeof filterData[0]>
      data={filterData}
      numColumns={1}
      renderItem={({ item }) => {
        return (
          <Button
            borderWidth={1}
            bg={item.value === filterValue ? 'fgSuccess' : 'fgSubdued'}
            height={cardOuterHeight}
            onPress={() => setFilterValue(item.value)}
            marginHorizontal="xs"
            borderRadius="s"
            alignItems="center"
          >
            <CusBox
              bg="bgSubdued"
              height={cardOuterHeight - 45}
              m="s"
              mb="xxs"
              alignSelf="stretch"
              borderRadius="s"
              justifyContent="center"
              alignItems="center"
            >
              <CusText variant="subheader" color="fgRegular">
                kkk
              </CusText>
            </CusBox>
            <CusText variant="body" color="fgRegular">
              fff
            </CusText>
          </Button>
        );
      }}
      bottomSpacing={spacing.s}
      rightSpacing={spacing.s}
      keyExtractor={(_, i) => String(i)}
    />
  );
};

export default KittenItemList;
