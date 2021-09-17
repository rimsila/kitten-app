import { StackNavigationOptions } from '@react-navigation/stack';
import { CusBox, CusText } from 'components';
import React from 'react';

const KittenListOption: StackNavigationOptions = {
  header: () => (
    <CusBox bg="fgSuccess" height={50} justifyContent="center" alignItems="center">
      <CusText variant="body" color="fgContrasting" opacity={0.9}>
        Kitten List
      </CusText>
    </CusBox>
  ),
};

export default KittenListOption;
