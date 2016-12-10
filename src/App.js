import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAF4L5UKGHVcWXXbarKbBpPPqle77euJmY',
      authDomain: 'tabarato-152119.firebaseapp.com',
      databaseURL: 'https://tabarato-152119.firebaseio.com',
      storageBucket: 'tabarato-152119.appspot.com',
      messagingSenderId: '307951384130'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>An app!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
