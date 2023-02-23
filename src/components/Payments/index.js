import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Payments = (props) => {
    const getImage = () => {
        return require('../../assets/images/Qr.jpg');
    };

    return(
        <View styles={styles.container}>
            <Text style={styles.cong}>Congratulations!!!!!!</Text>
            <Text style={styles.book}>Your Cab is Booked!</Text>
            <Text style={styles.textPayment}>
                Pay After Drop off by Cash or UPI in front of Driver, Get Ready for drive.
            </Text>
            <Text style={styles.textupi}>
                UPI
            </Text>
            <Image style={styles.image} source={getImage()}/>
            <Text style={styles.textCash}>
                Cash
            </Text>
            <Text style={styles.arrive}>Driver Name: Sham</Text>
            <Text style={styles.arrive}>Driver Contact: +91 54778952548</Text>
            <View style={{
                    backgroundColor: 'black',
                    padding:20 ,
                    alignItems: 'center',
                    top:40,
                    borderRadius:30,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize:23, borderRadius:30}}>
                    Confirmed Cabify Thank You!
                </Text>
            </View>
        </View>
    )
}


export default Payments;