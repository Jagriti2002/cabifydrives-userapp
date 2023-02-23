import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        color:'#fff',
        fontSize: 20,
        fontWeight:'bold',
        marginBottom:10,
    },
    text:{
        color:'#fff',
        fontSize: 13,
        top:-10,
        textAlign:'center',
    },
    image:{
        height:100,
        width:300,
        resizeMode:'contain',
        marginLeft:30,
        top:-10,
    },
});

export default styles;