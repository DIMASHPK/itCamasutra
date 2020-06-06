import {connect} from "react-redux";
import {Login} from "./Login";
import {loginUserDataThunkCreater} from "../../redux/authReducer";


export default connect(({authReducer: {isAuth}}) => ({isAuth}), {loginUserDataThunkCreater})(Login)