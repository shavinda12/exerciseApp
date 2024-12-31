import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StartScreen from '../../custom_modules/screens/StartScreen';
import LoginScreen from '../../custom_modules/screens/LoginScreen';
import RegistrationScreen from '../../custom_modules/screens/RegistrationScreen';
import HomeScreen from '../../custom_modules/screens/HomeScreen';
import ExerciseDetailScreen from '../../custom_modules/screens/ExerciseDetailScreen';

export type StackParamList = {
  StartScreen: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  HomeScreen: undefined;
  ExerciseDetailScreen: undefined;
};

const stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <stack.Screen name="StartScreen" component={StartScreen}></stack.Screen>
      <stack.Screen name="LoginScreen" component={LoginScreen}></stack.Screen>
      <stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}></stack.Screen>
      <stack.Screen name="HomeScreen" component={HomeScreen}></stack.Screen>
      <stack.Screen
        name="ExerciseDetailScreen"
        component={ExerciseDetailScreen}></stack.Screen>
    </stack.Navigator>
  );
};
export default StackNavigation;
