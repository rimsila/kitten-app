import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, StyleProp, View, ViewStyle } from 'react-native';
import { getGridItemMarginRight, getGridItemWidth, SCREEN_WIDTH } from 'utils/dimension';

export interface IGridViewProps<T> extends FlatListProps<T> {
  numColumns: number;
  bottomSpacing: number;
  rightSpacing?: number;
  containerStyle?: StyleProp<ViewStyle>;
  childContainerStyle?: StyleProp<ViewStyle>;
  renderItem: ListRenderItem<T>;
  containerWidth?: number;
  isLoading?: boolean;
}

function GridView<T>(props: IGridViewProps<T>) {
  const {
    bottomSpacing,
    rightSpacing = 0,
    numColumns = 2,
    containerStyle,
    renderItem,
    containerWidth = SCREEN_WIDTH,
    ...rest
  } = props;

  const itemWidth = getGridItemWidth({ numColumns: numColumns, containerWidth: containerWidth, spacing: rightSpacing });

  const renderCustomItem: ListRenderItem<T> = ({ item, index, separators }) => {
    return (
      <View
        style={[
          { marginRight: getGridItemMarginRight({ numColumns, index, spacing: rightSpacing }), width: itemWidth },
          props.childContainerStyle,
        ]}
      >
        {renderItem({ item, index, separators })}
      </View>
    );
  };

  return (
    <>
      <FlatList<T>
        numColumns={numColumns}
        style={[containerStyle]}
        ItemSeparatorComponent={() => <View style={{ height: bottomSpacing }} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...rest}
        renderItem={renderCustomItem}
      />
    </>
  );
}

export default GridView;
