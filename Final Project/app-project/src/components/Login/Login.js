import style from './Login.module.css';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Component } from 'react';
import onLoginSubmit from '../../AuthFormHandlers/onLoginSubmit';
import authService from '../../services/authService';
import InputError from '../Shared/InputError';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
            error: '',
            inputErrorStyle: 'hide',
        }
    }

    handleSubmit(e) {
        onLoginSubmit(e)
            .then(res => {
                console.log(res);

                if (res.idToken) {
                    this.setState({ isAuthenticated: true });

                    console.log(this.props.appContext);

                    this.props.appContext.setState({ userData: authService.getData() });
                }
            })
            .catch(error => {
                this.setState({ inputErrorStyle: 'show' });
                this.setState({ error: error });
            });
    }

    changeInputErrorStyle() {
        this.setState({ inputErrorStyle: 'hide' });
    }

    // const onLoginSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

    //     const userData = {
    //         email: formData.get('email'),
    //         password: formData.get('password'),
    //     }

    //     console.log(userData);
    // }
    render() {
        if (this.state.isAuthenticated) {
            return <Redirect to='/' />
        }

        return (
            <div className={style.mainWrapper} >
                <main className={style.main}>
                    <section className={style['login-form']}>
                        <div className={style[this.state.inputErrorStyle]}>
                            <InputError>{this.state.error}</InputError>
                        </div>
                        <h1>Account Login</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" name="email" placeholder="Email" required onFocus={this.changeInputErrorStyle.bind(this)} />

                            <input type="password" name="password" placeholder="Password" required onFocus={this.changeInputErrorStyle.bind(this)} />

                            <input className={style['login-btn']} type="submit" value="LOGIN" />

                            <span className="register">
                                Don't have an account?
                            <NavLink activeClassName="active-nav-link" className={style.registerLink} to="/register">
                                    Register
                            </NavLink>
                            </span>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}

export default Login;