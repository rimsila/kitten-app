import { NavigationContainerRef, Route, RouteProp, StackActions } from '@react-navigation/native';
import * as React from 'react';
import { AppStackParams } from './AppNavigation';

const navigationRef = React.createRef<NavigationContainerRef<AppStackParams>>();

function navigateStack<T extends keyof AppStackParams>(
  name: RouteProp<AppStackParams, T>['name'],
  param?: RouteProp<AppStackParams, T>['params']
) {
  navigationRef.current?.navigate(name, param as any);
}

function navigateReplaceStack<T extends keyof AppStackParams>(
  name: RouteProp<AppStackParams, T>['name'],
  param?: RouteProp<AppStackParams, T>['params']
) {
  navigationRef.current?.dispatch(StackActions.replace(name, param));
}

function goBack() {
  navigationRef.current?.goBack();
}

function isCanGoBack() {
  return navigationRef.current?.canGoBack();
}

function getCurrentRoute<T extends Object>(): Route<keyof AppStackParams, T> {
  return navigationRef.current?.getCurrentRoute() as any;
}
export { navigateStack, goBack, navigationRef, getCurrentRoute, navigateReplaceStack, isCanGoBack };
