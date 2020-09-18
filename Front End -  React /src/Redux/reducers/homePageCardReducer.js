import { types } from "../types";

const initialState = {
cardsData:{}
};

export default (state = initialState, action) => {
  if (action.type === types.HOME_PAGE_CARD) {
    return {
      ...state,
      cardsData: action.payload,

      error:""
    };
  } else if (action.type === types.ERROR) {
    return {
      error: action.payload,
    };
  } else {
    return state;
  }
};
