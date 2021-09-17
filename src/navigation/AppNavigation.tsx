import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import KittenListScreen from 'screens/KittenList';
import KittenListOption from 'screens/KittenList/options';
import { navigationRef } from './NavigationService';

const Stack = createStackNavigator<AppStackParams>();

export type AppStackParams = {
  Splash: undefined;
  KittenList: undefined;
};

const AppNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      // theme={isDarkMode ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="KittenList">
        {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="KittenList" component={KittenListScreen} options={KittenListOption} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
