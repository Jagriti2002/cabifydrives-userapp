import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from './styles';

import Ionicons from "react-native-vector-icons/Ionicons";

const CabifyTypesRow = (props) => {
  const {type, onPress, isSelected} = props;

  const getImage = () => {
    if (type === 'cabifymove') {
        return require('../../assets/images/cabifymove.jpeg');
    }
    if(type === 'cabifytour'){
        return require('../../assets/images/cabifytour.jpg');
    }
    if(type === 'cabifyblack'){
        return require('../../assets/images/cabifyblack.jpg');
    }
    if(type === 'cabifyvan'){
        return require('../../assets/images/cabifyvan.jpg');
    }
    if(type === 'cabifyassist'){
        return require('../../assets/images/cabifyassist.jpeg');
    }
    return require('../../assets/images/cabifyassist.jpeg');
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {
        backgroundColor: isSelected ? '#efefef' : 'white',
      }]}
    >
      {/*  Image */}
      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'person'} size={16} />
          {type.person}
        </Text>
        <Text style={styles.time}>
        {type.duration}Min drop off
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>₹{type.price}/<Ionicons name={'person'} size={16} /></Text>
      </View>
    </Pressable>
  );
};

export default CabifyTypesRow;
