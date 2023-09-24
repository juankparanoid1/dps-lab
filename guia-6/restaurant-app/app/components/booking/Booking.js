import { Platform, Text, View, Modal, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import styleBooking from './Style';
import ModalBooking from '../modal/ModalBooking';

const randomColor = () => {
    const r = Math.floor(Math.random() * 156 + 100);
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    const color = `rgb(${r},${g},${b})`;
    return color;
}

const Booking = ({ item, deleteBooking }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [tableBackgroundColor, setTableBackgroundColor] = useState(randomColor());
    return (
        <>
           <ModalBooking item={item} modalVisible={modalVisible} setModalVisible={setModalVisible} deleteBooking={deleteBooking}></ModalBooking>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styleBooking.itemContainer, Platform.OS == 'ios' ? styleBooking.shadowIOS : styleBooking.shadowAndroid]}>
                    <View style={[styleBooking.itemTable, { backgroundColor: tableBackgroundColor }]}>
                        <Text style={styleBooking.itemTableLabel}>{item.table}</Text>
                    </View>
                    <View style={styleBooking.itemInfo}>
                        <View style={styleBooking.infoHeader}>
                            <Text style={styleBooking.itemHeaderLabel}>{item.restaurant ?? 'Sin asignar'}</Text>
                            <Text style={styleBooking.itemHeaderHourLabel}>{item.hour}</Text>
                        </View>
                        <View style={styleBooking.infoDetails}>
                            <Text style={styleBooking.infoDetailsLabel}>{item.date}</Text>
                        </View>
                        <View style={styleBooking.infoUser}>
                            <View style={styleBooking.infoUserShape}>
                                <Text style={styleBooking.infoUserLabel}>{item.name}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default Booking

