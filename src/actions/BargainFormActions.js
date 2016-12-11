import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  BARGAIN_CREATE,
  BARGAIN_FORM_UPDATE
} from './types';

export const bargainCreate = ({ product, quantity, brand, price, store }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/bargains`)
      .push({ product, quantity, brand, price, store })
      .then(() => {
        dispatch({ type: BARGAIN_CREATE });
        Actions.bargainList({ type: 'reset' });
      });
  };
};

export const bargainUpdate = ({ prop, value }) => {
  return {
    type: BARGAIN_FORM_UPDATE,
    payload: { prop, value }
  };
};


