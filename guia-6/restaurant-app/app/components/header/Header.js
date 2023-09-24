import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacing from '../../helpers/Spacing'

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerLabel}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        padding: Spacing.containerPadding,
    },
    headerLabel: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})