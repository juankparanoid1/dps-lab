import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'

const ModalBooking = ({ item, modalVisible, setModalVisible, deleteBooking }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styleModalBooking.centeredView}>
                <View style={styleModalBooking.modalContainer}>
                    <View style={{
                        flex: 10,
                    }}>
                        <View style={styleModalBooking.details}>
                            <Text style={styleModalBooking.info}>
                                <Text style={styleModalBooking.label}>Nombre: </Text>
                                {item.name}
                            </Text>
                            <Text style={styleModalBooking.info}>
                                <Text style={styleModalBooking.label}>Restaurante: </Text>
                                {item.restaurant ?? 'Sin asignar'}
                            </Text>
                            <Text style={styleModalBooking.info}>
                                <Text style={styleModalBooking.label}>Mesa No: </Text>
                                {item.table}
                            </Text>
                            <Text style={styleModalBooking.info}>
                                <Text style={styleModalBooking.label}>Personas: </Text>
                                {item.people}
                            </Text>
                            <Text style={styleModalBooking.info}>
                                <Text style={styleModalBooking.label}>Fecha: </Text>
                                {item.date}</Text>
                            <Text style={styleModalBooking.info}>
                                <Text style={styleModalBooking.label}>Hora:</Text>
                                {item.hour}</Text>
                            <Text style={styleModalBooking.info}>
                                <Text style={styleModalBooking.label}>Zona de fumadores: </Text>
                                {item.smoke == 'S' ? 'Si' : 'No'}
                            </Text>
                        </View>
                    </View>
                    <View style={styleModalBooking.btnContainer}>
                        <Pressable
                            style={{
                                flex: 1,
                            }}
                            onPress={() => deleteBooking(item.id)}>
                            <View style={[styleModalBooking.btn, { backgroundColor: 'red' }]}>
                                <Text style={styleModalBooking.textStyle}>Eliminar</Text>
                            </View>
                        </Pressable>
                        <View style={{ width: 10 }} />
                        <Pressable
                            style={{
                                flex: 1,
                            }}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <View style={[styleModalBooking.btn, { backgroundColor: '#0c0b1a' }]}>
                                <Text style={styleModalBooking.textStyle}>Cerrar</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalBooking

const styleModalBooking = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        height: 335,
        width: 300,
        padding: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    info: {
        fontSize: 18,
        paddingVertical: 5
    },
    label: {
        fontWeight: 'bold'
    },
    details: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    btn: {
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
})