import React, {Component, Suspense} from "react";
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Login from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {initializedThunkCreater} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Prelodaer";
import "./App.css";
/*import UsersContainer from "./components/Users/UsersContainer"; suspense(<UsersContainer/>)*/

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileConteiner"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));



class App extends Component {
    componentDidMount() {
        const {initializedThunkCreater} = this.props;
        initializedThunkCreater()
    }

    render() {
        const {initialized} = this.props
        const suspense = (component) =>
            <Suspense fallback={<Preloader/>}>
                {component}
            </Suspense>


        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={"app-wrapper-content"}>
                    {initialized ? (
                        <>
                            <Route path="/" render={() => <Login/>}/>
                            <Route path="/dialogs/" render={() => suspense(<DialogsContainer/>)}/>
                            <Route path="/profile/:userId?" render={() => suspense(<ProfileContainer/>)}/>
                            <Route path="/users/" render={() => suspense(<UsersContainer/>)}/>
                        </>
                    ) : (
                        <Preloader/>
                    )}
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({appReducer: {initialized}}) => ({initialized})
const mapDispatchToProps = {initializedThunkCreater};

export default connect(mapStateToProps, mapDispatchToProps)(App);
