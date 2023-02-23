import React, {useEffect} from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles';
import CabifyTypesRow from '../CabifyTypesRow';
import {useNavigation} from '@react-navigation/native'
import typesData from '../../assets/data/types';

const CabifyTypes = ({ typeState, onSubmit }) => {
  const [selectedType, setSelectedType] = typeState;
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('OrderPage')
  }
  return (
    <View>
      {typesData.map((type: { ... }) => (
        <CabifyTypesRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <Pressable onPress={goToSearch} style={{
        backgroundColor: 'black',
        padding:20 ,
        alignItems: 'center',
        top:-10,
      }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize:20}}>
          Confirm Cabify
        </Text>
      </Pressable>
    </View>
  );
};

export default CabifyTypes;
