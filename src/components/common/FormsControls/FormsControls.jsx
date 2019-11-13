import React from "react";
import s from './FormsControls.module.scss'
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/styles";


export const Textarea = ({input, label, type, meta: {touched, error, warning}, ...props}) => {

    return (
        <div className={s.formControl}>
            <div className={s.formItemsWrapper}>
                <label> {label}</label>
                <TextField
                    {...input}
                    type={type}
                    placeholder={"Insert post text here"}
                    // className={s.root}
                />
                {<span>{input.newPostBody}</span>}
            </div>
        </div>
    )
};
export const Input = ({input, label, type, meta: {touched, error, warning}, ...props}) => {
    return <div className={s.formControl}>
        <div>
            {
                touched && (
                    (error && <span className={s.error}>{error}</span>)
                    || (warning && <span>{warning}</span>)
                )
            }
            <input  {...input} type={"text"}/>
        </div>
    </div>
};