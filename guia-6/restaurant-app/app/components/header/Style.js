import { StyleSheet } from "react-native";
import Spacing from '../../helpers/Spacing'


const styleHeader = StyleSheet.create({
    headerContainer: {
        padding: Spacing.containerPadding,
    },
    headerLabel: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default styleHeader;