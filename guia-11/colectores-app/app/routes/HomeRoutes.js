import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Screens from '../utils/Screens';
import NewColector from '../components/NewColector';
import ListColector from '../components/ListColector';

const HomeRoutes = () => {
    const Tab = createBottomTabNavigator();

    const displayIcon = (screenName) => {
        if (!screenName) {
            return;
        }
        let iconName = '';
        switch (screenName) {
            case Screens.ADD:
                iconName = 'home';
                break;
            case Screens.LIST:
                iconName = 'list';
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
            <Tab.Screen name={Screens.ADD} options={{ headerTitleStyle: styles.headerTitleStyle, headerTitleAlign: 'center', headerTitle: 'Nuevo colector' }} component={NewColector}></Tab.Screen>
            <Tab.Screen name={Screens.LIST} options={{ headerTitleStyle: styles.headerTitleStyle, headerTitleAlign: 'center', headerTitle: 'Colectores registrados' }} component={ListColector}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default HomeRoutes

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 24,
        fontWeight: '600',
    }
})