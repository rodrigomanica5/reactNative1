import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    inputContainer: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 40,
        marginTop: 70,
        marginHorizontal: 20,
    },
    input: {
        width: "70%",
        borderBottomWidth: 1,
        borderBottomColor: "#3E2F5B",
    },
    itemsContainer: {
        flex: 1,
        marginHorizontal: 15,
        paddingVertical: 15,
        alignItems: "flex-start",
    },
    itemsTitle: {
        fontSize: 16,
        marginBottom: 15,
        fontWeight: "bold"
    },
    text: {
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: "black",
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    flatlist: {
        width: "100%",
        // paddingVertical: 20,
    },
    modalContainer: {
        height: "30%",
        width: "50%"
    }
});