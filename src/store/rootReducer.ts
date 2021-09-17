import AsyncStorage from '@react-native-async-storage/async-storage';
import persistCombineReducers from 'redux-persist/lib/persistCombineReducers';
import mockReducer from './mockReducer';

/**
 * common persist nested store
 */

const commonConfig = {
  version: 1,
  storage: AsyncStorage,
};

/**
 * appStore
 */
const persistConfig = {
  ...commonConfig,
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

// const appStorePersistConfig = {
//   ...commonConfig,
//   key: 'appStore',
//   //ignore in appStore
//   whitelist: ['i18nCode', 'themeType', 'isDarkMode'],
// };

/**
 * all reducer here
 */
const allReducers = {
  // appStore: persistReducer(appStorePersistConfig, appSlice),
  mockStore: mockReducer,
};

export default persistCombineReducers(persistConfig, allReducers);
