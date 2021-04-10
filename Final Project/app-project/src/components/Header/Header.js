import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import style from './Header.module.css';

import NavigationItem from './NavigationItem';

import AuthContext from '../../contexts/AuthContext';
import authService from '../../services/authService';

function Header() {
    let context = useContext(AuthContext);
    let [userData, setUserData] = useState(context.state.userData)

    let userEmail = userData.isAuthenticated ? userData.email : '';

    useEffect(() => {
        setUserData(context.state.userData);
        userEmail = userData.isAuthenticated ? userData.email : '';
    });

    const handleLogout = () => {
        authService.logOut();
        context.setState({
            userData: {
                isAuthenticated: false,
                email: '',
            }
        });
    }

    return (
        <header>
            {userData.isAuthenticated
                ? (<div className={style.userActionsDivStyle}>
                    <span className={style.welcomeMessage}>Welcome, {userEmail}</span>
                    <Link className={style.userActionLink} to={`/profile/${userEmail}`}>Profile</Link>
                    <span className={style.userActionLink} onClick={handleLogout.bind(this)} >Logout</span>
                </div>)
                : (<div className={style.userActionsDivStyle}>
                    <Link className={style.guestActionLink} to='/login'>Login</Link>
                    <Link className={style.guestActionLink} to='/register'>Register</Link>
                </div>)
            }

            <h1>Sip N Smi)e</h1>

            <nav className={style.navigation}>
                <ul className={style.navigationUl}>

                    <NavLink activeClassName="active-nav-link" to="/">
                        <NavigationItem><img src="/coffee.png" alt="coffee" /></NavigationItem>
                    </NavLink>

                    <NavLink activeClassName="active-nav-link" to="/blog">
                        <NavigationItem>Blog</NavigationItem>
                    </NavLink>
                    {/* 
                    <NavLink activeClassName="active-nav-link" to="/login">
                        <NavigationItem>Login</NavigationItem>
                    </NavLink> */}

                    <NavLink activeClassName="active-nav-link" to="/about">
                        <NavigationItem>About</NavigationItem>
                    </NavLink>

                    <NavLink activeClassName="active-nav-link" to="/contact-us">
                        <NavigationItem>Contact us</NavigationItem>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;