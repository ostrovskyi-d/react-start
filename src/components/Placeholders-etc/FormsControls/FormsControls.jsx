import React from "react";
import TextField from "@material-ui/core/TextField";
import s from './renderTextArea.module.scss'
import {TextArea} from "semantic-ui-react";


export const renderTextarea = ({input, type, label, meta: {error, warning, active, touched}, ...props}) => {
    const hasError = error && <p className={s.errorWrapper}> <small className={s.error}>{error}</small></p>;
    const hasWarn = warning && <p className={s.warningWrapper}><small className={s.warning}>{warning}</small></p>;
    return (
        <div className={s.formControl}>
            <div className={s.formItemsWrapper}>
                <>
                    <TextArea
                        {...input}
                        className={(active && error) ? s.postInput : undefined}
                        label={(active || input.value) ? <b>Your post:</b> : 'Create your post'}
                    />
                </>
                {active && (hasError || hasWarn)}
            </div>
        </div>
    )
};
export const renderInput = ({input, label, type, meta: {active, touched, error, warning}, ...props}) => {
    return <div className={s.formControl}>
        <div>
            <TextField
                required
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
            {(active || touched) && ((error && <p className={s.errorWrapper}><span className={s.error}>{error}</span></p>)
                || (warning && <p className={s.warningWrapper}><span className={s.warning}>{warning}</span></p>)
            )}
        </div>
    </div>
};