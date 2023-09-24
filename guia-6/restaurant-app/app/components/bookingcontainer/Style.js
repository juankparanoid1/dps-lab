import { StyleSheet } from "react-native";
import Spacing from "../../helpers/Spacing";

const styleBookingContainer = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyState: {
        padding: Spacing.containerPadding,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyStateLabel: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default styleBookingContainer;