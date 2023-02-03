
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Tab.routes';
import {Provider} from 'react-redux'
import store from './src/redux/store';

export default function App() {
  return (
       <>
      <NavigationContainer>
           <Provider store={store}>
           <Routes/>
         </Provider>
      </NavigationContainer>
   </>
  );
}


