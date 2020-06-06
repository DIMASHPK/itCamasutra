import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToProps = ({authReducer: {isAuth}}) => ({isAuth})

export const withAuthRedirectHOC = (Component) => {

    class AuthRedirectHOC extends React.Component {
        render() {
            const {isAuth} = this.props

            return !isAuth ? <Redirect to={'/login'}/> : <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(AuthRedirectHOC)
}







