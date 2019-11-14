import React from "react";
import TextField from "@material-ui/core/TextField";
import s from './FormsControls.module.scss'
// import {maxLength, required} from "../../../common/validators/validators";
// import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {

    console.log([input, meta, props]);
    return (
        <div className={s.formControl}>
            <div className={s.formItemsWrapper}>

                <TextField
                    className={(meta.active && meta.error) && s.postInput}
                    {...input}
                    label={meta.active || input.value
                        ? <b>Your post:</b>
                        : 'Create your post'}
                />
                {(meta.error && meta.active) && <small className={s.errorFieldHighlight}>{meta.error}</small> }
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