import React, { useState, useEffect } from "react";
import { Image, FlatList } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import cars from "../../assets/data/cars";
import { DataStore } from "aws-amplify";
import { Car } from "../../models";

const HomeMap = (props) => {
  const [cars, setCars] = useState([]);
  const fetchCar = async () => {
    const results = await DataStore.query(Car);
    setCars(results);
  }

  useEffect(() => {
    fetchCar();
  }, []);

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
    return require('../../assets/images/cabifyconnect.jpeg');
  }

  return (
    <MapView
      userInterfaceStyle={'dark'}
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      mapId= "8e0a97af9386fef"
      initialRegion={{
        latitude: 18.734888,
        longitude: 73.096603,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;