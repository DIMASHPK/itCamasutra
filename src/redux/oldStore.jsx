import dialogs_reducer from "./dialiogsReducer";
import profileReducer from "./profileReducer";
import navReducer from "./navReducer";

let oldStore = {
  _data: {
    dialogs: {
      messages: [
        { id: 1, msg: "hi" },
        { id: 2, msg: "How is your it-kamasutra" },
        { id: 3, msg: "Yo" }
      ],

      newMessage: "",

      dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Dasha" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Nastya" },
        { id: 5, name: "Masha" },
        { id: 6, name: "Vinni" }
      ]
    },
    profile: {
      posts: [
        { id: 1, post: "Hi, how are you?", like: 3 },
        { id: 1, post: "It's my first post", like: 32 }
      ],
      src:
        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
      newPost: ""
    },
    nav: [
      {
        src:
          "http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg",
        name: "Dasha"
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJKZr5nc9-hK8l9aiayxzjQt8cqUmQxl6hvZ7POtKwaAY-Bd6&s",
        name: "Sasha"
      },
      {
        src:
          "https://img2.akspic.ru/fit/98580-karibskij_bassejn-more-otpusk-den-krasota-x750.jpg",
        name: "Stas"
      }
    ]
  },
  _rerender: 0,

  getData() {
    return this._data;
  },
  rend(callback) {
    this._rerender = callback;
  },

  dispatch(action) {
    this._data.dialogs = dialogs_reducer(this._data.dialogs, action);
    this._data.profile = profileReducer(this._data.profile, action);
    this._data.nav = navReducer(this._data.nav, action);

    this._rerender(this._data);
  }
};

export default oldStore;
