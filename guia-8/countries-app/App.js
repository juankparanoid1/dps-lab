import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import Formulario from './app/components/Formulario';
import CountryItem from './app/components/CountryItem';

export default function App() {

  const [search, saveSearch] = useState({ pais: '' });
  const [query, saveQuery] = useState(false);
  const [result, saveResult] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const { pais } = search;
    const queryCountry = async () => {
      if (query) {
        setLoading(true);
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          });
          const res = await response.json();
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          saveResult(res);
          saveQuery(false);
        } catch (error) {
          showAlert();
        }
      }
    };
    queryCountry();
  }, [query]);


  const showAlert = () => {
    Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país', [{ Text: 'Ok' }]);
  };

  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Formulario search={search} saveSearch={saveSearch} saveQuery={saveQuery}></Formulario>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
        ) : (
          Object.keys(result).length > 0 && <CountryItem search={search} result={result} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center'
  },
  container: {
    margin: '2.5%'
  },
  loadingIndicator: {
    marginTop: 20,
  },
});
