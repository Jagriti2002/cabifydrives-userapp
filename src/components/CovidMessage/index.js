import React from 'react';
import { View, Text, Image } from "react-native";
import styles from './styles';

const CovidMessage = (props) => {
  const getImage = () => {
    return require('../../assets/images/logo2.png');
  };

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={getImage()}/>
        <Text style={styles.text}>
            Let's Drive Together, better drive Together.
            Top long drivers compete professionally in events and exhibitions.
        </Text>
    </View>
  );
};

export default CovidMessage;