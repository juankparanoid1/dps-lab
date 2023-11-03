import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import db from '../../firebase/firebase.config';

const NewColector = () => {

  const [addColectorForm, setAddColectorForm] = useState({
    name: '',
    description: '',
    code: '',
  });

  const save = async () => {
    const response = await addDoc(collection(db, 'colectores'), addColectorForm);
    if (response) {
      Alert.alert('Info', 'Colector guardado', [{
        text: 'Ok',
    }]);
      setAddColectorForm({
        name: '',
        description: '',
        code: '',
      });
    }
  }

  return (
    <View style={{ padding: 15, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: '500', textAlign: 'center' }}>Agregar Colector</Text>
      <View style={{ paddingVertical: 15, }}>
        <View style={{ paddingBottom: 10, }}>
          <TextInput style={styles.formInput} placeholderTextColor={'black'} placeholder='Nombre'
            value={addColectorForm.name}
            onChange={(e) => setAddColectorForm({ ...addColectorForm, name: e.nativeEvent.text })}></TextInput>
        </View>
        <View style={{ paddingBottom: 10, }}>
          <TextInput style={styles.formInput} placeholderTextColor={'black'} placeholder='Descripción'
            value={addColectorForm.description}
            onChange={(e) => setAddColectorForm({ ...addColectorForm, description: e.nativeEvent.text })}></TextInput>
        </View>
        <View style={{ paddingBottom: 10, }}>
          <TextInput style={styles.formInput} placeholderTextColor={'black'} placeholder='Código'
            value={addColectorForm.code}
            onChange={(e) => setAddColectorForm({ ...addColectorForm, code: e.nativeEvent.text })}></TextInput>
        </View>
        <View style={styles.formBtnContainer}>
          <TouchableOpacity style={styles.formBtn} onPress={() => save()}>
            <Text style={styles.formBtnTitle}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default NewColector

const styles = StyleSheet.create({
  formInput: {
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 20,
  },
  formBtnContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formBtn: {
    backgroundColor: '#0075da',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  formBtnTitle: {
    color: '#FFFF',
    alignContent: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})