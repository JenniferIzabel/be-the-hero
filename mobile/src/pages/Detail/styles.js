import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {general, colors} from '../../styles';

export default StyleSheet.create({
    container: general.container,

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    back: {
        color: colors.link
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: colors.boxBackground,
        marginBottom: 16,
        marginTop: 48
    },

    incidentProperty: {
        fontSize: 14,
        color: colors.mainText,
        fontWeight: 'bold',
        marginTop: 24
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: colors.subText
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: colors.boxBackground,
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.detachText,
        lineHeight: 30
    },

    heroDescription: {
        fontSize: 15,
        color: colors.detachSubText,
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: colors.button,
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: colors.buttonText,
        fontSize: 15,
        fontWeight: 'bold'
    }
});