import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const Formulario = ({ search, saveSearch, saveQuery }) => {
  const { pais } = search;
  const [selectedCountry, setSelectedCountry] = useState();

  const searchCountries = () => {
    if (selectedCountry.trim() === '') {
      showAlert();
      return;
    }
    saveSearch({ pais: selectedCountry });
    saveQuery(true);
  }

  const showAlert = () => {
    Alert.alert('Error', 'Debe seleccionar un país', [{ Text: 'Entendido' }]);
  }

  return (
    <>
      <View>
        <View>
          <Text style={styles.input}>Pais</Text>
        </View>
        <View>
          <Picker
            style={styles.formpicker} itemStyle={styles.formPickerItem}
            selectedValue={selectedCountry}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCountry(itemValue)
            }>
            <Picker.Item label="--seleccione un pais--" value="" />
            <Picker.Item label="Canada" value="ca" />
            <Picker.Item label="El Salvador" value="sv" />
            <Picker.Item label="Guatemala" value="gt" />
            <Picker.Item label="Honduras" value="hn" />
            <Picker.Item label="Nicaragua" value="ni" />
            <Picker.Item label="Panama" value="pa" />
            <Picker.Item label="Costa Rica" value="cr" />
            <Picker.Item label="Mexico" value="mx" />
            <Picker.Item label="Argentina" value="ar" />
            <Picker.Item label="Estados Unidos" value="us" />
            <Picker.Item label="Colombia" value="co" />
            <Picker.Item label="España" value="es" />
            <Picker.Item label="Peru" value="pe" />
          </Picker>
        </View>
        <TouchableWithoutFeedback onPress={() => searchCountries()}>
          <View style={styles.btnBuscar}>
            <Text style={styles.textoBuscar}>Buscar País</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}

export default Formulario

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000'
  },
  btnBuscar: {
    marginTop: 50,
    height: 50,
    backgroundColor: '#000',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  textoBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 15,
  },
  formpicker: {
    height: 50,
    backgroundColor: '#fff',
  },
  formPickerItem: {
    height: 50,
    fontSize: 20
  },
})