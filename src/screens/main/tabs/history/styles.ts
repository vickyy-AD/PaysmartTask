import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
    container: {},
    headerContainer: {
        backgroundColor: colors.primary,
        paddingTop: 20,
        paddingBottom: 50,
    },
    headerImage: {
        width: '100%',
        height: 120,
        borderRadius: 25,
        resizeMode: 'contain',
    },
    scrollView: {
        backgroundColor: colors.white,
        marginHorizontal: 12,
        marginTop: -30,
        borderRadius: 12,
        padding: 20,
        elevation: 4,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    notificationItem: {
        backgroundColor: colors.primaryTransparent,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 10,
        padding: 12,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    notificationText: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.white,
    },
});