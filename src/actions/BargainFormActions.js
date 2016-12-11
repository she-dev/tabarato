import {
  BARGAIN_FORM_UPDATE
} from './types';

export const bargainCreate = ({ product, quantity, brand, price, store }) => {
  console.log(product, quantity, brand, price, store);
};

export const bargainUpdate = ({ prop, value }) => {
  return {
    type: BARGAIN_FORM_UPDATE,
    payload: { prop, value }
  };
};


