import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        height:130,
    },
    image:{
        height:70,
        width:80,
        resizeMode:'contain',
    },
    middleContainer:{
        flex:1,
        marginHorizontal:10,
        left:10,
    },
    type:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:5,
        color:'#1a001a',
    },
    time:{
        color:'#1a001a',
    },
    rightContainer:{
        width:100,
        justifyContent:'flex-end',
        flexDirection:'row',
        left:-20,
        top:-10,
    },
    price:{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:5,
        color:'#1a001a',
    },
});

export default styles;