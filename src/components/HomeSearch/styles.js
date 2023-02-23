import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomGradient:{
        backgroundColor:'linear-gradient(180deg, rgb(232,232,232) 100%, rgb(245,245,245) 100%);',
    },
    inputBox: {
        backgroundColor:'#F99D00',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600'
    },
    timeContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:120,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:50,
        color:'#484848',
    },
    Text:{
        fontSize:15,
        top:-1,
        color:'#000',
    },
    row: {
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        color: '#484848',
        borderBottomWidth:1,
        borderColor:'#dbdbdb',
    },
    iconContainer: {
        backgroundColor:'#b3b3b3',
        padding:10,
        borderRadius:25,
    },
    destinationText: {
        marginLeft:10,
        fontWeight:'600',
        fontSize:20,
        color:'#000',
    },
});

export default styles;