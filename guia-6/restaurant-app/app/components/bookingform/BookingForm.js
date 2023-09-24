import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import styleBookingForm from './Style';
import Header from '../header/Header';
import uuid from 'react-native-uuid';

const BookingForm = ({ bookRestaurantTable, bookingList, setBookingList, setDisplayForm }) => {
    const [name, setName] = useState('');
    const [people, setPeople] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [smoke, setSmoke] = useState('N');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }

    const confirmDate = (date) => {
        const opt = { year: 'numeric', month: 'long', day: '2-digit' };
        setDate(date.toLocaleDateString('es-ES', opt));
        hideDatePicker();
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmHour = (hour) => {
        const opt = { hour: 'numeric', minute: '2-digit', hour12: false };
        setHour(hour.toLocaleString('es-ES', opt));
        hideTimePicker();
    }

    const save = () => {
        if (!name.trim() || !people.trim() || !date.trim() || !hour.trim() || !smoke.trim()) {
            Alert.alert(title = 'Verificar', message = `Los campos son requeridos`);
            return;
        }

        const bookingObj = { name, people, date, hour, smoke };
        bookingObj.id = uuid.v4();
        bookingObj.table = randomTable(1, 50);
        bookingObj.restaurant = randomRestaurant();
        const addBookToList = [...bookingList, bookingObj];
        setBookingList(addBookToList);
        bookRestaurantTable(addBookToList);

        setName('');
        setPeople('');
        setDate('');
        setHour('');
        setSmoke('');
    }

    const randomTable = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const randomRestaurant = () => {
        const restaurantList = [
            'Burger King', 'Wendys', 'Casa Real', 'Faisca Do Brazil', 'La Gastroteca', 'Restaurante El Arriero', 'Las Brumas Grill & Cafe'
        ];
        const randomIndex = Math.floor(Math.random()*restaurantList.length);
        return restaurantList[randomIndex];
    }

    return (
        <>
            <Header title={'Reserva tu mesa'}></Header>
            <View style={styleBookingForm.formContainer}>
                <View>
                    <TextInput style={styleBookingForm.formInput} placeholderTextColor={'black'} placeholder='Nombre'
                        onChange={(e) => setName(e.nativeEvent.text)}></TextInput>
                </View>
                <View>
                    <TextInput style={styleBookingForm.formInput} placeholderTextColor={'black'} keyboardType='numeric' maxLength={2} placeholder='Número de personas'
                        onChange={(e) => setPeople(e.nativeEvent.text)}></TextInput>
                </View>
                <View>
                    <Text style={styleBookingForm.formLabel}>Fecha:</Text>
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
                        display='inline'
                    />
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text style={styleBookingForm.formLabel}>Hora:</Text>
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
                    <Text>{hour}</Text>
                </View>

                <View>
                    <Text style={styleBookingForm.formLabel}>Sección de fumadores?</Text>
                    <Picker style={styleBookingForm.formpicker} itemStyle={styleBookingForm.formPickerItem}
                        selectedValue={smoke}
                        onValueChange={(itemValue) =>
                            setSmoke(itemValue)
                        }>
                        <Picker.Item label="Si" value="S" />
                        <Picker.Item label="No" value="N" />
                    </Picker>
                </View>
                <View style={styleBookingForm.formBtnContainer}>
                    <TouchableOpacity style={styleBookingForm.formBtn} onPress={() => save()}>
                        <Text style={styleBookingForm.formBtnTitle}>Reservar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styleBookingForm.formBtnContainer}>
                    <TouchableOpacity style={styleBookingForm.formBtn} onPress={() => setDisplayForm(false)}>
                        <Text style={styleBookingForm.formBtnTitle}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}

export default BookingForm