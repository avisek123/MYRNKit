import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Main} from 'screens';
import {MainStackParams} from 'types';
const Stack = createNativeStackNavigator<MainStackParams>();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Main.Home} />
      <Stack.Screen name="Settings" component={Main.Settings} />
    </Stack.Navigator>
  );
};

export default MainStack;
