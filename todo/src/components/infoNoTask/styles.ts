import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    line: {
        borderBottomColor: '#333333',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    withoutTasks: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        color: "#333333",
    },
    title: {
        fontSize: 16,
        color: "#333333",
        fontWeight: "bold",
        textAlign: "center",
    },
    subTitle: {
        fontSize: 12,
        color: "#333333",
        textAlign: "center",
    },
    textInfo: {
        marginTop: 20,
    }
});

export default styles;