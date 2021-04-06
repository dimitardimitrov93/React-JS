import style from './Register.module.css';
import onRegisterSubmit from '../../AuthFormHandlers/onRegisterSubmit'
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import InputError from '../Shared/InputError';

function Register({ history }) {

    // const [errorMessage, setErrorMessage] = useState('');

    const register = (e) => {
        // const formData = new FormData(e.target);
        // const email = formData.get('email');
        // const password = formData.get('password');
        // const repeatPassword = formData.get('repeatPassword');

        // if (!email.trim() || !isEmailValid(email)) {
        //     // clearLoadingNotification();
        //     // displayErrorNotification('The email field must be filled with a valid address.');
        //     console.log('The email field must be filled with a valid address.');
        //     return;
        // } else if (password !== repeatPassword) {
        //     // clearLoadingNotification();
        //     // displayErrorNotification('Password mismatch.');

        //     console.log('Password mismatch.');

        //     return;
        // } else if (!password.trim()) {
        //     // clearLoadingNotification();
        //     // displayErrorNotification('The password cannot be an empty string.');
        //     console.log('The password cannot be an empty string.');
        //     return;
        // }


        onRegisterSubmit(e)
            .then(() => {
                history.push('/login');
            })
            .catch(error => console.log(error));
    }

    // const isEmailValid = (email) => {
    //     const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return emailValidationRegEx.test(String(email).toLowerCase());
    // }

    return (
        <div className={style.mainWrapper}>
            <main className={style.main}>
                <section className={style['register-form']}>
                    <h1>Register</h1>
                    <form onSubmit={register}>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <input type="password" name="repeatPassword" placeholder="Repeat Password" required />
                        {/* <InputError>{errorMessage}</InputError> */}
                        <input type="submit" className={style['register-btn']} value="Register" />
                        {/* <span class="successful-reg-msg">You were registered successfully. Now you can <NavLink className={style.loginLink} to='/login'>log in.</NavLink></span>
                        <span class="unsuccessful-reg-msg"></span> */}
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Register;