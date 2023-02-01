
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Tab.routes';


export default function App() {
  return (
       <>
      <NavigationContainer>
         <Routes/>
      </NavigationContainer>
   </>
  );
}


