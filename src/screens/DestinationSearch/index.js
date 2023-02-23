import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PlaceRow from "./PlaceRow";

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 18.734888, lng: 73.096603 } },
};
const penPlace = {
  description: 'Pen',
  geometry: { location: { lat: 18.734888, lng: 73.096603 } },
};
const collegePlace = {
  description: 'Pillai Hoc College, Rasayani',
  geometry: { location: { lat: 18.901457, lng: 73.176132 } },
};
const panvelPlace = {
  description: 'Panvel',
  geometry: { location: { lat: 18.901457, lng: 73.176132 } },
};
const karjatPlace = {
  description: 'Karjat',
  geometry: { location: { lat: 18.901457, lng: 73.176132 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 18.901457, lng: 73.176132 } },
};

const DestinationSearch = (props) => {

  const getImage = () => {
    return require('../../assets/images/logo.png');
  };
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={getImage()}/>
        <Text style={styles.text}>        
          ~ Let's Book IT ! ! !
        </Text>
        <GooglePlacesAutocomplete
          placeholder="Search Your Location"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAYnwf3ZXrNnnnRF3_0Kt6FTwHnVXrNPp4',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, penPlace, collegePlace, panvelPlace, karjatPlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to go?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAYnwf3ZXrNnnnRF3_0Kt6FTwHnVXrNPp4',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, penPlace, collegePlace, panvelPlace, karjatPlace, workPlace]}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
