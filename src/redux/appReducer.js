import {setUserDataThunkCreater} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false
}


export const appReducer = (state = initialState, {type}) => {
    switch (type) {
        case SET_INITIALIZED:
            return ({
                    ...state,
                    initialized: true
                }
            );
        default:
            return state
    }
}

export const initializedActionCreater = () => ({type: SET_INITIALIZED})

export const initializedThunkCreater = () => (dispatch) => {
    const authUser = dispatch(setUserDataThunkCreater())
    authUser
        .then(res=>dispatch(initializedActionCreater()))
}