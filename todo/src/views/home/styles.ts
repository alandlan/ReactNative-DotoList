import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E1E1E",
        flex: 1,
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: -30,
        marginBottom: 42,
        paddingHorizontal: 20,
        gap: 4,
    },
    input:{
        height: 56,
        color: "#fff",
        backgroundColor: "#262626",
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        flex: 1,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1E6F9F",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: "#fff",
        fontSize: 24,
    },
    details: {
        justifyContent: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
        flex: 1,
    },
    infoQuantidade: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    }
    
});

export default styles;