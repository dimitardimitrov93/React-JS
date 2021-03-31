import style from './Login.module.css';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Component } from 'react';
import onLoginSubmit from '../../AuthFormHandlers/onLoginSubmit';
import authService from '../../services/authService';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
        }
    }

    handleSubmit(e) {
        onLoginSubmit(e)
            .then(res => {
                if (res.idToken) {
                    this.setState({ isAuthenticated: true })
                    console.log(this.props.appContext);
                    
                    this.props.appContext.setState({ userData: authService.getData() });
                }
            })
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
                        <h1>Account Login</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
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
        )
    }
}

export default Login;