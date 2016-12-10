import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
