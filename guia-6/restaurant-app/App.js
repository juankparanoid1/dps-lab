import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookingContainer from './app/components/bookingcontainer/BookingContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookingForm from './app/components/bookingform/BookingForm';

export default function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    restaurantBookingList();
  }, [])

  const restaurantBookingList = async () => {
    try {
      const bookingStorage = await AsyncStorage.getItem('bookinglist');
      if (bookingStorage) {
        setBookingList(JSON.parse(bookingStorage))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const deleteBooking = (id) => {
    const bookingFilter = bookingList.filter(booking => booking.id !== id);
    setBookingList(bookingFilter);
    bookRestaurantTable(bookingFilter);
  }

  const bookRestaurantTable = async (booking) => {
    try {
      await AsyncStorage.setItem('bookinglist', JSON.stringify(booking));
    } catch (error) {
      console.log(error);
    } finally {
      setDisplayForm(false);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'}></StatusBar>
      {
        displayForm ? (
          <>
            <BookingForm bookRestaurantTable={bookRestaurantTable} bookingList={bookingList} setBookingList={setBookingList} setDisplayForm={setDisplayForm}></BookingForm>
          </>
        ) : (
          <>
            <BookingContainer bookingList={bookingList} deleteBooking={deleteBooking}></BookingContainer>
            <TouchableOpacity style={styles.floatingBtn} onPress={() => { setDisplayForm(!displayForm) }}>
              <Text style={styles.iconBtn}>+</Text>
            </TouchableOpacity>
          </>
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  floatingBtn: {
    borderWidth: 1,
    borderColor: '#0c0b1a',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 30,
    right: 10,
    height: 70,
    backgroundColor: '#0c0b1a',
    borderRadius: 100,
  },
  iconBtn: {
    fontSize: 50,
    color: 'white'
  }
});
