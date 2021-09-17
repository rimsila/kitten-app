import { Dimensions } from 'react-native';
import { spacingSize } from 'themes';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const getnBymHeight = (width = SCREEN_WIDTH, n = 16, m = 9) => (width * m) / n;

export const getGridItemWidth = ({
  containerWidth = SCREEN_WIDTH,
  spacing = 16,
  numColumns,
}: {
  containerWidth?: number;
  spacing?: number;
  numColumns: number;
}) => (containerWidth - spacing * 2 - (numColumns - 1) * spacing) / numColumns;

export const getGridItemMarginRight = ({
  index,
  numColumns,
  spacing = spacingSize.m,
}: {
  index: number;
  numColumns: number;
  spacing?: number;
}) => ((index + 1) / numColumns === 0 ? 0 : spacing);

export const pxToNum = (px: string) => {
  return parseInt(px.replace('px', ''), 10);
};
