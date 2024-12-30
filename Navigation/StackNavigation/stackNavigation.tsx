import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StartScreen from '../../custom_modules/screens/StartScreen';
import LoginScreen from '../../custom_modules/screens/LoginScreen';
import RegistrationScreen from '../../custom_modules/screens/RegistrationScreen';



export type StackParamList={
  StartScreen:undefined,
  LoginScreen:undefined,
  RegistrationScreen:undefined
}

const stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="StartScreen">
      <stack.Screen name="StartScreen" component={StartScreen}></stack.Screen>
      <stack.Screen name="LoginScreen" component={LoginScreen}></stack.Screen>
      <stack.Screen name="RegistrationScreen" component={RegistrationScreen}></stack.Screen>
    </stack.Navigator>
  );
};
export default StackNavigation;
