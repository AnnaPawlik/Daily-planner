import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({title, description}) => (
    <li>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
    </li>
);

ListItem.propTypes = { 
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default ListItem;