import './Aside.css';
import AsideListItem from './AsideListItem';

function Aside(props) {
    return (
        <aside className="aside">
            <ul>
                <AsideListItem>Going to 1</AsideListItem>
                <AsideListItem>Going to 2</AsideListItem>
                <AsideListItem>Going to 3</AsideListItem>
                <AsideListItem>Going to 4</AsideListItem>
                <AsideListItem>Going to 5</AsideListItem>
                <AsideListItem>Going to 6</AsideListItem>
                <AsideListItem>Going to 7</AsideListItem>
                <AsideListItem>Going to 8</AsideListItem>
                <AsideListItem>Going to 9</AsideListItem>
                <AsideListItem>Going to 10</AsideListItem>
                <AsideListItem>Going to 11</AsideListItem>
            </ul>
        </aside>
    );
}

export default Aside;