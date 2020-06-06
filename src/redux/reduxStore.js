import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import dialogs_reducer from "./dialiogsReducer";
import profileReducer from "./profileReducer";
import navReducer from "./navReducer";
import userReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";


const reducers = combineReducers({
  dialogs_reducer,
  profile_reducer: profileReducer,
  nav_reducer: navReducer,
  userReducer,
  authReducer,
  appReducer,
  form: formReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
