import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    title:{
        fontsize:50,
        color:"black",
        fontWeight:"bold",
        paddingVertical: 30
    },
    subtitle:{
        fontsize:30,
        color:"black",
        fontWeight:"bold"
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator:{
        marginVertical:8,
        borderBottomColor: "#737373",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonSize:{
        margin:10
    },
    button:{
        backgroundColor:"white",
        padding:10,
        alignItems:"center",
        borderColor:"black",
    }
});

export default styles;