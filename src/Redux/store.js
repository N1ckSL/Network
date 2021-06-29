import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How are you today?", likesCount: "2" },
        { id: 1, message: "How are you tomorrow?", likesCount: "22" },
        { id: 1, message: "How are you?", likesCount: "228" },
        { id: 1, message: "You are how?", likesCount: "1337" },
      ],
      newPostText: "Express yourself...",
    },
    dialogsPage: {
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
      newMessageBody: "",
    },
    sidebar: [
      { id: 1, page: "Profile" },
      { id: 1, page: "Messages" },
      { id: 1, page: "News" },
      { id: 1, page: "Music" },
      { id: 1, page: "Friends" },
      { id: 1, page: "Settings" },
    ],
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //observer PATTERN
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
