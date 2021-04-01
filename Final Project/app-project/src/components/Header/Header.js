import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link, NavLink } from 'react-router-dom';
import authService from '../../services/authService';

function Header(props) {
    let userEmail = '';

    if (props.userData.isAuthenticated) {
        userEmail = props.userData.email;
    } else {
        console.log(props.userData);
    }

    const handleLogout = () => {
        authService.logOut();
        props.appContext.setState({ userData: authService.getData() });
    }

    return (
        <header>
            {props.userData.isAuthenticated
                ?(<div className={style.userActionsDivStyle}>
                    <span className={style.welcomeMessage}>Welcome, {userEmail}.</span>
                    <Link className={style.userActionLink} to={`/profile/${userEmail}`} exact={true}>Profile</Link>
                    <span className={style.userActionLink} onClick={handleLogout.bind(this)} exact={true} >Logout</span>
                </div>)
                :(<div className={style.userActionsDivStyle}>
                    <Link className={style.guestActionLink} to='/login' exact={true}>Login</Link>
                    <Link className={style.guestActionLink} to='/register' exact={true}>Register</Link>
                </div>)
            }


            <nav className={style.navigation}>
                <ul className={style.navigationUl}>

                    <NavLink activeClassName="active-nav-link" to="/" exact={true}>
                        <NavigationItem><img src="/coffee.png" alt="coffee" /></NavigationItem>
                    </NavLink>

                    <NavLink activeClassName="active-nav-link" to="/blog" exact={true}>
                        <NavigationItem>Blog</NavigationItem>
                    </NavLink>

                    <NavLink activeClassName="active-nav-link" to="/login" exact={true}>
                        <NavigationItem>Login</NavigationItem>
                    </NavLink>

                    <NavLink activeClassName="active-nav-link" to="/about" exact={true}>
                        <NavigationItem>About</NavigationItem>
                    </NavLink>

                    <NavLink activeClassName="active-nav-link" to="/contact-us" exact={true}>
                        <NavigationItem>Contact us</NavigationItem>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;