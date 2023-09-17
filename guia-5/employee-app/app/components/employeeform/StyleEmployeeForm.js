import { StyleSheet } from "react-native";

const styleEmployeeForm = () => {
    return StyleSheet.create({
        container: {
            // backgroundColor: '#5f9ea0',
            padding: 15,
        },
        titleContainer: {
            height: 50,
            alignItems: 'center',
        },
        title: {
            fontSize: 25,
            fontWeight: "bold",
        },
        formContainer: {
            // backgroundColor: '#cac800',
            flexGrow: 0.1,
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: 120,
        },
        input: {
            // backgroundColor: "#cbdfee",
            borderColor: '#a5bdc6',
            height: '50%',
            paddingHorizontal: 15,
            borderBottomWidth: 1,
            borderRadius: 5,
            fontSize: 20,
        },
        btnContainer: {
            height: 70,
            // backgroundColor: '#d62aca',
            paddingTop: 15,
        },
        btn: {
            backgroundColor: '#a5bdc6',
            borderRadius: 8,
            alignItems: "center",
        },
        btnTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            paddingVertical: 10,
        }
    });
};

export default styleEmployeeForm;