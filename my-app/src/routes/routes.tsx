import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer,} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login/Login'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import Home from '../pages/Home/Home';
import Resume from '../pages/Resume/Resume';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ headerShown: false, }}
      />
       <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, }}
      />
       <Stack.Screen
        name="Resume"
        component={Resume}
        options={{ headerShown: false, }}
      />

    </Stack.Navigator>
  );
}

export default Routes;