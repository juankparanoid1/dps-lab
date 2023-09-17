import { Text, View } from 'react-native'
import React from 'react'
import StyleEmployeeInfo from './StyleEmployeeInfo'

const EmployeeInfo = ({salary}) => {
    const style = StyleEmployeeInfo();
    return (
        <View style={style.container}>
            <View style={style.infoContainer}>
            <Text style={style.label}>Salario Neto</Text>
            <Text style={style.text}>$ {salary.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default EmployeeInfo

