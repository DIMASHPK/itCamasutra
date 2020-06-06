import {api} from "../api/api";
import {stopSubmit} from "redux-form";

const GET_DATA = "GET_DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, {type, data}) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                ...data
            };
        default:
            return {...state};
    }
};

export const setUserData = data => ({
    type: GET_DATA,
    data
});

export const setUserDataThunkCreater = () => (dispatch) => {
    return api.authMe()
        .then(res => res.resultCode === 0
            && dispatch(setUserData({...res.data, isAuth: true})));
}

export const loginUserDataThunkCreater = ({email, password, rememberMe = false}) => (dispatch) => {
    api.login(email, password, rememberMe)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setUserDataThunkCreater())
            } else {
                let messages =  data.messages.length > 0
                    ? data.messages.reduce((prev, item) => `${item }`, '')
                    : 'some error'
                dispatch(stopSubmit('login', {_error: messages}))
            }
        });
}

export const logoutUserDataThunkCreater = () => (dispatch) => {
    api.logout().then(({data}) => data.resultCode === 0 && dispatch(setUserData(
        {
            email: null,
            password: null,
            rememberMe: null,
            isAuth: false
        })));
}

export default authReducer;
