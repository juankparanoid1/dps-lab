import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styleEmployeeForm from './StyleEmployeeForm';

const EmployeeForm = ({setName, setSalary, calculateSalary}) => {
    const style = styleEmployeeForm();
    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.title} >Calculo de salario</Text>
            </View>
            <View style={style.formContainer}>
                <TextInput style={style.input} placeholderTextColor={'black'} placeholder='Nombre'
                onChange={(e) => setName(e.nativeEvent.text)}></TextInput>
                <TextInput style={style.input} placeholderTextColor={'black'} keyboardType='numeric' placeholder='Salario base'
                onChange={(e) => setSalary(e.nativeEvent.text)}></TextInput>
            </View>
            <View style={style.btnContainer}>
                <TouchableOpacity style={style.btn} onPress={calculateSalary}>
                    <Text style={style.btnTitle}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EmployeeForm