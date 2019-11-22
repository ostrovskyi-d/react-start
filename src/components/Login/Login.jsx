import React from 'react'
import s from './Login.module.scss'
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {Checkbox} from "@material-ui/core";
import {renderInput} from "../Placeholders-etc/FormsControls/FormsControls";
import {validate, warn} from "../../common/validators/validators";
import {Input, Message} from "semantic-ui-react";

const Login = (props) => {
    const sendFormData = (formData) => {
        props.loginThunkCreator(formData);
    };
    return (
        <section className={s.highWrapper}>
            <div className={s.loginWrapper}>
                <h1 className={s.loginHeading}>Login:</h1>
                <LoginReduxForm captchaImgURL={props.captchaImgURL} onSubmit={sendFormData}/>
            </div>
        </section>
    )
};

const LoginForm = (props) => {
    const { error, handleSubmit, submitting, captchaImgURL} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={renderInput}
                    label="Email"
                    name="login"
                    type="email"
                    autoFocus={true}
                />
            </div>
            <div>
                <Field
                    component={renderInput}
                    label="Password"
                    type="password"
                    name="password"
                />
            </div>
            <div className={s.checkBox}>
                <Field
                    component={Checkbox}
                    color='primary'
                    type="checkbox"
                    name="rememberMe"
                />
                <span className={s.checkBoxLabel}>Remember me</span>
            </div>
            {/* ------ Common error ------ */}
            {error && <Message error header={error}  />}

            {/* ------- Captcha Container ---------*/}
            {captchaImgURL
                ? <>
                    <Message warning header={"Too many attempts"} content={"We need to check you not a bot"} />
                    <img src={captchaImgURL} alt="captcha"/>
                    <Field name={"captcha"} placeholder="Captcha..." component={Input}/>
                </>
                : undefined}

            <div className={s.loginSubmitButtonWrapper}>
                <Button
                    className={s.loginSubmitButton}
                    placeholder="Login"
                    variant="contained"
                    color='default'
                    size="medium"
                    type='submit'
                    disabled={submitting}
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