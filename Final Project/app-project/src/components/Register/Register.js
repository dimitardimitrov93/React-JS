import style from './Register.module.css';
import onRegisterSubmit from '../../AuthFormHandlers/onRegisterSubmit'
import { useState, useEffect } from 'react';
import InputError from '../Shared/InputError';
import SuccessMessage from '../Shared/SuccessMessage';

function Register({ history }) {

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onInputBlur = () => {
        setErrorMessage('');
    }

    const register = (e) => {
        onRegisterSubmit(e)
            .then((message) => {
                setSuccessMessage(message);
                setTimeout(() => {
                    history.push('/login');
                }, 1500)
            })
            .catch(error => setErrorMessage(error));
    }

    return (
        <div className={style.mainWrapper}>
            <main className={style.main}>
                <section className={style['register-form']}>
                    <h1>Register</h1>

                    <InputError>{errorMessage}</InputError>
                    <SuccessMessage>{successMessage}</SuccessMessage>

                    <form onSubmit={register}>
                        <input type="email" name="email" placeholder="Email" onFocus={onInputBlur} required />
                        <input type="password" name="password" placeholder="Password" onFocus={onInputBlur} required />
                        <input type="password" name="repeatPassword" placeholder="Repeat Password" onFocus={onInputBlur} required />
                        <input type="submit" className={style['register-btn']} value="Register" />
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Register;