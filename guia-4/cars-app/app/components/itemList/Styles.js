import { StyleSheet } from "react-native";

export default itemListStyle = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
    },
    img: {
        width: 200,
        height: 125,
        borderWidth: 2,
        borderColor: '#D35647',
        resizeMode: 'contain',
        margin: 8
    }
});
