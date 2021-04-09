import './FooterListItem.css';

function FooterListItem({
    children
}) {
    return (
        <li className="footerListItem">
            <a href="#">{children}</a>
        </li>
    );
}

export default FooterListItem;


