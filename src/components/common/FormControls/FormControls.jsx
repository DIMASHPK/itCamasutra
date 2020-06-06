import React from 'react'
import styles from './FormControls.module.css'


export const FormControl = ({error, touched, children,}) => {
    const hasError = touched && error

    return(
        <div className={ `${styles.formControl}  ${hasError ? styles.error : ''}`}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const TextArea = ({input, meta, children, ...props}) => (
    <FormControl {...meta}>
        <textarea {...input} {...props}/>
    </FormControl>
)

export const Input = ({input, meta, children, ...props}) => (
    <FormControl {...meta}>
        <input {...input} {...props}/>
    </FormControl>
)