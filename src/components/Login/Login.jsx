import React from 'react'
import s from './Login.module.scss'
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {Checkbox, TextField} from "@material-ui/core";
import {renderInput} from "../Placeholders-etc/FormsControls/FormsControls";
import {validate, warn} from "../../common/validators/validators";

const Login = (props) => {
    const sendFormData = (formData) => props.loginThunkCreator(formData);

    return (
        <section className={s.highWrapper}>
            <div className={s.loginWrapper}>
                <h1 className={s.loginHeading}>Login:</h1>
                <LoginReduxForm
                    onSubmit={sendFormData}/>
            </div>
        </section>

    )
};

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    // className={s.loginField}
                    component={renderInput}
                    label={"Email"}
                    name={"login"}
                    type={"email"}
                    autoFocus={true}
                />
            </div>
            <div>
                <Field
                    // className={s.passwordField}
                    component={renderInput}
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                />
            </div>
            <div className={s.checkBox}>
                <Field
                    // className={s.rememberMeCheck}
                    component={Checkbox}
                    color={'primary'}
                    type="checkbox"
                    name={"rememberMe"}
                />
                <span className={s.checkBoxLabel}>Remember me</span>
            </div>
            <div className={s.loginSubmitButtonWrapper}>
                <Button
                    className={s.loginSubmitButton}
                    placeholder={"Login"}
                    variant="contained"
                    color={'default'}
                    size={"medium"}
                    type={'submit'}
                >
                    Log In
                </Button>
            </div>
        </form>
    )
};

export const LoginReduxForm = reduxForm({
    form: 'login',
    validate,
    warn
})(LoginForm);



export default Login;