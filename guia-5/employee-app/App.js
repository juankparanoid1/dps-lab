import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Alert } from 'react-native';
import EmployeeForm from './app/components/employeeform/EmployeeForm';
import EmployeeInfo from './app/components/employeeinfo/EmployeeInfo';

export default function App() {
  const [salary, setSalary] = useState(0);
  const [name, setName] = useState('');
  const [finalSlary, setFinalSalary] = useState(0);

  const calculateSalary = () => {
    if (!name || !salary) {
      Alert.alert(title = 'Verificar', message = `Los campos son requeridos`);
      return;
    }
    const iss = salary * 0.03;
    const afp = salary * 0.04;
    const rent = salary * 0.05;
    setFinalSalary(salary - (iss + afp + rent));
    Alert.alert(title = 'Salario', message = `${name} tu salario a sido calculado`);
  }
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle='dark-content'></StatusBar>
      <EmployeeForm setName={setName} setSalary={setSalary} calculateSalary={calculateSalary}></EmployeeForm>
      <EmployeeInfo salary={finalSlary}></EmployeeInfo>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#e1f4ff",
  }
});
