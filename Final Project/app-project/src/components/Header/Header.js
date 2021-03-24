import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <nav className={style.navigation}>
            <ul>
                <NavLink activeClassName="active-nav-link" to="/"  exact={true}>
                    <NavigationItem><img src="/coffee.png" alt="coffee" /></NavigationItem>
                </NavLink>
                <NavLink activeClassName="active-nav-link" to="/blog"  exact={true}>
                    <NavigationItem>Blog</NavigationItem>
                </NavLink>
                <NavLink activeClassName="active-nav-link" to="/recipes" exact={true}>
                    <NavigationItem>Recipes</NavigationItem>
                </NavLink>
                <NavLink activeClassName="active-nav-link" to="/about"  exact={true}>
                    <NavigationItem>About</NavigationItem>
                </NavLink>
                <NavLink activeClassName="active-nav-link" to="/contact-us" exact={true}>
                    <NavigationItem>Contact us</NavigationItem>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Header;