import { StyleSheet } from "react-native";

const appointmentStyle = StyleSheet.create({
    appointment: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18,
    },
    btnDelete: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    txtDelete: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default appointmentStyle;