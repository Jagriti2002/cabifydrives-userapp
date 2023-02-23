import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from './styles';
import {useNavigation} from '@react-navigation/native'

const Order = (props) => {
    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('PaymentScreen')
    }

    const getImage = () => {
        return require('../../assets/images/check.jpg');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.text1}>Order Status:  cabifymove booked for 50₹</Text>
            <Image style={styles.image} source={getImage()}/>
            <Text style={styles.text2}> Be Ready For Your Cab is Coming In 15mins. </Text>
            <Pressable onPress={goToSearch} style={{
                    backgroundColor: 'black',
                    padding:20 ,
                    alignItems: 'center',
                    top:100,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize:30}}>
                    Proceed To Payment
                </Text>
            </Pressable>
        </View>
    )
}


export default Order;