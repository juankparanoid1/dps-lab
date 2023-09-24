import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import utils from './app/utils/utils';
import AppointmentForm from './app/components/appointmentform/AppointmentForm';
import Appointment from './app/components/appointment/Appointment';

export default function App() {
  const [appointments, setAppointments] = useState([]);
  const [saveForm, setSaveForm] = useState(false);

  useEffect(() => {
    const appointmentList = async () => {
      try {
        const appointmentsStorage = await AsyncStorage.getItem('citas');
        if (appointmentsStorage) {
          setAppointments(JSON.parse(appointmentsStorage))
        }
      } catch (error) {
        console.log(error);
      }
    }
    appointmentList();
  }, []);

  const deletePatient = (id) => {
    const appointmentsFilter = appointments.filter(ap => ap.id !== id);
    setAppointments(appointmentsFilter);
    saveAppointmentStorage(appointmentsFilter);
  }

  const displayForm = () => {
    setSaveForm(!saveForm);
  }

  const closeKeyboard = () => {
    Keyboard.dismiss();
  }

  const saveAppointmentStorage = async (appointments) => {
    try {
      await AsyncStorage.setItem('citas', JSON.stringify(appointments));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => closeKeyboard()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <View>
          <TouchableHighlight onPress={() => displayForm()}
            style={styles.btnsaveForm}>
            <Text style={styles.textosaveForm}> {saveForm ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'} </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {saveForm ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Cita</Text>
              <AppointmentForm
                appointments={appointments}
                setAppointments={setAppointments}
                setSaveForm={setSaveForm}
                saveAppointmentStorage={saveAppointmentStorage} />
            </>
          ) : (
            <>
              <Text style={styles.titulo}> {appointments.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>
              <FlatList
                style={styles.listado}
                data={appointments}
                renderItem={({ item }) => <Appointment item={item} deletePatient={deletePatient} />}
                keyExtractor={ appointment => appointment.id}
                scrollEnabled={true}/>
              {/* <ScrollView>
                {appointments.map(item => (
                  <Appointment key={item.id} item={item} deletePatient={deletePatient} />
                ))}
              </ScrollView> */}
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: utils.PRIMARY_COLOR,
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnsaveForm: {
    padding: 10,
    backgroundColor: utils.BUTTON_COLOR,
    marginVertical: 10
  },
  textosaveForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
