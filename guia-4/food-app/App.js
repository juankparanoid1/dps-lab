import React from 'react';
import { ScrollView, StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { foodList } from './app/data/food';
import CardItem from './app/components/card/CardItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View >
          {
            foodList.map(food => {
              return (
                <CardItem key={food.id} title={food.title} img={food.src} description={food.description} calories={food.calories}></CardItem>
              );
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
