import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardItem from '../../components/CardItem'
import { dogsList } from '../../src/data/pets';

const Dogs = () => {
  return (
    <ScrollView>
      <>
        {
          dogsList.map((dog, index) => {
            return <CardItem key={index} pet={dog}></CardItem>
          })
        }
      </>
    </ScrollView>
  )
}

export default Dogs

const styles = StyleSheet.create({

})