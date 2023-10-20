import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home}
                options={{ title: 'Home' }} />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})