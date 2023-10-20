import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contact from '../screens/Contact';

const ContactStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="contact" component={Contact}
                options={{ title: 'Contact' }} />
        </Stack.Navigator>
    )
}

export default ContactStack

const styles = StyleSheet.create({})