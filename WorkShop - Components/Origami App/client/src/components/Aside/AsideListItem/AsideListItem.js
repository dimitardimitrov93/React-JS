import './AsideListItem.css';

function AsideListItem({
    children,
    onClick,
    id,
    isSelected
}) {
    let classes = ['asideListItem'];
    
    if (isSelected) {
        classes.push('asideListItem-selected')
    }

    return (
        <li className={classes.join(' ')}>
            <a href="#" onClick={() => onClick(id)}>
                {children}
            </a>
        </li>
    );
}

export default AsideListItem;