import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from "./TabRoutes";
import navigationStrings from "../constants/navigationStrings";
// import OrderDetail from "../Screen/OrderDetail/OrderDetail";
const Stack=createStackNavigator();
export default function(){


  return(
    <>
    <Stack.Screen
      name={navigationStrings.TAB_ROUTES}
      
      component={TabRoutes}
    />
     
    
    
      </>
  )
}