import './Aside.css';
import { useState } from 'react';
import AsideListItem from './AsideListItem';

const asideItems = [
    { id: 1, text: 'Going to 1' },
    { id: 2, text: 'Going to 2' },
    { id: 3, text: 'Going to 3' },
    { id: 4, text: 'Going to 4' },
    { id: 5, text: 'Going to 5' },
    { id: 6, text: 'Going to 6' },
    { id: 7, text: 'Going to 7' },
    { id: 8, text: 'Going to 8' },
    { id: 9, text: 'Going to 9' },
    { id: 10, text: 'Going to 10' },
    { id: 11, text: 'Going to 11' },
];

function Aside({
    onListItemClick
}) {
    const [currentItem, setCurrentItem] = useState();

    const listItemClickHandler = (id) => {
        setCurrentItem(id);
        onListItemClick(id);
    }

    return (
        <aside className="aside">
            <ul>
                {asideItems.map(asideItem =>
                    <AsideListItem
                        key={asideItem.id}
                        id={asideItem.id}
                        isSelected={asideItem.id == currentItem}
                        onClick={listItemClickHandler}
                    >
                        {asideItem.text}
                    </AsideListItem>
                )}
            </ul>
        </aside>
    );
}

export default Aside;