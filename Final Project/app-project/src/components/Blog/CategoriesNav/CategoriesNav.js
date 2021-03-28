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
                    <NavLink to={'/blog/1'} exact={true}>Category 1</NavLink>
                </li>
                <li className={style.categoryListItem}>
                    <NavLink to={'/blog/2'} exact={true}>Category 2</NavLink>
                </li>
                <li className={style.categoryListItem}>
                    <NavLink to={'/blog/3'} exact={true}>Category 3</NavLink>
                </li>
                <li className={style.categoryListItem}>
                    <NavLink to={'/blog/4'} exact={true}>Category 4</NavLink>
                </li>
            </ul>
        );
    }
}

export default CategoriesNav;