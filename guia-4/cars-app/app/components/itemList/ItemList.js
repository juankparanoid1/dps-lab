import { View, Text, Image } from 'react-native'
import React from 'react'
import itemListStyle from './Styles';

const ItemList = ({ title, img }) => {
  return (
    <View style={itemListStyle.item}>
      <Text style={itemListStyle.title}>{title}</Text>
      <Image
        style={itemListStyle.img}
        source={img}
        resizeMode={'contain'}
      />
    </View>
  );
}

export default ItemList