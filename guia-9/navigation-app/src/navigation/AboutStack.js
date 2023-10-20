import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';

const AboutStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="about" component={About}
                options={{ title: 'About' }} />
        </Stack.Navigator>
    )
}

export default AboutStack

const styles = StyleSheet.create({})