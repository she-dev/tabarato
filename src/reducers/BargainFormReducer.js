import {
  BARGAIN_CREATE,
  BARGAIN_FORM_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BARGAIN_CREATE:
      return INITIAL_STATE;
    case BARGAIN_FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
