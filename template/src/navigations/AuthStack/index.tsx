import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Auth} from 'screens';
import {AuthStackParams} from 'types';

const Stack = createNativeStackNavigator<AuthStackParams>();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Auth.Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
