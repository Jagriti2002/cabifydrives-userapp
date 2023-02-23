import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    textPayment:{
        color:'white',
        backgroundColor:'#F99D00',
        margin: 10,
        padding: 20,
        fontSize:20,
        justifyContent:'space-between',
        borderRadius:20,
    },
    image:{
        height:300,
        width:350,
        resizeMode:'contain',
        marginLeft:20,
        top:-20,
    },
    textCash:{
        color:'black',
        backgroundColor:'#F99D00',
        margin: 10,
        padding: 10,
        fontSize:20,
        top:-10,
    },
    textupi:{
        color:'black',
        backgroundColor:'#F99D00',
        margin: 10,
        padding: 10,
        fontSize:20,
        top:-10,
    },
    arrive:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        top:10,
    },
    cong:{
        color:'black',
        fontSize:40,
        fontWeight:'bold',
        left:20,
    },
    book:{
        backgroundColor:'#585858',
        color:'white',
        margin:10,
        padding:20,
        width:200,
        alignItems:'center',
        fontSize:15,
        fontWeight:'bold',
        borderRadius:20,
        left:70,
    }
});

export default styles;