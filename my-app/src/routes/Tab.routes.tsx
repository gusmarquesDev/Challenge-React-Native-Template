import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer,} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login/Login'
import CreateAccount from '../pages/CreateAccount/CreateAccount'


const Tab = createBottomTabNavigator();



function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 35,
          paddingBottom: 20,
          
        },
        tabBarActiveTintColor: "#D35400",
        tabBarInactiveTintColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        
        options={{
            tabBarStyle:{
                display: 'none'
            },
        //   tabBarIcon: ({ size, color }) => (
        //     <FontAwesome5 name="store" size={size} color={color} />
        //   ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
        //   tabBarIcon: ({ size, color }) => (
        //     <MaterialCommunityIcons
        //       name="clipboard-list"
        //       size={size}
        //     />
        //   ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;