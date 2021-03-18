import  React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, Signup, LandingPage, MainPage} from "../Screen";

import navigationStrings from '../constants/navigationStrings';
import MainStack from './MainStack';
import TabRoutes from './TabRoutes';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>

      <Stack.Screen options={{headerShown:false}}  name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen options={{headerShown:false}} name={navigationStrings.SIGNUP} component={Signup} />
      <Stack.Screen options={{headerShown:false}} name={navigationStrings.MAIN_PAGE} component={TabRoutes} />
      {/* <Stack.Screen options={{headerShown:false}} name={navigationStrings.ORDER_DETAIL} component={OrderDetail} /> */}

      {/* {MainStack(Stack)} */}

      </React.Fragment>
  );
}

export default AuthStack;
