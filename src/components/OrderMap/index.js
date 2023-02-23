import React from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const OrderMap = ({ car }) => {

  const getImage = (type) => {
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
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 18.734888,
        longitude: 73.096603,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0121,
      }}>

      {car && (<Marker
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
      </Marker>)}
    </MapView>
  );
};

export default OrderMap;
