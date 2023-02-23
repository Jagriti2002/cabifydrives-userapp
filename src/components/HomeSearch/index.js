import React from "react";
import { View, Text, Pressable } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native'

import styles from './styles';

const HomeSearch = (props) => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch')
  }

  return (
    <View>
      {/*  Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}> ~ Let's Cabify It !!!</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#1a001a'} />
          <Text style={styles.Text}> Book Drive</Text>        
        </View>
      </Pressable>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#F76601'} />
        </View>
        <Text style={styles.destinationText}>Pillai HOC College</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#F76601'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
