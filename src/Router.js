import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import BargainCreate from './components/BargainCreate';
import BargainList from './components/BargainList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="main">
        <Scene
          key="bargainList"
          component={BargainList}
          // localization pt_BR
          title="Ofertas"
          rightTitle="Adicionar"
          onRight={() => Actions.bargainCreate()}
          initial
        />
        <Scene
          component={BargainCreate}
          key="bargainCreate"
          // localization pt_BR
          title="Adicionar oferta"
        />
      </Scene> 
        
      <Scene
        key="login"
        component={LoginForm}
        title="Login" 
      />

    </Router>
  );
};

export default RouterComponent;
