import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import AboutStack from './AboutStack';

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name="home" component={Home} options={{ title: 'Home' }} />
    //   <Stack.Screen name="about" component={About} options={{ title: 'About' }} />
    //   <Stack.Screen name="contact" component={Contact} options={{ title: 'Contact' }} />
    // </Stack.Navigator>
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="contact" component={ContactStack} options={{ title: 'Contact' }} />
      <Tab.Screen name="about" component={AboutStack} options={{ title: 'About' }} />
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})