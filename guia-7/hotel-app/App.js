import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalBooking from './app/components/modal/ModalBooking';
import { TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [hotelList, setHotelList] = useState([
    {
      id: 1,
      name: 'hotel 1',
      url: require(`./app/src/images/0.jpeg`),
      price: 10.00,
      beddrooms: 3,
      location: '800m',
      stars: 4.8,
      beddroomType: ['Individual', 'Mixta'],
      services: ['Cama', 'Agua', 'TV', 'Bar'],
      places: ['Piscina', 'Bar', 'Playa', 'Bosque', 'Laguna']
    },
    {
      id: 2,
      name: 'hotel 2',
      url: require(`./app/src/images/1.jpeg`),
      price: 17.60,
      beddrooms: 2,
      location: '10m',
      stars: 1.8,
      beddroomType: ['Individual', 'Junior'],
      services: ['Cama', 'Agua', 'TV', 'Bar'],
      places: ['Piscina', 'Bar', 'Playa', 'Laguna']
    },
    {
      id: 3,
      name: 'hotel 3',
      url: require(`./app/src/images/2.jpeg`),
      price: 9.90,
      beddrooms: 3,
      location: '900m',
      stars: 5,
      beddroomType: ['Individual', 'Pareja'],
      services: ['Cama', 'TV', 'Bar'],
      places: ['Piscina', 'Bar', 'Playa', 'Bosque',]
    },
    {
      id: 4,
      name: 'hotel 4',
      url: require(`./app/src/images/3.jpeg`),
      price: 45.00,
      beddrooms: 4,
      location: '1000m',
      stars: 3.0,
      beddroomType: ['Individual', 'Mixta', 'Cuadruple'],
      services: ['Cama', 'Agua', 'TV'],
      places: ['Piscina', 'Bar', 'Bosque', 'Laguna']
    },
    {
      id: 5,
      name: 'hotel 5',
      url: require(`./app/src/images/4.jpeg`),
      price: 13.90,
      beddrooms: 1,
      location: '1k',
      stars: 2.4,
      beddroomType: ['Individual', 'Mixta'],
      services: ['Cama', 'Agua', 'Bar'],
      places: ['Bar', 'Playa', 'Bosque', 'Laguna']
    },
    {
      id: 6,
      name: 'hotel 6',
      url: require(`./app/src/images/5.jpeg`),
      price: 115.90,
      beddrooms: 1,
      location: '200m',
      stars: 5,
      beddroomType: ['Individual', 'Mixta'],
      services: ['Cama', 'TV', 'Bar'],
      places: ['Piscina', 'Bar', 'Playa', 'Bosque']
    },
    {
      id: 7,
      name: 'hotel 7',
      url: require(`./app/src/images/6.jpeg`),
      price: 999.99,
      beddrooms: 3,
      location: '500m',
      stars: 3.9,
      beddroomType: ['Individual', 'Mixta', 'Triple'],
      services: ['Cama', 'Agua', 'TV', 'Bar'],
      places: ['Piscina', 'Bar', 'Playa', 'Bosque', 'Laguna']
    },
    {
      id: 8,
      name: 'hotel 8',
      url: require(`./app/src/images/7.jpeg`),
      price: 65.89,
      beddrooms: 2,
      location: '150m',
      stars: 4.8,
      beddroomType: ['Individual', 'Cuadruple'],
      services: ['Cama', 'Agua', 'TV', 'Bar'],
      places: ['Piscina', 'Bar', 'Playa', 'Bosque', 'Laguna']
    },
    {
      id: 9,
      name: 'hotel 9',
      url: require(`./app/src/images/8.jpeg`),
      price: 43.90,
      beddrooms: 1,
      location: '10m',
      stars: 4.1,
      beddroomType: ['Triple', 'Mixta'],
      services: ['Cama', 'Agua', 'TV', 'Bar'],
      places: ['Piscina', 'Bar', 'Playa', 'Bosque', 'Laguna']
    },
    {
      id: 10,
      name: 'hotel 10',
      url: require(`./app/src/images/9.jpeg`),
      price: 14.22,
      beddrooms: 1,
      location: '50m',
      stars: 5,
      beddroomType: ['Doble', 'Mixta'],
      services: ['Cama', 'Agua', 'Bar'],
      places: ['Piscina', 'Playa', 'Bosque', 'Laguna']
    }
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [info, setInfo] = useState({});

  return (
    <>
      <ModalBooking item={info} modalVisible={modalVisible} setModalVisible={setModalVisible}></ModalBooking>
      <SafeAreaView style={{ flex: 1, }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={{ padding: 15, }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Encuentra tu hotel</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 15 }}>
            <View style={{ height: 50, borderRadius: 50, borderWidth: 1, borderColor: '#0c0b1a', flex: 6, justifyContent: 'center', }}>
              <TextInput style={{ paddingHorizontal: 10 }} placeholder='Buscar...' placeholderTextColor={'black'}></TextInput>
            </View>
            <TouchableHighlight style={{ flex: 1, marginLeft: 10, borderWidth: 1, borderRadius: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name={'filter-sharp'} size={30} color="#4c4c4c"></Icon>
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Hoteles populares</Text>
            </View>
            <View>
              <Text style={{ fontSize: 17, }}>Mirar todos</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList style={{ flex: 1 }}
              horizontal={true}
              contentContainerStyle={{ padding: 15, }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={<View style={{ width: 15, }}></View>}
              automaticallyAdjustContentInsets={true}
              data={hotelList}
              renderItem={({ item, index, separators }) => (
                <>
                  <TouchableWithoutFeedback onPress={() => { setModalVisible(true); setInfo(item) }}>
                    <View style={[{ flex: 1, flexDirection: 'column', backgroundColor: 'white', padding: 10, borderRadius: 10, },
                    {
                      shadowColor: '#171717',
                      shadowOffset: { width: -2, height: 4 },
                      shadowOpacity: 0.2,
                      shadowRadius: 3,
                      elevation: 5,
                    }]}>
                      <View style={{ height: 180, width: 220, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: '100%', width: 220, borderRadius: 10, }} source={item.url} resizeMode='cover'></Image>
                      </View>
                      <View style={{ paddingVertical: 10, }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Text style={{ fontSize: 15, paddingTop: 5, fontWeight: '500' }}>${item.price.toFixed(2)}/noche</Text>
                          <Text style={{ fontSize: 15, paddingTop: 5, }}>{item.beddrooms} habitaciones</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </>
              )}
              keyExtractor={(item, index) => 'key' + index}
            >
            </FlatList>
          </View>
          <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Cerca de mi</Text>
            </View>
            <View>
              <Text style={{ fontSize: 17, }}>Mirar todos</Text>
            </View>
          </View>
          <View style={{ flex: 1, }}>
            <FlatList style={{ flex: 1, }}
              contentContainerStyle={{ padding: 15, }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={<View style={{ height: 15, }}></View>}
              data={hotelList}
              renderItem={({ item, index, separators }) => (
                <>
                  <TouchableWithoutFeedback onPress={() => { setModalVisible(true); setInfo(item) }}>
                    <View style={[{ flex: 1, flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10, },
                    {
                      shadowColor: '#171717',
                      shadowOffset: { width: -2, height: 4 },
                      shadowOpacity: 0.2,
                      shadowRadius: 3,
                      elevation: 5,
                    }]}>
                      <View style={{ height: 75, width: 75, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: '100%', width: 75, borderRadius: 10, }} source={item.url} resizeMode='cover'></Image>
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 3.5, flexDirection: 'column', justifyContent: 'space-between' }}>
                          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
                          <Text style={{ fontSize: 15, paddingTop: 5, fontWeight: '500' }}>${item.price.toFixed(2)}/noche</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                          <Icon name={'location-sharp'} size={15} color="#4c4c4c">{item.location}</Icon>
                          <Icon name={'star-sharp'} size={15} color="#fbb00b">{item.stars.toFixed(1)}/5</Icon>
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </>

              )}
              keyExtractor={(item, index) => 'key' + index}
            >
            </FlatList>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
