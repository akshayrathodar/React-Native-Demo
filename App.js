import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StackNavigator, TabNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {createDrawerNavigator} from '@react-navigation/drawer';


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import Login from './Screens/login';
import DetailScreen from './Screens/Detail';
import Todos from './Screens/Todos';

import Setting from './Screens/Settings';

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return(
      <Drawer.Navigator
      initialRouteName="Home">
      <Drawer.Screen name="Home2  " component={DetailScreen2} />
      <Drawer.Screen name="Settings" component={Setting} />
      <Drawer.Screen name="Todos" component={Todos} />
</Drawer.Navigator>
    )
}

const DetailScreen2 = () => {
    return(
      <Tab.Navigator>
        <Tab.Screen name="Details" component={DetailScreen} />
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="Todos" component={Todos} />
      </Tab.Navigator>
    )
}


export default function App() {
  return (

      <NavigationContainer initialRouteName="Home" >
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Login}  />
            <Stack.Screen name="Details" component={DrawerNav} options={({ navigation }) => 
            ({
                headerLeft:null
            })}/>
        </Stack.Navigator>
      </NavigationContainer>      
    
  );
}

const Stack = createStackNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1:{
    fontSize:40
  }
});
