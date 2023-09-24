import { Alert, Button, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import appointmentFormStyle from './Style';
import nextId from 'react-id-generator';

const AppointmentForm = ({ appointments, setAppointments, setSaveForm, saveAppointmentStorage }) => {
    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }

    const confirmDate = (hour) => {
        const opt = { year: 'numeric', month: 'long', day: '2-digit' };
        setFecha(hour.toLocaleDateString('es-ES', opt));
        hideDatePicker();
    }

    // Muestra u oculta el Time Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmHour = (hour) => {
        const opt = { hour: 'numeric', minute: '2-digit', hour12: false };
        setHora(hour.toLocaleString('es-ES', opt));
        hideTimePicker();
    }

    const newAppointment = () => {
        if (!paciente.trim() || !propietario.trim() || !telefono.trim() || !fecha.trim() || !hora.trim() || !sintomas.trim()) {
            displayAlert();
            return;
        }

        const appointment = { paciente, propietario, telefono, fecha, hora, sintomas };
        appointment.id = nextId();
        const newAppointment = [...appointments, appointment];
        setAppointments(newAppointment);
        saveAppointmentStorage(newAppointment);
        setSaveForm(false);

        setPaciente('');
        setPropietario('');
        setSintomas('');
        setHora('');
        setFecha('');
        setTelefono('');
    }

    const displayAlert = () => {
        Alert.alert('Error', 'Todos los campos son abligatorios', [{
            text: 'Ok',
        }]);
    }

    return (
        <>
            <ScrollView style={appointmentFormStyle.formulario}>
                <View>
                    <Text style={appointmentFormStyle.label}>Paciente:</Text>
                    <TextInput
                        style={appointmentFormStyle.input}
                        onChangeText={texto => setPaciente(texto)}
                    />
                </View>
                <View>
                    <Text style={appointmentFormStyle.label}>Dueño:</Text>
                    <TextInput
                        style={appointmentFormStyle.input}
                        onChangeText={texto => setPropietario(texto)}
                    />
                </View>
                <View>
                    <Text style={appointmentFormStyle.label}>Teléfono Contacto:</Text>
                    <TextInput
                        style={appointmentFormStyle.input}
                        onChangeText={texto => setTelefono(texto)}
                        keyboardType='numeric' />
                </View>
                <View>
                    <Text style={appointmentFormStyle.label}>Fecha:</Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmDate}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS="Elige la fecha"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text>{fecha}</Text>
                </View>
                <View>
                    <Text style={appointmentFormStyle.label}>Hora:</Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmHour}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS="Elige una Hora"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text>{hora}</Text>
                </View>
                <View>
                    <Text style={appointmentFormStyle.label}>Síntomas:</Text>
                    <TextInput
                        multiline
                        style={appointmentFormStyle.input}
                        onChangeText={texto => setSintomas(texto)}
                    />
                </View>
                <View>
                    <TouchableHighlight onPress={() => newAppointment()}
                        style={appointmentFormStyle.btnSubmit}>
                        <Text style={appointmentFormStyle.textoSubmit}>Crear Nueva Cita</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    )
}

export default AppointmentForm