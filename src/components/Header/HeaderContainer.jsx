import React from "react";
import Header from "./Header";
import {logoutUserDataThunkCreater, setUserDataThunkCreater} from "../../redux/authReducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = ({authReducer}) => ({...authReducer});
let mapDispatchToProps = {logoutUserDataThunkCreater};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
