import { View, Text, Image } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import cardStyle from './Style';

const CardItem = ({ title, img, description, calories }) => {
    return (
        <Card>
            <Card.Title style={cardStyle.title}>{title}</Card.Title>
            <Card.Divider></Card.Divider>
            <Card.Image source={{ uri: img }}></Card.Image>
            <Text style={cardStyle.description}>{description}</Text>
            <View style={cardStyle.containerCalories}>
                <Text style={cardStyle.caloriesLabel}>Calorias: </Text>
                <Text style={cardStyle.caloriesValue}>{calories}</Text>
            </View>
        </Card>

    )
}

export default CardItem