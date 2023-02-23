import React, { useState } from 'react';
import {View, Text, Dimensions} from 'react-native';
import Payments from '../../components/Payments';

const PaymentScreen = (props) => {

    return ( 
        <View style={{display: 'flex'}}>
            <View>
                <Payments />
            </View>
        </View>       
        

        
    );
}

export default PaymentScreen;