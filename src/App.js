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
      apiKey: <firebase-info>,
      authDomain: <firebase-info>,
      databaseURL: <firebase-info>,
      storageBucket: <firebase-info>,
      messagingSenderId: <firebase-info>
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
