import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {general, colors} from '../../styles';

export default StyleSheet.create ({
    container: general.container,

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: colors.detachSubText,
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: colors.mainText,
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.subText
    },
    
    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: colors.boxBackground,
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: colors.mainText,
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: colors.subText
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: colors.link,
        fontSize: 15,
        fontWeight: 'bold'
    },

    arrow: {
        color: colors.link
    }
});