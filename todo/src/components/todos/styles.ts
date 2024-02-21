import { StyleSheet } from "react-native";


const styles = (isDone:boolean = false) => StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#333333",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        justifyContent: "space-between",
        padding: 16,
    },
    name:{
        color: isDone ? "#808080" : "#fff",
        fontSize: 16,
        marginLeft: 16,
        flex: 1,
        textDecorationLine: isDone ? "line-through": "none",
    },
    button:{
        justifyContent: "center",
        alignItems: "center",
        width: 35,
    },
    buttonImg:{
        height: 22,
        width: 18,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;