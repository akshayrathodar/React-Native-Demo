import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import DetailScreen from './Detail';

const Tab = createBottomTabNavigator();

const Setting = () => {
    <>
        <Text>I'm Setting Section</Text>
    </>
}

export default function Home() {
    return (
        
            <Tab.Navigator>
                <Tab.Screen name="Details" component={DetailScreen} />
                <Tab.Screen name="Setting" component={Setting} />
            </Tab.Navigator>
        
    )
}