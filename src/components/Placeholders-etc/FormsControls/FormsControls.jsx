import React from "react";
import TextField from "@material-ui/core/TextField";
import s from './renderTextArea.module.scss'
import Input from "@material-ui/core/Input";


export const renderTextarea = ({input, type, label, meta: {error, warning, active, touched}, ...props}) => {
    const hasError = error && <p><small className={s.errorFieldHighlight}>{error}</small></p>;
    const hasWarn = warning && <p><small className={s.errorFieldHighlight}>{warning}</small></p>;
    return (
        <div className={s.formControl}>
            <div className={s.formItemsWrapper}>

                <TextField
                    {...input}
                    className={(active && error) && s.postInput}
                    label={active || input.value
                        ? <b>Your post:</b>
                        : 'Create your post'}
                />
                {active && (hasError || hasWarn)}
            </div>
        </div>
    )
};
export const renderInput = ({input, label, type, meta: {active, touched, error, warning}, ...props}) => {
    return <div className={s.formControl}>
        <div>
            <TextField
                {...input}
                id="outlined-basic"
                label={label}
                placeholdr={label}
                margin="normal"
                type={type}
                autoFocus={props.autoFocus}
                variant="outlined"
                color={"primary"}
            />
            {!active && ((error && <p><span>{error}</span></p>) || (warning && <p><span >{warning}</span></p>))}
        </div>
    </div>
};