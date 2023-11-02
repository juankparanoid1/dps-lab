import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import PantallaInicio from './app/components/PantallaInicio';
import ListarProductos from './app/components/ListarProductos';
import PaginaDetalle from './app/components/PaginaDetalle';
import PaginaAgregar from './app/components/PaginaAgregar';

export default function App() {
  const RootStack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer initialRouteName='Inicio'>
        <RootStack.Navigator>
          <RootStack.Screen name={'Inicio'} options={{ headerShown: false, gestureEnabled: false }} component={PantallaInicio} />
          <RootStack.Screen name={'ListarProductos'} options={{ headerShown: false, gestureEnabled: false }} component={ListarProductos} />
          <RootStack.Screen name={'Detalles'} options={{ headerShown: false, gestureEnabled: false }} component={PaginaDetalle} />
          <RootStack.Screen name={'Agregar'} options={{ headerShown: false, gestureEnabled: false }} component={PaginaAgregar} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
