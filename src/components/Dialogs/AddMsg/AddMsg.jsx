import React from "react";
import s from "./AddMsg.module.css";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormControls/FormControls";
import {maxLength, requiredField} from "../../../helpers/validators";


const maxLengthMessage = maxLength(30)


const AddNewMsg = ({handleSubmit}) => (
    <form className={s.wrap} onSubmit={handleSubmit}>
        <Field
            className={s.textArea}
            component={TextArea}
            name={'newMessage'}

            validate = {[requiredField, maxLengthMessage]}
            placeholder={'Your message'}
        />
        <button className={s.button}>
            Отправить
        </button>
    </form>
);

export default reduxForm({form: 'newMessage'})(AddNewMsg)
