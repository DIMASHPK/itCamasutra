import React from 'react'
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

export const Login = ({isAuth, loginUserDataThunkCreater}) => <>
    {
        isAuth ? <Redirect to='/profile' /> : (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={values => {
                    loginUserDataThunkCreater(values)
                }}/>
            </div>
            )
            }
        </>

