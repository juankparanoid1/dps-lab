import { Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import appointmentStyle from './Style';

const Appointment = ({ item, deletePatient }) => {

    const deleteDialog = (id) => {
        deletePatient(id);
    }

    return (
        <View style={appointmentStyle.appointment}>
            <View>
                <Text style={appointmentStyle.label}>Paciente:</Text>
                <Text style={appointmentStyle.texto}>{item.paciente}{item.id}</Text>
            </View>
            <View>
                <Text style={appointmentStyle.label}>Propietario:</Text>
                <Text style={appointmentStyle.texto}>{item.propietario}</Text>
            </View>
            <View>
                <Text style={appointmentStyle.label}>Sintomas:</Text>
                <Text style={appointmentStyle.texto}>{item.sintomas}</Text>
            </View>
            <View>
                <TouchableHighlight style={appointmentStyle.btnDelete} onPress={() => deleteDialog(item.id)}>
                    <Text style={appointmentStyle.txtDelete}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Appointment