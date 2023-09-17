import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import colors from './app/utils/colors';
import Form from './app/components/form/Form';
import Footer from './app/components/footer/Footer';
import Result from './app/components/results/Result';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [intereses, setIntereses] = useState(null);
  const [meses, setMeses] = useState(3);

  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('Sin datos');

  // useEffect(() => {
  //   if (capital && intereses && meses) {
  //     calculate();
  //   }
  //   else {
  //     reset();
  //   }
  // }, [capital, intereses, meses]);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!intereses) {
      setErrorMessage('Añade el interes del prestamos');
    } else if (!meses) {
      setErrorMessage('Seleccióna los meses a pagar');
    } else {
      const i = intereses / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * meses).toFixed(2).replace('.', ','),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }

  return (
    <>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form setCapital={setCapital} setIntereses={setIntereses} setMeses={setMeses} meses={meses}></Form>
      </SafeAreaView>
      <Result capital={capital} intereses={intereses} meses={meses} total={total} errorMessage={errorMessage}></Result>
      <Footer calculate={calculate}></Footer>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 250,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 250,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
