import style from './Login.module.css';
import { Link, NavLink } from 'react-router-dom';
import onLoginSubmit from '../../AuthFormHandlers/onLoginSubmit';

function Login({
    posts
}) {

    // const onLoginSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

    //     const userData = {
    //         email: formData.get('email'),
    //         password: formData.get('password'),
    //     }

    //     console.log(userData);
    // }

    return (
        <div className={style.mainWrapper}>
            <main className={style.main}>
                <section className={style['login-form']}>
                    <h1>Account Login</h1>
                    <form onSubmit={onLoginSubmit}>
                        <input type="text" name="email" placeholder="Email" required />

                        <input type="password" name="password" placeholder="Password" required />

                        <input className={style['login-btn']} type="submit" value="LOGIN" />

                        <span class="register">
                            Don't have an account?
                            <NavLink activeClassName="active-nav-link" className={style.registerLink} to="/register" exact={true}>
                                Register
                            </NavLink>
                        </span>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Login;