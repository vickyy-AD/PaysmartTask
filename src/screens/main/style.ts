import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },

    tabBar: {
        backgroundColor: colors.white,
        height: 70,
        paddingTop: 8,
        paddingBottom: 8,
    },

    tabIcon: {
        width: 24,
        height: 24,
    },

    activeLabel: {
        color: colors.black,
        marginTop: 1,
        fontSize: 12,
        fontWeight: '600',
    },

    inactiveLabel: {
        color: colors.gray,
        marginTop: 1,
        fontSize: 12,
        fontWeight: '600',
    },

    scanWrapper: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

    scanIcon: {
        width: 26,
        height: 26,
        tintColor: colors.white,
    },
});