import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAYnwf3ZXrNnnnRF3_0Kt6FTwHnVXrNPp4';
const RouteMap = ({origin, destination}) => {

  
  {/*const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };*/}

   {/*const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };*/}
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      userInterfaceStyle={'dark'}
      showsUserLocation={true}
      initialRegion={{
        latitude: 18.734888,
        longitude: 73.096603,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0121,
      }}>
      {/*<MapViewDirections
        origin={originLoc}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />*/}
      <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination} //Loc
        title={'Destination'}
      />
    </MapView>
  );
};

export default RouteMap;