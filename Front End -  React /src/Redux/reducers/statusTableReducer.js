import { types } from "../types";

 const initialState = {
  sendEmailMsg: "",
tablesData:{}

};

export default (state = initialState,action) => {
  switch (action.type) {
    case types.SEND_EMAIL:
      return {
        ...state,
        sendEmailMsg: action.payload,
        error:""
      };

    case types.GET_STATUS_TABLE:
      return {
        ...state,
        tablesData: action.payload,
        
        error:""
      };
      case types.ERROR:
        return {
          error: action.payload,
        };
    default:
      return state;
  }
};
