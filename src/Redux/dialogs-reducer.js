const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Suknickar" },
    { id: 2, name: "Vikea" },
    { id: 3, name: "Vasea" },
    { id: 4, name: "Zecease" },
    { id: 5, name: "Niku" },
  ],
  messages: [
    { id: 1, message: "dorou, ia daun" },
    { id: 2, message: "patani eu o sa vin prin mid solo" },
    { id: 3, message: "da cum blea" },
    { id: 4, message: "ei da ia jostkii AWPer mai" },
    { id: 5, message: "eu is jostkii da nu ma viibesc" },
  ],
  
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      };

    default:
      return state;
  }
};

export const addMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogsReducer;
