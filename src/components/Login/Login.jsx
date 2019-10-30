import React from 'react'
import s from './Login.module.css'

const Login = (props) => {
    return (
        <section className={s.highWrapper}>
            <div className={s.loginWrapper}>

                <h1 className={s.loginHeading}>
                    login page:
                </h1>
                <h2>
                    <a target={"_blank"} href="https://social-network.samuraijs.com/login" className={s.reactSamuraiLink}>
                        react samurai login page
                    </a>
                </h2>
            </div>
        </section>

    )
};

export default Login;