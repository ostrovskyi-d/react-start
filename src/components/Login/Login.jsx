import React from 'react'
import s from './Login.module.scss'
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
// import handleSubmit from "redux-form/lib/handleSubmit";



const Login = (props) => {

    return (
        <section className={s.highWrapper}>
            <div className={s.loginWrapper}>
                <h1 className={s.loginHeading}>Login:</h1>
                <LoginReduxForm
                    onSubmit={(formData) => props.loginThunkCreator(formData)}/>
            </div>
        </section>

    )
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.loginField}
                    component={"input"}
                    placeholder={"Login"}
                    name={"login"}
                />
            </div>
            <div>
                <Field
                    className={s.passwordField}
                    component={"input"}
                    type={"password"}
                    placeholder={"Password"}
                    name={"password"}
                />
            </div>
            <div>
                <Field
                    className={s.rememberMeCheck}
                    component={"input"}
                    type="checkbox"
                    name={"rememberMe"}
                /> Remember me
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
    form: 'login'
})(LoginForm);



export default Login;