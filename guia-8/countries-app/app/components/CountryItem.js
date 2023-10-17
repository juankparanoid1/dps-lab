import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card } from '@rneui/themed';

const imageMap = {
    ca: require('../src/img/ca.jpeg'),
    ar: require('../src/img/ar.jpeg'),
    co: require('../src/img/co.jpeg'),
    cr: require('../src/img/cr.jpeg'),
    es: require('../src/img/es.jpeg'),
    gt: require('../src/img/gt.jpeg'),
    hn: require('../src/img/hn.jpeg'),
    mx: require('../src/img/mx.jpeg'),
    ni: require('../src/img/ni.jpeg'),
    pa: require('../src/img/pa.jpeg'),
    pe: require('../src/img/pe.jpeg'),
    sv: require('../src/img/sv.jpeg'),
    us: require('../src/img/us.jpeg'),
};

const CountryItem = ({ search, result }) => {
    const [info, setInfo] = useState([]);
    const [name, setName] = useState();
    const [capitalCity, setCapitalCity] = useState();
    const [region, setRegion] = useState();
    const [language, setLanguage] = useState([]);
    const [area, setArea] = useState('');

    useEffect(() => {
        displayData();
    }, [info, result]);

    const displayData = () => {
        const data = result;
        setInfo(data);
        language.length = 0;
        Object.values(info).map(e => {
            setName(e.nome.abreviado);
            setCapitalCity(e.governo.capital.nome);
            setRegion(e.localizacao.regiao.nome);
            setArea(`${Number(e.area.total)} ${e.area.unidade.símbolo}`);
            Object.values(e.linguas).map(l => {
                language.push(l.nome)
            });
        });
    }

    const displayCountryFlag = () => {
        const { pais } = search;
        return imageMap[pais];
    }

    return (
        <Card>
            <Card.Title style={styles.title}>{name}</Card.Title>
            <Card.Divider />
            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.label}>Capital: {capitalCity}</Text>
                <Text style={styles.label}>Region: {region}</Text>
                <Text style={styles.label}>Lengua: {language.toString()}</Text>
                <Text style={styles.label}>Area: {area}</Text>
                <Image style={styles.image} source={displayCountryFlag()}></Image>
            </View>
        </Card>
    )
}

export default CountryItem

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    label: {
        fontSize: 17,
        paddingVertical:5,
    },
    image: {
        marginTop: 15,
        width: 300,
        height: 200,
        resizeMode: 'contain',
    }
})