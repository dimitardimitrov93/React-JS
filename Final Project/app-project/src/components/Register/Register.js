import style from './Register.module.css';
import onRegisterSubmit from '../../AuthFormHandlers/onRegisterSubmit'
import { Link, NavLink } from 'react-router-dom';

function Register() {
    // const onRegisterSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

    //     const userData = {
    //         email: formData.get('email'),
    //         password: formData.get('password'),
    //         repeatPassword: formData.get('repeatPassword'),
    //     }

    //     console.log(userData);
    // }

    return (
        <div className={style.mainWrapper}>
            <main className={style.main}>
                <section className={style['register-form']}>
                    <h1>Register</h1>
                    <form onSubmit={onRegisterSubmit}>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <input type="password" name="repeatPassword" placeholder="Repeat Password" required />
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