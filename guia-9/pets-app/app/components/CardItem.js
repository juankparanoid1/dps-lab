import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardItem = ({pet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerPic}>
        <Image style={styles.img}
        source={pet.photo}
        resizeMode={'contain'}></Image>
      </View>
      <View style={styles.info}>
        <Text style={[styles.infolbl, {fontWeight: 'bold'}]}>{pet.breed}</Text>
        <Text style={styles.infolbl}>{pet.origin}</Text>
      </View>
    </View>
  )
}

export default CardItem

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    height: 115,
  },
  containerPic: {
    flex: 1,
    // backgroundColor: '#fbb00b'
  },
  img: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
  },
  info: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    backgroundColor: '#dbdbdb'
  },
  infolbl: {
    fontSize: 17,
    paddingBottom: 5,
  }
})