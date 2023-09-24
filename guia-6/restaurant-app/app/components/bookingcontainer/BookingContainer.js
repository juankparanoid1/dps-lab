import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Booking from '../booking/Booking';
import Header from '../header/Header';
import Spacing from '../../helpers/Spacing';

const BookingContainer = ({ bookingList, deleteBooking }) => {
    return (
        <>
            <Header title={'Reservas'}></Header>
            <SafeAreaView style={styles.container}>
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
                                <View style={styles.emptyState}>
                                    <Text style={styles.emptyStateLabel}>Sin reservas, crea una para disfrutar de tu comida</Text>
                                </View>
                            </>
                        )
                }

            </SafeAreaView>
        </>
    )
}

export default BookingContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyState: {
        padding: Spacing.containerPadding,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyStateLabel: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})