import React from 'react'
import {reduxForm, Field} from "redux-form";
import {maxLength, minLength, requiredField, validEmail} from "../../helpers/validators";
import {Input} from "../common/FormControls/FormControls";

const maxLengthLogin = maxLength(60)
const maxLengthPassword = maxLength(60)
const minLengthPassword = minLength(8)

export const LoginForm = ({handleSubmit, error}) => (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name={'email'}
                        component={Input}
                        type="text"
                        placeholder={'login'}
                        validate = {[validEmail, requiredField, maxLengthLogin]}
                    />
                </div>
                <div>
                    <Field
                        name={'password'}
                        component={Input}
                        type="password"
                        placeholder={'password'}
                        validate = {[maxLengthPassword, minLengthPassword, requiredField]}
                    />
                </div>
                <div>
                    <Field name={'rememberMe'} component='input' type="checkbox"/>
                    remember me
                </div>
                {error && <div className={'formSummeryError'}>{error}</div> }
                <div>
                    <button>login</button>
                </div>
            </form>
        </>
    )


export default reduxForm({form: 'login'})(LoginForm)
