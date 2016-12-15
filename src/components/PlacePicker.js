import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

class PlacePicker extends Component {
  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal()
    .then((place) => { 
        console.log(place);         
    })
    .catch(error => console.log(error.message));
  }

  render() {
    return (
      <View style={{ width: 100, height: 20 }}>
        <TouchableOpacity
          onPress={() => this.openSearchModal()}
        >
          <Text>Open Place Picker</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PlacePicker;
