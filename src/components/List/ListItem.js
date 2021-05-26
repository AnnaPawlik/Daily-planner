import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';

const ListItem = ({title, description, time}) => (
    <li className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p>{time}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.button}>
            <Button secondary>Remove</Button>
        </div>
    </li>
);

ListItem.propTypes = { 
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ListItem;