import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text> Estamos en Home </Text>
            <Button title='Ir a About'
            onPress={() => navigation.navigate('about')}></Button>
        </View>
    );
}

export default Home

const styles = StyleSheet.create({})