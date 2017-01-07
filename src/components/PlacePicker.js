import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

class PlacePicker extends Component {
  state = { place: {} };

  openSearchModal = () => {
    RNGooglePlaces.openPlacePickerModal()
    .then((place) => { 
      console.log('inside opensearchmodal then');
        this.setState({
          place
        });
      
      console.log('this.props ', this.props);
      console.log('this.state ', this.state);
    })
    .catch(error => console.log('GooglePlacePicker Error: ', error.message));
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

// const mapStateToProps = (state) => {
//   const { place } = state.storeLocation;
//   return { place };
// };

// export default connect(mapStateToProps, { placeChanged })(PlacePicker);
export default PlacePicker;
