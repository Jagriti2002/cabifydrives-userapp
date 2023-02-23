import React, { useState, useEffect } from "react";
import { View, Dimensions, Text } from "react-native";
import OrderMap from "../../components/OrderMap";
import Order from "../../components/Order";

const OrderScreen = (props) => {

  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 500}}>
        <OrderMap />
      </View>
      <View>
        <Order />
      </View>
    </View>
  );
};

export default OrderScreen;
