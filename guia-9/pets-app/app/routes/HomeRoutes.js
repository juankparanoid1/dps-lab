import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../utils/Screens';
import Dogs from '../screens/dogs/Dogs';
import Cats from '../screens/cats/Cats';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeRoutes = () => {
    const Tab = createBottomTabNavigator();

    const displayIcon = (screenName) => {
        if (!screenName) {
            return;
        }
        let iconName = '';
        switch (screenName) {
            case Screens.DOGS:
                iconName = 'dog';
                break;
            case Screens.CATS:
                iconName = 'cat';
                break;
            default:
                break;
        }
        return iconName;
    }
    return (
        <Tab.Navigator screenOptions={({ route }) => (
            {
                tabBarIcon: ({ focused, color, size }) => {
                    const screenName = route.name;
                    const iconName = displayIcon(screenName);
                    return <Icon style={{fontSize: 25,}} name={iconName} color='#108cff' />
                },
            }
        )

        }>
            <Tab.Screen name={Screens.DOGS} options={{ headerTitleStyle: styles.headerTitleStyle, headerTitleAlign: 'center' }} component={Dogs}></Tab.Screen>
            <Tab.Screen name={Screens.CATS} options={{ headerTitleStyle: styles.headerTitleStyle, headerTitleAlign: 'center' }} component={Cats}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default HomeRoutes

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.font,
    }
})