import { StyleSheet } from "react-native";

export default cardStyle = StyleSheet.create({
    image: {
        padding: 0,
        resizeMode: "contain",
        width: '100%',
        height: 380
    },
    description: {
        textAlign: "justify",
        marginBottom: 10,
        fontSize: 16,
        marginTop: 10,
    },
    title: {
        fontSize: 25
    },
    containerCalories: {
        flexDirection: "row",
    },
    caloriesLabel: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    caloriesValue: {
        fontSize: 16,
    }
});