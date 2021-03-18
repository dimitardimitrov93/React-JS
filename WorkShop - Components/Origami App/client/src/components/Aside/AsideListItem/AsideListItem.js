import './AsideListItem.css';

function AsideListItem(props) {
    return (
        <li className="asideListItem">
            <a href="#">{props.children}</a>
        </li>
    );
}

export default AsideListItem;