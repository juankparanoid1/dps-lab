import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
import { Picker } from '@react-native-picker/picker';

const Form = (props) => {
    const { setCapital, setIntereses, setMeses, meses } = props;
    return (
        <View style={styleForm.viewForm}>
            <View style={styleForm.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={styleForm.input}
                    onChange={(e) => {
                        setCapital(e.nativeEvent.text)
                    }}
                />
                <TextInput
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[styleForm.input, styleForm.inputPercentage]}
                    onChange={(e) => setIntereses(e.nativeEvent.text)}
                />
            </View>
            <View style={styleForm.pickerContainer}>
                <Picker
                    style={styleForm.picker}
                    selectedValue={meses}
                    onValueChange={(value) => {
                        setMeses(value)
                    }}
                    placeholder={{
                        label: 'Seleccióna los plazos...',
                        value: null,
                    }}>
                    <Picker.Item label="3 meses" value="3" />
                    <Picker.Item label="6 meses" value="6" />
                    <Picker.Item label="12 meses" value="12" />
                    <Picker.Item label="24 meses" value="24" />
                </Picker>
            </View>
        </View>
    )
}

export default Form

const styleForm = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    }, input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },
})