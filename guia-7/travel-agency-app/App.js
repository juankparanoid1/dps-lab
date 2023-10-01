import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, Modal, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  return (
    <>
      <Modal transparent={true} animationType='slide' visible={modalVisible} onRequestClose={() => {
        alert('Modal has been closed')
      }}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>{title}</Text>
            <Text>{info}</Text>
            <Button title='Cerrar' onPress={() => { setModalVisible(!modalVisible) }}></Button>
          </View>
        </View>

      </Modal>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner}
            source={require('./app/src/images/bg.jpg')}></Image>
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
        </View>
        <ScrollView horizontal>
          <TouchableHighlight onPress={() => { setModalVisible(!modalVisible); setTitle('Ir a la playa'); setInfo('El Salvador cuenta con hermosas playas a nivel de Centroamerica') }}>
            <Image style={styles.ciudad}
              source={require('./app/src/images/actividad1.jpg')}></Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { setModalVisible(!modalVisible); setTitle('Ir a la montaña'); setInfo('El Salvador cuenta con hermosos volcanes y montañas que puedes escalar') }}>
            <Image style={styles.ciudad}
              source={require('./app/src/images/actividad2.jpg')}></Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { setModalVisible(!modalVisible); setTitle('Ir al bosque'); setInfo('El Salvador cuenta con hermosas bosques para hacer camping o trotar') }}>
            <Image style={styles.ciudad}
              source={require('./app/src/images/actividad3.jpg')}></Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { setModalVisible(!modalVisible); setTitle('Ir a la sitios historicos'); setInfo('El Salvador cuenta hermosos centros historicos que nos recuerdan la arquitectura colonia') }}>
            <Image style={styles.ciudad}
              source={require('./app/src/images/actividad4.jpg')}></Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { setModalVisible(!modalVisible); setTitle('Ir a los pueblos'); setInfo('El Salvador cuenta con hermosos pueblos, puedes probar su gastronomia y costumbres') }}>
            <Image style={styles.ciudad}
              source={require('./app/src/images/actividad5.jpg')}></Image>
          </TouchableHighlight>
        </ScrollView>
        <Text style={styles.titulo}>Platillos Salvadoreños</Text>
        <View>
          <View>
            <Image style={styles.mejores}
              source={require('./app/src/images/mejores1.jpg')}></Image>
          </View>
          <View>
            <Image style={styles.mejores}
              source={require('./app/src/images/mejores2.jpg')}></Image>
          </View>
          <View>
            <Image style={styles.mejores}
              source={require('./app/src/images/mejores3.jpg')}></Image>
          </View>
        </View>

        <Text style={styles.titulo}>Rutas turisticas</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <Image style={styles.mejores}
              source={require('./app/src/images/ruta1.jpg')}></Image>
          </View>
          <View style={styles.listaItem}>
            <Image style={styles.mejores}
              source={require('./app/src/images/ruta2.jpg')}></Image>
          </View>
          <View style={styles.listaItem}>
            <Image style={styles.mejores}
              source={require('./app/src/images/ruta3.jpg')}></Image>
          </View>
        </View>
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  }
});
