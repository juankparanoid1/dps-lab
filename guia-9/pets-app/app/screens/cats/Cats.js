import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { catList } from '../../src/data/pets'
import CardItem from '../../components/CardItem'

const Cats = () => {
  return (
    <ScrollView>
      <>
        {
          catList.map((cat, index) => {
            return <CardItem key={index} pet={cat}></CardItem>
          })
        }
      </>
    </ScrollView>
  )
}

export default Cats

const styles = StyleSheet.create({})