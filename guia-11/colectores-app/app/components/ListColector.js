import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import db from '../../firebase/firebase.config';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import QRCode from 'react-native-qrcode-svg';

const ListColector = () => {

  const [colectoresList, setColectoresLis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    colectores();
  }, [])

  const colectores = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, 'colectores'),
        orderBy("name", "asc")
      );
      if (querySnapshot.size > 0) {
        const data = querySnapshot.docs.map(doc => doc.data());
        setColectoresLis(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <View style={{ padding: 15, flex: 1 }}>
      {
        loading ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0073bf" />
        </View>)
          :
          (
            <FlatList
              data={colectoresList}
              renderItem={({ item, index, separators }) => (
                <View style={{ paddingBottom: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{item.name}</Text>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}>{item.description}</Text>
                  <QRCode
                    value={item.code}
                  />
                </View>
              )}
              keyExtractor={(item, index) => 'key' + index}
            />
          )
      }

    </View>
  )
}

export default ListColector

const styles = StyleSheet.create({})