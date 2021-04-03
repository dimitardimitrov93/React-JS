import style from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={style.listItem}>
            {props.children}
        </li>
    );
}

export default NavigationItem;