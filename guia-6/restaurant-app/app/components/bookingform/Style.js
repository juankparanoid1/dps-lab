import { StyleSheet } from "react-native";
import Spacing from "../../helpers/Spacing";

const styleBookingForm = StyleSheet.create({
    formContainer: {
        // backgroundColor: '#5f9ea0',
        paddingHorizontal: Spacing.containerPadding,
        flexGrow: 0.2,
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    formInput: {
        height: 50,
        paddingHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: 20,
    },
    formLabel: {
        fontSize: 20
    },
    formpicker: {
        height: 50,
    },
    formPickerItem: {
        height: 50,
        fontSize: 20
    },
    formBtnContainer: {
        paddingTop: 10,
    },
    formBtn: {
        backgroundColor: '#131313',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formBtnTitle: {
        color: '#FFFF',
        alignContent: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default styleBookingForm;