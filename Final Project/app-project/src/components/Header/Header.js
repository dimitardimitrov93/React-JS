import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link, NavLink } from 'react-router-dom';
import authService from '../../services/authService';

function Header(props) {
    let userEmail = '';
    let userActionsDivStyle = 'guest';

    if (props.userData.isAuthenticated) {
        console.log('loggedUser');

        userEmail = props.userData.email;
        userActionsDivStyle = 'loggedUser';
    } else {
        console.log('guest');
        console.log(props.userData);
    }

    return (
        <header>
            <div className={style[userActionsDivStyle]}>
                <span className={style.welcomeMessage}>Welcome, {userEmail}.</span>
                <Link className={style.userActionLink} to={`/profile/${userEmail}`} exact={true}>Profile</Link>
                <Link className={style.userActionLink} to="/logout" onClick={authService.logOut} exact={true} >Logout</Link>
            </div>

            <nav className={style.navigation}>
                <ul className={style.navigationUl}>
                    <NavLink activeClassName="active-nav-link" to="/" exact={true}>
                        <NavigationItem><img src="/coffee.png" alt="coffee" /></NavigationItem>
                    </NavLink>
                    <NavLink activeClassName="active-nav-link" to="/blog" exact={true}>
                        <NavigationItem>Blog</NavigationItem>
                    </NavLink>
                    <NavLink activeClassName="active-nav-link" to="/recipes" exact={true}>
                        <NavigationItem>Recipes</NavigationItem>
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