import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Booking from '../booking/Booking';
import Header from '../header/Header';
import styleBookingContainer from './Style';

const BookingContainer = ({ bookingList, deleteBooking }) => {
    return (
        <>
            <Header title={'Reservas'}></Header>
            <SafeAreaView style={styleBookingContainer.container}>
                {
                    bookingList.length ? (
                        <>
                            <FlatList
                                data={bookingList}
                                renderItem={({ item }) => <Booking item={item} deleteBooking={deleteBooking}></Booking>}
                                keyExtractor={item => item.id}
                            />
                        </>
                    ) :
                        (
                            <>
                                <View style={styleBookingContainer.emptyState}>
                                    <Text style={styleBookingContainer.emptyStateLabel}>Sin reservas, crea una para disfrutar de tu comida</Text>
                                </View>
                            </>
                        )
                }

            </SafeAreaView>
        </>
    )
}

export default BookingContainer

