import React from "react";
import { View, Text, Pressable } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { Auth } from 'aws-amplify';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#212121', padding: 15}}>

        {/* User Row */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{backgroundColor:'#F99D00', width:50, alignItems:'center',justifyContent:'center',borderRadius:50, marginHorizontal:10}}>
            <FontAwesome name={"user"} color={"white"} size={40}/>
          </View>

          <View>
            <Text style={{color: 'white', fontSize: 24}}>Jagriti Mishra</Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#919191',
          borderTopWidth: 1,
          borderTopColor: '#919191',
          paddingVertical: 5,
          marginVertical: 10,
        }}>
          <Pressable
            onPress={() => {console.warn('Messages')}}>
            <Text style={{color: '#dddddd', paddingVertical: 5,}}>Messages</Text>
          </Pressable>
        </View>

        { /* Do more */}
        <Pressable
          onPress={() => {console.warn('Make Money Driving')}}>
          <Text style={{color: '#dddddd', paddingVertical: 5,}}>Do more with your account</Text>
        </Pressable>

        {/* Make money */}
        <Pressable onPress={() => {console.warn('Make Money Driving')}}>
          <Text style={{color: 'white', paddingVertical: 5}}>Make money driving</Text>
        </Pressable>


      </View>

      <DrawerItemList {...props} />

      {/* Make money */}
      <Pressable onPress={() => { Auth.signOut() }}>
        <Text style={{padding: 5, paddingLeft: 20, color:'#000'}}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
