import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({items}) => (
    <div>
        <ul className={styles.wrapper}>
            {items.map(item => (
                <ListItem key={item.name} {...item}/>
            ))}
        </ul>
    </div>
);

export default List;