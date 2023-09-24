import { StyleSheet} from 'react-native'
import Spacing from '../../helpers/Spacing';


const styleBooking = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fffeff',
        height: 105,
        marginVertical: 8,
        marginHorizontal: Spacing.containerPadding,
        flexDirection: 'row',
        borderRadius: 10,
    },
    itemTable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    itemInfo: {
        flex: 3,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5,
        flexDirection: 'column',
    },
    title: {
        fontSize: 32,
    },
    itemTableLabel: {
        fontSize: 70,
    },
    itemHeaderLabel: {
        fontSize: 20,
    },
    itemHeaderHourLabel: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    infoHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    infoDetails: {
        flex: 1,
    },
    infoDetailsLabel: {
        fontSize: 16,
        color: '#7d7d7d',
    },
    infoUser: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    infoUserLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: '#fdf8f7',
    },
    shadowIOS: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    shadowAndroid: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    infoUserShape: {
        top: 5,
        left: 5,
        borderTopStartRadius: 15,
        backgroundColor: '#0c0b1a',
    },
})

export default styleBooking;