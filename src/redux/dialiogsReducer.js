const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_MESSAGE = 'CHANGE_MESSAGE'

const initialState = {
    messages: [
        {id: 1, msg: "hi"},
        {id: 2, msg: "How is your it-kamasutra"},
        {id: 3, msg: "Yo"}
    ],

    dialogsData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Dasha"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Nastya"},
        {id: 5, name: "Masha"},
        {id: 6, name: "Vinni"}
    ]
};

const dialogs_reducer = (state = initialState, {type, msg}) => {
    switch (type) {
        case ADD_MESSAGE:
          return msg.length > 0
                ? {
                    ...state,
                    messages: [
                        ...state.messages,
                        {
                            id: state.messages.length + 1,
                            msg
                        }
                    ],
                    newMessage: ""
                }
                :
                {...state};
        default:
            return {...state};
    }
};

export const addMessageActionCreater = (msg) => ({type: ADD_MESSAGE, msg})

export default dialogs_reducer;
