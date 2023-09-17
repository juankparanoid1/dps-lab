import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result = (props) => {
    const { capital, intereses, meses, total, errorMessage } = props;
    return (
        <View style={styles.content}>

            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Cantidad solicitada:" value={`${capital}€`} />
                    <DataResult title="Interes %:" value={`${intereses} %`} />
                    <DataResult title="Plazos:" value={`${meses} meses`} />
                    <DataResult title="Pago mensual:" value={`${total.monthlyFee} €`} />
                    <DataResult title="Total a pagar:" value={`${total.totalPayable} €`} />
                </View>
            )
            }
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

export default Result

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    }, 
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    }, 
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
})