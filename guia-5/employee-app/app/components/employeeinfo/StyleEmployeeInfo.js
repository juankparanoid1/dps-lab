import { StyleSheet } from 'react-native'

const StyleEmployeeInfo = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            // backgroundColor: '#3908cf',
            paddingHorizontal: 40,
        },
        infoContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        label: {
            fontSize:20,
            fontWeight: 'bold'
        },
        text: {
            fontSize: 20,
        }
    })
}

export default StyleEmployeeInfo