import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:10,
        height:'100%',
        backgroundColor:'#ffe6ff',
    },
    textInput:{
        padding:10,
        color:'#000',
        backgroundColor:'#ffccff',
        marginVertical:5,
        marginLeft:20,
        marginTop:130, 
        fontSize:18,       
    },
    separator: {
        backgroundColor: '#ffe6e6',
        height: 1,
      },
      listView: {
        position: 'absolute',
        top: 250,
        color:'#000',
      },
      autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
        bottom:50,
        color:'#000',
      },
      text:{
        fontSize:25,
        color:'#000',
        fontWeight:'bold',
        backgroundColor:'#F99D00',
        textAlign:'center',
        height:50,
        paddingTop:8,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        color:'#000',
      },
      iconContainer: {
        backgroundColor: '#1a001a',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
      },
      locationText: {
        color:'#000',
      },
    
      circle: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        position: 'absolute',
        top: 140,
        left: 15,
        borderRadius: 5,
      },
      line: {
        width: 2,
        height: 70,
        backgroundColor: '#c4c4c4',
        position: 'absolute',
        top: 150,
        left: 18,
      },
      square: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        position: 'absolute',
        top: 220,
        left: 15,
      },
      image:{
        height:50,
        width:130,
        resizeMode:'contain',
        marginLeft:115,
      },
});

export default styles;