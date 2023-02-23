import React, { useState } from 'react';
import {View, Dimensions, Alert, Button} from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import RouteMap from "../../components/RouteMap";
import CabifyTypes from "../../components/CabifyTypes";
import { DataStore } from '@aws-amplify/datastore';
import { Order } from '../../models';
import { useRoute, useNavigation } from '@react-navigation/native';

const SearchResults = (props) => {
  const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const {originPlace, destinationPlace} = route.params

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }
    // submit to server
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        oreiginLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId: userInfo.attributes.sub,
        carId: "1",
        status: "NEW",
      }

      const response = await DataStore.query(
        graphqlOperation(
          Order, {
            input: input
          },
        )
      )

      console.log(response);
      
      navigation.navigate('OrderPage', { id: response.data.createOrder.id });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={{display: 'flex'}}>
      <View style={{height: 400}}>
        <CabifyTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
