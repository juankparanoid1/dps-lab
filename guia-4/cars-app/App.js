import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ItemList from './app/components/itemList/ItemList';
import { carsList } from './app/data/cars';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carsList}
        renderItem={({ item }) => <ItemList title={item.title} img={item.src} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
