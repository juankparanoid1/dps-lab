import { Text, View } from 'react-native'
import React from 'react'
import styleHeader from './Style'

const Header = ({title}) => {
  return (
    <View style={styleHeader.headerContainer}>
      <Text style={styleHeader.headerLabel}>{title}</Text>
    </View>
  )
}

export default Header