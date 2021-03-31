import { Component } from 'react';
import style from './CategoriesNav.module.css';
import { NavLink } from 'react-router-dom';

class CategoriesNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={style.categories}>
                <li className={style.categoryListItem}>
                    <NavLink activeClassName={style.active} to={'/blog'} exact={true}>All</NavLink>
                </li>
                <li className={style.categoryListItem}>
                    <NavLink activeClassName={style.active} to={'/blog/mocha'} exact={true}>Mocha</NavLink>
                </li>
                <li className={style.categoryListItem}>
                    <NavLink activeClassName={style.active} to={'/blog/espresso'} exact={true}>Espresso</NavLink>
                </li>
                <li className={style.categoryListItem}>
                    <NavLink activeClassName={style.active} to={'/blog/latte'} exact={true}>Latte</NavLink>
                </li>
                <li className={style.categoryListItem}>
                    <NavLink activeClassName={style.active} to={'/blog/cappuccino'} exact={true}>Cappuccino</NavLink>
                </li>
            </ul>
        );
    }
}

export default CategoriesNav;