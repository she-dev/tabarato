import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key='login'
        component={LoginForm}
        title='Login' 
      />
    </Router>
  );
};

export default RouterComponent;
